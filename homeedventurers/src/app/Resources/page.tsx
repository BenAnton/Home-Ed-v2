import resources from "../Data/resourceData"
import {resource} from "@/app/Types/types";
import Resource from "@/app/Components/Resource/Resource";
import "../Components/Resource/resource.css";
import "./resources.css"
import Image from "next/image";

function Resources () {
    const featured = resources[0];

    return (
        <main className="resources-background">
            <section className="resources-featured" aria-label="Featured resource">
                <div className="featured-img-wrapper">
                    <Image className="featured-img" src={`/${featured.imgPath[0]}`} alt={`Cover for ${featured.title}`} style={{objectFit: "cover"}} fill priority/>
                </div>
                    <div className="featured-flex">
                        <h2 className="featured-heading-h2">{featured.title}</h2>
                        <h3 className="featured-heading-h3">Our newest magical guide - We're excited to share it with you.</h3>
                        <p className="featured-price">£{featured.price === 0 ? "Free" : featured.price}</p>
                        <div className="featured-flex-button">
                            <a className="featured-buy-button" href={`https://payhip.com/${resources[0].id}`} rel="noopener noreferrer" aria-label="Buy featured resource on payhip">Buy Now</a>
                        </div>
                    </div>
            </section>
        <section className="resources-container" aria-label="All Resources">
            {resources.map((resource: resource, index: number) => (
                <Resource key={index} resource={resource} />
            ))}
        </section>
            </main>

            )
}

export default Resources;