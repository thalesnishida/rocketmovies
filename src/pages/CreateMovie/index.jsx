import { FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { NewNote } from '../../components/NewNote';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { ButtonText } from '../../components/ButtonText';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export function CreateMovie(){
  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft}/>
          </Link>
        </header>

        <section>
          <h1>Novo filme</h1>
          
          <div className='inputs'>
            <Input 
              type="text"
              placeholder="Titulo"
            />
            <Input 
              type="number"
              placeholder="Sua nota(de 0 a 5)"
            />
          </div>

          <TextArea placeholder="Observações"/>

          <Section className="sec2" title="Marcadores" >
            <div className="tags">
              <NewNote value="interestellar"/>
              <NewNote placeholder="Novo Marcador" isNew />
            </div>

            <div className='btn'>
              <Button className="button1" title="Excluir filme" />
              <Button className="button2" title="Salvar alterações" />
            </div>
          </Section>
        </section>
      </main>

    </Container>
  )
}