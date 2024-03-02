import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mynavigation from './Mynavigation'
import Home1 from './Home1'
import About1 from './About1'
import Contact1 from './Contact1'

export default class Myrouting extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Mynavigation/>
          <Routes>
             <Route path="/" element={<Home1/>}/>
             <Route path="about" element={<About1/>}/>
             <Route path="contact" element={<Contact1/>}/>

          </Routes>
          
        </BrowserRouter>
      </div>
    )
  }
}
