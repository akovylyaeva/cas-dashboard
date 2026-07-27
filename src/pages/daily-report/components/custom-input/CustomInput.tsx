import './CustomInput.scss'

import clsx from 'clsx'

export const CustomInput = ({
  label,
  type,
  value,
  onChange,
  isError = false,
}: {
  label: string,
  type: 'number' | 'time' | 'date' | 'string',
  value: string | number,
  onChange: (event: any) => unknown,
  isError?: boolean,
}) => {
  return (
    <div className="custom-input">
      <span className="custom-input__label">
        {label}
      </span>

      <input
        className={clsx('custom-input__textarea', {
          'error': isError,
        })}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
