var list =document.getElementById("list")

function additem(){
    var todo=document.getElementById("todo")
    var li=document.createElement("li")
    var litext=document.createTextNode(todo.value)
    li.appendChild(litext)

    var dltbtn=document.createElement("button")
    var dlttext=document.createTextNode("DELETE")
    dltbtn.setAttribute("class","btn")
    dltbtn.setAttribute("onclick","blah(this)")
    dltbtn.appendChild(dlttext)
 li.appendChild(dltbtn)


 var edtbtn=document.createElement("button")
 var edttext=document.createTextNode("EDIT")
 edtbtn.setAttribute("class","btn")
edtbtn.appendChild(edttext)
  edtbtn.setAttribute("onclick","edit(this)")
li.appendChild(edtbtn)

    list.appendChild(li)
todo.value=""

    console.log(li)
}
 
function blah(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML=""
}
function edit(e){
  var val=prompt("enter value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue=val
}