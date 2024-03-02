import React, { Component } from 'react'
import "./mynavcss.css"
import { Link } from 'react-router-dom'
export default class Mynavigation extends Component {
  render() {
    return (
      <div>
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>

        </div>
      </div>
    )
  }
}
