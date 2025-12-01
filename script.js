if (Notification.permission === "default") {
    Notification.requestPermission();
}
const deadlineInput = document.getElementById("deadline");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Event tekan ENTER untuk menambah tugas
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();  
    }
});

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");

        // buat tanggal hari ini
        let today = new Date();
        let createdDate = today.toLocaleDateString("id-ID");

        // gabungkan tugas + tanggal dibuat
        li.innerHTML =
        inputBox.value +
        "<br><small>Deadline: " + deadlineInput.value + "</small>";
        listContainer.appendChild(li);

        // tombol hapus
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();