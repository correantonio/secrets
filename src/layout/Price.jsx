import React from 'react';
import Titleh2 from '../components/Fonts/Titleh2';
import Text from '../components/Fonts/Text';
import Button from '../components/Button';
import IconBook from '../assets/05-Price/icons/book.svg?react';
import IconDiscussion from '../assets/05-Price/icons/discussion.svg?react';
import IconWarrantly from '../assets/05-Price/icons/warrantly.svg?react';
import Payments from '../assets/05-Price/icons/payments.svg?react';
import { ArrowRight, OctagonAlert } from 'lucide-react';

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
      <section className="container grid lg:grid-cols-3 gap-16 py-20 lg:pt-48 px-6 mx-auto lg:gap-10">
        <div className="grid grid-rows-2 order-2 lg:order-1">
          <ul>
            {list.map((item, index) => (
              <li key={index} className="flex gap-4">
                <div className="mb-4 lg:mb-0"> {item.icon} </div>
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
          <div className="bg-darkus-30 p-8">
            <Titleh2>Garantia incondicional</Titleh2>
            <Text>
              Se você garantiu seu acesso ao Secrets e depois de assistir a
              algumas aulas viu que não era o que pensava, em até 7 dias seu
              dinheiro é devolvido
            </Text>
            <Payments className="w-2xs max-w-full my-4" />
          </div>
        </div>
        <div className="bg-darkus-20 grid grid-rows-2 relative lg:order-2 border-2 border-accent shadow-2xl shadow-darkus-20 ">
          <div className="p-8">
            <h3 className="flex items-center gap-4 font-display text-3xl text-grayish-10 mb-6 font-bold lg:text-4xl">
              Plano anual
              <small className="text-[12px] lg:text-sm uppercase inline-block px-2 py-1 bg-gradient-to-r from-accent/50 via-accent to-accent/25">
                2 meses grátis
              </small>
            </h3>
            <ul className="list-disc marker:text-accent list-inside [&>*:nth-child(odd)]:bg-darkus-10">
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Acesso ilimitado e imediato a todos os conteúdos e cursos por 1
                ano
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Acesso às atualizações do período
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Área exclusiva para membros
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Suporte ativo para dúvidas
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                <b>Ganhe 2 meses de presente</b> ao assinar o plano anual.
              </li>
            </ul>
          </div>
          <div className="text-center items-center justify-between bg-darkus-30 p-8">
            <spam className="text-grayish-20">pague apenas</spam>
            <p className="font-display text-white text-4xl lg:text-6xl font-bold my-4">
              <span className="text-2xl lg:text-4xl text-grayish-20">
                12x R${' '}
              </span>
              47,50
            </p>
            <spam className="text-grayish-20 mb-2">
            <span className="text-sm text-grayish-10 font-medium italic">
              - parcelamento sem juros -
            </span>
            <br />
              ou à vista R$ 570
            </spam>
            <span className="flex justify-center my-2">
              <Button link={'https://chk.eduzz.com/D0RAB42B9Y'}>
                Entrar para o Secrets
              </Button>
            </span>
          </div>
          <span className="absolute inline-block py-2 px-4 bg-[#eac1c1] text-sm italic -left-4 -top-4 font-bold text-accent">
            recomendado
          </span>
        </div>
        <div className="bg-darkus-20 grid grid-rows-2 lg:order-2">
          <div className="p-8">
            <h3 className="font-display text-3xl text-grayish-10 mb-6 font-bold lg:text-4xl">
              Plano mensal
            </h3>
            <ul className="list-disc marker:text-accent list-inside [&>*:nth-child(odd)]:bg-darkus-10">
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Acesso imediato a todos os conteúdos e cursos
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Suporte ativo para dúvidas
              </li>
            </ul>
          </div>
          <div className="text-center bg-darkus-30 p-8 ">
            <spam className="text-grayish-20">pague</spam>
            <p className="font-display text-white text-4xl lg:text-6xl font-bold my-4">
              <span className="text-2xl lg:text-4xl text-grayish-20">R$ </span>
              57{' '}
              <span className="text-2xl lg:text-4xl text-grayish-20">/mês</span>
            </p>
            <span className="flex justify-center mb-2">
              <Button link={'https://chk.eduzz.com/D0RAB42B9Y'}>
                Quero ser assinante mensal
              </Button>
            </span>
            <small className="text-grayish-20 italic text-center">
              assinatura com cobrança recorrente, cancele quando quiser.
            </small>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Price;
