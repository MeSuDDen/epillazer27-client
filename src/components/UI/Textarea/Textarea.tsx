import './Textarea.module.scss'

type TextareaProps = {
	name: string
	placeholder: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea({ name, placeholder, onChange }: TextareaProps) {
	return (
		<textarea
			className='sendEmail'
			name={name}
			placeholder={placeholder}
			onChange={onChange}
		></textarea>
	)
}
