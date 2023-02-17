import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom';

export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/thalesnishida.png" 
            alt="Imagem do usúario" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file" 
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        
        <Input 
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}