import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Bio from './Bio'
import Socials from './Socials'
import Projects from './Projects'
import Footer from './Footer'


export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <Hero title="HERO" name="HENRI HUUSKONEN" paragraph="Software developer, tech enthusiast & a man of too many projects"/>
        <div className="content__row">
          <Stats title="STATS"/>
          <Bio title="BIO"/>
          <Socials title="SOCIALS"/>
        </div>
        <Projects title="PROJECTS"/>
        <Footer/>
      </div>
    )
  }
}
