import React from 'react';
import Titleh1 from '../components/Fonts/Titleh1';
import Text from '../components/Fonts/Text';
import Button from '../components/Button';
import Secretslogo from '../assets/logo/icone-escola.svg?react';

const Hero = () => {
  return (
    <header className="h-dvh bg-[url(./assets/hero/hero--mobile.jpg)] bg-center bg-cover bg-no-repeat flex items-end
    lg:bg-[url(./assets/hero/hero--desktop.jpg)] lg:bg-left-center lg:justify-center lg:h-[90dvh] lg:items-center
    xl:bg-left-bottom">
      <div className='
      container p-4 pb-16 mx-auto 
      lg:p-6 '>
        <div className='lg:max-w-8/12 xl:max-w-6/12'>
        <Secretslogo className="mb-12"/>
        <Titleh1>
          A Comunidade Secreta que vai transformar sua visão sobre Feminismo,
          Cristianismo e Cultura
        </Titleh1>
        <Text>
          Uma plataforma exclusiva com cursos, aulas, jornadas e bate-papos
          sobre política, fé e futilidades — tudo com profundidade e propósito,
          sem filtros e longe da narrativa dominante.
        </Text>
        <Button link={"#price"}>Pegue sua chave aqui</Button>

        </div>
      </div>
    </header>
  );
};

export default Hero;
