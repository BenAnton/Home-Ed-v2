import "./mystory.css";
import Image from "next/image";

function MyStory() {
    return (
        <>
            <main className="page-container">
                <section className="my-story-background" aria-label="Pamela's Story background image">
                    <div className="my-story-container">

                        <div className="my-story-left">
                            <h1 className="my-story-heading">HI, I'M PAMELA</h1>
                            <p className="my-story-text">Mum to two wild and wonderful boys, and the heart behind Home Edventurers.
                            </p>
                            <p className="my-story-text">I was home educated myself, and now I home educate my children too. That lived experience shapes everything I create here. I believe life and learning should feel gentle, meaningful, and woven naturally into everyday life; through play, nature, curiosity, and connection, rather than pressure or rigid structure.
                            </p>
                            <p className="my-story-text">Home Edventurers exists to help families create slow, Scandinavian-inspired lives and home education rooted in simplicity, warmth, and joy. The kind of childhood that’s remembered for how it felt, not how much was ticked off.

                            </p>
                            <p className="my-story-text">That combination of lived home education and real-world business experience, allows me to support other home-educating mums who are building heart-led work at a slower, more intentional pace. No hustle culture, no pressure to do it all; just thoughtful support, encouragement, and space to grow in a way that fits family life. Understanding what is important.

                            </p>
                            <p  className="my-story-text">I live in rural Northumberland, surrounded by forests and fields, with muddy boots by the door and usually a cup of tea close by. My Norwegian roots have gifted me a love of hygge, cosiness, simplicity, and finding joy in the little things.
                                If you’re craving a gentler approach to life, learning and business, pull up a chair and get cosy!</p>
                        </div>
                        <Image className="my-story-img" src="/pam copy.png" alt="Pamela, founder of Home Edventurers" width={800} height={600} priority/>
                    </div>
                    <section className="my-story-flex" aria-label="Gallery of Pamela in nature and family settings">
                        {["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"].map((img, i) => (
                            <Image
                                key={i}
                                className="my-story-flex-img"
                                src={`/${img}`}
                                alt={`Pamela - gallery image ${i + 1}`}
                                width={300}
                                height={300}
                                sizes="(max-width: 768px) 100vw, 20vw"
                                loading="lazy"
                            />
                        ))}
                     </section>
                </section>
        </main>
                </>
    )

}

export default MyStory;