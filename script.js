let table = document.getElementById("myTable");
function createTable() {
    let r = prompt("Input number of rows");
    r = parseInt(r);
    let c = prompt("Input number of columns");
    c = parseInt(c);
    for (let i = 0; i < r; i++ ){
        let tr = document.createElement("tr");
        for ( let j = 0; j  < c; j++){
            let td = document.createElement("td");
            td.innerText = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}