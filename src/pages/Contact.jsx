import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.ContactSection}>
      <div className={styles.ContactHero}>
        {/* Two-column grid container */}
        <div className={styles.contactGrid}>
          {/* Left column - Contact info */}
          <div className={styles.contactInfo}>
            <h2>Contact</h2>
            <img src="/images/contactImage.png" alt="contact image" />

            <p>
              Send us a message using this form or email us at Bookfinder.io
            </p>

            <p>&copy; 2025 Bookfinder.io</p>
            <a href="#">Terms of services · Privacy policy</a>
          </div>

          {/* Right column - Form */}
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email" required />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
