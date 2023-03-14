import { api } from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { NewNote } from "../../components/NewNote";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  async function handleSaveNote() {
    if (!rate) {
      return alert("Porfavor de uma nota de 0 a 5");
    }

    console.log(rate);
    if (rate > 5) {
      return alert("Somente de 0 a 5");
    }

    try {
      await api.post("/notes", { title, rating: rate, description, tags });
      alert("Nota criada com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel salvar a nota!");
      }
    }
  }

  function handleNewNote(event) {}

  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft} />
          </Link>
        </header>

        <section>
          <h1>Novo filme</h1>

          <div className="inputs">
            <Input
              type="text"
              placeholder="Titulo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              max={5}
              min={1}
              maxLength={1}
              placeholder="Sua nota(de 0 a 5)"
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value.substr(0, 1);
                }
                setRate(Number(e.target.value));
              }}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section className="sec2" title="Marcadores">
            <div className="tags">
              <NewNote value="interestellar" />
              <NewNote
                placeholder="Novo Marcador"
                isNew
                onChange={(e) => setTags(e.target.value)}
                onClick={handleNewNote}
              />
            </div>

            <div className="btn">
              <Button className="button1" title="Excluir filme" />
              <Button
                className="button2"
                title="Salvar alterações"
                onClick={handleSaveNote}
              />
            </div>
          </Section>
        </section>
      </main>
    </Container>
  );
}
