let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();

  let count = document.getElementById("cart-count");
  count.classList.add("bump");

  setTimeout(() => {
    count.classList.remove("bump");
  }, 200);
}
function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  const modal = document.getElementById("cartModal");
  const content = document.querySelector('.site-content');

  modal.style.display = "flex";
  modal.style.opacity = 0;
  renderCart();

  // Bloqueia scroll e aplica blur em todo o site
  document.body.style.overflow = "hidden";
  content.classList.add('blur-background');

  setTimeout(() => {
    modal.style.transition = "opacity 0.3s";
    modal.style.opacity = 1;
  }, 10);
}

function closeCart() {
  const modal = document.getElementById("cartModal");
  const content = document.querySelector('.site-content');

  modal.style.transition = "opacity 0.3s";
  modal.style.opacity = 0;

  // Remove blur e desbloqueia scroll
  content.classList.remove('blur-background');
  document.body.style.overflow = "auto";

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function renderCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button onclick="removeItem(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  renderCart();
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let message = "Olá, gostaria de agendar:\n\n";

  cart.forEach(item => {
    message += "- " + item + "\n";
  });

  let phone = "5541984701212"; 
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}