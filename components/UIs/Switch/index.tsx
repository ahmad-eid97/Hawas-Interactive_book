//= Styles
import cls from './switch.module.scss';

interface Props {
  name?: string
  switched: boolean
  setSwitched: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  dark?: boolean
}

function Switch({ name, switched, setSwitched, disabled, dark }: Props) {
  return (
    <div className={`${cls.switch} ${switched ? cls.switched : ''} ${disabled ? cls.disabled : ''} ${dark ? cls.dark : ''}`}>
      <input type="checkbox" name={name} disabled={disabled} checked={switched} onChange={(e) => setSwitched(e)} />
      <div className={cls.trigger}></div>
    </div>
  )
}

export default Switch;
