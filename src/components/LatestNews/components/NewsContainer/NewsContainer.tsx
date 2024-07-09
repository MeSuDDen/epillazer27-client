import React from 'react'

import style from './NewsContainer.module.scss'

import { FaArrowRightLong } from 'react-icons/fa6'
import { IoLinkSharp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import NewsImg from '@/assets/images/new.jpg'

type NewsContainerProps = {
	date_published: string
	title: string
	article_text: string
	link: string
}

export default function NewsContainer({
										  date_published,
										  title,
										  article_text,
										  link,
									  }: NewsContainerProps) {
	const truncateText = (text: string, maxLength: number): string => {
		if (text.length <= maxLength) {
			return text
		} else {
			return text.slice(0, maxLength) + '...'
		}
	}

	const handleClick = (): void => {
		window.scrollTo(0, 0)
	}

	return (
		<article className={style.NewsContainer}>
			<figure className={style.Image}>
				<Image src={NewsImg} alt='' width={100} />
				<figcaption className={style.Date}>{date_published}</figcaption>
				<p className={style.PostHover}>
					<Link href={`/news/${link}`} title='Подробнее' onClick={handleClick}>
						<IoLinkSharp color='white' size={24} />
					</Link>
				</p>
			</figure>

			<Link
				className={style.NewsTitle}
				href={`/news/${link}`}
				title={title}
				onClick={handleClick}
			>
				<h2>{title}</h2>
			</Link>

			<p className={style.TextNews}>{truncateText(article_text, 110)}</p>
			<Link
				className={style.ReadMore}
				title='Читать далее'
				href={`/news/${link}`}
				onClick={handleClick}
			>
				Читать далее
				<FaArrowRightLong />
			</Link>
		</article>
	)
}
