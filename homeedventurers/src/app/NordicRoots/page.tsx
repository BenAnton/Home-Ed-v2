import "./nordicroots.css"
import Image from "next/image";

function NordicRoots () {
    return (
        <main className="nordic-roots-background">
            <header className="nordic-roots-header-container">
                <h1>The Roots That Weave Through Everything We Do</h1>
                <p>Home Edventurers is inspired by the quiet wisdom and simple beauty found in the Nordic way of life — where learning flows gently from curiosity, connection, and time spent in nature.</p>
                <p>Across Denmark, Finland, and the wider Scandinavian countries, there’s a shared belief that childhood — and indeed life itself — is best nurtured slowly. That creativity, play, and time outdoors matter just as much as knowledge, and that joy and wellbeing are the foundations for everything that follows.</p>
                <p>We take inspiration from that balance of warmth and wonder to shape our own unique approach. These Nordic Threads weave through every resource, story, and activity we create — not as a curriculum, but as a living rhythm that grows with your family.</p>
            </header>
        <section>
            <div className="our-ethos-flex">
                <div className="our-ethos-child nr-one">
                    <Image src="/forrestimage.jpeg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                        <h3>Roots of Wellbeing</h3>
                        <p className="our-ethos-card-p">Encouraging calm confidence, kindness, and self-awareness through connection, play, and purpose.</p>
                    </div>
                </div>

                <div className="our-ethos-child nr-two">
                    <Image src="/n1.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>The Language of Wonder</h3>
                    <p className="our-ethos-card-p">Nurturing communication and imagination through stories, conversation, and creative expression.</p>
                    </div>

                </div>
                <div className="our-ethos-child nr-three">
                    <Image src="/n2.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>Little Luminaries</h3>
                    <p className="our-ethos-card-p">Exploring patterns, problem-solving, and curiosity-led discovery through real-life moments and play.</p>
                    </div>
                </div>

                <div className="our-ethos-child nr-four">
                    <Image src="/n3.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>Nature’s Curious Explorers</h3>
                    <p className="our-ethos-card-p">Following the rhythm of the seasons — observing, questioning, and celebrating the natural world.</p>
                    </div>
                </div>

                <div className="our-ethos-child nr-five">
                    <Image src="/n4.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>The Art of Everyday Enchantment</h3>
                    <p className="our-ethos-card-p">Embracing creativity, crafting, and beauty in the ordinary — because magic is often handmade.</p>
                </div>
                </div>

                <div className="our-ethos-child nr-six">
                    <Image src="/n5.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>Wonders in Motion</h3>
                    <p className="our-ethos-card-p">Honouring movement and freedom — from woodland walks to dancing in the kitchen.</p>
                </div>
                </div>

                <div className="our-ethos-child nr-seven">
                    <Image src="/n6.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>Whispers of Wonder</h3>
                    <p className="our-ethos-card-p">Creating space for stillness, gratitude, and mindfulness — the quiet magic of simply being.</p>
                </div>
                </div>

                <div className="our-ethos-child nr-eight">
                    <Image src="/n7.jpg" alt="A picture of a forrest" fill style={{objectFit: "cover"}}/>
                    <div className="overlay">
                    <h3>Heart & Home</h3>
                    <p className="our-ethos-card-p">Celebrating family, tradition, and the small rituals that bring warmth and meaning to daily life.</p>
                </div>
                </div>
            </div>
        </section>

            <section className="nordic-roots-container">
                    <p>These threads run through everything we share — shaping how we see learning, how we live alongside the seasons, and how we nurture curiosity in both children and ourselves.</p>
                    <p>It’s not a framework to follow, but a way to live — slow, joyful, and rooted in the wonder of the everyday.</p>

            </section>



        </main>
    )
}

export default NordicRoots