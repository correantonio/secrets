import React from 'react';
import Titleh2 from '../components/Fonts/Titleh2';
import Text from '../components/Fonts/Text';
import Button from '../components/Button';
import IconBook from '../assets/05-Price/icons/book.svg?react';
import IconDiscussion from '../assets/05-Price/icons/discussion.svg?react';
import IconWarrantly from '../assets/05-Price/icons/warrantly.svg?react';
import Payments from '../assets/05-Price/icons/payments.svg?react';
import { ArrowRight } from 'lucide-react';

const Price = () => {
  const list = [
    {
      icon: <IconDiscussion />,
      title: 'Comunidade',
      description:
        'entre para uma comunidade que fala a mesma língua que você e irá te ajudar a avançar nos estudos',
    },
    {
      icon: <IconWarrantly />,
      title: 'Garantia',
      description:
        'se você não gostar do conteúdo do Grupo de Estudos, após a compra você poderá solicitar reembolso em até 7 dias.',
    },
    {
      icon: <IconBook />,
      title: 'Indicações',
      description:
        'livros que vão te ajudar no crescimento e estudo sobre o feminismo para proteger o que você acredita.',
    },
  ];
  return (
    <article
      id="price"
      className="bg-[url(./assets/05-Price/price-bg-img.jpg)] bg-no-repeat bg-top"
    >
      <section className="container grid py-20 px-6 mx-auto lg:flex lg:gap-10 items-center justify-center">
        <div className="lg:max-w-7/12 order-2 lg:order-1">
          <Titleh2>Garantia incondicional</Titleh2>
          <Text>
            Se você garantiu seu acesso ao Secrets e depois de assistir a
            algumas aulas viu que não era o que pensava, em até 7 dias seu
            dinheiro é devolvido
          </Text>
          <ul className="mt-12">
            {list.map((item, index) => (
              <li key={index} className="flex gap-4">
                <div className="mb-4"> {item.icon} </div>
                <div>
                  <Text>
                    <b className="font-display text-grayish-10">
                      {item.title}{' '}
                      <ArrowRight
                        className="inline mr-2 ml-2"
                        width={16}
                        height={16}
                      />
                    </b>
                    {item.description}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-darkus-20 py-8 px-4 mt-32 mb-8 text-center grid gap-10 lg:max-w-5/12 lg:my-16 lg:order-2 shadow-[0px_357px_100px_0px_rgba(0,0,0,0.00),0px_228px_91px_0px_rgba(0,0,0,0.04),0px_128px_77px_0px_rgba(0,0,0,w0.13),0px_57px_57px_0px_rgba(0,0,0,0.21),0px_14px_31px_0px_rgba(0,0,0,0.25)] 
        relative before:absolute before:animate-pulse before:-z-[5] before:-inset-1  before:bg-gradient-to-b before:from-blue-300 before:to-pink-300">
          <div>
            <h3 className="font-display text-[1.25rem] text-grayish-10 mb-6 font-bold lg:text-[1.5rem]">
              Tenha acesso ao Secrets por 12 meses sem interrupção por apenas
            </h3>
            <Text>
              São mais de X horas de conteúdo que vão te edificar de uma forma
              como você nunca imaginou e com conteúdos sempre em atualização
            </Text>
          </div>
          <div>
            <p className="font-display text-grayish-10 text-3xl lg:text-5xl font-bold mb-1">
              R$ 597,99
            </p>
            <Text>ou 12x de R$ 66,49</Text>
          </div>

          <div className="grid gap-8 place-items-center">
            <Button link={'https://chk.eduzz.com/D0RAB42B9Y'}>
              Quero fazer parte do Secrets
            </Button>
            <Payments />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Price;
