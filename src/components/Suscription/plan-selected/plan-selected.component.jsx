import React, { useEffect, useState } from 'react'
import './plan-selected.style.scss'
import { useParams } from 'react-router-dom'
import { getPlansById } from '../../../utils/services/services';
import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Loading } from '../../../style/theme/theme';
import { formatterCurrency } from '../../../utils/functions/formatterCurrency';

const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

function PlanSelectedComponent() {
    const { id } = useParams()
    const [isDataPlanId, setDataPlanId] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPlansById(id)
        .then(response => {
            setDataPlanId(response.data)            
            setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])

    if (loading) {
        return <Loading><Spin spinning={loading} indicator={antIcon} tip="Loading..." /></Loading>
    }
    if (!loading) {
        return (
            <Row className='section-banner-plan-selected'>
                <Col className='section-card-plan-selected'>
                    <h2 className='plan-selected-description-header'>{isDataPlanId.acf.nombre_del_plan}</h2>
                    <h3 className='plan-selected-description-price-year'>{formatterCurrency(isDataPlanId.acf.precio_anual)}</h3>
                    {isDataPlanId.acf.precio_mensual && isDataPlanId.acf.precio_mensual !== 'null' ? (
                      <h4 className='plan-selected-description-price-month'>
                        {formatterCurrency(isDataPlanId.acf.precio_mensual)} Mes
                      </h4>
                    ) : null}
                    <div className='plan-selected-description-list' dangerouslySetInnerHTML={{ __html: isDataPlanId.acf.caracteristicas_del_plan }} />
                </Col>
            </Row>
        )
    }
    
}

export default PlanSelectedComponent
