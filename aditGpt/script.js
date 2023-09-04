let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong. Silakan tambahkan barang ke keranjang terlebih dahulu.");
    } else {
        alert(`Total pembelian Anda adalah $${total.toFixed(2)}. Terima kasih telah berbelanja!`);
        cart = [];
        total = 0;
        updateCart();
    }
}
