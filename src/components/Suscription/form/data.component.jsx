import React from 'react'
import { Input, Select, Checkbox, Tooltip, DatePicker } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;

const DataFormComponent = () => [    
    {
      name: "documentType",
      label: "Tipo de documento",
      rules: [{ required: true, message: 'Por favor selecciona tu tipo de documento!' }],
      children: (
        <Select placeholder="Selecciona un tipo">
          <Option value="CC">Cédula Ciudadanía</Option>
          <Option value="CE">Cédula Extranjera</Option>
          <Option value="NIT">NIT</Option>
        </Select>
      )
    },
    {
      name: "documentNumber",
      label: "Número de documento",
      rules: [
        { required: true, message: 'Por favor ingresa tu número de documento!' },
        { pattern: /^[0-9]+$/, message: 'Solo se permiten números!' }
      ],
      children: <Input placeholder="Por favor digita tu número de documento" />
    },
    {
      name: "firstName",
      label: "Nombre",
      rules: [{ required: true, message: 'Por favor ingresa tu nombre!' }],
      children: <Input placeholder="Por favor digita tu nombre" />
    },
    {
      name: "lastName",
      label: "Apellido",
      rules: [{ required: true, message: 'Por favor ingresa tu apellido!' }],
      children: <Input placeholder="Por favor digita tu apellido" />
    },
    {
      name: "birthdate",
      label: "Fecha de cumpleaños",
      rules: [
        {
          required: true,
          message: 'Por favor ingrese su fecha de cumpleaños!',
        },
        () => ({
          validator(_, value) {
            if (!value || dayjs().subtract(18, 'year').isAfter(value)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Debes tener al menos 18 años!'));
          },
        }),
      ],
      children: <DatePicker style={{width: '100%'}} format="YYYY-MM-DD" />
    },
    {
      name: "gender",
      label: "Género",
      rules: [{ required: true, message: 'Por favor selecciona tu tipo de género!' }],
      children: (
        <Select placeholder="Selecciona tu genero">
          <Option value="0">Femenino</Option>
          <Option value="1">Masculino</Option>
          <Option value="3">Otro</Option>
        </Select>
      )
    },
    {
      name: "email",
      label: "Email",
      rules: [
        { 
          type: 'email',
          message: 'El correo electrónico no es válido!',
        },
        {
          required: true,
          message: 'Por favor ingresa tu correo electrónico!',
        },
      ],
      children: <Input placeholder="Por favor digita tu correo electrónico" />
    },
    {
      name: "phone",
      label: "Teléfono",
      rules: [{ required: true, message: 'Por favor ingresa tu teléfono!' }],
      children: <Input placeholder="Por favor digita tu teléfono" />
    },
    {
      name: "address",
      label: "Dirección",
      rules: [{ required: true, message: 'Por favor ingresa tu dirección!' }],
      children: <Input placeholder="Por favor digita tu dirección" />
    },
    {
      name: "city",
      label: "Ciudad",
      rules: [{ required: true, message: 'Por favor ingresa tu ciudad!' }],
      children: <Input placeholder="Por favor digita tu ciudad" />
    }
  ];

export default DataFormComponent
