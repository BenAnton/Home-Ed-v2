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
                            <p className="my-story-text">Mum to two wild and wonderful boys and the heart behind Home Edventurers.</p>
                            <p className="my-story-text">I was home educated myself, and it gave me back the sparkle school once took away. Now I’m on a mission to help families create their own enchanted version of life, learning & childhood: one filled with joy, play, and deep connection.</p>
                            <p className="my-story-text">I live in rural Northumberland, surrounded by forests, fields, and that gentle northern charm that feels a bit like a hug. My Norwegian roots have gifted me a love of hygge: the art of cosiness, simplicity, and finding joy in the little things.
                            </p>
                            <p className="my-story-text">You’ll often find me with muddy boots, a cup of tea, and a notebook full of ideas. I believe in slow days, warm fires, and curiosity-led learning that doesn’t just educate but enriches.</p>
                            <p  className="my-story-text">So, pour yourself a cuppa, settle in, and let’s create something magical together: one small, beautiful moment at a time.</p>
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