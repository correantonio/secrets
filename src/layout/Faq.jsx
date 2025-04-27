import React from 'react'
import Accordion from '../components/Accordion'
import accordionList from '../data/accordionList.json'
import Heading from '../components/Heading'

const Faq = () => {
  return (
    <article>
      <section className='container mx-auto px-6 py-8 flex flex-col gap-10'>
        <div className='lg:max-w-10/12 py-8 px-4 lg:p-20 mx-auto bg-darkus-20'>
          <div className='lg:max-w-7/12 mx-auto text-center'>
            <Heading Title={"Estas são algumas perguntas que recebemos com frequência."}/>
          </div>
          <dl className='divide divide-y-1 divide-gray-800'>
            {
              accordionList.map((item, index)=> (
                <Accordion key={index} title={item.questao} definition={item.resposta}/>
              ))
            }
          </dl>
        </div>
      </section>
    </article>
  )
}

export default Faq
