import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Text from '../components/Fonts/Text';
import Blur from '../assets/03-Contents/accentIlumination.svg?react'
import { ArrowDown, CircleAlert } from 'lucide-react';

const Contents = () => {
  const [imagens, setImagens] = useState([]);
  const [imgsCourses, setImgsCourses] = useState([]);


  useEffect(() => {
    const imgsGPE = import.meta.glob(
      '../assets/03-Contents/GPE/*.jpg', {
      eager: true, import: 'default',
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
      <div className='lg:max-w-7/12 mx-auto'>
        <Heading
          Title={'Ao assinar você terá acesso a uma série de conteúdos'}
          Description={
            'São vários cursos, aulas, jornadas, bate-papos etc. Você também terá acesso um canal de comunicação direta onde você poderá tirar dúvidas sobre qualquer conteúdo da plataforma além de interagir com a Cris e os demais membros.'
          }
        ></Heading>
          <ArrowDown className='animate-bounce text-grayish-10 mx-auto size-5'/>
      </div>
      <section className="lg:max-w-10/12 px-4 py-8 lg:p-20 mx-auto bg-darkus-20">
        <div>
          <div className="flex flex-col gap-4 lg:flex-row text-left justify-center items-center mb-10">
            <div className='text-center'>
              <h2 className="font-display text-2xl text-grayish-10">
                Grupo de Estudos GPE Não Existe Feminista Cristã
              </h2>
              <p className="font-body text-grayish-20">
                curso completo com três níveis e mais de 24hrs de aula
              </p>
            </div>
          </div>
          <span className='flex gap-2 bg-darkus-10 w-fit p-2 text-neutral-500 items-center mx-auto border-1 border-darkus-30 xl:hidden'><CircleAlert size={16}/> <p className='text-sm font-body'>Puxe para ver os níveis do GPE</p></span>
          <div className="flex gap-10 p-5 overflow-x-auto lg:overflow-auto ">
            {imagens.map((item, index) => (
              <img src={item} key={index}></img>
            ))}
          </div>
        </div>

        <div className='grid gap-x-10 gap-y-5 mt-10 md:grid-cols-2 lg:justify-items-center'>
          {imgsCourses.map((item, index) => (
            <div>
              <img className='mx-auto' src={item} key={index} alt="curso plataforma" />
            </div>
          ))}
        </div>

      </section>
          <Blur className="absolute -top-70 -z-10"/>
    </article>
  );
};

export default Contents;
