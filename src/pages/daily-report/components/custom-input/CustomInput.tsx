import './CustomInput.scss'

export const CustomInput = ({
  label,
  type,
  value,
  onChange,
}: {
  label: string,
  type: 'number' | 'time' | 'date',
  value: string | number,
  onChange: (event: any) => unknown,
}) => {
  return (
    <div className="custom-input">
      <span className="custom-input__label">
        {label}
      </span>

      <input
        className="custom-input__textarea"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
