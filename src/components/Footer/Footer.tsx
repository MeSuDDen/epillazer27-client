import Contacts from "./components/Contacts/Contacts"
import FooterLogo from "./components/FooterLogo/FooterLogo"
import FooterNav from "./components/FooterNav/FooterNav"
import FooterCopyright from "./components/FooterCopyright/FooterCopyright"
import MapContainer from "./components/MapComponent/Map"

import style from './Footer.module.scss'
import Layout from "@/components/Layout/Layout"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Layout>
                <div className={style.FooterContainer}>
                    <Contacts/>
                    <MapContainer height='400px'/>
                </div>
                <div className={style.FooterBot}>
                    <FooterLogo/>
                    <FooterNav/>
                    <FooterCopyright/>
                </div>
            </Layout>
        </footer>
    )
}
