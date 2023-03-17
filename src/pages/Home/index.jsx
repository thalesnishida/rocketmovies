import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";

import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function childToParent(search) {
    setSearch(search);
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotesMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setData(response.data);
    }

    fetchNotesMovies();
  }, [search]);

  return (
    <Container>
      <Header childToParent={childToParent} />

      <main>
        <header>
          <h1>Meus filmes</h1>

          <Link to="/createmovie">
            <Button title="Adicionar Filme" icon={FiPlus} />
          </Link>
        </header>

        {data && (
          <section>
            {data.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                description={note.description}
                onClick={() => handlePreview(note.id)}
                tags={note.tags}
                noteId={note.id}
              />
            ))}
          </section>
        )}
      </main>
    </Container>
  );
}
