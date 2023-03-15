import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchNotesMovies() {
      const response = await api.get(`/notes?title=`);
      setData(response.data);
    }

    fetchNotesMovies();
  }, []);

  console.log(data);
  return (
    <Container>
      <Header />

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
              />
            ))}
          </section>
        )}
      </main>
    </Container>
  );
}
