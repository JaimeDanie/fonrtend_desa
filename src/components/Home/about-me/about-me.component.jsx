import React from 'react'
import './about-me.style.scss'
import { SubTitleSection } from '../../../style/theme/theme'
import { Col, Row } from 'antd'
import aboutMe from './../../../assets/img/banner_about.png'

function AboutMeComponent() {
  return (
    <Row ustify="space-around" align="middle" className='section-about-container'>
      <Col xs={{span: 24}} sm={{span: 12}} className='section-about-container-left'>
        <SubTitleSection align="left">Profesionales Médicos</SubTitleSection>
        <p className='section-medical-about-description'>Contamos con médicos generales, especialistas que estarán 24/7 para atender tus necesidades.</p>
      </Col>
      <Col xs={{span: 24}} sm={{span: 12}} className='section-about-container-right'>
        <img src={aboutMe} alt="*" width="50%"/>
      </Col>            
    </Row>    
  )
}

export default AboutMeComponent
