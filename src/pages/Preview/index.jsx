import { FiArrowLeft, FiClock } from "react-icons/fi";

import avatarDefaultProfile from "../../assets/avatar_placeholder.svg";

import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Tag } from "../../components/Tag";

import { Container } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Preview() {
  const [data, setData] = useState("");
  const [tags, setTags] = useState([]);

  function childToParent(search) {}

  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarDefaultProfile;

  const params = useParams();

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
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft} />
          </Link>
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
        </section>
      </main>
    </Container>
  );
}
