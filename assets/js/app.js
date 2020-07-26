$(document).ready(async function() {
    let accessToken = "Bearer " + localStorage.getItem("accessToken");

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    }

    const response = await fetch('https://mneme.spyrosr.xyz/journals', options)

    const statusCode = await response.status;
    const statusJSON = await response.json();

    for (const [key, value] of Object.entries(statusJSON)) {
        console.log(key, value["name"]);
        var $btn = $("<button>", {"id": value["name"], "class": "btn journals_entries-btn"});
        $btn.text(value["name"])
        $btn.click(function() {
            load_entries();
          });
        $("#load-journals").append($btn);
    }
  });

async function tags() {
    
}

async function add_entry() {
    let entryTitle = document.getElementById("entry-title").value;
    let entryDate = document.getElementById("entry-date").value;
    let entryContent = document.getElementById("entry-content").value;
    let accessToken = localStorage.getItem("accessToken");
}

async function load_entries() {
    console.log("Clicked!")
}

async function add_journal() {
    let accessToken = "Bearer " + localStorage.getItem("accessToken");
    let journalTitle = document.getElementById("journal-title").value;

    let data = { name: journalTitle };

    console.log(data)

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
    }

    const response = await fetch('https://mneme.spyrosr.xyz/journals', options)

    const statusCode = await response.status;
    const statusJSON = await response.json();

    console.log(statusJSON.access_token)

    console.log(statusCode)

    if (statusCode === 201) {
        window.alert("New journal has been created!")
        return
    }

    console.log('Error')
    window.alert("An error has occurred!")
    return
}
