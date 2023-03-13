import { useState } from "react";

import { FaStar } from "react-icons/fa";

import { Container } from "./styles";

export function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Container>
      {[...Array(5)].map((star, index, i) => {
        const ratingValue = i + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={20}
            />
          </label>
        );
      })}
    </Container>
  );
}
