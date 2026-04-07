let cart = [];

/* ADICIONAR AO CARRINHO */
function addToCart(item) {
  cart.push(item);
  updateCart();

  let count = document.getElementById("cart-count");
  count.classList.add("bump");

  setTimeout(() => {
    count.classList.remove("bump");
  }, 200);
}

/* ATUALIZA CONTADOR */
function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

/* ABRIR CARRINHO */
function openCart() {
  const modal = document.getElementById("cartModal");
  const content = document.querySelector('.site-content');

  modal.classList.add("active");
  renderCart();

  document.body.style.overflow = "hidden";
  content.classList.add('blur-background');
}

/* FECHAR CARRINHO */
function closeCart() {
  const modal = document.getElementById("cartModal");
  const content = document.querySelector('.site-content');

  modal.classList.remove("active");

  content.classList.remove('blur-background');
  document.body.style.overflow = "auto";
}

/* RENDERIZA ITENS */
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

/* REMOVER ITEM */
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  renderCart();
}

/* ENVIAR PARA WHATSAPP */
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