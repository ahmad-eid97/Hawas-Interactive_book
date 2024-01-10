"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//= Api 
import { getAllSettings, sendContactForm } from '@/API/pages';
//== Styles
import styles from './contactForm.module.scss';
import toast from 'react-hot-toast';

interface ContactFormProps {
  data: Awaited<ReturnType<typeof getAllSettings>> | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  async function handleSendContactForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const btn = event.currentTarget;
    btn.setAttribute('disabled', 'disabled');

    const name = document.querySelector<HTMLInputElement>('#name')!;
    const email = document.querySelector<HTMLInputElement>('#email')!;
    const phone = document.querySelector<HTMLInputElement>('#phone')!;
    const message = document.querySelector<HTMLTextAreaElement>('#message')!;

    const response = await sendContactForm({
      name: name.value,
      email: email.value,
      phone_number: phone.value,
      form_title: message.value,
      form_subtitle: message.value,
    });

    if (response && response.success) {
      toast.success('شكراً لتواصلك معنا, تم إرسال رسالتك بنجاح');
      name.value = ''
      phone.value = ''
      email.value = ''
      message.value = ''
    }

    btn.removeAttribute('disabled');
  }

  return (
    <Container maxWidth="xl" className={styles.contact}>
      <div className={styles.heading}>
        <h2>
          ابقى على تواصل!
        </h2>
      </div>
      <div className={styles.contactForm}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <form autoComplete="off">
              <div className={styles.formControl}>
                <input type="text" placeholder="الإسم" required={true} id="name" />
              </div>
              <div className={styles.formControl}>
                <input type="email" placeholder="البريد الإلكتروني" required={true} id="email" />
              </div>
              <div className={styles.formControl}>
                <input type="text" placeholder="رقم الهاتف" id="phone" />
              </div>
              <div className={styles.formControl}>
                <textarea className="accountInfo__contact-inputs w-100 rounded" name="message" placeholder="الرسالة" required={true} id="message"></textarea>
              </div>
              <button className={styles.btn} onClick={handleSendContactForm}>إرسال الرسالة</button>
            </form>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={styles.text}>
              <h3><b>تحدث إلى فريقنا</b></h3>
              <p>اذا كان لديك اي استفسار او طلب يمكنلك ملئ النموذج بالاسفل, شكراً لتواصلك معنا</p>
              <hr />
              <ul>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>{data?.contact_phone}</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>{data?.email}</span>
                </li>
                <li>
                  <i className="fas fa-map-pin"></i>
                  <span>{data?.contact_address}</span>
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