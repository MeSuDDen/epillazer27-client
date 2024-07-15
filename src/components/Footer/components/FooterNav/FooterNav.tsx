'use client'
import React from 'react'

import Link from 'next/link'

import { navigation } from '@/data/navigation'
import style from './FooterNav.module.scss'

export default function FooterNav() {
	return (
		<div className={style.FooterNav}>
			{navigation.map((item, index) => (
				<Link
					href={item.href}
					title={item.title}
					key={index}
				>
					{item.value}
				</Link>
			))}
		</div>
	)
}
