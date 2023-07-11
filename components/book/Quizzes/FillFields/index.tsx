//== Styles
import styles from './fillFields.module.scss';

const FillFields = () => {
  return (
    <div className={styles.fillFields}>
      <h2>أَكْمِلِ النّاقِصَ!</h2>
      <div className={styles.fields}>
        <div className={styles.field}>
          <h3>هُوَ</h3>
          <ul>
            <li>طار</li>
            <li>حزن</li>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
          </ul>
        </div>
        <div className={styles.field}>
          <h3>هِيَ</h3>
          <ul>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
            <li>طيرت</li>
          </ul>
        </div>
        <div className={styles.field}>
          <h3>هُمْ</h3>
          <ul>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
            <li>ركضوا</li>
            <li>
              <input type="text" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FillFields;