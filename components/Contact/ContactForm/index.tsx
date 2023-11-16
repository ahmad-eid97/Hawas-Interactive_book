"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//== Styles
import styles from './contactForm.module.scss';

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <Container maxWidth="xl" className={styles.contact}>
      <div className={styles.heading}>
        <h2>
          Any questions? Get in touch!
        </h2>
      </div>
      <div className={styles.contactForm}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <form autoComplete="off">
              <div className={styles.formControl}>
                <input type="text" placeholder="الإسم" required={true} />
              </div>
              <div className={styles.formControl}>
                <input type="email" placeholder="البريد الإلكتروني" required={true} />

              </div>
              <div className={styles.formControl}>
                <input type="text" placeholder="رقم الهاتف" />
              </div>
              <div className={styles.formControl}>
                <textarea className="accountInfo__contact-inputs w-100 rounded" name="message" placeholder="الرسالة" required={true}></textarea>
              </div>
              <button className={styles.btn}>إرسال الرسالة</button>
            </form>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.text}>
              <h3><b>Talk to our team</b></h3>
              <p>For more on: our products, composting, becoming a distribution partner and more, fill out our form. One of our team will be in touch shortly.</p>
              <hr />
              <ul>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>0546826734</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@aniartech.com</span>
                </li>
                <li>
                  <i className="fas fa-map-pin"></i>
                  <span>Kingdom of Saudi Arabia - Dammam - C.R. 2063606079 - C.C. No. 25785</span>
                </li>
              </ul>
              <hr />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default ContactForm;