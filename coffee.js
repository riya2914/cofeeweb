 const element = document.getElementById('cart-button')

 element.addEventListener('click', ()=> {
  document.getElementById("cart-item").classList.toggle('right0');
  document.getElementById("nav-items").classList.remove('right0')
 })

 const element2 =document.getElementById('search-icon')

 element2.addEventListener('click', ()=>{
  document.getElementById("search-box").classList.toggle('right0')
 })

const element3 =document.getElementById('menu-icon')

 element3.addEventListener('click',() => {
    document.getElementById("nav-items").classList.toggle('right0');
    document.getElementById("cart-item").classList.remove('right0');
 })

