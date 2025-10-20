import type {StoryCardObject} from "../Types/types"
import stories from "../Data/storyCardData"
import StoryCard from "../Components/StoryCard/StoryCard"
import "./mystory.css";

function MyStory() {
    return (
        <>
            <div className="page-container">
                <div className="my-story-background">
                    <div className="my-story-container">

                        <div className="my-story-left">
                            <h1 className="my-story-heading">HI, I'M PAMELA</h1>
                            <p className="my-story-text">Mum to two wild and wonderful boys and the heart behind Home Edventurers.
                            </p>
                            <p className="my-story-text">I was home educated myself, and it gave me back the sparkle school once took away. Now I’m on a mission to help families create their own enchanted version of education — one filled with joy, play, and deep connection.
                            </p>
                            <p className="my-story-text">I live in rural Northumberland, surrounded by forests, fields, and that gentle northern charm that feels a bit like a hug. My Norwegian roots have gifted me a love of hygge — the art of coziness, simplicity, and finding joy in the little things.
                            </p>
                            <p className="my-story-text">You’ll often find me with muddy boots, a cup of tea, and a notebook full of ideas. I believe in slow days, warm fires, and curiosity-led learning that doesn’t just educate but enriches.
                            </p>
                            <p  className="my-story-text">So, pour yourself a cuppa, settle in, and let’s create something magical together — one small, beautiful moment at a time.

                            </p>
                        </div>
                        <img  className="my-story-img" src="pam copy.png"/>
                    </div>

                    <div className="my-story-flex">
                        <img className="my-story-flex-img" src="p1.png" alt="image of Pam"/>
                        <img className="my-story-flex-img" src="p2.png" alt="image of Pam"/>
                        <img className="my-story-flex-img" src="p3.png" alt="image of Pam"/>
                        <img className="my-story-flex-img" src="p4.png" alt="image of Pam"/>
                        <img className="my-story-flex-img" src="p5.png" alt="image of Pam"/>
                    </div>

            </div>
        </div>
                </>
    )

}

export default MyStory;