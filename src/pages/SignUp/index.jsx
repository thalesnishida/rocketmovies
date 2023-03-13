import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      alert("Degite todos os campos!");
    }

    await api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Usario Cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não for possivel cadastrar o usuario!");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua Conta</h2>

        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <span>
            <FiArrowLeft />
            Voltar para login
          </span>
        </Link>
      </Form>
    </Container>
  );
}
