import React, { useEffect, useState } from 'react'
import './pay.style.scss'
import sha512 from 'crypto-js/sha512';
import { callSuscription, sendMedical } from '../../../utils/services/services';
import dayjs from 'dayjs';

const PayComponent = React.memo (({dataForm, isDataPlanId}) =>  { 
  console.log('Ejecutando PayComponent')
  
  function generarNumeroDeOrden() {  
    const fecha = new Date();
    const fechaFormato = `${fecha.getFullYear()}${String(fecha.getMonth() + 1).padStart(2, '0')}${String(fecha.getDate()).padStart(2, '0')}${String(fecha.getHours()).padStart(2, '0')}${String(fecha.getMinutes()).padStart(2, '0')}${String(fecha.getSeconds()).padStart(2, '0')}`;  
    const aleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const numeroDeOrden = `${fechaFormato}${aleatorio}`;    
  
    return numeroDeOrden;
  }
  
  useEffect(() => {    
    
    const merchant = import.meta.env.VITE_REACT_APP_MERCHANT;
    const fixedHash = import.meta.env.VITE_REACT_APP_FIXED_HASH;
      
      const email = dataForm.email;
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
      const user_di = dataForm.documentNumber;
      const user_type_di = dataForm.documentType;
      const user_name = dataForm.firstName + ' ' + dataForm.lastName;
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
                  "line1": dataForm.address,
                  "line2": dataForm.city,
                  "postalCode": ""
              },
              "personal_information": {
                  "firstname": dataForm.firstName,
                  "lastname": dataForm.lastName,
                  "document": {
                      "type": dataForm.documentType,
                      "id": dataForm.documentNumber
                  },
                  "contact_information": {
                      "phone": '57'+dataForm.phone,
                      "email": dataForm.email
                  }
              }
          }      
      }      
  
      const checksumData = email + country + order + money + amount + fixedHash;
      const checksum = sha512(checksumData).toString();
  
      const data = {merchant, email, country, order, reference, money, amount, description, method, language, recurrent, expiration, iva, checksum, user_di, user_type_di, user_name, redirect_timeout, additional_information};

      const dataBack = {
        "tipo_documento": dataForm.documentType,
        "numero_documento": dataForm.documentNumber,
        "nombre": dataForm.firstName,
        "apellido": dataForm.lastName,
        "email": dataForm.email,
        "telefono": dataForm.phone,
        "ciudad": dataForm.city,
        "direccion": dataForm.address,
        "referido": dataForm.documentAgent || "NULL",
        "orden": order
      }

      async function sendMedicalData(dataBack) {
        try {
            const response = await sendMedical(dataBack);
            if (response.data.success) {
                return response;
            } else {
                throw new Error("Medical data submission was not successful.");
            }
        } catch (error) {
            console.error("Error sending medical data:", error);
            throw error; // Re-lanza el error para manejarlo en la función principal
        }
    }

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

  async function handleDataSubmission(dataBack, data) {
    try {
        await sendMedicalData(dataBack);
        const urlPay = await initiateSubscription(data);
        console.log('URL de pago', urlPay);

        // Redireccionar después de 5 segundos
        setTimeout(() => {
            window.location = urlPay;
        }, 5000);
    } catch (error) {
        console.error("Error in data submission process:", error);
    }
  }
  
  handleDataSubmission(dataBack, data);  
          
  },[dataForm, isDataPlanId])
  
  
});

export default PayComponent
