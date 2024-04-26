import React from "react"
import recentworkdata from "../constant/recentworkdata"

export default function RecentWork(){
    const recentWorkCard = recentworkdata.map(item => {
        return(
          <RecentWorkCard
              key={item.id}
              item={item}
            />
        )
    })

    return(
        <>
            <div className="recent-work container">
                <h3 className="heading3">Recent Work</h3>
                <div className="recent-work-detail">
                    {recentWorkCard}
                </div>
                
            </div>
        </>
    )
}

function RecentWorkCard(props){
    return(
    <div className="recent-all-cont">
        <div className="recent-card">
            <div className="recent-work-list">
                <div className="recent-work-link">
                    <a href="">{props.item.projectUrl}</a>
                </div>
                <p className="para-md">Brand Design - Webflow Development - Web Design</p>
                
                </div>
                <button className="btn-recent"><i className="ri-arrow-right-up-line"></i></button>
            </div>
        <hr></hr>
    </div>
        
    )
}