import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container } from './styles';

export function Home(){
  return (
    <Container>
      <Header />

      <main>
        <h1>Meus filmes</h1>

        <Button title="Adicionar Filme" icon={FiPlus}/>
      </main>
    </Container>
  )
}