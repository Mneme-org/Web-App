function token() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    fetch('http://example.com/movies.json'), {
        method: 'post',
        body: JSON.stringify(opts)
    }
        .then(response => response.json())
        .then(data => console.log(data));
}