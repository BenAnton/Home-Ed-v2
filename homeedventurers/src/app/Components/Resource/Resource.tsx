import type {resource} from "../../Types/types";
import "./resource.css"

interface ResourceProps {
    resource: resource;
}


function Resource ({resource}: ResourceProps) {
    return (
        <>
            <a href={`https://payhip.com/${resource.id}`}>
        <div className="resource-card">
            <img className="resource-img" src={resource.imgPath[0]} alt={`cover for ${resource.title}`}/>
            <h3>{resource.title}</h3>
            <h3>{resource.price === 0 ? "Free" : `£${resource.price}`}</h3>
        </div>
            </a>
            </>
    )
}

export default Resource;