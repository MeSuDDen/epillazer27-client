import React from 'react';
import style from "@/components/Advantages/Advantages.module.scss";

type AdvantageItemProps = {
   title: string
   description: string
}

export default function AdvantageItem({ title, description } : AdvantageItemProps) {
    return (
        <div className={style.AdvantagesContainerInner}>
            <div className={style.AdvantagesDesignLine}></div>
            <div className={style.AdvantagesContent}>
                <h2 className={style.AdvantagesContainerTitle}>{title}</h2>
                <p className={style.AdvantagesContainerDescription}>{description}</p>
            </div>
        </div>
    )
}