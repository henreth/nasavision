import "./Photo.css"

export default function Photo({data}){
    return (
        <div className="photo-container">
            <img className='photoOftheDay' src={data.hdurl} />
            <div className="photo-Title">{data.title}</div>
        </div>
    )
}