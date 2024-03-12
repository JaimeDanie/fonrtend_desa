import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './footer.style.scss';
import FormFootComponent from './form.component';

const Footer = () => {
  return (
    <footer>
      <Row className="row primary">
        <Col xs={{span: 24}} sm={{span: 8}} className="column about">
          <h3>Dr. Patiya</h3>
          <p>
            DrPatiya es una plataforma líder en asistencia médica virtual. En estos tiempos modernos, entendemos la importancia de tener acceso inmediato a profesionales de la salud sin las barreras del tiempo y la distancia. DrPatiya te conecta con médicos especializados desde la comodidad de tu hogar, oficina o cualquier lugar en el que te encuentres.
          </p>
        </Col>
        <Col xs={{span: 24}} sm={{span: 8}} className="column links">
          <h3>Legales</h3>
          <ul>            
            <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
            <li><a href="/politica-de-datos">Política de datos</a></li>   
            <li><a href="/terminos-y-condiciones">Términos y condiciones</a></li>         
          </ul>
        </Col>
        <Col xs={{span: 24}} sm={{span: 8}} className="column subscribe">
          <h3>Contactanos</h3>
          <FormFootComponent />
          <div className="social">
            <FacebookOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
          </div>
        </Col>
      </Row>
      <Row className="row secondary">
        <Col xs={{span: 12}} sm={{span: 8}} className="contact-info">
        <ClockCircleOutlined />
          <p>Lunes - Viernes: </p>
          <p>8:00 a.m. - 12:00 p.m.</p>
          <p>2:00 p.m. - 6:00 p.m.</p>
        </Col>
        <Col xs={{span: 12}} sm={{span: 8}} className="contact-info">
          <MailOutlined />
          <p>+57 315 3687188</p>
          <p>jpalacios@solfint.com.co</p>
        </Col>
        <Col xs={{span: 12}} sm={{span: 8}} className="contact-info">
          <EnvironmentOutlined />
          <p>Calle 127 C # 14 - 27, Bog - Col</p>
          <p>Oficina 201</p>
        </Col>
      </Row>
      <Row className="row copyright">
        <p>Copyright &copy; 2023 Patiya Fintech | All Rights Reserved</p>
      </Row>
    </footer>
  );
};

export default Footer;
