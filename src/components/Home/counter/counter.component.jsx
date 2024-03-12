import React, { useEffect, useState } from 'react'
import './counter.style.scss'
import { Col, Row } from 'antd'
import Counter from '../../../utils/functions/counter.jsx'
import { getCounter } from '../../../utils/services/services'

function CounterComponent() {
  const [dataCounter, setDataCounter] = useState([])
  useEffect(() => {
    getCounter()
    .then(response => {
      setDataCounter(response.data.sort((a, b) => a.id - b.id))      
    }).catch(err => {
      console.log('Error al consumir los datos del contador:', err)
    })
  }, [])
  return (
    <Row justify="space-around" align="middle" className='section-metric-medical-container'>  
      {dataCounter.map((item, index) => (
        <Col className='section-metric-medical-card' xs={{span: 24}} sm={{span: 8}} key={index}>                
          <Counter objetivo={item.acf.objetivo} duracion={item.acf.duracion} prefijo={item.acf.prefijo} sufijo={item.acf.sufijo} />
          <span className='section-metric-text'>{item.acf.nombre_de_la_metrica}</span>
        </Col>
      ))}                               
    </Row>
  )
}

export default CounterComponent
