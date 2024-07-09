import style from './AboutUs.module.scss'
import Title from "@/components/UI/Title/Title";
import AboutUsContent from "@/components/AboutUs/components/AboutUsContent";
import AboutUsImage from "@/components/AboutUs/components/AboutUsImage";
import Layout from "@/components/Layout/Layout";

export default function AboutUs() {
    return (
        <section className={style.AboutUsSection}>
            <Layout>
            <div className={style.AboutUsContainer}>
                <Title white={false}>О нас</Title>
                <div className={style.AboutUsContentInner}>
                    {/* Текст */}
                    <AboutUsContent/>
                    {/*  Картинка  */}
                    <AboutUsImage/>
                </div>
            </div>
            </Layout>
        </section>
    )
}