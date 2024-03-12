import axios from 'axios';
import { 
    API_URL, 
    PATH_PLANS,
    PATH_COUNTER,
    PATH_SERVICES,
    PATH_GET_AGENTS,
    PATH_MEDICAL_REQUEST,
    API_PAYVALIDA,
    USER_ADMIN,
    PASS_ADMIN,
    APP_ADMIN,
 } from './config';

export async function getPlans() {
    return await axios.get(`${API_URL}${PATH_PLANS}`);
}
export async function getPlansById(id) {
    return await axios.get(`${API_URL}${PATH_PLANS}/${id}`);
}
export async function getCounter() {
    return await axios.get(`${API_URL}${PATH_COUNTER}`);
}
export async function getServices() {
    return await axios.get(`${API_URL}${PATH_SERVICES}`);
}
export async function getAgent(nit) {
    return await axios.get(`${API_URL}${PATH_GET_AGENTS}`, {
        params: {
            nit: nit
        }
    });
}
export async function sendMedical(data){
    return await axios.post(`${API_URL}${PATH_MEDICAL_REQUEST}`, data)
}
export async function callSuscription(data){
    return await axios.post(`${API_PAYVALIDA}`, data, {
        headers: {
            'Content-Type': 'application/json' 
        }
    })
}
export async function loginMedicalAdmin(){
    const data = {"email": `${USER_ADMIN}`,"password": `${PASS_ADMIN}`}
    return await axios.post(`${APP_ADMIN}/login`, data, {
        headers: {
            'Content-Type': 'application/json',            
        }
    })
}
export async function sendMedicalAdmin(data, authorization){
    return await axios.post(`${APP_ADMIN}/medical-consultion`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorization}`
        }
    })
}