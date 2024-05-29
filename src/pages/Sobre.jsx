import React from 'react'
//components
import BannerMissionsValues from '../components/BannerMissionsValues'
import BannerServices from '../components/BannerServices'
import BannerDescription from '../components/BannerDescription'

import './Sobre.css'

const Sobre = ({missionsValues, description, services}) => {
  return (
    <>
      {services === 'services' && <BannerServices />}
      {missionsValues === 'missions_and_values' && <BannerMissionsValues />}
      {description === 'description' && <BannerDescription />}
    </>
  )
}

export default Sobre