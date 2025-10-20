import "./InkCap.css";
import styles from "@/app/page.module.css";
import Link from "next/link";

function InkCap() {
    return (
        <div className="page-container">
            <div className="inkcap-background">

                <div className="inkcap-header-container">
                    {/*<img className="mushroom-img" src="/mushroom.png" alt="mushroom"/>*/}
                    {/*<div>*/}
                        <img className="inkcap-img" src="/inklogo1.png" alt="inkcap"/>
                        <h3 className="mushroom-heading">The Inkcap Adventure Boxes Collaboration</h3>
                    {/*</div>*/}

                </div>

                <div className="our-ink-flex">
                    <div className="our-ink-child ione">
                        <h3>Scales</h3>
                        <p className="our-ink-card-p"></p>
                    </div>
                    <div className="our-ink-child itwo">
                        <h3>Kylie</h3>
                        <p className="our-ink-card-p"></p>
                    </div>
                    <div className="our-ink-child ithree"><h3>In the box...</h3>
                        <p className="our-ink-card-p"></p>
                    </div>
                    <div className="our-ink-child ifour"><h3>Pamela</h3>
                        <p className="our-ink-card-p"></p>
                    </div>
                    <div className="our-ink-child ifive"><h3>Inkcap</h3>
                        <p className="our-ink-card-p"></p>
                    </div>
                </div>

                <div className="content-container">
                    <p>The Inkcap Adventure Boxes are a magical collaboration with Kylie Dixon that I’ve been so excited to be part of.
                    </p>
                    <p>Step into a world where stories come to life, where children build confidence, pages unfold into adventures, and imagination becomes something you can hold in your hands.
                    </p>
                    <p>Created by author and illustrator Kylie Dixon, the Inkcap Adventure Boxes bring the magic of her stories into family homes through a blend of storytelling, creativity, and enchantment. Each box is lovingly designed to reflect the season and forms part of the journey toward her next book. They invite children to step inside the story — to see it, touch it, and make it part of their own world.
                    </p>
                    <p>I’m honoured to add a sprinkle of hands-on magic to each box by creating the activity and recipe that accompany Kylie’s tales. These simple, enchanting additions turn reading into an experience — inviting children to slow down, imagine deeply, and connect through making, tasting, and creating.
                    </p>
                    <p>Every box is filled with thoughtful treasures that make the story come alive:
                    </p>
                    <ul>
                        <li>A heartfelt letter from one of the story’s characters
                        </li>
                        <li>A magical keepsake
                        </li>
                        <li>A collectible card, stickers, and badge
                        </li>
                        <li>A beautiful illustration
                        </li>
                        <li>And our story-inspired activity and recipe
                        </li>
                    </ul>
                        <p>Together, these elements transform stories into something tangible — a gentle adventure that nurtures curiosity, creativity, and wonder.

                        </p>
                        <Link className="homelinkbutton" href="https://magicalworldofmushroommarvellous.com/shop/magical-adventure-box/">Order Here</Link>
                </div>


            </div>
        </div>
    )
}

export default InkCap;