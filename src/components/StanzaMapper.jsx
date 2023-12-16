import './styles.css'
import { Card } from "react-bootstrap";
import { Scrollama, Step } from 'react-scrollama';

import { Component } from 'react';
// import { css, jsx } from '@emotion/core';
import { css, jsx } from '@emotion/react'
import './styles.css'
import { narration } from "./assets/data/narration"
import Collapser from './Collapser';

const StanzaMapper = ( { verse, stateprop, src, onStepEnter, onStepExit, onStepProgress  }) => {
    
    return (
        <div className='main'>
            <div className='graphic'>
             <Card>
                <Card.Img variant="top" src={`./src/components/assets/images/${stateprop}.png`} />
                {/* <p>test {src}</p> */}
             </Card>
            </div>
        <div className='scroller'>
        <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            progress
            onStepProgress={onStepProgress}
            offset={0.5}
        >
            {verse.map ( narr => (
            <Step data={narr.verse} key={narr.verse}>
                <div className="step" >
                <p className = "desc" id={"desc" + narr.verse}>
                    <Card>
                    <Card.Body>
                        <Card.Text>{narr.lyric}</Card.Text>
                    </Card.Body>
                    </Card>
                    <Collapser prompt={narr.prompt} cred={narr.credit} />
                </p>
                </div>
            </Step>
            ))}
        </Scrollama>
        </div>
        </div>
)}

export default StanzaMapper