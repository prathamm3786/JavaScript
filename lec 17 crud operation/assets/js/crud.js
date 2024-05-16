let data = [
    {
        id: 1, Name: "Vandri krisha", Email: "krisha@gmail.com"
    },
    {
        id: 2, Name: "keyur", Email: "keyur@gmail.com"
    },
]
function readAll() {
    localStorage.setItem("object", JSON.stringify(data))
    var tabledata = document.querySelector(".data_table")
    var object = localStorage.getItem("object")
    var objdata = JSON.parse(object)
    console.log(objdata);
    var Elements = ""
    objdata.map(record => (
        Elements +=
        `<thead>
        <td>${record.Name}</td>
        <td>${record.Email}</td>
        <td>
        <button class="edit" onclick="{edit(${record.id})}">Edit</button>
        <button class="delete" onclick="{delete(${record.delet})}">Delete</button>
        </td>
        </thead>`

    ))
    tabledata.innerHTML = Elements
}
function create() {
    var form = document.querySelector(".create-form").style.display = "block";
    var form = document.querySelector(".add").style.display = "none";

}
function add() {
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var objNew = {
        id: Math.floor(Math.random() * 10000), Name: name, Email: email
    }
    data.push(objNew);
    var form = document.querySelector(".create-form").style.display = "none";
    var form = document.querySelector(".add").style.display = "block";
    readAll();
}
function edit(id) {
    var form = document.querySelector(".update-form").style.display = "block";
    var obj = data.find(rec => rec.id == id)
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".id").value = obj.id;

}
function update() {
    var id = parseInt(document.querySelector(".id").value)
    var name = document.querySelector(".uname").value
    var email = document.querySelector(".uemail").value
    var index = data.findIndex(rec => rec.id === id)

    data[index] = { id, name, email }
    readAll()
    document.querySelector(".update-form").style.display = "none"
}
function delet(id) {
    data = data.filter(rec => rec.id !== id)
    readAll()
}
