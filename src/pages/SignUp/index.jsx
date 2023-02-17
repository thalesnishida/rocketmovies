import { FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp(){
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua Conta</h2>

        <Input type="text" placeholder="Name"/>
        
        <Input type="email" placeholder="E-mail"/>

        <Input type="password" placeholder="Senha"/>

        <Button title="Cadastrar"/>
          
        <span><FiArrowLeft />Voltar para login</span>
      </Form>

    </Container>
  )
}