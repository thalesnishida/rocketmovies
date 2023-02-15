import { FiStar } from 'react-icons/fi'

import { Tag } from '../Tag';
import { Rating } from '../Rating';

import { Container } from './styles';

export function Note({title, description, ...rest}){
  return (
    <Container {...rest} >
      <h2>{title}</h2>

      <div>
        <Rating />
      </div>

      <p>
        {description}
      </p>

      <div>
        <Tag title="movies"/>
        <Tag title="movies"/>
        <Tag title="movies"/>
      </div>
    </Container>
  )
}