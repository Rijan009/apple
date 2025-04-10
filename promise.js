// let mypromise=new Promise(function(myResolve, myReject){
// if(2==5)
// {
//     myResolve('I love u')
// }
// else
// {
//     myReject('I hate u')
// }
// })
// mypromise.then(()=>console.log("Data update")).catch(()=>console.log("error"))
 
// fetch('https://fakestoreapi.com/products/categories').then(c=>c.json()).then(data=>console.log(data.map(a=>document.write(`<li>${a}</li>`))))

// fetch('https://fakestoreapi.com/products').then(c=>c.json()).then(data=>console.log(data.map(a=>document.write(`<li>${a.title}</li>)`))))

// fetch('https://dummyjson.com/products/categories').then(c=>c.json()).then(data=>console.log(data.map(a=>document.write(`<li>${a}</li>`))))

fetch('https://dummyjson.com/products').then(c=>c.json()).then(data=>console.log(data.map(a=>document.write(`<li>${a}</li>`))))