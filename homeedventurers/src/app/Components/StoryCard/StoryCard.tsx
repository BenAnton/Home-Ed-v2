"use client"

import type {StoryCardObject} from "../../Types/types"
import "./storycard.css";
import react, {useState} from "react";

interface StoryCardProps {
    story: StoryCardObject;
}
function StoryCard({ story }: StoryCardProps) {

    const [expanded, setExpanded] = useState<boolean>(false);

    const switchExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <>
        <div className={expanded ? "story-card-expanded" : "story-card"} >
            <img className={expanded ? "story-img-expanded" : "story-img"} src={story.imgPath} alt="background image"/>
            <div className="story-info">
                <h1 className="story-title">{story.title}</h1>
                <button className="expand-button" onClick={switchExpanded}>{expanded ? "Close": "Learn More..."}</button>



            </div>
            {expanded && (
                <div className="para-container">

                    {story.content.map((para: string, index: number) => (
                    <p key={index} className="story-content">{para}</p>
                ))}
                </div>
            )}

</div>


            </>
)
}

export default StoryCard;