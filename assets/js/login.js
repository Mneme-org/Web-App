async function token() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = { username: username, password: password };

    const response = await fetch('http://127.0.0.1:8000/token', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    const statusCode = await response.status;

    console.log(statusCode)

    if (statusCode === 422 || statusCode === 405) {
        console.log('Error')
        window.location.replace('/html/home.html')
    }
}