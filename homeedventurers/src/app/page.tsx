import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.HomeBackground}>
      <section className={styles.content}>
          <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Inspiring Simplicity, Connection & Warmth at Home & in Business</h1>

              <Link className={styles.homelinkbutton}  href="/OurValues">Find Out More...</Link>


              <p className={styles.para}>Welcome to Home Edventurers, a cosy corner of the world where learning, living and business flow gently through simplicity, hygge, nature, and everyday magic.
                  I created Home Edventurers to support families who want a slower, more intentional way of homelife and education; inspired by Scandinavian ideas of simplicity, warmth, and connection. Here, learning isn’t something we sit down and “do”; it’s woven naturally into everyday life. Through muddy boots, stories under blankets, bread baking on rainy afternoons, and quiet moments of wonder.

              </p>
              <p className={styles.para}>I believe childhood should feel like an adventure and family life should be shaped around what truly matters. There’s no rush here, no pressure to keep up. Just space to follow curiosity, build gentle rhythms, and create a home that feels calm, connected, and alive with learning.

              </p>
              <p className={styles.para}>Alongside family resources, Home Edventurers is also a space for parents, especially home-educating mums, who are building heart-led work alongside family life. I know how important it is to grow slowly and sustainably, without sacrificing the very life you’re trying to create. Through one-to-one support and community, I offer encouragement, practical guidance, and a place to feel understood and cheered on.

              </p>
              <p className={styles.para}>If you’re craving a softer, more human approach to home education and business, one that keeps family at the centre, you’re in the right place.
                  Step inside, slow down, and let’s find a way forward that feels gentle, meaningful, and true to your family.


              </p>
       

          </div>
      </section>
    </div>
  );
}
