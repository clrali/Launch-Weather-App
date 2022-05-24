function GetNews() {
    const newsapikey = 'seobEhXX21AoDAsvTe1XcSq8uWwQxBk6'
    let url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${newsapikey}`
    let headlines = document.getElementById("headlines")

    console.log("entered")
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.results.slice(3,8).map(article => {
      
            let a = document.createElement('a')
            a.setAttribute("href", article.short_url)
            a.setAttribute("target", "_blank")
            a.innerHTML = article.title

            headlines.appendChild(a)

            let image = document.createElement("img")
            image.setAttribute("src", article.multimedia[0].url)
            image.setAttribute("alt", article.multimedia[0].caption)
            image.setAttribute("height", "350")
            image.setAttribute("width", "500")

            headlines.appendChild(image)

            let p = document.createElement('p')
            p.innerHTML = article.abstract

            headlines.appendChild(p)
        })
    })
}

export default GetNews