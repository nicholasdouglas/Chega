import img02 from '../assets/img/img02.jpg'

export default function card(){

    return(
        <div>
            <h2>{prop.title}</h2>
            <img src={prop.image}/>
            <p>{prop.text}</p>


        </div>
    )
}