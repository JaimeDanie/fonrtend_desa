import React from 'react'
import './frequent-questions.style.scss'
import { Col, Collapse, Row, Table } from 'antd'

const { Panel } = Collapse;

function FrequentQuestions() {
    const columns = [
        {
          title: 'Para la empresa',
          dataIndex: 'empresa',
          key: 'empresa',
        },
        {
          title: 'Para el Empleado',
          dataIndex: 'empleado',
          key: 'empleado',
        },
    ];
    const data = [
        {
          key: '1',
          empresa: 'Mejora en la productividad',
          empleado: 'Atención desde cualquier parte del mundo',
        },
        {
          key: '2',
          empresa: 'Reducción de costos',
          empleado: 'Acceso inmediato',
        },
        {
          key: '3',
          empresa: 'Mejora en la gestión del tiempo',
          empleado: 'Comodidad y conveniencia',
        },
        {
          key: '4',
          empresa: 'Aumento de la satisfacción del colaborador',
          empleado: 'Reducción de costos en atención médica',
        },
        {
          key: '5',
          empresa: 'Reducción de la interrupción laboral',
          empleado: 'Mayor privacidad y confidencialidad',
        },
        {
          key: '6',
          empresa: 'Fomento de la prevención y el bienestar',
          empleado: 'Mejora en la calidad de la atención médica',
        },
        {
          key: '7',
          empresa: 'Imagen corporativa positiva',
          empleado: 'Bienestar físico y laboral',
        },
      ];

  return (
    <Row justify="space-around" align="top" className="section-frecuent-questions">
        <Col xs={{span: 24}} sm={{span: 24}}> <h1>Preguntas Frecentes</h1> </Col>
        <Col xs={{span: 24}} sm={{span: 24}}>
        <Collapse
            accordion
            defaultActiveKey={["1"]}
            className="site-collapse-custom-collapse"
            expandIconPosition="end"
            ghost
          >
            <Panel
                header="QUE ES DR PATIYA?"
                key="1"
                className="site-collapse-custom-panel">
                    <p>DrPatiYa es un sistema alternativo de asistencia médica primaria inmediata, que permite conectar con un médico general 24/7 desde cualquier parte del mundo en menos de 30 segundos. A través de DrPatiYA personas individuales y empresas tienen la posibilidad de adquirir y pagar la asistencia en más de 20 fuentes de recaudo desde la comodidad de su hogar, oficina o en efectivo a través de múltiples fuentes de recaudo. </p>
            </Panel>
            <Panel
                header="DONDE PUEDO PAGAR DRPATIYA"
                key="2"
                className="site-collapse-custom-panel">
                    <p>Al final de la suscripción te ofrecemos 
                        <ol>
                            <li>PSE. Inicia en Patiya, pasa por la pasarela de payvalida, entra a tu banco y confirma el pago.</li>
                            <li>Billeteras Electrónicas como Nequi, DaviPlata, ¡Dale!, Movii y lulo bank</li>
                            <li>Efectivo. A través de los puntos de venta de Efecty, Gana, Punto Red, Western Union, Su Suerte, Su red y Apostar</li>
                            <li>Tarjetas de Crédito. Visa, Mastercard y American Express</li>
                            <li>Corresponsales Bancolombia. </li>
                        </ol>
                    </p>
            </Panel>
            <Panel
                header="CUALES SON LOS REQUISITOS PARA DISFRUTAR EL SERVICIO."
                key="3"
                className="site-collapse-custom-panel"
            >
                <p>
                    <ul>
                        <li>Persona Natural: mayor de edad y vivir en Colombia </li>
                        <li>persona Jurídica: Cámara de comercio vigente y sus empleados ser mayores de edad y vivir en Colombia</li>
                        <li>Realizar la solicitud a través de nuestra plataforma www.dr.patiya.co </li>
                    </ul>
                </p>
            </Panel>
            <Panel
                header="QUIEN ATIENDE EL SERVICIO?"
                key="4"
                className="site-collapse-custom-panel"
            >
                <p>Médicos generales altamente capacitados y experimentados, entrenados y monitoreados por <a target='_blank' href="https://doctorone.com/">DoctorOne</a>, que estarán 24/7 desde cualquier parte del mundo para atender tus necesidades.</p>
            </Panel>
            <Panel
                header="A CUÁLES SERVICIOS ACCEDO CON DR PATIYA?"
                key="5"
                className="site-collapse-custom-panel"
            >
                <p>
                    <ul>
                        <li>Atención en menos de 30 segundos</li>
                        <li>Contamos con médicos generales altamente capacitados y experimentados, que estarán 24/7 desde cualquier parte del mundo para atender tus necesidades.</li>
                        <li>Atención inmediata a través de videollamada, whatsapp y/o llamada </li>
                        <li>Segunda Opinión médica</li>
                        <li>Atención con médicos nacionales e internacionales</li>
                        <li>Historial Médico</li>
                        <li>Consultas grabadas y alojadas en la nube</li>
                        <li>Emisión de ordenes médicas, exámenes de laboratorio y certificados médicos</li>
                    </ul>
                </p>
            </Panel>
            <Panel
                header="SI SOY UNA EMPRESA PORQUE DEBERÍA COMPRAR DR PATIYA?"
                key="6"
                className="site-collapse-custom-panel"
            >
                <p>Es un beneficio conjunto para tus colaboradores y para la empresa, ya que mejora y preserva el bienestar.</p>
                <Table columns={columns} dataSource={data} pagination={false}/>
            </Panel>
            <Panel
                header="SI ME AFILIO, PUEDO AFILIAR A MI GRUPO FAMILIAR O A QUIEN YO ESCOJA?"
                key="7"
                className="site-collapse-custom-panel"
            >
                <p>No, las afiliaciones se hacen de forma individual y se debe pagar por cada persona que vaya a acceder al servicio. Dr PatiYA al igual que las Pólizas de Salud como planes de Medicina Prepagada no ofrece la modalidad de “Beneficiario”. <br/>Pero tranquilo puedes contratar el servicio para tu familia en la plataforma www.dr.patiya.co o a través de tu empresa por descuento de nómina.</p>
            </Panel>
            <Panel
                header="CUÁL ES LA EDAD MÁXIMA PARA AFILIARSE"
                key="8"
                className="site-collapse-custom-panel"
            >
                <p>A diferencia de los requisitos de afiliación de un plan de salud de medicina prepagada o póliza de salud, NO tienes que:
                    <ul>
                        <li>Contar con una afiliación a una entidad promotora de Salud (EPS)</li>
                        <li>No importan tus preexistencias</li>
                        <li>Y no tienes límite de edad. </li>
                    </ul>
                </p>
            </Panel>
            <Panel
                header="CUALES SON LOS REQUISITOS DE AFILIACIÓN?"
                key="9"
                className="site-collapse-custom-panel"
            >
                <p>A diferencia de los requisitos de afiliación de un plan de salud de medicina prepagada o póliza de salud, NO tienes que:
                    <ul>
                        <li>Contar con una afiliación a una entidad promotora de Salud (EPS)</li>
                        <li>No importan tus preexistencias</li>
                        <li>Y no tienes límite de edad.</li>
                    </ul>
                </p>
            </Panel>
            <Panel
                header="COMO ES EL PROCESO DE AFILIACIÓN ?"
                key="10"
                className="site-collapse-custom-panel"
            >
                <p>Afiliarte es muy sencillo, ingresa a nuestra plataforma www.dr.patiya.co, selecciona tu plan, paga por tu servicio y listo! 
                    <ul>
                        <li>Si pagaste en línea tienes tu servicio activo, dentro de los 15 minutos siguientes al pago</li>
                        <li>Si pagaste en efectivo, dentro de los 15 minutos siguientes al pago, después de generado el comprobante.</li>
                    </ul>
                </p>
            </Panel>
            <Panel
                header="PUEDO RETIRARME EN CUALQUIER MOMENTO"
                key="11"
                className="site-collapse-custom-panel"
            >
                <p>Si. No cuenta con cláusula de permanencia. Igualmente se debe tener en cuenta que en caso de mora por más de treinta (30) días calendario el servicio deja de ser prestado.</p>
            </Panel>
            <Panel
                header="QUE DEBO HACER SI NO PUEDO PAGAR?"
                key="12"
                className="site-collapse-custom-panel"
            >
                <p>Si por algún motivo se te presenta alguna circunstancia o dificultad para cumplir con tu compromiso de pago, contamos con una alianza con PatiYA www.patiya.co donde podrás solicitar financiación de tu servicio. </p>
            </Panel>
            <Panel
                header="PATIYA USA INTERMEDIARIOS?"
                key="13"
                className="site-collapse-custom-panel"
            >
                <p>¡Los intermediarios de seguros son importantes para nosotros! Porque a través de ellos conoces nuestra solución, ellos pueden tener un convenio con nosotros, no olvides marcarlo en el momento de tu suscripción y poner su número de identificación. Sin embargo, debes tener en cuenta que no puede cobrarte costos adicionales.</p>
                <p>Es importante que nunca entregues tus datos personales a terceros, ya sea de manera telefónica o por internet, gente sin escrúpulos puede usar tus datos para realizar fraudes en tu nombre o podría usar nuestro nombre para hacerte caer en un engaño.</p>
            </Panel>
            <Panel
                header="LAS INCAPACIDADES Y LOS MÉDICAMENTOS SON VALIDOS EN LA EPS"
                key="14"
                className="site-collapse-custom-panel"
            >
                <p>No, al ser un sistema alternativo de asistencia médica primaria inmediata, lo que queremos es darte soluciones a tu enfermedad, más no, convalidar tu incapacidad ante la EPS o ARL.</p>
            </Panel>
          </Collapse>
        </Col>
    </Row>
  )
}

export default FrequentQuestions
