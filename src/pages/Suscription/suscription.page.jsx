import React, { useState } from 'react'
import './suscription.style.scss'
import FormComponent from '../../components/Suscription/form/form.component'
import PayComponent from '../../components/Suscription/pay/pay.component'
import { Col, Row } from 'antd'
import PlanSelectedComponent from '../../components/Suscription/plan-selected/plan-selected.component'

function SuscriptionPage() {
  const [isForm, setForm] = useState(true)

  return (
    <div>
      <section>
        <Row justify="space-around" align="top" className='section-container-form'>
          <Col xs={{span: 24}} sm={{span: 12}}>
            <PlanSelectedComponent />
          </Col>
          <Col xs={{span: 24}} sm={{span: 12}}>
            {isForm ? <FormComponent /> : <PayComponent />}
          </Col>                            
        </Row>
      </section>
    </div>
  )
}

export default SuscriptionPage
