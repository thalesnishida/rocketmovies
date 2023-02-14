import { FiStar } from 'react-icons/fi'

import { Container } from './styles';

export function Note({title, description, ...rest}){
  return (
    <Container {...rest}>
      <h2>{title}</h2>

      <div>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <p>
        {description}
      </p>
    </Container>
  )
}