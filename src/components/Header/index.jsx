import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText';

import { Container, Profile } from './styles';
import { Link } from 'react-router-dom';

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        placeholder="Pesquisar pelo titulo"
        type="text"
        icon={FiSearch}
        />

      <Profile>
        <div>
          <Link to="/profile">
            <span>Thales Nishida</span>
          </Link>
            
          <ButtonText title="Sair" />
        </div>
  
        <img 
          src="https://github.com/thalesnishida.png" 
          alt="Imagem do usúario" 
        />
      </Profile>
    </Container>
  )
}