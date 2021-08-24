 const Name=document.querySelector('#name');
 const lastName=document .querySelector('#lastName');
 const Email=document.querySelector('#inputEmail4');
 const password=document.querySelector('#inputPassword4');
 const Adress=document.querySelector('#inputAddress');
 const city=document.querySelector('#inputCity');
 const state=document.querySelector('#inputState');
 const zip =document.querySelector('#inputZip');

 const button=document.querySelector('.register').addEventListener('click',postUser);

 function postUser(e){
   e.preventDefault()
     let data={
         name: Name.value,
         lastname:lastName.value,
         email:Email.value,
         password:password.value,
         address:Adress.value,
         city:city.value,
         state:state.value,
         zip:zip.value

     }
    //  fetch("http://localhost:5000/users", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {"Content-type": "application/json; charset=UTF-8"}
    //   })
    //   .then(response => response.json()) 
    //   .then(json => console.log(json))
      
    // .catch(err => console.log(err));


    fetch("http://localhost:5000/users",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res=>{
      alert('SAVED')
    })

    console.log(data)

    }

   


     

