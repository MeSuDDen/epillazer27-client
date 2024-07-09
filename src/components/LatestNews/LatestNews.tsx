import Container from '@/components/Layout/Layout'
import Title from '@/components/UI/Title/Title'
import Slider from './components/Slider/Slider'
import ButtonToNews from "./components/ButtonToNews/ButtonToNews";
import style from './LatestNews.module.scss'
import Layout from "@/components/Layout/Layout";

export default function LatestNews() {
    return (
        <div className={style.NewsContainer}>
            <Layout>
                <Title white={false}>Последнии новости</Title>

                <div className={style.NewsInner}>
                    <Slider />
                </div>

                <div className={style.NewsButton}>
                    <ButtonToNews>Смотреть все новости</ButtonToNews>
                </div>
            </Layout>
        </div>
    )
}
