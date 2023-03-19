import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">
          <span>Criar conta</span>
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
