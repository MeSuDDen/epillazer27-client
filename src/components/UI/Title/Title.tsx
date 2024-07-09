import React from "react";

type TitleProps = {
    children: React.ReactNode
    white: boolean
}

export default function Title({ children, white }: TitleProps) {
    return (
        <div className={'flex items-center justify-center flex-col gap-4 pb-6'}>
            <h1 className={white ? 'text-white text-2xl font-extrabold' : 'text-darkGreen text-2xl font-extrabold'}>{children}</h1>
            <div className={white ? 'w-1/4 bg-white h-1' : 'w-1/4 bg-darkGreen h-1'}></div>
        </div>
    )
}