import "./Photo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"


export default function Photo({data}){
    return (
        <div className="photo-container">
            <img className='photoOftheDay' src={data.hdurl} alt={data.title} />
            <div className="photo-line-1">
                <div className="photo-title">{data.title}</div>
                <div className="photo-more">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </div>
            </div>
            <div className="photo-copyright">{data.copyright}</div>
        </div>
    )
}