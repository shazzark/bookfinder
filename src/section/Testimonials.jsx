import styles from "./Testimonials.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { reviews } from "./ReviewsData";
import { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / testimonialsPerPage);

  const currentTestimonials = reviews.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };
  return (
    <section className={styles.TestimonialSection}>
      <div className={styles.TestimonialsHero}>
        <div className={styles.textContainer}>
          <h1>
            Trusted <br /> <strong> by 200 + </strong> <br />
            <span>people</span>
          </h1>
        </div>

        <div className={`${styles.testimonialsgrid} ${styles.container}`}>
          {currentTestimonials.map((review) => (
            <div key={review.id} className={styles.testimonialcard}>
              <h1 className={styles.reviewH1}>{`"${review.summary}"`}</h1>
              <p className={styles.reviewP}>{review.reviews}</p>
              <div className={styles.authorinfo}>
                <div className={styles.reviewDiv}>
                  <img
                    className={styles.image}
                    src={review.Image || "/default-avatar.jpg"}
                    alt={review.authorname}
                  />
                  <div>
                    <h3>{review.authorname}</h3>
                    <p>{review.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonDiv}>
          <button
            className={`${styles.button} ${styles.leftButton}`}
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            {" "}
            <FaArrowLeft className={`${styles.buttonIcon}  `} />
          </button>
          <button
            className={`${styles.button} ${styles.rightButton}`}
            disabled={currentIndex === totalPages - 1}
            onClick={goToNext}
          >
            {" "}
            <FaArrowRight className={styles.buttonIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
