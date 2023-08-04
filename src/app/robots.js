export default function robots(){
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashboard'
        },
        sitemap: 'https://fizzante.com/sitemap.xml'
    }
}