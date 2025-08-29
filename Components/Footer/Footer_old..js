import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.mainSection}>
        {/* Section 3 */}
        <div className={styles.section3}>
          <Link href="/" className={styles.anwesha_text}>
            <img
              src="/Anwesha_text.png"
              alt="Anwesha"
              className={styles.anwesha_text_img}
            />
          </Link>

          <div className={`${styles.icon_links} ${styles.linkGroup}`}>
            <Link
              className={`${styles.icon_link} ${styles.link}`}
              href="https://www.facebook.com/anwesha.iitpatna/"
            >
              <img src="/footer/facebook.svg" alt="Facebook" />
            </Link>
            <Link
              className={`${styles.icon_link} ${styles.link}`}
              href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
            >
              <img src="/footer/instagram.svg" alt="Instagram" />
            </Link>
            <Link
              className={`${styles.icon_link} ${styles.link}`}
              href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
            >
              <img src="/footer/youtube.svg" alt="YouTube" />
            </Link>
            <Link
              className={`${styles.icon_link} ${styles.link}`}
              href="https://twitter.com/anweshaiitpat/"
            >
              <img src="/footer/twitter.svg" alt="Twitter" />
            </Link>
          </div>
        </div>

        {/* Middle container */}
        <div className={styles.middle_container}>
          <img className={styles.frame_img} src="/assets/frame.svg" alt="Frame" />
          <Link href="/privacy" className={styles.privacy_text}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.terms_text}>
            Terms and Conditions
          </Link>
        </div>

        {/* Section 1 */}
        <div className={styles.section1}>
          <a href="mailto:anweshaiitp@gmail.com">
            <img src="/footer/mail.svg" alt="Mail" />
            <span>anweshaiitp@gmail.com</span>
          </a>
          <a href="tel:+917907323522">
            <img src="/footer/phone.svg" alt="Phone" />
            <span>+91 79073 23522</span>
          </a>
          <a href="https://goo.gl/maps/g8QCu3qN2DhuM2W49">
            <img src="/footer/location.svg" alt="Location" />
            <div>
              Anwesha Office,
              <br />
              Indian Institute of Technology Patna,
              <br />
              Bihta, Patna - 801 103
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
