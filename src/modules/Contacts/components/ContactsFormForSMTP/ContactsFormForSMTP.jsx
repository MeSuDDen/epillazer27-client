'use client'

import React, { useState } from 'react'

import toast from 'react-hot-toast'
import Link from 'next/link'

import Input from '../../../../components/UI/Input/Input'
import Textarea from '../../../../components/UI/Textarea/Textarea'

import { fetchDataContactsForSMTP } from '../../api/fetchDataContactsForSMTP'
import {
	handleEmailChange,
	handleNameChange,
	handlePhoneChange,
	handleTextChange,
} from '../../helpers/handleChange'
import { validateName, validatePhone } from '../../helpers/validateForm'

import style from './ContactsFormForSMTP.module.scss'

export default function ContactsFormForSMTP() {
	//THIS IS: STATES
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')
	const [nameError, setNameError] = useState('')
	const [phoneError, setPhoneError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isConsentChecked, setIsConsentChecked] = useState(true)

	const handleConsentChange = () => {
		setIsConsentChecked(!isConsentChecked)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		//THIS IS: Validation
		const isNameValid = validateName(name, setNameError)
		const isPhoneValid = validatePhone(phone, setPhoneError)

		//THIS IS: Check validation
		if (isNameValid && isPhoneValid) {
			setIsLoading(true)

			try {
				//THIS IS: API Request
				await fetchDataContactsForSMTP(name, phone, email, text, toast)

				//THIS IS: Clear form fields on success
				setName('')
				setPhone('')
				setEmail('')
				setText('')

				setIsLoading(false)
			} catch (error) {
				console.error('Error while submitting form:', error)
				setIsLoading(false)
			}
		}
	}
	return (
		<form method='POST' onSubmit={handleSubmit} className={style.ContactsBox}>
			<div className={style.ContactsFormTitle}>
				Оставить заявку / Задать вопрос
			</div>
			<div className={style.ContactForm}>
				<div>
					<label>
						<Input
							name='name'
							type='text'
							placeholder='Имя *'
							onChange={event => handleNameChange(event, setName, setNameError)}
							value={name}
						/>
					</label>
					{nameError && <span className={style.ErrorText}>{nameError}</span>}
				</div>
				<div>
					<label>
						<Input
							name='phone'
							type='text'
							placeholder='+7 (___)___-__-__'
							onChange={event =>
								handlePhoneChange(event, setPhone, setPhoneError)
							}
							value={phone}
							pattern='[+0-9()- ]*'
						/>
					</label>
					{phoneError && <span className={style.ErrorText}>{phoneError}</span>}
				</div>
				<div>
					<label>
						<Input
							name='email'
							type='email'
							placeholder='E-mail'
							onChange={event => handleEmailChange(event, setEmail)}
							value={email}
							pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
						/>
					</label>
				</div>

				<div>
					<label>
						<Textarea
							placeholder='Текст сообщения'
							name='message'
							type='text'
							onChange={event => handleTextChange(event, setText)}
							value={text}
						/>
					</label>
				</div>

				<div
					style={{
						display: isConsentChecked ? 'block' : 'inline-block',
						opacity: isConsentChecked ? 1 : 0,
						pointerEvents: isConsentChecked ? 'auto' : 'none',
					}}
				>
					{/*<ButtonSubmit isLoading={isLoading} disabled={!isConsentChecked}>*/}
					{/*	Записаться*/}
					{/*</ButtonSubmit>*/}
					<button>Submit</button>
				</div>

				<div>
					<label className={style.checkbox}>
						<input
							name='check'
							type='checkbox'
							checked={isConsentChecked}
							onChange={handleConsentChange}
							className={style.CheckBoxInput}
						/>

						<div className={style.PrivacyPolicy}>
							Нажимая на кнопку ОТПРАВИТЬ, я даю{' '}
							<Link href='/privacy-policy' className={style.PrivacyPolicyBTN}>
								согласие на обработку персональных данных
							</Link>
						</div>
					</label>
				</div>
			</div>
		</form>
	)
}
