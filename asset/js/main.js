let btnChap = document.querySelector("button")
let myTable = document.querySelector("#table")

var person=[
    {name:"Samir",surname:"Manafov",age:"21"},
    {name:"Aydin",surname:"Eliyev",age:"22"},
    {name:"Eli",surname:"Memmedli",age:"18"},   
    {name:"Mahir",surname:"Kazimov",age:"28"}
]
let headers = ["Name", "Surname","Age"]
btnChap.addEventListener("click", () => {
    let table= document.createElement("table")
    let headerRow = document.createElement("thead")
    headers.forEach(headerText => {
        let header = document.createElement("td")
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    });

    table.appendChild(headerRow)

    person.forEach(emp => {
        let row = document.createElement("tr")

        Object.values(emp).forEach(text => {
            let cell = document.createElement("td")
            let textNode = document.createTextNode(text)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })

        table.appendChild(row)
    })

    myTable.appendChild(table)
})
