import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { Container } from "./styles";

import { api } from "../../services/api";

export function Rating({ noteId }) {
  const [data, setData] = useState("");

  const params = useParams();

  const notaId = params.id ? params.id : noteId;

  function getScoreColor(nota, noteStar) {
    if (noteStar <= nota) return "yellow";
    return "#e4e5e9";
  }

  useEffect(() => {
    async function fetchNoteRating() {
      const response = await api.get(`/notes/${notaId}`);
      setData(response.data.rating);
    }

    fetchNoteRating();
  }, []);

  return (
    <Container>
      {[...Array(5)].map((index, i) => {
        const ratingValue = i + 1;

        return (
          <FaStar
            key={ratingValue}
            className="star"
            color={getScoreColor(data, ratingValue)}
            size={20}
            values={ratingValue}
          />
        );
      })}
    </Container>
  );
}
