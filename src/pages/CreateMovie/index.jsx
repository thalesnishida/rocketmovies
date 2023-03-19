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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function CreateMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState([]);

  async function handleSaveNote() {
    if (!title) {
      return alert("Por favor difite o titulo da nota!");
    }

    if (!rate) {
      return alert("Porfavor de uma nota de 0 a 5");
    }

    if (newTag) {
      return alert(
        "Você digitou no campo tag mas nao adicionou. Por favor adicione ou deixe o campo em branco"
      );
    }

    if (rate > 5) {
      return alert("Somente de 0 a 5");
    }

    try {
      await api.post("/notes", {
        title,
        rating: rate,
        description,
        tags: tags,
      });
      alert("Nota criada com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel salvar a nota!");
      }
    }
  }

  function addNewTag() {
    if (newTag == "") {
      return;
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function removeTag(deleted) {
    setTags((prevState) => prevState.filter((link) => link !== deleted));
  }

  function childToParent(search) {}

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header childToParent={childToParent} />

      <main>
        <header>
          <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
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
                if (e.target.value.length > 1 || e.target.value > 5) {
                  e.target.value = e.target.value.substr(0, 1);

                  alert("Somente numeros de 0 a 5");
                  return (e.target.value = "");
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
              {tags.map((tag, index) => (
                <NewNote
                  key={String(index)}
                  value={tag}
                  onClick={() => removeTag(tag)}
                />
              ))}
              <NewNote
                placeholder="Novo Marcador"
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={addNewTag}
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
