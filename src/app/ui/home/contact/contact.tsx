import React from "react";
import ContactInfo from "./contactInfo/contactInfo";
import ContactForm from "./contactForm/contactForm";
import styles from "./contact.module.css";
import MainTitle from "../../components/mainTitle/mainTitle";

const Contact = () => {
  return (
    <section id="contact" className="mb-20 lg:mb-0">
     <MainTitle text="contacto" color="black" />
      <article>
        <div className={styles.partsContainer}>
          <ContactInfo />
          <ContactForm />
        </div>
      </article>
    </section>
  );
};

export default Contact;
