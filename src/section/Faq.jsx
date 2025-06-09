import { useState } from "react";
import styles from "./Faq.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

function Faq() {
  const [Open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(Open === index ? null : index);
  };

  const faqData = [
    {
      question: "  what is a bookfinder",
      answer:
        "Bookfinder is a webApp that gives you access to a lot of books fast and tells you more about the book.",
    },
    {
      question: "How To Register",
      answer: "To register, click the sign-up button and fill out the form.",
    },
    {
      question: "How do I contact you",
      answer: "You can contact us via our support page or email.",
    },
    {
      question: "Can I download the books there",
      answer: "No,  The books are Not Yet  available For Download.",
    },
  ];
  return (
    <section className={styles.FaqSection}>
      <div className={styles.container}>
        <div className={styles.FaqTextcontainer}>
          <h1> Frequently Asked Questions</h1>
        </div>

        <div className={styles.heroContainer}>
          <ul>
            {faqData.map((item, index) => (
              <li key={index}>
                <h2>{item.question}</h2>
                <IoIosAddCircleOutline
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOpen(index);
                  }}
                  onTouchEnd={() => toggleOpen(index)}
                  className={`${styles.iconD} `}
                  style={{ pointerEvents: "auto" }}
                />
                {Open === index && <p>{item.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
