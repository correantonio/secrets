import React from 'react';
import Peoples from '../assets/04-Community/icons/comunity.svg?react';
import Graduation from '../assets/04-Community/icons/graduation.svg?react';
import Titleh2 from '../components/Fonts/Titleh2';
import Text from '../components/Fonts/Text';
import Button from '../components/Button';
import communityIMG from '../assets/04-Community/community-img.jpg';

const Community = () => {
  const list = [
    {
      icon: <Peoples />,
      description: 'Acesso a comunidade exclusiva para membros.',
    },
    {
      icon: <Graduation />,
      description: 'Acesso ilimitado através da assinatura anual ou mensal',
    },
  ];

  return (
    <article>
      <section className="container mx-auto py-20 px-6 lg:flex lg:gap-10 items-center justify-center">
        <div className="mb-10 lg:max-w-5/12">
          <img
            src={communityIMG}
            alt="A comunidade do Secrets no Telegram é ativa e com diversas pessoas engajadas"
            className="mx-auto shadow-[0px_357px_100px_0px_rgba(0,0,0,0.00),0px_228px_91px_0px_rgba(0,0,0,0.04),0px_128px_77px_0px_rgba(0,0,0,0.13),0px_57px_57px_0px_rgba(0,0,0,0.21),0px_14px_31px_0px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="lg:max-w-7/12">
          <Titleh2>Assine o Secrets e ganhe</Titleh2>
          <ul className="grid grid-cols-2 gap-4 mb-6">
            {list.map((item, index) => (
              <li key={index} className="md:flex md:items-center md:gap-4">
                <span>{item.icon}</span>
                <p className="mt-4 md:mt-0 font-body text-sm lg:text-md text-grayish-20">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <Text>
            Mergulhe em um caminho inédito de conhecimento, explorando o embate
            entre feminismo e cristianismo com profundidade e clareza. Você terá
            acesso a: Conteúdos exclusivos sobre política, fé e novos materiais
            adicionados à plataforma. Reflexões que desafiam narrativas
            tradicionais, ampliando sua visão sobre o tema. Um ambiente de
            aprendizado para fortalecer seus princípios e valores.
            <br />
            Não fique de fora dessa Comunidade Secreta e faça como diversas
            outras pessoas que escolheram aprender sobre o feminismo do jeito
            certo.
          </Text>
          <a href="#price" className='flex w-fit items-center gap-2 px-6 py-3 hover:-translate-y-1 font-display text-lg text-grayish-10 bg-accent shadow-lg shadow-accent/50 cursor-pointer hover:bg-accent/80 transition' >Quero fazer parte do Secrets</a>
        </div>
      </section>
    </article>
  );
};

export default Community;
