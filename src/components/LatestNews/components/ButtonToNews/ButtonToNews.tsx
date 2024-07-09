'use client'

import {PropsWithChildren} from "react";
import Button from '@/components/UI/Button/Button'
import { useRouter } from 'next/navigation'


export default function ButtonToNews({ children } : PropsWithChildren) {
    const router = useRouter()
    const handleClick = () => router.push('/news')

    return (
        <Button onClick={handleClick}>{children}</Button>
    )
}