import React, { useEffect, useState } from 'react';
import './form.style.scss'
import { Form, Input, Select, Button, Checkbox, Row, Col, Spin, Tooltip, DatePicker } from 'antd';
import { LoadingOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Loading } from './../../../style/theme/theme'
import { getAgent, getPlansById, callSuscription, sendMedical, loginMedicalAdmin, sendMedicalAdmin } from '../../../utils/services/services';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import sha512 from 'crypto-js/sha512';
import dayjs from 'dayjs';
import dataFormComponent from './data.component';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const { Option } = Select;

function FormComponent() {  
  const { id } = useParams();
  const formItems = dataFormComponent();
  const [loading, setLoading] = useState(false);
  const [isAgent, setIsAgent] = useState(false); 
  const [isDataPlanId, setDataPlanId] = useState({}); 
  const [showPayComponent, setShowPayComponent] = useState(false);
  
  //Función para generar el número de orden para la pasarela de pago
  function generarNumeroDeOrden() {  
    const fecha = new Date();
    const fechaFormato = `${fecha.getFullYear()}${String(fecha.getMonth() + 1).padStart(2, '0')}${String(fecha.getDate()).padStart(2, '0')}${String(fecha.getHours()).padStart(2, '0')}${String(fecha.getMinutes()).padStart(2, '0')}${String(fecha.getSeconds()).padStart(2, '0')}`;  
    const aleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const numeroDeOrden = `${fechaFormato}${aleatorio}`;    
  
    return numeroDeOrden;
  }
  
  //Función que se ejecuta al iniciar el componente para consultar los datos del plan por el plan
  useEffect(() => {        
    getPlansById(id)
    .then(response => {
        setDataPlanId(response.data)               
        setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [id])

  //Función para finalizar el formulario
  const handleOnFinish = async (values) => {    
    let isNitValid = true; // Asumimos que el NIT es válido inicialmente
    
    //Variables para enviar al request de PayValida
    const merchant = import.meta.env.VITE_REACT_APP_MERCHANT;
    const fixedHash = import.meta.env.VITE_REACT_APP_FIXED_HASH;
    const email = values.email;
      const country = 343;
      const order = generarNumeroDeOrden();
      const reference = '';
      const money = 'COP';
      const amount = isDataPlanId.acf.amount;
      const description = isDataPlanId.acf.nombre_del_plan;
      const method = '';
      const language = 'es';
      const recurrent = true;
      const expiration = dayjs().format('DD/MM/YYYY');
      const iva = '0';
      const user_di = values.documentNumber;
      const user_type_di = values.documentType;
      const user_name = values.firstName + ' ' + values.lastName;
      const redirect_timeout = '300000';    
      const additional_information = {        
          "checkout": {
              "fields": {
                  "personal_information": {
                      "editable": false,
                  }
              }
          },
          "client": {
              "address": {
                  "line1": values.address,
                  "line2": values.city,
                  "postalCode": ""
              },
              "personal_information": {
                  "firstname": values.firstName,
                  "lastname": values.lastName,
                  "document": {
                      "type": values.documentType,
                      "id": values.documentNumber
                  },
                  "contact_information": {
                      "phone": '57'+values.phone,
                      "email": values.email
                  }
              }
          }      
      }

      const checksumData = email + country + order + money + amount + fixedHash;
      const checksum = sha512(checksumData).toString();
  
      const data = {merchant, email, country, order, reference, money, amount, description, method, language, recurrent, expiration, iva, checksum, user_di, user_type_di, user_name, redirect_timeout, additional_information};

    //Generar fecha de solicitud
    const getFormattedDate = () => {
      // Obtén la fecha actual
      const date = dayjs();
  
      // Formatea la fecha en el formato deseado (por ejemplo, 'DD/MM/YYYY')
      return date;
    };

    //Formatear fecha de nacimiento
    const getFotmattedBirthday = (dateString) => {
      return dayjs(dateString).format('YYYY-MM-DD');
    }

    //Variables para guardar las peticiones en la BBDD
    const dataBack = {
      "fecha": getFormattedDate(),
      "tipo_documento": values.documentType,
      "numero_documento": values.documentNumber,
      "nombre": values.firstName,
      "apellido": values.lastName,
      "nacimiento": getFotmattedBirthday(values.birthdate),
      "genero" : values.gender,
      "email": values.email,
      "telefono": values.phone,
      "ciudad": values.city,
      "direccion": values.address,
      "referido": values.documentAgent || "NULL",
      "orden": order
    }


    // Verificar si isAgent es verdadero
    if (isAgent) {      
      const nit = values.documentAgent;

      try {
        const response = await getAgent(nit);
        console.log('Response from getAgent: ', response.data); 
        if (response.data.success) {
          Swal.fire('¡Correcto!', 'El ID de convenio es correcto.', 'success');
        } else {
          Swal.fire('Error', 'No se ha encontrado el ID de convenio.', 'error');
          isNitValid = false; // Marca el NIT como inválido si success es false
        }                
      } catch (error) {
        console.error('Error agent: ', error);   
        Swal.fire('Error', 'Ocurrió un error al buscar el ID de convenio.', 'error');  
        isNitValid = false; // Marca el NIT como inválido si hay un error   
      }
    }
    if (isNitValid) {      
      setShowPayComponent(true);

      //Función para enviar la petición POST al backend
      async function sendMedicalData(dataBack) {
        try {
            const response = await loginMedicalAdmin();
            //console.log(response)
            if (response.status === 200) {
                const responseRegister = await sendMedicalAdmin(dataBack, response.data.token)
                return responseRegister;
            } else {
                throw new Error("Medical data submission was not successful.");
            }
        } catch (error) {
            console.error("Error sending medical data:", error);
            throw error; // Re-lanza el error para manejarlo en la función principal
        }
      }
      //Función para enviar la petición POST a la pasrela de pagos
      async function initiateSubscription(data) {
        try {
            const response = await callSuscription(data);
            if (response.status === 200 && response.data.DESC === 'OK') {
                return response.data.DATA.checkout;
            } else {
                throw new Error("Subscription initiation was not successful.");
            }
        } catch (error) {
            console.error("Error initiating subscription:", error);
            throw error; // Re-lanza el error para manejarlo en la función principal
        }
      }
      //Función para ejecutar las peticiones
      async function handleDataSubmission(dataBack, data) {
        try {
            await sendMedicalData(dataBack);
            const urlPay = await initiateSubscription(data);
            console.log('URL de pago', urlPay);
    
            // Redireccionar después de 5 segundos
            setTimeout(() => {
                window.location = `http://${urlPay}`;
            }, 5000);
        } catch (error) {
            console.error("Error in data submission process:", error);
        }
      }
      
      handleDataSubmission(dataBack, data);
    }
  };

if (loading) {
  return <Loading><Spin spinning={loading} indicator={antIcon} tip="Loading..." /></Loading>
}

if(!loading){
  return (
    <Row justify="space-around" align="middle" className='section-container-form'>
      <Col span={24}>
        <h2>Registra los siguientes datos</h2>
      </Col>
      <Col span={24}>
        <Form
          name="registration"
          onFinish={handleOnFinish}
          layout='vertical'
        >          
              <Row gutter={[16, 16]}>
                <Col xs={{span: 24}} sm={{span: 12}}>
                  <Form.Item
                      name="isAgent"            
                      valuePropName="checked"
                    >
                    <Checkbox onChange={e => setIsAgent(e.target.checked)} >Tengo convenio</Checkbox>
                  </Form.Item>
                </Col>
                { isAgent ?
                <Col xs={{span: 24}} sm={{span: 12}}>
                  <Form.Item
                    name="documentAgent"
                    label={<Tooltip placement="right" title="Si eres persona natural digite su número de cédula y si eres persona jurídica ingrese su NIT"><span>ID de convenio</span> <QuestionCircleOutlined /></Tooltip>}
                    rules={[
                      { required: true, message: 'Por favor ingresa tu ID de convenio!' },
                      { pattern: /^[0-9]+$/, message: 'Solo se permiten números!' }
                    ]}
                  >
                    <Input placeholder="Por favor digita tu ID de convenio" />
                  </Form.Item>
                </Col> : null
                }
              </Row>

            <Row gutter={[16, 16]}>
            {formItems.map((item, index) => (
              item.condition !== false && (
                <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }}>
                  <Form.Item {...item}>
                    {item.children}
                  </Form.Item>
                </Col>
              )
            ))}
          </Row>

          <Form.Item>            
              {!showPayComponent ? 
              <Button type="primary" htmlType="submit">Registrarse</Button> : 
              <Button type="primary" loading>Cargando</Button>}                        
          </Form.Item>
        </Form>        
      </Col>
    </Row>
  );
}
}

export default FormComponent;
