import "./Photo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import ReactTooltip from "react-tooltip";


export default function Photo({data}){
    return (
        <div className="photo-container">
            <img className='photoOftheDay' src={data.hdurl} alt={data.title} />
            <div className="photo-line-1">
                <div className="photo-title">{data.title}</div>
                <div className="photo-more">
                    <FontAwesomeIcon icon={faCircleQuestion} data-tip data-event='click focus' />
                </div>
            </div>
            <div className="photo-copyright">{data.copyright}</div>

            <ReactTooltip  globalEventOff='click'> 
                <h2>Description:</h2>
                <span className="photo-information" >{data.explanation}</span>
            </ReactTooltip>
        </div>
    )
}