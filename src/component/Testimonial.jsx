import React from "react"
import testimonialdata from "../constant/testimonialdata"

export default function Testimonial(){
    
    const testimonialCard = testimonialdata.map(item => {
        return(
          <Reviews
              key={item.id}
              item={item}
            />
        )
    })

    return(
        <>
            <div className="recent-work container">
                <h3 className="heading3">Testimonial</h3>
                <div className="recent-work-detail">
                    {testimonialCard}
                </div>    
            </div>
        </>
    )
}

function Reviews(props){
    return(
        <div className="recent-review">
            <p className="para-lg">{props.item.review}</p>
            <div className="person-info">
                <img src={`src/assets/${props.item.image}`} />
                <div className="info-detail">
                    <p className="para-md">{props.item.name} </p>
                    <p className="para-sm">{props.item.role} </p>
                </div>
            </div>
        </div>
    )
}