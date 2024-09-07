
        // let a=fetch('https://fakestoreapi.com/products')
        // a.then((val1)=>{
        //     console.log(val1.status)
        //     console.log(val1.ok)
        //     return val1.json()
        // }).then((val2)=>{
        //     console.log(val2)
        // })
        let Div=document.querySelector('.row')
        let call_API=(getData)=>{
            let req= new XMLHttpRequest()
        req.addEventListener('readystatechange',()=>{
            console.log(req.status)
            console.log(req.readyState)
           let res= req.response;
           getData(JSON.parse(res))
        })
        req.open('GET','https://fakestoreapi.com/products');
        req.send()
        }
  let getdataToDOM=(arrayOfdata)=>{
arrayOfdata.map((products)=>{
    let col=document.createElement('div');
    col.setAttribute('class','col-lg-4');
    let card=document.createElement('div');
    card.setAttribute('class','card p-4 my-3');
    col.append(card)
    let img =document.createElement('img')
    img.setAttribute('src',products.image)
    card.append(img)
    let title=document.createElement('h5');
    title.innerText=products.title;
    card.append(title)
    let p=document.createElement('p');
    p.innerText=products.description;
    card.append(p)
    let btn=document.createElement('button');
    btn.setAttribute('class','btn btn-primary m-2')
    btn.innerText='Add to Cart'
    card.append(btn)
    Div.append(col)
    // To show data on cart
    let ul=document.querySelector('.list-group')
    let cartData=JSON.parse(localStorage.getItem('productTitle'))
    let li=document.createElement('li')
    li.setAttribute('class','list-group-item')
    ul.append(li)
    let cartItmimg=document.createElement('img')
    cartItmimg.setAttribute('src',products.image)
    li.prepend(cartItmimg)
    li.innerText=cartData
 

    
    // To store products in localStorage
    btn.addEventListener('click',(e)=>{
        
        if(localStorage.getItem('productTitle')==null){
            localStorage.setItem('productTitle',JSON.stringify([products.title]))
        }
        else{
            let pr=e.target.parentElement.children[1]
            let pro=JSON.parse(localStorage.getItem('productTitle'))
            let newItem=[...pro,products.title]
            localStorage.setItem('productTitle',JSON.stringify(newItem))
        }
        
        
    })
       
})
// To filter by category
let Category=document.getElementById('cat-drop')
Category.addEventListener('change',()=>{
console.log(Category.value)
let filterCategory=arrayOfdata.filter(products=>products.category==Category.value)
    filterCategory.map((products)=>{

        let col=document.createElement('div');
    col.setAttribute('class','col-lg-4');
    let card=document.createElement('div');
    card.setAttribute('class','card p-4 my-3');
    col.append(card)
    let img =document.createElement('img')
    img.setAttribute('src',products.image)
    card.append(img)
    let title=document.createElement('h5');
    title.innerText=products.title;
    card.append(title)
    let p=document.createElement('p');
    p.innerText=products.description;
    card.append(p)
    let btn=document.createElement('button');
    btn.setAttribute('class','btn btn-primary m-2')
    btn.innerText='Add to Cart'
    card.append(btn)
    Div.append(col)
    })
        
   
})


  }

       call_API(getdataToDOM)

    