import { FiStar } from "react-icons/fi";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

import { Container } from "./styles";

export function Note({ title, description, tags, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>

      <div>
        <Rating />
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
