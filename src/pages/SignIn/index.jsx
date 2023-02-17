import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

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
          
        <span>Criar conta</span>
      </Form>

      <Background />
    </Container>
  )
}