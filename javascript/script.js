document.addEventListener("DOMContentLoaded", () => {
    const initialData = [
        ["HARIKA", "45","CSE","A+"],
        ["SUNITHA", "35","CSE","A"],
        ["VYSHALI", "25","EEE","A"]

        
    ];
    var a=0;

    const addRowBtn = document.getElementById("addRowBtn");
    const tableBody = document.getElementById("myTable").querySelector("tbody");
    function fun(data) {
        tableBody.innerHTML = "";
        data.forEach(rowData => {
            addRow(rowData);
        });
    }
    function addRow(data = ["", "","",""]) {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td><input type="text" value="${data[0]}" ></td>
            <td><input type="text" value="${data[1]}" ></td>
            <td><input type="text" value="${data[2]}" ></td>
            <td><input type="text" value="${data[3]}" ></td>
            <td>
                <button class="saveRowBtn">Save</button>
                <button class="deleteRowBtn">Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);

        const deleteRowBtn = newRow.querySelector(".deleteRowBtn");
        deleteRowBtn.addEventListener("click", () => {
            tableBody.removeChild(newRow);
        });

        const saveRowBtn = newRow.querySelector(".saveRowBtn");
        saveRowBtn.addEventListener("click", () => {
            saveRow(newRow);
        });
    }
    function saveRow(row) {
        const cells = row.querySelectorAll("td");
        cells.forEach(cell => {
            cell.disabled = true;
        });
    }

    addRowBtn.addEventListener("click", () => addRow());
    fun(initialData);
    // }
});
console.log(myTable);

function hey()
{
    var x=document.getElementById("myTable");
    x.style.display="table";
    var bt=document.getElementsByClassName("ab")[0];
    bt.style.display="block";
    var btn=document.getElementsByClassName("abx")[0];
    btn.style.display="none";
}