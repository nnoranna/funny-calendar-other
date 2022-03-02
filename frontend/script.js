function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

//Components
const menuButton = _ => {
    return `
    <button id="menuButton">
        <svg width="40" height="40">
            <rect width="20" height="2" />
            <rect width="20" height="2" />
            <rect width="20" height="2" />
        </svg>
        <span>button</span>
    </button>
    `;
}

const header = (logo, button) => {
    return `
    <header>
        <a id = "logo">${logo}</a>
        ${button()}
    </header>
    `;
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div class="card">
        <h1>${name}</h1>
        <h3>${short}</h3>
        <p>${population}</p>
        <img src="${flag}"></img>
        <p>${continent}</p>
    </div>
    `
}


const loadEvent = async _ => {
    //get data
    /*await async művelet, hogy megvárjuk a letöltődést; azért kell kétszer, hogy megvárjuk a fetch-et, aztán json-ná formázás*/
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    //console.log(countryArr[0]);

    //Process data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })
    console.log(countries);

    //Render components
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", 
    header("Countries", menuButton));
    
    let cards = "";
    for (const country of countries) {
        cards += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }
    rootElement.insertAdjacentHTML("beforeend", cards);

    const getMenuButton = document.getElementById("menuButton");
    getMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked")
    });
}

window.addEventListener("load", loadEvent)    