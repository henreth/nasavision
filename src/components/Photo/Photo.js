import React, { useState } from 'react';
import "./Photo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";


export default function Photo({ data }) {
    const [size, setSize] = useState({ x: window.innerWidth / 2, y: 70 });

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
            <div className="photo-copyright">{data.copyright}</div>

            <ReactTooltip id='info' globalEventOff='click'>
                <h2>Description:</h2>
                <span className="photo-information" >{data.explanation}</span>
            </ReactTooltip>

        </div>
    )
}