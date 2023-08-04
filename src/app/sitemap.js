export default function sitemap() {
    const baseUrl = 'https://fizzante.com'
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/menu`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/orders`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/login`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/cart`,
        lastModified: new Date(),
      },
    ]
  }