import resources from "../Data/resourceData"
import {resource} from "@/app/Types/types";
import Resource from "@/app/Components/Resource/Resource";
import "../Components/Resource/resource.css";
import "./resources.css"

function Resources () {
    return (
        <div className="resources-background">

            <div className="resources-featured">
                    <img className="featured-img" src={resources[0].imgPath[0]} alt="resource cover"/>

                    <div className="featured-flex">
                        <h2 className="featured-heading-h2">{resources[0].title}</h2>
                        <h3 className="featured-heading-h3">Our newest magical guide - We're excited to share it with you.</h3>
                        <p className="featured-price">${resources[0].price}</p>

                        <div className="featured-flex-button">
                            <button>Buy Now</button>
                            <button>Find out more...</button>

                        </div>

                    </div>

            </div>

        <div className="resources-container">
            {resources.map((resource: resource, index: number) => (
                <Resource key={index} resource={resource} />
            ))}
        </div>
            </div>
    )
}

export default Resources;