import React from "react"
import projectdata from "../constant/projectdata"

export default function Projects(){

    const projectCard = projectdata.map(item => {
        return(
          <ProjectList
              key={item.id}
              item={item}
            />
        )
    })
    
    return(
        <>
            <div className="list-project" id="project">
                <div className="project-container">
                    <div className="carousel-primary">
                        {projectCard}
                        {projectCard}
                    </div>
                </div>
                <div className="project-container">
                    <div className="carousel-secondary">
                        {projectCard}
                        {projectCard}
                    </div>
                </div>
            </div>
        </>
    )
}

function ProjectList(props){
    return(
            <div className="project-box">
                <button className="btn-project">Visit the website <i className="ri-arrow-right-up-line"></i></button>
                <img src={`assets/${props.item.Image}`}  alt="project" />
            </div>
    )
}