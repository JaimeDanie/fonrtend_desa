import React from 'react'
import BannerHeroComponent from '../../components/Home/banner-hero/banner-hero.component'
import CardPlansComponent from '../../components/Home/card-plans/card-plans.component'
import AboutMeComponent from '../../components/Home/about-me/about-me.component'
import MedicalServiceComponent from '../../components/Home/medical-service/medical-service.component'
import CounterComponent from '../../components/Home/counter/counter.component'
import './home.style.scss'

function HomePage() {
  return (
    <div>
      <section id="home">
        <BannerHeroComponent/>
      </section>
      <section id="plans">
        <CardPlansComponent/>
      </section>
      <section id="about-me">
        <AboutMeComponent/>
      </section>
      <section id="metrics">
        <CounterComponent/>
      </section>
      <section id="services">
        <MedicalServiceComponent/>
      </section>
    </div>
  )
}

export default HomePage

