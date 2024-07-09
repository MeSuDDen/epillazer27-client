'use client'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'

// THIS IS: API
// import { fetchDataLatestNews } from '../../api/fetchDataLatestNews'
// THIS IS: Форматирование даты
import DateValidator from '../../helpers/DateValidator'

// THIS IS: Настройки SwiperSlider
import getSwiperSettings from '../../helpers/SwiperSettings'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Loader from '../Loader/Loader'
import NewsContainer from '../NewsContainer/NewsContainer'
import style from './Slider.module.scss'

type NewsItem = {
	id: string
	title: string
	date_published: string
	article_text: string
	link: string
}

export default function Slider() {
	const [data, setData] = useState<NewsItem[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const swiperRef = useRef<SwiperClass | null>(null)
	const prevRef = useRef<HTMLButtonElement | null>(null)
	const nextRef = useRef<HTMLButtonElement | null>(null)

	// THIS IS: Загрузка данных с сервера
	useEffect(() => {
		const fetchData = async () => {
			try {
				// await fetchDataLatestNews(setData, setIsLoading)
				// Example data
				const exampleData: NewsItem[] = [
					{ id: '1', title: 'Title 1', date_published: '2023-06-01', article_text: 'Text 1', link: '#' },
					{ id: '2', title: 'Title 2', date_published: '2023-06-02', article_text: 'Text 2', link: '#' },
				]
				setData(exampleData)
				setIsLoading(false)
				if (swiperRef.current) {
					swiperRef.current.slideTo(0)
				}
			} catch (error) {
				console.error('Failed to fetch data:', error)
			}
		}

		fetchData()
	}, [])

	// THIS IS: Функционал кнопок для слайдера
	useEffect(() => {
		const handlePrevClick = () => swiperRef.current?.slidePrev()
		const handleNextClick = () => swiperRef.current?.slideNext()

		const prevButton = prevRef.current
		const nextButton = nextRef.current

		prevButton?.addEventListener('click', handlePrevClick)
		nextButton?.addEventListener('click', handleNextClick)

		return () => {
			prevButton?.removeEventListener('click', handlePrevClick)
			nextButton?.removeEventListener('click', handleNextClick)
		}
	}, [])

	// THIS IS: Получаем настройки слайдера
	const swiperSettings = getSwiperSettings(data, swiperRef, prevRef, nextRef)

	return (
		<>
			<Swiper {...swiperSettings}>
				{isLoading
					? Array.from({ length: 4 }, (_, index) => (
						<SwiperSlide key={index}>
							<Loader />
						</SwiperSlide>
					))
					: data.map((element) => {
						const formattedDate = DateValidator.DateValidator(element.date_published)

						return (
							<SwiperSlide key={element.id}>
								<NewsContainer
									title={element.title}
									date_published={formattedDate}
									article_text={element.article_text}
									link={element.link}
								/>
							</SwiperSlide>
						)
					})}
			</Swiper>
			<button ref={prevRef} className={style.ButtonPrev}>
				<IoIosArrowBack color='white' />
			</button>
			<button ref={nextRef} className={style.ButtonNext}>
				<IoIosArrowForward color='white' />
			</button>
		</>
	)
}
