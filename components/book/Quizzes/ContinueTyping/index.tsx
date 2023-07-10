//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './continueTyping.module.scss';

const ContinueTyping = () => {
  const { items } = useLogic();

  return (
    <div className={styles.continueTyping}>
      <h2>أَكْمِلْ حَسْبَ الْمِثالِ الْوَهْمِيِّ!</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <i className="fa-duotone fa-pencil"></i>
          <span>بيت لي:</span>
          <input type="text" placeholder='بيتي' />
        </div>
        {items.map(item => (
          <div className={styles.item} key={item.id}>
            <i className="fa-duotone fa-pencil"></i>
            <span>{item.text}:</span>
            <input type="text" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContinueTyping;