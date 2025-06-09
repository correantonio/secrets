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
      <section className="container flex flex-col gap-16 py-20 lg:pt-48 px-6 mx-auto lg:flex-row lg:gap-10">
        <div className="lg:max-w-4/12 grid grid-rows-2 order-2 lg:order-1">
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
          <div className='bg-darkus-30 p-8'>
            <Titleh2>Garantia incondicional</Titleh2>
            <Text>
              Se você garantiu seu acesso ao Secrets e depois de assistir a
              algumas aulas viu que não era o que pensava, em até 7 dias seu
              dinheiro é devolvido
            </Text>
            <Payments className="w-2xs max-w-full my-4" />
          </div>
        </div>
        <div className="bg-darkus-20 grid grid-rows-2 relative lg:max-w-4/12 lg:order-2">
          <div className="p-8">
            <h3 className="font-display text-3xl text-grayish-10 mb-6 font-bold lg:text-4xl">
              Plano anual
            </h3>
            <ul className="list-disc marker:text-accent list-inside [&>*:nth-child(odd)]:bg-darkus-10">
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                12 Meses de acesso
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Acesso a todos os meus Conteúdos e Cursos
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Mais de 30 horas de Aulas
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Suporte prêmium
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center items-center justify-between bg-darkus-30 p-8">
            <spam className="text-grayish-20">até 12x de</spam>
            <p className="font-display text-white text-4xl lg:text-6xl font-bold">
              R$ 47,50
            </p>
            <spam className="text-grayish-20 mb-2">
              à vista R$ 570
              <br />
              <span className="text-sm text-lime-400 font-medium italic">
                parcelamento sem juros
              </span>
            </spam>
            <Button link={'https://chk.eduzz.com/D0RAB42B9Y'}>
              Entrar para o Secrets
            </Button>
          </div>
          <span className='absolute inline-block py-2 px-4 bg-[#eac1c1] text-sm italic -left-4 -top-4 font-bold text-accent'>recomendado</span>
        </div>
        <div className="bg-darkus-20 grid grid-rows-2 lg:max-w-4/12 lg:order-2">
          <div className="p-8">
            <h3 className="font-display text-3xl text-grayish-10 mb-6 font-bold lg:text-4xl">
              Plano mensal
            </h3>
            <ul className="list-disc marker:text-accent list-inside [&>*:nth-child(odd)]:bg-darkus-10">
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                01 Mes de acesso
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Acesso a todos os meus Conteúdos e Cursos
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Mais de 30 horas de Aulas
              </li>
              <li className="px-2 py-2 text-grayish-10 text-lg hover:text-white">
                Suporte
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center items-center bg-darkus-30 p-8 h-full justify-between">
            <spam className="text-grayish-20">pague 1x ao mês</spam>
            <p className="font-display text-white text-4xl lg:text-6xl font-bold">
              R$ 57
            </p>
            <spam className="text-grayish-20">pagamento sem acréscimos</spam>
            <Button link={'https://chk.eduzz.com/D0RAB42B9Y'}>
              Quero ser assinante mensal
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Price;
