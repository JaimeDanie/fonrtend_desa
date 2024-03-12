import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./layout/layout"
import HomePage from "./pages/home/home.page"
import TermConditions from "./pages/term-conditions/term-conditions.page"
import FrequentQuestions from "./pages/frequent-questions/frequent-questions.page"
import DataPolicy from './pages/data-policy/data-policy.page'
import SuscriptionPage from "./pages/Suscription/suscription.page"
import WhatsappComponent from "./components/Theme/whatsapp/whatsapp.component"

function App() {

  return (
    <BrowserRouter>  
        <Layout>
          <Routes>            
              <Route path="*" element={<HomePage />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="/suscripcion/:id" element={<SuscriptionPage />}/>     
              <Route path="/preguntas-frecuentes" element={<FrequentQuestions />}/>
              <Route path="/terminos-y-condiciones" element={<TermConditions />}/>
              <Route path="/politica-de-datos" element={<DataPolicy />}/>
          </Routes>
          <WhatsappComponent />
        </Layout>              
    </BrowserRouter>
  )
}

export default App
