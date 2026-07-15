'use client';
import { CSSProperties, useRef, useState } from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './input.module.scss';

type Props = {
  type?: string
  icon?: string
  label?: string
  placeholder?: string
  name: string
  value?: string
  tooltip?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withCaptcha?: boolean;
  style?: CSSProperties;
}

function Input({ type, icon, tooltip, style, label, placeholder, disabled, name, value, withCaptcha, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={cls.formGroup} style={style || {}}>
      {label && <label htmlFor={`input-${name}`}>{label}</label>}
      {(tooltip && showTooltip) && <span className={`${cls.tooltip} ${cls.ar}`}>{tooltip}</span>}
      <div className={cls.field}>
        {icon && <div className={cls.icon} onClick={() => inputRef.current?.focus()}>{<Icon icon={icon} />}</div>}
        {tooltip && <div className={`${cls.tooltip_icon} ${cls.ar}`} onClick={() => setShowTooltip(p => !p)}>{<Icon icon="mingcute:information-line" />}</div>}
        <input type={type || "text"} id={`input-${name}`} name={name} placeholder={placeholder || ""} ref={inputRef} value={value || ''} onChange={onChange} disabled={disabled} />
      </div>
    </div>
  )
}

export default Input
