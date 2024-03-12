import React from 'react'
import { Form, Input, Button } from 'antd';

function FormFootComponent() {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
      };
    
      return (
        <Form
          name="contact-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item            
            name="nombre"
            rules={[{ required: true, message: 'Por favor ingrese su nombre!' }]}
          >
            <Input placeholder="Nombre"/>
          </Form.Item>
    
          <Form.Item            
            name="celular"
            rules={[{ required: true, message: 'Por favor ingrese su número de celular!' }]}
          >
            <Input placeholder="Celular"/>
          </Form.Item>
    
          <Form.Item            
            name="email"
            rules={[
              { required: true, message: 'Por favor ingrese su email!' },
              { type: 'email', message: 'Por favor ingrese un email válido!' }
            ]}
          >
            <Input placeholder="Email"/>
          </Form.Item>
    
          <Form.Item            
            name="mensaje"
          >
            <Input.TextArea placeholder="Mensaje (opcional)"/>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      );
}

export default FormFootComponent
