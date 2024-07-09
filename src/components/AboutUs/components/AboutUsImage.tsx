import Image from 'next/image'
import AboutUsBanner from '@/assets/images/aboutusimage.webp'
export default function AboutUsImage() {
    return (
        <Image
            src={AboutUsBanner}
            alt="About UsImage"
            sizes={'100vw'}
            placeholder={'blur'}
        />
    )
}