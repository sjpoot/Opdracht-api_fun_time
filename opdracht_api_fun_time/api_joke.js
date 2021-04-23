async function fetchDadJoke() {

    const apiUrl = "https://icanhazdadjoke.com";
    
    try {
        const res = await fetch(apiUrl, {
            method: "GET",

            headers: {
                "Accept": "application/json"
            }
        })        
        return await res.json();
    } catch (error) {
        return ("Something smells very fishy indeed and that's no joke!");
    }
}