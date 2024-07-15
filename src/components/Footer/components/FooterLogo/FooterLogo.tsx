'use client'
import Image from 'next/image'

import ImgLogo from '../../../../../public/logo.webp'
import style from './FooterLogo.module.scss'

export default function FooterLogo() {
	return (
		<div className={style.FooterLogo}>
			<Image src={ImgLogo} alt='Epillazer' width={50} height={50}/>

			<span className={style.FooterLogoText}>
				Студия лазерной
				<br />
				эпиляции в Хабаровске
			</span>
		</div>
	)
}
