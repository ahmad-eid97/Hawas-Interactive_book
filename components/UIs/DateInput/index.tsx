'use client';
//= Styles
import cls from './dateInput.module.scss';

type Props = {
  label?: string
  value: string
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  locale: string
}

function DateInput({ label, value, onChange, name, locale }: Props) {
  return (
    <div className={cls.formGroup}>
      {label && <label htmlFor={`datepicker-${name}`}>{label}</label>}
      <div className={`${cls.field} ${locale === 'ar' ? cls.ar : ''}`}>
        <input type="date" name={name || ''} value={value} onChange={onChange} id={`datepicker-${name}`} />
      </div>
    </div>
  )
}

export default DateInput;
