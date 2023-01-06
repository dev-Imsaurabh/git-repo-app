export default async function GitApi(language,page){

    const BASE_URL = "https://api.github.com/search/repositories?q=stars:%3E1+language:"

    let res = await fetch(BASE_URL+language+`&page=${page}`)
    let data = await res.json()

    return data.items



}