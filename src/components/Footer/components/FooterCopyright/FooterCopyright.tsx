import React from 'react'

import Link from 'next/link'

import style from './FooterCopyright.module.scss'

export default function FooterCopyright() {
	const currentYear = new Date().getFullYear()
	return (
		<div className={style.FooterCopyright}>
			<span>© 2022 - {currentYear}</span>
			<Link href='/privacy-policy'>
				Политика конфиденциальности
			</Link>
		</div>
	)
}
