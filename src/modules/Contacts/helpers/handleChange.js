export const handleNameChange = (event, setName, setNameError) => {
	setName(event.target.value)
	setNameError('') // Сброс ошибки при изменении значения
}

export const handleEmailChange = (event, setEmail) => {
	setEmail(event.target.value)
}
export const handleTextChange = (event, setText) => {
	setText(event.target.value)
}

export const handlePhoneChange = (event, setPhone, setPhoneError) => {
	const inputValue = event.target.value
	const sanitizedValue = inputValue.replace(/[^+0-9()-]/g, '')

	setPhone(sanitizedValue)
	setPhoneError('') // Сброс ошибки при изменении значения
}
