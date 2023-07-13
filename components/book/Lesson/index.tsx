//== Styles
import styles from './lesson.module.scss';

const Lesson = () => {
  return (
    <div className={styles.lesson}>
      <div className={styles.inside}>
        <h1>بالونُ عادِلٍ</h1>
        <p>عِنْدَ عادِلٍ بالونٌ جَديدٌ.</p>
        <p>طَيَّرَ عادِلٌ بالونَهُ لِيَجْرِيَ وَراءَهُ.</p>
        <p>رَكَضَ عادِلٌ وَراءَ الْبالونِ بِسُرْعَةٍ.</p>
        <p>اَلْبالونُ طارَ بَعيدًا.</p>
        <p>حَزِنَ عادِلٌ عَلى الْبالونِ.</p>
        <div className={styles.image}>
          <img src="/images/lesson/boy3.png" alt="lesson_image" />
        </div>
      </div>
    </div>
  )
}

export default Lesson