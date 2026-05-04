import { useState } from 'react'
import './App.css'
import checkWindowDimension from './checkWindowDimension';

function About() {

  return(
    <div id="about">
      <TextBox />
    </div>
  )
  
}
function TextBox(){
   return (
    <div 
      style={{
        display:"flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100vw",
        height: "100vh"
      }}>
      <div
        style={{
          maxWidth: "30vw",
          minWidth: "300px",
          minHeight: "500px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "2%",
          height: "fit-content",
          padding: "20px",
          opacity: "0.85",
          backgroundColor: "#c4c4c4",
          fontSize: "clamp(15px,1.25vw,1.25rem)",
          
        }}
      >
        <h2>Hello! I am Reretak!</h2>
        <h3>I am an amateur writer and amateur programmer</h3>
        <h3>I am a non native english speaker, and I also didnt pay attention on grammars during high school so please be patient</h3>
        <h4>I can program, kinda</h4>
        <h4>My hobby is writing stories and other generic hobby of a teen who spend most of his developing age on the internet</h4>
        <a href="https://www.reddit.com/user/Reretak/">Reddit</a>
        <a href="https://www.instagram.com/kerupuksama">Instagram</a>
        <a href="#">Discord</a>
        <a href="#">RoyalRoad</a>
      </div>
        <div style={{
          maxWidth: "30vw",
          minWidth: "300px",
          minHeight: "500px",
          maxHeight: "100%",
        }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Cat_got_flash_bang.png" style={{
                width: "100%",
                height: "100%"
            }}/>
        </div>
    </div>
   )
}


export default About
