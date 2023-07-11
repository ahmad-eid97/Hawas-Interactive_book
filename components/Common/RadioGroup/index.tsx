//== Styles
import styles from './radioGroup.module.scss';
//== Component Interface
interface CProps {
  checked: boolean
  name: string
}

const RadioGroup = ({ name, checked }: CProps) => {
  return (
    <div className={styles.radio_input}>
      <div className={styles.field}>
        <input name={name} type="radio" className={styles.input} checked={checked} />
      </div>
    </div>
  )
}

export default RadioGroup;