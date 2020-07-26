async function token() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = { username: username, password: password };

    console.log(data)

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = await fetch('https://mneme.spyrosr.xyz/login', options) // TODO: Make this a variable value

    const statusCode = await response.status;
    const statusJSON = await response.json();

    console.log(statusJSON.access_token)

    console.log(statusCode)

    if (statusCode === 200) {
        localStorage.setItem("accessToken", statusJSON.access_token);
        window.location.replace("/html/home.html");
        return
    }

    console.log('Error')
    window.alert("Wrong Password!")
    return
}