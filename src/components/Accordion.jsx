import React, {useState} from 'react'
import { ChevronDown } from 'lucide-react';
import Text from '../components/Fonts/Text'


const Accordion = ({title, definition}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
     <div className='flex flex-col gap-2 p-4 cursor-pointer'>
      <div className='grid grid-cols-12 gap-4' onClick={toggleAccordion}> 
        <dt className='font-display text-grayish-10 text-[1.125rem] font-medium col-span-11'>
          {title}
        </dt>
        <ChevronDown className='block size-5 justify-self-end' color='white'/>
      </div>
      {isOpen && (
        <dd><Text>{definition}</Text></dd>
      )}
    </div>
  )
}

export default Accordion
