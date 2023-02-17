import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua Conta</h2>

        <Input type="email" placeholder="E-mail"/>

        <Input type="password" placeholder="Senha"/>

        <Button title="Entrar"/>

        <Link to="/signup">
          <span>Criar conta</span>
        </Link>
        
      </Form>

      <Background />
    </Container>
  )
}