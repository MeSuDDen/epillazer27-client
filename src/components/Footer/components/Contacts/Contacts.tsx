import Link from 'next/link'

import style from './Contacts.module.scss'

import Button from '@/components/UI/Button/Button'

import { FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'
import {
	FaClock,
	FaHashtag,
	FaInstagram,
	FaPhone,
	FaTelegram,
} from 'react-icons/fa6'
import Title from "@/components/UI/Title/Title";
export default function Contacts() {
	return (
		<div className={"h-full"}>
			<div className={style.ContactsContainer}>
				<h1 className={"text-darkGreen text-2xl font-extrabold pb-6 sm:text-3xl"}>Контакты</h1>
				<div className={style.ContactsInner}>
					<div className={style.left_block}>
						<div className={style.AddressBlock}>
							<div className={style.AddressBlock__title}>
								<FaMapMarkedAlt color='#143D3D' size={14} />
								<span>Адрес:</span>
							</div>
							<Link
								href='/contacts'
								target='_self'
								rel='noopener noreferrer'
								title='Контакты'>
								<span className={"text-sm sm:text-base"}>г. Хабаровск ул.Карла-Маркса 122б (410к.)</span>
							</Link>
						</div>

						<div className={`${style.AddressBlock} ${style.PhoneBlock}`}>
							<div className={style.AddressBlock__title}>
								<FaPhone color='#143D3D' size={14} />
								<span>Телефон:</span>
							</div>
							<Link href={'tel:+79143111754'}>
								<span className={"text-sm sm:text-base"}>+7 (914) 311-17-54</span>
							</Link>
						</div>
					</div>

					<div className={style.right_block}>
						<div className={style.AddressBlock}>
							<div className={style.AddressBlock__title}>
								<FaClock color='#143D3D' size={14} />
								<span>Время работы:</span>
							</div>
							<Link
								href='/contacts'
								target='_self'
								rel='noopener noreferrer'
								title='Контакты'
							>
								<span className={"text-sm sm:text-base"}>
									пн-пт: 7:00 - 20:00
									<br />
									сб-вс: 7:00 - 20:00
								</span>
							</Link>
						</div>

						<div className={`${style.AddressBlock} ${style.PhoneBlock}`}>
							<div className={style.AddressBlock__title}>
								<FaHashtag color='#143D3D' size={14} />
								<span>Социальные сети:</span>
							</div>
							<div className={style.flexSocials}>
								<Link
									href={`https://wa.me/79143111754`}
									target='_blank'
									rel='nofollow'
									title='WhatsApp'
								>
									<FaWhatsapp color='#143D3D' size={20} />
								</Link>
								<Link
									href='https://www.instagram.com/epillazer27/'
									target='_blank'
									title='Instagram'
									rel='nofollow'
								>
									<FaInstagram color='#143D3D' size={20} />
								</Link>
								<Link
									href={`https://t.me/79143111754`}
									target='_blank'
									rel='nofollow'
									title='Telegram'
								>
									<FaTelegram color='#143D3D' size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={style.BtnLine}>
					<Button>Записаться онлайн</Button>
					<div className={style.Line}></div>
				</div>
			</div>
		</div>
	)
}
