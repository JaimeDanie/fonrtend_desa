import React, { useEffect, useState } from 'react'
import './medical-service.style.scss'
import { Button, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { TitleSection } from '../../../style/theme/theme'
import { getServices } from '../../../utils/services/services'
import { removeTag } from '../../../utils/functions/removeTag'

function MedicalServiceComponent() {
  const [dataServices, setDataServices ] = useState([]);  
  const [showParagraph, setShowParagraph] = useState([]);
  useEffect(() => {
    getServices()
      .then(response => {        
        setDataServices(response.data.sort((a, b) => a.id - b.id))               
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  const handleButtonClick = (index) => {
    const newShowParagraph = [...showParagraph];
    newShowParagraph[index] = !newShowParagraph[index];
    setShowParagraph(newShowParagraph);
  };

  return (
    <Row justify="space-around" align="middle" gutter={16} className='section-banner-service'>
      <Col xs={{span: 24}} sm={{span: 24}} className='section-title-service'>
        <TitleSection margin="0 .5rem 0 0">Servicios</TitleSection>
      </Col>      
      {dataServices.map((item, index) => (
        <Col xs={{span: 24}} sm={{span: 5}} key={index} id={item.id} className='section-card-service'>
          <h4 className='section-card-service-title'>{item.acf.nombre_del_servicio}</h4>
          {showParagraph[index] ? (
            <p className='section-card-service-description'>
              {removeTag(item.acf.descripcion)}
            </p>
            ) : (
            <img className='section-card-service-icon' src={item.acf.icono} alt="*"/>
            )}
          <Button onClick={() => handleButtonClick(index)} type="primary" shape="circle" icon={showParagraph[index] ? <MinusCircleOutlined /> : <PlusOutlined />} />
        </Col>
      ))}
    </Row>
  )
}

export default MedicalServiceComponent
