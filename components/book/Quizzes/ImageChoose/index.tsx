//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from './imageChoose.module.scss';

const ImageChoose = () => {
  const { items, choosedAnswer, setChoosedAnswer } = useLogic();

  return (
    <div className={styles.imageChoose}>
      <h2>ضَعْ مُرَبَّعًا حَوْلَ الصُّورَةِ الّتي تُعَبِّرُ عَنِ الدَّرْسِ!</h2>
      <div className={styles.choices}>
        {items.map(item => (
          <div key={item.id}>
            <img src={item.image} alt="choice" loading='lazy' key={item.id} onClick={() => setChoosedAnswer(item.id)} className={choosedAnswer === item.id ? styles.choosed : ''} />
            <p>
              {!item.correct && choosedAnswer === item.id && <i className={`fa-duotone fa-triangle-exclamation ${styles.wrong}`}></i>}
              {item.correct && item.id === choosedAnswer && <i className={`fa-duotone fa-circle-check ${styles.correct}`}></i>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageChoose