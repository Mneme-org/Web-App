async function token() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = { username: username, password: password };

    const response = await fetch('https://mneme.spyrosr.xyz/login', {
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

async function add_entry() {
    let entryTitle = document.getElementById("entry-title").value;
    let entryDate = document.getElementById("entry-date").value;
    let entryContent = document.getElementById("entry-content").value

    console.log(document.cookie)
}