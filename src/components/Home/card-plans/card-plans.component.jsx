import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { ButtonTertiaries, TitleSection } from '../../../style/theme/theme'
import './card-plans.style.scss'
import { getPlans } from '../../../utils/services/services';
import { formatterCurrency } from '../../../utils/functions/formatterCurrency';

function CardPlansComponent() {
  const [dataPlans, setDataPlans] = useState([]);  
  useEffect(() => {
    getPlans()
      .then(response => {        
        const filteredData = response.data.filter(plan => plan.id !== 64);
        setDataPlans(filteredData.sort((a, b) => a.id - b.id));     
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (    
    <Row justify="space-around" align="middle" className='section-banner-plans'>
      <Col xs={{span: 24}} sm={{span: 24}} className='section-banner-container-plans'>
        <TitleSection>Planes</TitleSection>
      </Col>
      {dataPlans.map((item, index) => (
        <Col className='section-card-plan' xs={{span: 24}} sm={{span: 8}} key={index} id={item.id}>
          <h2 className='plain-description-header'>{item.acf.nombre_del_plan}</h2>
          <h3 className='plain-description-price-year'>{formatterCurrency(item.acf.precio_anual)}</h3>
          <h4 className='plain-description-price-month'>({formatterCurrency(item.acf.precio_mensual)} Mes)</h4>
          <a href={'/suscripcion/' + item.id}><ButtonTertiaries width="80%">Suscríbete YA</ButtonTertiaries></a>
          <div className='plain-description-list' dangerouslySetInnerHTML={{ __html: item.acf.caracteristicas_del_plan }} />
        </Col>
      ))}
    </Row>
  )
}

export default CardPlansComponent
