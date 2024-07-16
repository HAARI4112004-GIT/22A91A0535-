var arrays = [
    {
        name:"HARIKA",
        roll:"45",
        branch:"CSE",
        grade:"A+"
    },
    {
        name:"SUNITHA",
        roll:"35",
        branch:"CSE",
        grade:"A"
    },
    {
        name:"VYSALI",
        roll:"15",
        branch:"CSE",
        grade:"B"
    },
    {
        name:"RAMYA",
        roll:"25",
        branch:"CSE",
        grade:"A"
    }
];

// function fun()
// {
//     // var p=document.getElementsByClassName("tab")[0]
//     // if(p.style.display==="none")
//     // {
//     //     console.log("fg");
//     //     p.style.display="block";
//     // }
//     // else
//     // {
//     //     console.log("bhb");
//     //     p.style.diaplay="none";
//     // }

//     var c1=document.createElement("th");
//     var c2=document.createElement("th");
//     var c3=document.createElement("th");
//     c1.innerHTML="s_no";
//     c2.innerHTML="NAME";
//     c3.innerHTML="ROLL";
//     var x=document.getElementsByClassName("tab")[0]
//     x.appendChild(c1);
//     x.appendChild(c2);
//     x.appendChild(c3);
//     var r11=document.createElement("tr");
//     var c11=document.createElement("td");
//     var c12=document.createElement("td");
//     var c13=document.createElement("td");
//     c11.innerHTML=arrays[0];
//     c12.innerHTML="NAME";
//     c13.innerHTML="ROLL";
//     var x1=document.getElementsByClassName("tab")[0]
//     x1.appendChild(c11);
//     x1.appendChild(c12);
//     x1.appendChild(c13);

//     // console.log(document.getElementsByClassName("tab")[0]);
// }
const tableBody = document.querySelector('.edit tbody');
// const tableBody = document.createElement("tbody");

function fun() {
    tableBody.innerHTML = '';

    arrays.forEach((item, index) => {
        const row = document.createElement('tr');
        const rollCell = document.createElement('td');
        const rollInput = document.createElement('input');
        rollInput.value = item.roll;
        rollCell.appendChild(rollInput);
        row.appendChild(rollCell);

        const nameCell = document.createElement('td');
        const nameInput = document.createElement('input');
        nameInput.value = item.name;
        nameCell.appendChild(nameInput);
        row.appendChild(nameCell);
        const branchCell = document.createElement('td');
        const branchInput = document.createElement('input');
        branchInput.value = item.branch;
        branchCell.appendChild(branchInput);
        row.appendChild(branchCell);

        const gradeCell = document.createElement('td');
        const gradeInput = document.createElement('input');
        gradeInput.value = item.grade;
        gradeCell.appendChild(gradeInput);
        row.appendChild(gradeCell);

        // tableBody.appendChild(row);
        const actionCellx = document.createElement('td');
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';

        const deleteRowBtn = row.querySelector(".deleteRowBtn");
        delButton.addEventListener("click", () => {
            tableBody.removeChild(row);
        });
        actionCellx.appendChild(delButton);
        row.appendChild(actionCellx);

        const actionCell = document.createElement('td');
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => saveRow(index));
        actionCell.appendChild(saveButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
        
        // const deleteRowBtn = row.querySelector(".deleteRowBtn");
        // deleteRowBtn.addEventListener("click", () => {
        //     tableBody.removeChild(row);
            
        });
}
function del(index)
{
    tableBody.removeChild(row);
    fun();
}
function saveRow(index) {
    const name = tableBody.rows[index].cells[0].querySelector('input').value;
    const roll = tableBody.rows[index].cells[1].querySelector('input').value;
    const branch = tableBody.rows[index].cells[1].querySelector('input').value;
    const grade = tableBody.rows[index].cells[1].querySelector('input').value;
    arrays[index].name = name;
    arrays[index].email = roll;
    arrays[index].name = branch;
    arrays[index].email = grade;

    fun();
}

fun();

// function  add() {
    var addButton = document.getElementById("add-row");
    var tableBody1 = document.querySelector(".edit tbody");

    function add() {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" class="name-input"></td>
            <td><input type="email" class="email-input"></td>
            <td><input type="text" class="name-input"></td>
            <td><input type="email" class="email-input"></td>
            <td>
            <button onclick="del">DELETE</button>
            </td>
            <td>
            <button onclick="saveRow">Save</button>
            </td>
        `;
        tableBody1.appendChild(newRow);
    // });
};
