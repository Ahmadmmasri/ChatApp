
//create connection from ChatHub
var connection = new signalR.HubConnectionBuilder().withUrl("/ChatHub").build();
//add data to list 
connection.on("RecieveMessage", function (fromUser, Message) {
    var msg = fromUser + ": " + Message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li)
});

//start 
connection.start();

//take messages and send it to SendMessage method in ChatHub class
$("#btnSend").on("click", function () {
    var fromUser = $("#textUser").val();
    var Message = document.getElementById("textMessage").value;
    console.log("hi",Message)

    connection.invoke("SendMessage", fromUser, Message)
});