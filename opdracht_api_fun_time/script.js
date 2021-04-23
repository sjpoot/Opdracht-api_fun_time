const getJoke = document.getElementById("get-joke");
const printJoke = document.getElementById("print-joke");

async function getDadJoke() {
    return await fetchDadJoke();
};

async function getRandomJoke() {
    let data = await getDadJoke();
    try {
        printJoke.innerHTML = data.joke;
    } catch (error) {
        console.log("Yep, nothing here!");
    }
}

getJoke.addEventListener("click", getRandomJoke);