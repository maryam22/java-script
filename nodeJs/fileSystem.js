//file System
const  fs=require('fs');
const fetch = require('node-fetch')



// // let inputFile =process.argv[2]
// // fs.readFile('readMLE.text','utf-8',function(err,data)
// // {console.log(data)});

// //write a file

// // fs.writeFile('test.txt','this is a test file',function(err){

// //    if (err){
// //       console.log(err)

// //    }else
// //    {

// //     console.log('file saved')


// //    }


// // })

// let fileName = process.argv[2]
// //let data =process.argv[3]

// fs.writeFile(fileName,data,function(err){

//    if (err){
//       console.log(err)

//    }else
//    {

    
//    console.log(fileName,data)


//    }


// })
// // apanded file to existing file
//  fs.appendFile(fileName,data,function(err){
     
//     console.log(fileName,data)

//  })

// //delete file
//  fs.unlink(fileName,function (err){

    
//    if (err){
//     console.log(err)

//  }else
//  {

  

//  console.log('file delete')


//  }


//  })
//  let newFilename =process.argv[3]
//  //rename file
  
//  fs.rename(fileName,newFilename,function(err){

//     if(err){

//       console.log(err)


//     }else{

//      console.log()


//     }




//  })


 fetch('https://api.github.com/users/github')
 .then(res => res.json())
 .then(data =>JSON.stringify(data))
 .then(json => {

   console.log(typeof json)
    //write

    // fs.writeFile('test.txt',json,function(err){

    //     if (err){
    //         console.log(err)
    
    //     }else
    //     {
    
    //         console.log('file saved')
    
    
    //     }
    
    
    //  })

})


//read 


 
fs.readFile('test.txt','utf-8',function(err,data)
{console.log(data)});
 