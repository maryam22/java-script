// let myString = "intecbrussel"
// let myNumber = 10;
// let logicVar = true;
// let MyArray =[1,2,3]
// let myObject = {id:1,user:"root"}
// let myUsers = [{id:1,user:"root"},{id:2,user:"root"}]
// let myFun = ()=>console.log("hello")
// let EBook = [{id:1,user:"root"},{id:2,user:"root"}]

// let myNewObject = JSON.stringify(myObject)//string Json
// localStorage.setItem("myString",myString)
// localStorage.setItem("myNumber",myNumber)
// localStorage.setItem("myNumber",logicVar)
// localStorage.setItem("myobject",myNewObject)
// localStorage.setItem("myUsers",myUsers)

// //string Json
// // localStorage.setItem("myobject",myObject)
// // console.log(typeof myNewObject,typeof myObject)


// //add email

// let myObjectdata = JSON.parse(localStorage.getItem('myobject'))//array object
// myObjectdata.email = "test@test.be"
// console.log("gggg", myObjectdata)
// console.log(typeof myObject)


// //new scenario
// localStorage.setItem("users", JSON.stringify(myUsers))//Json string
// let tempUserDB = JSON.parse(localStorage.getItem("users"))//array object
// let newUser = { id: 3, user: "visitor" }
// tempUserDB.push(newUser)
// localStorage.setItem('users', JSON.stringify(tempUserDB))
// console.log(tempUserDB)


// //ebook
// localStorage.setItem("EBook", JSON.stringify(EBook))
// let tempUserDB1 = JSON.parse(localStorage.getItem("EBook"))//array object
// let newBook = { id: 3, user: "book" }
// tempUserDB1.push(newBook)
// localStorage.setItem('EBook', JSON.stringify(tempUserDB1))
// console.log(tempUserDB1)

// //get key
// console.log(localStorage.key(5))

// //function



// function getAllMoviesFromStorage() {
//     let movies;
//     if (localStorage.getItem('movies') === null) {//if movies not exits
//         movies = []
//     }
//     else {
//         movies = JSON.parse(localStorage.getItem('movies'))
//     }
//     return movies
// }


// function addMovie(newMovie) {

//     let temp = getAllMoviesFromStorage();
//     temp.push(newMovie)
//     console.log(temp)
//     return localStorage.setItem('movies', JSON.stringify(temp))
// }

// addMovie({ id: 1, title: "superman" })
// addMovie({ id: 2, title: "batman" })
// localStorage.clear()


//spread operator

function getsomedata(...params){
  console.log(params)


}


getsomedata(1,2,3,4)