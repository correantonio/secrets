import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Titleh2 from '../components/Fonts/Titleh2';
import Text from '../components/Fonts/Text';
import Blur from '../assets/03-Contents/accentIlumination.svg?react';
import { ArrowDown, CircleAlert } from 'lucide-react';

const Contents = () => {
  const [imagens, setImagens] = useState([]);
  const [imgsCourses, setImgsCourses] = useState([]);

  useEffect(() => {
    const imgsGPE = import.meta.glob('../assets/03-Contents/GPE/*.jpg', {
      eager: true,
      import: 'default',
    });
    const imgsCoursesPath = import.meta.glob(
      '../assets/03-Contents/Courses/*.png',
      { eager: true, import: 'default' },
    );

    //=============================================
    const imagensArray = Object.values(imgsGPE);
    setImagens(imagensArray);
    const imgsCoursesArray = Object.values(imgsCoursesPath);
    setImgsCourses(imgsCoursesArray);
  }, []);

  return (
    <article className="container mx-auto px-6 py-8 flex flex-col gap-10 text-center relative z-10">
      <div className="lg:max-w-7/12 mx-auto">
        <Heading
          Title={'Ao assinar você terá acesso a uma série de conteúdos'}
          Description={
            'São vários cursos, aulas, jornadas, bate-papos etc. Você terá acesso a um canal de comunicação direta onde você poderá tirar dúvidas sobre qualquer conteúdo da plataforma além de interagir com a Cris e os demais membros.'
          }
        ></Heading>
        <ArrowDown className="animate-bounce text-grayish-10 mx-auto size-5" />
      </div>
      <section className="lg:max-w-10/12 px-4 py-8 lg:p-20 mx-auto bg-darkus-20">
        <div>
          <div className="flex flex-col gap-4 lg:flex-row text-left justify-center items-center">
            <div className="text-center mx-auto lg:max-w-8/12">
              <h2 className="font-display text-2xl text-grayish-10 mb-2">
                Grupo de Estudos GPE Não Existe Feminista Cristã
              </h2>
              <Text>
                mais de 20 aulas e atividades complementares. curso completo com
                três níveis de aprendizado, estruturados para compreensão
                progressiva.
              </Text>
            </div>
          </div>
          {/* Indicador aparece apenas no mobile para mostrar que existem mais conteúdos a direita */}
          <span className="flex gap-2 bg-darkus-10 w-fit p-2 text-neutral-500 items-center mx-auto mb-10 border-1 border-darkus-30 xl:hidden">
            <CircleAlert size={16} />{' '}
            <p className="text-sm font-body">Puxe para ver os níveis do GPE</p>
          </span>
          <div className="flex gap-10 overflow-x-auto lg:overflow-auto lg:justify-center lg:max-w-10/12 lg:mx-auto">
            {imagens.map((item, index) => (
              <img src={item} key={index} />
            ))}
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-5 mt-10 md:grid-cols-2 lg:justify-items-center lg:max-w-10/12 lg:mx-auto">
          {imgsCourses.map((item, index) => (
            <div className="lg:w-full" >
              <img
                className="w-full object-cover"
                src={item}
                key={index}
                alt="curso plataforma"
              />
            </div>
          ))}
        </div>
      </section>
      <Blur className="absolute -top-70 -z-10" />
    </article>
  );
};

export default Contents;
