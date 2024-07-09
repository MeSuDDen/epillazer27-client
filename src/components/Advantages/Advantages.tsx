import style from './Advantages.module.scss'
import AdvantageItem from "@/components/Advantages/components/AdvantageItem";
import Title from "@/components/UI/Title/Title";
import Layout from "@/components/Layout/Layout";

export default function Advantages() {
    return (
        <section className={style.AdvantagesSection}>
            <Layout>
            <div className={style.AdvantagesContainer}>
                <Title white={true}>Наши преимущества</Title>

                <div className={style.AdvantagesContainerFlex}>
                    <AdvantageItem
                        title={'Мастерство персонала'}
                        description={'Средний стаж работы мастера в нашей студии 5лет. Получайте удовольствие, находясь в опытных руках наших мастеров'}
                    />
                    <AdvantageItem
                        title={'Мастерство персонала'}
                        description={'Средний стаж работы мастера в нашей студии 5лет. Получайте удовольствие, находясь в опытных руках наших мастеров'}
                    />
                    <AdvantageItem
                        title={'Мастерство персонала'}
                        description={'Средний стаж работы мастера в нашей студии 5лет. Получайте удовольствие, находясь в опытных руках наших мастеров'}
                    />
                    <AdvantageItem
                        title={'Мастерство персонала'}
                        description={'Средний стаж работы мастера в нашей студии 5лет. Получайте удовольствие, находясь в опытных руках наших мастеров'}
                    />
                </div>
            </div>
            </Layout>
        </section>
    )
}