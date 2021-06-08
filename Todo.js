let result;
const cardBody =document.querySelectorAll('.card-body')[1]
result = cardBody.children[4]
result = cardBody.children[4].children
result = cardBody.children[4].children[0]
cardBody.children[4].children[0].innerHtml ="intecbrussel"
// //result= cardBody.children[1].
// //cardBody.children[4].children[0].innerHTML = "IntecBrussel"
// const findme = document.querySelector('.findMe')
// result = findme
// result = findme.parentElement.parentElement.parentElement
// result.innerHTML = "Hello"
//console.log(result)

// function remove(e){

//     const listofTodos = document.querySelectorAll('.fa-remove')
//     const listparent =document

//     console.log(listofTodos)
//     let rest;
    
//     console.log(rest)
    
//     // let myarr = [1,2,3,4,5,6,7,87]
//     // myarr.forEach(sddd=>{
//     //     sddd.
//     // })

    
    
//     //  listofTodos.forEach(function(li,index){
    
//     //     console.log(index)
    
//     //     // let a =li.parentElement[0].parentElement[0]
//     //  //   a.remove();
//     //    console.log()
//     //    console.log('hello for each')

//     //  }
        
//     // )

//     console.log(e.target)




// }



// document.getElementById("hh").addEventListener("click", remove);
// //remove();



function remove(e){
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.remove()
}


let removeLinks = document.querySelectorAll('.fa-remove')

removeLinks.forEach(iconLink=>{

    console.log(iconLink)
    iconLink.addEventListener('click',remove)


})