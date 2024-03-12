import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import HeaderComponent from '../components/Theme/header/header.component'
import FooterComponent from '../components/Theme/footer/footer.component'


export function Layout({children}) {

    const [route, setRoute] = useState('/')
    let location = useLocation()
    const [styleTorender, setStyleTorender] = useState({})

    useEffect(() => {
        setRoute(location.pathname)
        console.log(location.pathname)

        switch(location.pathname) {
            case '/':
                setStyleTorender({
                    paddingTop: '100px',
                })
            break;

            case '/terminos-y-condiciones':
                setStyleTorender({
                    paddingTop: '100px',
                })
            break;

            case '/politica-de-datos':
                setStyleTorender({
                    paddingTop: '100px',
                })
            break;
            
        }
    }, [location])
  return (
    <>
    <header>
        <HeaderComponent />
    </header>
        
    {children}
    
    <footer>
        <FooterComponent />
    </footer>
    </>
  )
}