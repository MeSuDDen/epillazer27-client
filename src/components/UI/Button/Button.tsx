'use client'

import { useState, MouseEventHandler, ReactNode } from 'react'
import { Jura } from 'next/font/google'

import style from './Button.module.scss'

const jura = Jura({ subsets: ['latin'], display: 'swap', weight: '400'})

type ButtonProps = {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	padding?: string
	background?: string
	hoverBackground?: string
	border?: boolean
	borderRadius?: string
	onMouseEnter?: MouseEventHandler<HTMLButtonElement>
	onMouseLeave?: MouseEventHandler<HTMLButtonElement>
	onMouseDown?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
								   children,
								   onClick,
								   disabled,
								   padding,
								   background,
								   hoverBackground,
								   border,
								   borderRadius,
								   onMouseEnter,
								   onMouseLeave,
								   onMouseDown,
							   }: ButtonProps) {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (event) => {
		setIsHovered(true)
		if (onMouseEnter) {
			onMouseEnter(event)
		}
	}

	const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = (event) => {
		setIsHovered(false)
		if (onMouseLeave) {
			onMouseLeave(event)
		}
	}

	const handleMouseDown: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation()
		if (onMouseDown) {
			onMouseDown(event)
		}
	}

	const buttonStyle: React.CSSProperties = {
		padding: padding || '16px 40px',
		background: isHovered
			? hoverBackground || '#c29870'
			: background || '#143D3D',
		border: border ? '1px solid black' : 'none',
		borderRadius: borderRadius || '0px',
	}

	return (
		<button
			className={`${style.button} ${jura.className}`}
			onClick={onClick}
			disabled={disabled}
			style={buttonStyle}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
		>
			{children}
		</button>
	)
}
