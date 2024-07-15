import React from "react";

type TitleProps = {
    children: React.ReactNode
    white: boolean
}

export default function Title({ children, white }: TitleProps) {
    return (
        <div className={'flex items-center justify-center flex-col gap-4 pb-6'}>
            <h1 className={white ? 'text-white text-xl font-extrabold sm:text-2xl' : 'text-darkGreen text-xl font-extrabold sm:text-2xl'}>{children}</h1>
            <div className={white ? 'w-20 sm:w-28 bg-white h-1' : 'w-20 sm:w-28 bg-darkGreen h-1'}></div>
        </div>
    )
}