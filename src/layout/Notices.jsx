import React from 'react'
import Heading from '../components/Heading'
import BookIcon from '../assets/07-Notice/book.svg?react'
import Text from '../components/Fonts/Text'
const Notices = () => {
  const NoticeItens = [
    {
      sobre: 'Sobre o parcelamento',
      aviso: 'A possibilidade de parcelar em até 12 vezes não classifica uma assinatura mensal. O produto que você está adquirindo é em forma anual, porém está parcelando em quantas vezes forem confortáveis para você.'
    },
    {
      sobre: 'Sobre a recorrência',
      aviso: 'A recorrência da assinatura é anual, o prazo para interrupção das cobranças e solicitação de reembolso é de 7 dias a partir da data de confirmação do pagamento - conforme o CDC (Código de Defesa do Consumidor).'
    },
    {
      sobre: 'Sobre o reembolso',
      aviso: 'O reembolso pode ser solicitado num prazo de até 7 dias após a compra. Findado esse período, não há direito a qualquer tipo de reembolso (total ou parcial), nem interrupção das parcelas dentro do período de vigência.'
    }
  ]
  return (
    <article>
      <section className="container mx-auto px-6 py-8 flex flex-col gap-10">
        <div className='text-center lg:max-w-7/12 mx-auto'>
          <Heading Title={"Avisos importantes que você deve saber antes de realizar sua assinatura"}/>
        </div>
        <div className='flex gap-10 flex-col divide-y divide-gray-700/64 lg:divide-y-0 lg:flex-row'>
          {
            NoticeItens.map((li, index)=> (
              <li key={index} className='flex flex-col gap-6 lg:max-w-4/12 items-start'>
                <BookIcon/>
                <span className='text-xl font-display text-grayish-10 font-bold'>{li.sobre}</span>
                <Text>{li.aviso}</Text>
              </li>
            ))
          }
        </div>
      </section>

    </article>
  )
}

export default Notices
