let arr = JSON.parse(localStorage.getItem("detail")) || [];
function save() {
    let modal = document.getElementById("modal").value;
    let mobilename = document.getElementById("mobilename").value;
    let yourname = document.getElementById("yourname").value;
    if (modal =="" ||mobilename== "" || yourname=="") {
        let para = document.getElementById("para");
        para.innerHTML="All fields required";
        para.style.color="red";
        para.style.fontSize="25px"
            return false;
        }
    let data = {
        modal,
        mobilename,
        yourname
    }
    // let arr = JSON.parse(localStorage.getItem("detail")) || [];
    arr.push(data);
    localStorage.setItem("detail", JSON.stringify(arr));
    location.reload();
}
function showdata() {
    arr.map((value, index) => {
        console.log(value);
       
        let container2 = document.getElementById("container2");
        let div= document.createElement("div");
        div.style.width="30%"
        div.innerHTML = `<div style="color: rgb(2, 2, 2); background-color:white; border-radius: 20px; padding: 15px 30px;">
        <div>
            <h2 style="color: blue;">Modal Name</h2>
            <h3>${value.modal}</h3>
        </div>
        <div>
            <h2 style="color: blue;">Mobile Name</h2>
            <h3>${value.mobilename}</h3>
        </div>
        <div>
            <h2 style="color: blue;">Your Name</h2>
            <h3>${value.yourname}</h3>
        </div>
        <div style="display:flex; gap:10px">
            <button style= "padding:10px 20px background-color:white;margin-top:10px;  border-radius: 20px; padding: 10px 30px; border: none;cursor:pointer ; color:green;box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)" onclick="viewdata(${index})">View</button>

            <button style= "padding:10px 20px background-color:white;margin-top:10px;  border-radius: 20px; padding: 10px 30px; border: none;cursor:pointer ; color:green;box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)" onclick="deletedata(${index})">delete</button>
        </div>
    </div>`
    container2.appendChild(div);
    })
}
showdata();

function deletedata(index) {
   arr.splice(index,1);
   localStorage.setItem("detail", JSON.stringify(arr));
   location.reload();
}
function viewdata(index) {
    let res = arr[index];
    console.log(res);
    document.getElementById("modal").value = res.modal;
     document.getElementById("mobilename").value = res.mobilename;
    document.getElementById("yourname").value = res.yourname;
    document.getElementById("index").value = index;

}
function update() {
    let modal = document.getElementById("modal").value;
    let mobilename = document.getElementById("mobilename").value;
    let yourname = document.getElementById("yourname").value;
    let index= document.getElementById("index").value;
    let data = {
        modal,
        mobilename,
        yourname
    }
    // let arr = JSON.parse(localStorage.getItem("detail")) || [];
    arr.splice(index,1,data);
    // arr.push(data);
    localStorage.setItem("detail", JSON.stringify(arr));
    location.reload();
}