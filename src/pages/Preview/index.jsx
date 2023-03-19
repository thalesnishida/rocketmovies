import { FiArrowLeft, FiClock } from "react-icons/fi";

import avatarDefaultProfile from "../../assets/avatar_placeholder.svg";

import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Tag } from "../../components/Tag";

import { Container } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Preview() {
  const [data, setData] = useState("");
  const [tags, setTags] = useState([]);

  function childToParent(search) {}

  const navigate = useNavigate();
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarDefaultProfile;

  const params = useParams();

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remove a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchShow() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      setTags(response.data.tag);
    }
    fetchShow();
  }, []);

  return (
    <Container>
      <Header childToParent={childToParent} />

      <main>
        <header>
          <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
        </header>

        <section>
          <h1>{data.title}</h1>
          <Rating />

          <div className="info">
            <div>
              <img src={avatarUrl} alt="User image" />
              <span>{user.name}</span>
            </div>

            <div>
              <FiClock />

              <span>{data.create_at}</span>
            </div>
          </div>

          <div className="tags">
            {tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </div>

          <p>{data.description}</p>

          <ButtonText title="Excluir nota" onClick={handleRemove} />
        </section>
      </main>
    </Container>
  );
}
