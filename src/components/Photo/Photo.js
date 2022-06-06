import React, { useState } from 'react';
import "./Photo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";


export default function Photo({ data }) {
    const [size, setSize] = useState({ x: window.innerWidth / 2.5, y: 0 });

    const handler = (mouseDownEvent) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

        function onMouseMove(mouseMoveEvent) {
            setSize(currentSize => ({
                x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
                y: startSize.y - startPosition.y + mouseMoveEvent.pageY
            }));
        }
        function onMouseUp() {
            document.body.removeEventListener("mousemove", onMouseMove);
            // uncomment the following line if not using `{ once: true }`
            // document.body.removeEventListener("mouseup", onMouseUp);
        }

        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };

    let descriptionText = data.explanation ? data.explanation.split('. ').map((sent,i)=>{
        return (
            <li key={i} className='description-line'>{sent + '.'}</li>
        )
    }) : null 


    return (
        <div className="photo-container">
            <div id="container" >
                <img className='photoOftheDay' src={data.hdurl} alt={data.title} style={{ width: size.x }} />
                <button id="draghandle" type="button" onMouseDown={handler}>
                 <FontAwesomeIcon icon={faCompressArrowsAlt}/>
                </button>
            </div>
            <div className="photo-line-1">
                <div className="photo-title">{data.title}</div>
                <div className="photo-more">
                    <FontAwesomeIcon data-for='info' icon={faCircleQuestion} data-tip data-event='click focus' />
                </div>
            </div>
            <ul className="photo-copyright">{data.copyright}</ul>

            <ReactTooltip id='info' globalEventOff='click'>
                <h2>Description:</h2>
                <div className="photo-information" >{descriptionText}</div>
            </ReactTooltip>

        </div>
    )
}