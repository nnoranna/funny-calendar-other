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

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")

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
}
window.addEventListener("load", loadEvent);