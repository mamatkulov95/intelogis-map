import styles from "./contact.module.scss";
import contact from "../../assets/contact.png";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <img src={contact} alt="Contact form" />
    </div>
  );
}
