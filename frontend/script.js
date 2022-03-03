const formHTML = () => {
        return `
        <form>
            <input id="input1" name="input1" type="text" />
            <input id="input2" name="input2" type="text" />
            <input id="input3" name="input3" type="text" />
            <select name="animals" id="animals">
                <option value="both5555">Both</option>
                <option value="cats5555">Cats</option>
                <option value="dogs5555">Dogs</option>
            </select>
            <button>Send</button>
        </form>
        `;
    };

async function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")
    
    //Hozzáadjuk a root-hoz a formunkat
    rootElement.insertAdjacentHTML("beforeend", formHTML())

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input")
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(e) {
            console.log(e.target.value);
        })
    })

    form.querySelector("select").addEventListener("input", function(e) {
        console.log(e.target.value)
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        console.log(e.target);
    })



    /* for (const input of inputList) {
        input.addEventListener("input", function(e) {
            console.log(e.target.value);
        })
    } */

    const nasaApiKey = "hFbGBUFyBfuZvXagMIQz2RK9h5m7ZcKtZSrIES23"
    
    const requestedDate = "2020-02-20"
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`)


    //console.log(apod);

    //
    const apodJson = await apod.json()
    //console.log(apodJson.explanation);

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`).then(
        function (apodResponse) {
            console.log(apodResponse);
            apodResponse.json().then(
                function(apodResponseJson) {
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )
}
window.addEventListener("load", loadEvent);