import { useState } from 'react'
import './App.css'
import checkWindowDimension from './checkWindowDimension';
import { Link } from '@tanstack/react-router'

function BaseCenter() {

  return(
    <div id="centerroot">
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
        alignItems: "end",
        width: "100vw"
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
        <h2>The world of [Insert name here]</h2>
        <sub>Yes, I havent even decided the name for this setting yet, and I am really tempted to use "Fantasia" for the otherworld name if not for the fact it sounds something straight out of a... I dont even know! I just know it kinda sucks!</sub>
        <p>For a <b>tl;dr</b> its basically the classic trope of humanity making first contact with another world.   Although I wanted to focus more on the <i>culture</i>, and <i>social</i> aspect more because I feel its not really explored often <sub>(Please note that I am no Athropologist, and my understanding of culture and social stuff is not alot. Although sometime there will be messages in the story, its mostly just for funsies. Though maybe subconsciously the writings are actually a hidden subliminal <a href="https://en.wikipedia.org/wiki/Nasakom" target="_blank" rel="noopener noreferrer">NASAKOM</a> propaganda straight out of Soekarno grave, who knows?)</sub></p>
        <p>The setting is still under development, and by development I mean 95% daydreaming and 5% actual writing, so please be patient! Thanks!</p>
        <p>You can found my stories on <a href="https://www.reddit.com/r/HFY" target="_blank" rel="noopener noreferrer">r/HFY</a> but I am planning to expand more and host some of them (that doesnt really fit the HFY theme) here to!</p>
        <s>The bad grammar will continue until moral improves</s>

      </div>
      <div
          style={{
          maxWidth: "30vw",
          minWidth: "300px",
          minHeight: "200px",
          maxHeight: "10vh",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "2%",
          padding: "20px",
          opacity: "0.85",
          backgroundColor: "#c4c4c4",
          fontSize: "clamp(15px,1.25vw,1.25rem)",
          }}>
          <h2>
            <Link to="/timeline/time">TIMELINE</Link>
          </h2>
          <h2>
            <Link to="/timeline/wiki">WIKI</Link>
          </h2>
          <h2>
            <Link to="/timeline/about">ABOUT</Link>
          </h2>
      </div>
    </div>
   )
}


export default BaseCenter
