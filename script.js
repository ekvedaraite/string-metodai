// 1 UŽDUOTIS
function showName() {
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value

    if(!Number.isInteger(parseFloat(number))) {
        alert("Įveskite sveiką skaičių")
        return
    }

    const result = document.getElementById("result")
    result.innerHTML = ""

    for (var i = 0; i < number; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = name
        result.appendChild(h1)
    }
}

// 2 UŽDUOTIS

function nameLength() {
    const nameInput = document.getElementById("firstName")
    const name = nameInput.value.trim()

    if(name === "") {
        alert("Įveskite vardą")
        return
    }

    const length = name.length
    alert(`Vardo ilgis: ${length}`)
}

// 3 UŽDUOTIS
function splitFullName() {
    const fullNameInput = document.getElementById("fullName")
    const fullName = fullNameInput.value.trim()

    if (fullName === "") {
        alert("Įvesk vardą ir pavardę")
        return
    }

    const nameParts = fullName.split(" ")

    if (nameParts.length < 2 || nameParts[0] === "" || nameParts.slice(1).some(part => part === "")) {
        alert("Įveskite ir vardą, ir pavardę")
        return
    }

    const name = nameParts[0]
    const lastName = nameParts.slice(1).join(" ")

    const answerDiv = document.getElementById("answer")
    answerDiv.innerHTML = ""

    const h1Name = document.createElement("h1")
    h1Name.textContent = `Vardas: ${name}`
    answerDiv.appendChild(h1Name)
    
    const h1LastName = document.createElement("h1")
    h1LastName.textContent = `Pavardė: ${lastName}`
    answerDiv.appendChild(h1LastName)
}