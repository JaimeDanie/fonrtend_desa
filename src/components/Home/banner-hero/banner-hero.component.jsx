import React from 'react'
import { Col, Row } from 'antd'
import './banner-hero.style.scss'
import { ButtonPrimary, ButtonSecondary } from '../../../style/theme/theme'
import imgBanner from '../../../assets/img/banner_home_image.png'

function BannerHeroComponent() {
  return (
    <Row justify="space-around" align="middle" className='section-banner-container'>
      <Col xs={{span: 24}} sm={{span: 12}} className='section-banner-container-left'>
        <h2 className='section-banner-left-title'>asistencia médica <br />virtual inmediata</h2>
        <h3 className='section-banner-left-sub-title'>ACCEDE A TU <br />CONSULTA MÉDICA POR</h3>
        <Col className='section-banner-left-plan'>
          <h4 className='price'> <span className='currency'>$</span>35.000</h4>
        </Col>
        <Col>
          <a href="/suscripcion/64"><ButtonPrimary width="40%">Doctor YA</ButtonPrimary></a>
        </Col>
        <Row justify="center">
          <Col span={4}><hr /></Col>
          <Col span={2}><span>O</span></Col>
          <Col span={4}><hr /></Col>
        </Row>
        <Col>
          <a href="#plans"><ButtonSecondary width="40%">Suscríbete YA</ButtonSecondary></a>
        </Col>
      </Col>      
      <Col xs={{span: 24}} sm={{span: 12}} className='section-banner-container-right'>
        <Col className='section-banner-container-right'>
          <p className='section-banner-right-text'>Conéctate con tu <br />médico en 30 segundos</p>
        </Col>
        <Col className='section-banner-container-right'>
          <img src={imgBanner} alt="*" className='section-banner-right-img' width="70%" />
        </Col>
      </Col>
    </Row>
  )
}

export default BannerHeroComponent
