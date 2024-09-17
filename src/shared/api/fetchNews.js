export async function fetchNews() {
    const response = await fetch('/api/news')
    return await response.json()
}
