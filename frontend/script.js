const form = () => {
        return `
        <form>
            <div class="input1">
                <input type="text" />
            </div>
            <div class="input2">
                <input type="text" />
            </div>
            <div class="input3">
                <input type="text" />
            </div>
            <button>Send</button>
        </form>
        `;
    };

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", form())

    const inputList = document.querySelectorAll("input")
    for (const input of inputList) {
        input.addEventListener("input", function(e) {
            console.log(e.target.value);
        })
    }
}
window.addEventListener("load", loadEvent);