import "./ourvalues.css"
import Image from "next/image";

function OurValues () {
    return (
        <main className="our-ethos-background">
            <div className="our-ethos-container">
                <section className="our-ethos-page-divider" aria-label="What we stand for at Home Edventurers">
                <header className="our-ethos-header-container">
                    <h1>What We Stand For (What Matters to Us)</h1>
                    <p>At Home Edventurers, we believe that the most powerful kind of learning happens when we follow curiosity, embrace wonder and hold tight to connection.</p>
                </header>
            <div className="our-ethos-flex">
                <div className="our-ethos-child one">
                <h3>Family, Tradition & Nostalgia</h3>
                    <p className="our-ethos-card-p">A childhood filled with warmth, laughter, and connection: where learning flows naturally through stories, play, and togetherness.</p>
                </div>
                <div className="our-ethos-child two">
                    <h3>Nature & Sustainability</h3>
                    <p className="our-ethos-card-p">Embracing a love for the outdoors; exploring forests, foraging, and living with the seasons, encouraging a deep bond with nature and using what it provides us.</p>
                </div>
                <div className="our-ethos-child three"><h3>Creativity & Craftsmanship</h3>
                <p className="our-ethos-card-p">Hands-on learning that celebrates imperfection, curiosity, imagination, and the joy of making with our hands: developing the skills of our ancestors through connection, and togetherness.</p>
                </div>
                <div className="our-ethos-child four"><h3>Spirituality & Wonder</h3>
                <p className="our-ethos-card-p">The awe and mystery of life: exploring folklore, seasonal change, and the hidden magic in everyday life. Embracing practices like mindfulness and forest bathing to connect to our inner self.</p>
                </div>
                <div className="our-ethos-child five"><h3>Slowness & Presence</h3>
                <p className="our-ethos-card-p">An unhurried childhood filled with cosy rituals, mindful moments, and the magic of simply being together. Homes filled with warmth, laughter & simplicity.</p>
                </div>
            </div>
                </section>
                <section className="our-ethos-header-container" aria-label="Learning through Enchantment">
                    <h2>Learning Through Enchantment</h2>
                    <p>Our resources are built around curiosity and rhythm, not timetables or checklists.
                        Each season brings a new invitation to explore — from the first buds of spring to the cozy hibernation of winter.

                        Through story-led adventures, families can:

                        Learn through play and nature

                        Discover the magic in everyday life

                        Build connection and confidence in their home education journey


                        Home Edventurers is a place to feel supported, inspired, and reminded that you’re already doing enough — because your love, your curiosity, and your time together are the magic.</p>
                    <h2 className="our-chars-heading">Our Characters</h2>
                    <p>By introducing characters, this allows your children to be even more invested in the prompts and world that we create. They will begin to notice the small things in the every day and the wonder that can guide them.</p>
                    <p className="our-ethos-last-para">Each character is carefully chosen because they symbolise the core values that underpin everything we do… let me introduce you!</p>
                    <div className="our-ethos-flex our-ethos-flex-wide">
                        <div className="our-ethos-child char1 one">
                            <h3>Why a Witchling?</h3>
                            <p className="our-ethos-card-p">The witchling is a gentle guide: a wise soul who follows the rhythm of the seasons and listens closely to the land. She gathers knowledge through nature’s quiet lessons, reminding us to nurture ourselves and others with calm intention. Her way of living mirrors our ethos: slow, mindful, and filled with everyday enchantment.</p>
                        </div>
                        <div className="our-ethos-child char2 two">
                            <h3>Why Gnomes?</h3>
                            <p className="our-ethos-card-p">Gnomes are more than storybook characters; they’re symbols of a slower, more grounded way of life. Rooted in nature, tradition, and quiet wisdom, they embody the heart of Home Edventurers: curiosity, care, and connection. Their world is one of handmade treasures, seasonal rhythms, and cosy homes filled with purpose. Gnomes remind us that learning doesn’t need to be rushed or loud, it can be gentle</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default OurValues