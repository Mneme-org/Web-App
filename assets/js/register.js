async function register() {
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

    const response = await fetch('https://mneme.spyrosr.xyz/users/pub', options)

    const statusCode = await response.status;
    const statusJSON = await response.json();

    console.log(statusJSON.access_token)

    console.log(statusCode)

    if (statusCode === 422 || statusCode === 405) {
        console.log('Error')
        return
    }

    window.location.replace("../../index.html");
}