import React from "react";
import { MdMarkEmailRead, MdPlace } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./contactInfo.module.css";
import { HiPhone } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";

const contactItems = [
  {
    id: 1,
    icon: <HiPhone size={25} />,
    content: "+54 9 261 6175384",
  },
  {
    id: 2,
    icon: <MdMarkEmailRead size={25} />,
    content: "civiltec.ar@gmail.com",
  },
  {
    id: 3,
    icon: <FaFacebook size={25} />,
    content: "/Constructora.Civiltec.Mendoza",
  },
  {
    id: 4,
    icon: <RiInstagramFill size={25} />,
    content: "@civiltec.ar",
  },
  {
    id: 5,
    icon: <MdPlace size={25} />,
    content: "Godoy Cruz 28, Luján de Cuyo - 5507. Mendoza",
  },
];

const ContactInfo = () => {
  return (
    <div
    //className="flex flex-col md:flex-row md:justify-around lg:flex-col lg:justify-normal"
    >
      <div className="lg:mb-10 mb-5">
        <h3 className="lg:text-3xl text-2xl mb-2">Hablemos</h3>
        <p className="text-lg">Enviame tu consulta:</p>
      </div>

      <div className={styles.container}>
        {contactItems.map((contact) => (
          <div key={contact.id} className={styles.contactContainer}>
            <div className={styles.iconContainer}>{contact.icon}</div>

            <span className={styles.text}>{contact.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
