//general 
let btn =document.querySelector(".btn-primary")
let trash =document.querySelectorAll(".fa-trash")
let tbody = document.querySelector("tbody")
let btnForm =document.querySelector(".btn-outline-light")
let bookName = document.querySelector("#book_name")
let bookAuthor = document.querySelector("#book_author")
let bookCategory = document.querySelector("#book_category")
let bookDate = document.querySelector("#book_date")
let bookprice = document.querySelector("#price")

//remove all elements


btn.addEventListener('click',function(){
tbody.remove();

})

//remove per element

function RemoveItems(e) {
    e.target.parentElement.parentElement.parentElement.remove()
 }
 trash.forEach(x => {
   // console.log(x)
 
    x.addEventListener('click', RemoveItems)
 
 })
 
 //Add Element

btnForm.addEventListener('click', addElement)


    function addElement(e){
    e.preventDefault();
    // make td,tr th
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    //Dom Element
    let template1 = document.createRange().createContextualFragment('<i class="fa fa-eur" aria-hidden="true"></i>')
    let template2 = document.createRange().createContextualFragment('<a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a>')
    console.log(template2)
   
    //appanded together
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    td5.appendChild(template1)
    tr.appendChild(td5)
    td6.appendChild(template2)
    tr.appendChild(td6)

    //appanded text
    //let text = document.createTextNode(bookName.value)
    td1.appendChild( document.createTextNode(bookName.value))
    td2.appendChild(document.createTextNode(bookAuthor.value))
    td3.appendChild(document.createTextNode(bookCategory.value))
    td4.appendChild(document.createTextNode(bookDate.value))
    td5.appendChild(document.createTextNode(bookprice.value))
    tbody.append(tr)

    console.log(tr)
}



