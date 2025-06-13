async function getUserCountry() {
    const username = document.getElementById("usernameGet").value;

    if (!username) {
        alert("Please enter a username.");
    }

    const endpoint = new URL(`http://localhost:3000/userrs/${ username }/country`);

    console.log(endpoint);

    //adding token to the endpoint
    endpoint.searchParams.set("token", "YOUR_TOKEN_HERE");

    //adding a header if api mentioned
    const response = await fetch (endpoint, {
        headers: {
            "Authorization": "YOUR_TOKEN_HERE"
        }
    });

    if (response.status===404) {
        alert("Username not found.");
    }

    const data = await response.json();

    alert(`Country: ${data.country}\nCapital: ${data.capital || "N/A"}\nInternet Code: ${data.internetCode})`);
}


