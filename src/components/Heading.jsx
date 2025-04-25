import React from 'react'
import Titleh2 from './Fonts/Titleh2.jsx'
import Text from './Fonts/Text'

const Heading = ({Title, Description}) => {
  return (
    <header>
      <Titleh2>{Title}</Titleh2>
      <Text>{Description}</Text>
    </header>
  )
}

export default Heading
