import './Input.scss'

type InputProps = {
	type?: string
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	name?: string
	id?:string
	autoComplete?: 'on' | 'off' | 'name' | 'email' | 'username' | 'new-password' | 'current-password'
}

export default function Input({
	type,
	placeholder,
	value,
	onChange,
	name,
	id,
	autoComplete,
} : InputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
			id={id}
			autoComplete={autoComplete}
		/>
	)
}
