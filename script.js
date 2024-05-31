let photos = [
    {
        photo:"https://cdn.thewirecutter.com/wp-content/media/2024/03/androidphones-2048px-0803.jpg",
        name:"phone",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://cdn.thewirecutter.com/wp-content/media/2023/10/androidphones-2048px-4861.jpg",
        name:"phone",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://s1.1zoom.me/big3/535/Sea_iPhoneHands_463723.jpg",
        name:"phone",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBpV91TiQikFrRK5Xy7-sV27FARrzcGR3ZTkTFbx1NA&s",
        name:"phone",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://marketplace.canva.com/print-mockup/bundle/E9Me4jcyzMX/fit:female,pages:double-sided,surface:marketplace/product:171618,surface:marketplace/EAFLjIhFSxY/1/0/933w/canva-black-brush-style-inspirational-quote-t-shirt-iaKYylV3aYE.png?sig=36a04429d5cda24e67c6a963731c2a6c&width=800",
        name:"clothes",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://kebroc.com/wp-content/uploads/2023/07/KEB_White_3-copy-800x800.jpg",
        name:"clothes",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://5.imimg.com/data5/SELLER/Default/2021/1/KV/ED/ON/78338099/women-s-mid-length-dress-rs-800-500x500.jpeg",
        name:"clothes",
        txt:"lorem ipsum dolor sit amet"
    },
    {
        photo:"https://5.imimg.com/data5/SELLER/Default/2021/5/RK/RW/OM/123342005/lukzer-metal-coat-stand.jpg",
        name:"clothes",
        txt:"lorem ipsum dolor sit amet"
    },
    
]

//display photos
let row = document.querySelector('.row')


//
let cards = document.querySelectorAll('.card')
let btns = document.querySelectorAll('.btn')
const filterate =(e)=>{
    
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')

        cards.forEach(card =>{
            card.classList.add('hide')
            if(e.target.dataset.name == "all" || card.dataset.name == e.target.dataset.name){
                card.classList.remove('hide')
            }else{

            }
        })
}

btns.forEach(btn =>btn.addEventListener('click', filterate) )



