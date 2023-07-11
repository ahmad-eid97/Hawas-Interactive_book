//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './imageTyping.module.scss';

const ImageTyping = () => {
  const { items } = useLogic();

  return (
    <div className={styles.continueTyping}>
      <h2>أَكْمِلْ حَسْبَ الْمِثالِ الْوَهْمِيِّ!</h2>
      <div className={styles.wrapper}>
        {items.map(item => (
          <div className={styles.item} key={item.id}>
            <i className="fa-duotone fa-star"></i>
            <span>{item.text}:</span>
            <input type="text" />
            <img src={item.image} alt="image" loading='lazy' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageTyping;