import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.HomeBackground}>
      <section className={styles.content}>
          <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Inspiring Curiosity, Wonder & Enchantment</h1>

              <Link className={styles.homelinkbutton}  href="/OurValues">Find Out More...</Link>


              <p className={styles.para}>Welcome to Home Edventurers: a cosy corner of the world where learning flows gently through play, nature, and everyday magic. Here, we celebrate slow living, simple joys, and the kind of hygge-filled childhoods that stay in your heart forever.
              </p>
              <p className={styles.para}>We believe childhood should feel like an adventure, not a checklist. A chance to notice the glimmer of frost on a leaf, the whisper of a story in the woods, or the comfort of baking bread together on a rainy afternoon.
              </p>
              <p className={styles.para}>Step inside, slow down, and rediscover the beauty of learning at your own pace: guided by curiosity, connection, and wonder.
              </p>


          </div>
      </section>
    </div>
  );
}
