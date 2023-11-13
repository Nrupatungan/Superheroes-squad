const body = document.body

const populate = async () => {
    const request = new Request('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    
    const response = await fetch(request)
    const superheroesText = await response.text()

    const superheroes = JSON.parse(superheroesText)

    console.log(superheroes)

    populateHeaders(superheroes)
    populateHeroes(superheroes)
}

function populateHeaders(obj){
    const header = body.querySelector('header')
    const h1 = document.createElement('h1')
    const para = document.createElement('p')

    h1.textContent = obj.squadName;
    para.textContent = `Hometown : ${obj.homeTown} // Formed : ${obj.formed}`

    header.append(h1)
    header.append(para)
}

function populateHeroes(obj){
    const section = body.querySelector('section')
    const heroes = obj.members;

    for(const hero of heroes){
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const secretIdentity = document.createElement('p')
        const age = document.createElement('p')
        const powers = document.createElement('p')
        const powersList = document.createElement('ul')
        
        h2.textContent = hero.name
        secretIdentity.textContent = `Secret Identity: ${hero.secretIdentity}`
        age.textContent = `Age: ${hero.age}`
        powers.textContent = "Superpowers: "

        const Superpowers = hero.powers
        for(const power of Superpowers){
            const li = document.createElement('li')
            li.textContent = power
            powersList.append(li)
        }
        article.append(h2)
        article.append(secretIdentity)
        article.append(age)
        article.append(powers)
        article.append(powersList)

        section.append(article)
    }
}

populate();