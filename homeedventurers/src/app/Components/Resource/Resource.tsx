import type {resource} from "../../Types/types";
import "./resource.css"
import Image from "next/image";

interface ResourceProps {
    resource: resource;
}


function Resource ({resource}: ResourceProps) {
    const productUrl = `https://payhip.com/${resource.id}`;

    return (
            <a href={productUrl} className="resource-link" target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${resource.title} on Payhip`}>
                <div className="resource-card">
                    <Image className="resource-img" src={`/${resource.imgPath[0]}`} alt={`cover for ${resource.title}`} width={300} height={300} sizes="(max-width: 768px) 100vw, 300px" priority={false}/>
                    <h3>{resource.title}</h3>
                    <h3>{resource.price === 0 ? "Free" : `£${resource.price}`}</h3>
                </div>
            </a>
    )
}

export default Resource;