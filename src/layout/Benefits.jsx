import React from 'react';
import Heading from '../components/Heading';
import benefitsIMG from '../assets/02-Benefits/benefits-img.jpg';
import iconsBook from '../assets/02-Benefits/icon-book.svg';
import iconsShield from '../assets/02-Benefits/icon-shield-check.svg';
import BgGrid from '../assets/02-Benefits/bgGrids.svg?react';
import AnimatedContent from '../components/AnimatedContent'

const Benefits = () => {
  const listItens = [
    {
      icon: iconsShield,
      description:
        'No Secrets você transforma conhecimento em força para defender sua fé e desenvolver seu propósito.',
    },
    {
      icon: iconsBook,
      description:
        'Aprenda a ter argumentos, saiba responder com segurança às questões que desafiam seus valores.',
    },
  ];



  return (
    <article className="relative z-20 ">
      <section className="container mx-auto py-20 px-6">
        <div className="lg:flex lg:gap-10 items-start">
          <div className="lg:max-w-7/12">
            <Heading
              Title={
                'Ganhe acesso à Linha de Estudos “Não Existe Feminista Cristã”.'
              }
              Description={
                'Descubra um Novo Olhar sobre Feminismo e Cristianismo. Agora, você pode explorar e compreender o antagonismo entre essas duas forças históricas. Acesso ilimitado a todo o conteúdo disponível na plataforma. Atualizações exclusivas durante sua assinatura, mantendo você sempre informado. Fortaleça seus princípios com conhecimento aprofundado e reflexões essenciais.'
              }
            />
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >

            <ul className="grid gap-6 mb-10 xl:grid-cols-2 mt-[72px]">
              {listItens.map((item, index) => (
                <li
                  className="font-body text-grayish-20 p-8 bg-darkus-20 border border-darkus-30"
                  key={index}
                >
                  <img src={item.icon} alt="icone" className="mb-8" />
                  {item.description}
                </li>
              ))}
            </ul>
        </AnimatedContent>
          </div>

        <AnimatedContent
            distance={200}
            direction="vertical"
            reverse={false}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.5}
            delay={0}
          >

          <img
            src={benefitsIMG}
            alt="Cristiane Correa"
            className="w-full lg:w-fit shadow-[0px_357px_100px_0px_rgba(0,0,0,0.00),0px_228px_91px_0px_rgba(0,0,0,0.04),0px_128px_77px_0px_rgba(0,0,0,0.13),0px_57px_57px_0px_rgba(0,0,0,0.21),0px_14px_31px_0px_rgba(0,0,0,0.25)]"
            />
        </AnimatedContent>

        </div>
      </section>
      <BgGrid className="absolute inset-0 -z-10 opacity-20" />
    </article>
  );
};

export default Benefits;
