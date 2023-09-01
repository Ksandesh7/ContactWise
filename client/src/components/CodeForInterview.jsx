import React from 'react'
import '../App.css';

export default function CodeForInterview() {
  return (
    <>
        <div className="about-section">
          <div className='about-content'>
            <h1>Welcome to our Contacts Manager app! </h1>
            <p>At its core, we're dedicated to streamlining your contact management experience. Whether you're an individual looking to organize personal connections or a business aiming to maintain efficient customer relationships, our app has been meticulously designed with your needs in mind.</p>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <div className="container">
                {/* <h2>Jane Doe</h2> */}
                {/* <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className="button">Contact</button></p> */}
                <p>Our team is driven by the mission to create intuitive and user-friendly applications that elevate your productivity, so you can focus on what truly matters - building connections.</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}} /> */}
              <div className="container">
                {/* <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className="button">Contact</button></p> */}
                <p>The Contacts Manager app empowers you to store, categorize, and effortlessly retrieve contact details. We understand the value of simplicity.</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}}  /> */}
              <div className="container">
                {/* <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p> */}
                <p>Your information is treated with the utmost care. Feel free to explore the app's features, add new contacts, fine-tune existing ones, and tailor your contact list according to your preferences. </p>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer'>
                Copyright@2023 - ContactWise 
        </footer>
    </>

  )
}
