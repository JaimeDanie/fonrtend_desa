import React from 'react'
import styled from 'styled-components';
import {WhatsAppOutlined} from '@ant-design/icons';

const Div = styled.div `
      a{
        position:fixed;
        width:60px;
        height:60px;
        bottom:60px;
        right:40px;
        background-color:#25d366;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        font-size:30px;
        z-index:100;
      }
      svg{
        margin-top:13px;
      }
  `
const WhatsappComponent = () => {
    return (
        <Div>
            <a href="https://web.whatsapp.com/send?phone=573153687188" target="_blank">  
              <WhatsAppOutlined />
            </a>
        </Div>
    )
}

export default WhatsappComponent;