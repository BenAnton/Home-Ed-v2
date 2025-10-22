import "./InkCap.css";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import {fit} from "sharp";

function InkCap() {
    return (
        <main className="page-container">
            <section className="inkcap-background">
                <header className="inkcap-header-container">
                        <Image className="inkcap-img" src="/inkcapround.png" alt="Inkcap adventure boxes logo" width={250} height={250} priority/>
                    <div className="inkcap-img-wrapper">
                        <Image className="inkcap-img-two" src="/inkcaplogotext.png" alt="Inkcap adventure boxes logo" fill priority/>
                    </div>
                </header>
                <section className="our-ink-flex" aria-label="Meet the inkcap collaborators">
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
                </section>

                <section className="content-container">
                    <h2>The Boxes...</h2>
                    <p>Inkcap’s Adventure Boxes are a magical collaboration with Kylie Dixon that I’ve been so excited to be part of.</p>
                    <p>Step into a world where stories come to life, children build confidence, pages unfold into adventures, and imagination becomes something you can hold in your hands.</p>
                    <p>Created by author and illustrator Kylie Dixon, our Inkcap’s Adventure Boxes bring the magic of her stories into family homes through a blend of storytelling, creativity, and enchantment. Each box is lovingly designed to reflect the season and forms part of the journey toward her next book. They invite children to step inside the story; to see it, touch it, and make it part of their own world.</p>
                    <p>I’m honoured to add a sprinkle of hands-on magic to each box by creating the activity and recipe that accompany Kylie’s tales. These simple, enchanting additions turn reading into an experience; inviting children to slow down, imagine deeply, and connect through making, tasting, and creating.</p>
                    <p>Every box is filled with thoughtful treasures that make the story come alive:</p>
                    <ul>
                        <li>A heartfelt letter from one of the story’s characters</li>
                        <li>A magical keepsake</li>
                        <li>A collectible character card</li>
                        <li>Beautifully illustrated stickers</li>
                        <li>Wooden character badge</li>
                        <li>A character illustration</li>
                        <li>And our story-inspired activity and recipe</li>
                    </ul>
                        <p>Together, these elements transform stories into something tangible… a gentle adventure that nurtures curiosity, creativity, and wonder.</p>
                        <Link className="homelinkbutton" href="https://magicalworldofmushroommarvellous.com/shop/magical-adventure-box/" target="_blank" rel="noopener noreferrer" aria-label="Order the Inkcap Adventure boxes">Order Here</Link>
                </section>


            </section>
        </main>
    )
}

export default InkCap;