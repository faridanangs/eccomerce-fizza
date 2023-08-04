export default function robots(){
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/dashboard'
        },
        sitemap: 'https://fizzante.vercel.app/sitemap.xml'
    }
}
