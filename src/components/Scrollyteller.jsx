
import { Component } from 'react';
// import { css, jsx } from '@emotion/core';
import { css, jsx } from '@emotion/react'
import { Card } from "react-bootstrap";
import { Scrollama, Step } from 'react-scrollama';
import './styles.css'
import { narration } from "./assets/data/narration"
import StanzaMapper from './StanzaMapper';
import imageAssets from './assets/imageAssets'



const introBlurb = (
  <div>
    <left>
    <br></br>
    
    <h1>A HARD RAINS A-GONNA FALL</h1>
    <p> Bob Dylan's "A Hard Rain's a-Gonna Fall" was featured on the artist's 1983 album titled, <i>The Freewhelin' Bob Dylan.</i> Each line or phrase of the lyrics evokes imagery of a young man's experiences. </p>
    <p> The standalone ideas from each phrase were fed into various AI imagery software to visualize the scene of the lyric.</p>
    <p>They are presented below in a scroll story.</p>
    <p>Click on the "X" below the lyric for more information regarding the AI engine and exact prompt used.</p>
    <p>Some lyrics were changed from their exact wording on the album in order for the AI to create a more compelling image.</p>
    <p>All creative credit belongs to Bob Dylan - Copyright © 1963 by Warner Bros. Inc.; renewed 1991 by Special Rider Music</p>
    <p>and the requisite AI companies.</p>
    <p>
  Questions, comments, ideas? <a href="mailto:andrecalaminus@gmail.com" className="no-text-shadow">CONTACT   </a>  
  Like this? <a href="https://www.buymeacoffee.com/andre30000" target="_blank" rel="noopener noreferrer" className="no-text-shadow">DONATE</a>!
    </p>
    <br></br>
    </left>
  </div>
);


const verse1 = narration.slice(0,5)
const verse2 = narration.slice(5,11)
const verse3 = narration.slice(11,18)
const verse4 = narration.slice(18,24)
const verse5 = narration.slice(24,38)

const verse1test = narration.slice(0,3)
const verse2test = narration.slice(3,5)


export default class Narrative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "1",
      progress: 0,
      src: ""
    }
  }

  onStepEnter = ({ element, data }) => {
    this.setState( { data });
    console.log(data)
    //this.update(data);
  }

  onStepExit= ({ element, data }) => {
    // element.style.backgroundColor = '#fff';
    // element.style.opacity = 0.3;
  }

  onStepProgress = ({ element, progress }) => {
    this.setState({ progress });
  }

  update = data => {
    var src = "./src/components/assets/images/" + data + ".png";
    this.setState({src});
  }



  render() {
    const { data } = this.state;
    console.log(data)
    const src = './src/components/assets/images/' + data + '.png';
    const imageSrc = imageAssets[data]
    console.log(src)

    return (
      <div>
        <div>
          <div className='blurb-container'>
            <div className="blurb">
              <Card>
                <div className="card-text-s">
                  {introBlurb}
                </div>
              </Card>
            </div>
          </div>

          <StanzaMapper verse={narration} stateprop={this.state.data} src={imageSrc} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          {/* <StanzaMapper verse={verse1test} stateprop={this.state.data} src={src} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          <h1 className='break'>break</h1>
              <Card>
                <Card.Img className='break' variant="top" src={`./src/components/assets/images/Album.jpg`} />
             </Card>
          <StanzaMapper verse={verse2test} stateprop={this.state.data} src={src} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          <h1>break</h1>
          <StanzaMapper verse={verse3} stateprop={this.state.data} src={src} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          <h1>break</h1>
          <StanzaMapper verse={verse4} stateprop={this.state.data} src={src} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          <h1>break</h1>
          <StanzaMapper verse={verse5} stateprop={this.state.data} src={src} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} onStepProgress={this.onStepProgress} />
          <h1>break</h1> */}
          
          {/* NOTE: below is OG code for mapping entire narration
          <div className='main'>
            <div className='graphic'>
            <Card>
              <Card.Img variant="top" src={`./src/components/assets/images/${this.state.data}.png`}/>
            </Card>
            </div>
            <div className='scroller'>
              <Scrollama
                onStepEnter={this.onStepEnter}
                onStepExit={this.onStepExit}
                progress
                onStepProgress={this.onStepProgress}
                offset={0.33}
              >
                {narration.map ( narr => (
                  <Step data={narr.verse} key={narr.verse}>
                    <div className="step" >
                      <p className = "desc" id={"desc" + narr.verse}>
                        <Card>
                          <Card.Body>
                            <Card.Text>{narr.lyric}</Card.Text>
                          </Card.Body>
                        </Card>
                      </p>
                    </div>
                  </Step>
                ))}
              </Scrollama>
            </div>
          </div> */}
        </div>
      </div>
      )
  }
}