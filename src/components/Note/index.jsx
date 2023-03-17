import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Rating } from "../Rating";

import { Tag } from "../Tag";

import { Container } from "./styles";

export function Note({ title, description, tags, noteId, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>

      <div>
        <Rating noteId={noteId} />
      </div>

      <p className="description">{description}</p>

      <div>
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </div>
    </Container>
  );
}
