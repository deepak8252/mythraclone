import React from 'react'
import Heroslider from '../component/Heroslider'
import { Row } from 'react-bootstrap'
import Brand1 from '../component/Brand1'
import Productcate from '../component/Productcate'

const Home = () => {
  return (
    <div className=' mt-2 pb-4 flex flex-col overflow-hidden mx-auto' >
       <Heroslider/>
    <Brand1/>
    <Productcate/>
    </div>
  )
}

export default Home