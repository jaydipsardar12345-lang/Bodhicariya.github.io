let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
updateCart();
}

function updateCart(){
let itemsDiv = document.getElementById("cartItems");
let total = 0;

if(itemsDiv){
itemsDiv.innerHTML="";
cart.forEach(item=>{
itemsDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
total += item.price;
});
document.getElementById("total").innerText = total;
}

let count = document.getElementById("cartCount");
if(count) count.innerText = cart.length;
}

updateCart();
