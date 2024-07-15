// THIS IS: Навигация
type NavigationT = {
    value: string
    href: string
    title: string
}

export const navigation: NavigationT[] = [
    { value: 'Главная', href: '/', title: 'Главную страницу' },
    { value: 'О нас', href: '/about', title: 'О нас' },
    { value: 'Услуги', href: '/services', title: 'Наши услуги' },
    { value: 'Прайс', href: '/price', title: 'Цены на услуги' },
    { value: 'Новости', href: '/news', title: 'Новости и публикации' },
    { value: 'Контакты', href: '/contacts', title: 'Свяжитесь с нами' },
]