const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");
const addButtons = document.querySelectorAll(".add-btn");

const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartEmpty = document.getElementById("cartEmpty");

let state = {
  count: 0,
  total: 0,
  items: []
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const name = card.querySelector("h3").textContent;
    const price = Number(card.dataset.price);

    state.count += 1;
    state.total += price;
    state.items.push({ name, price });

    renderCart();
    openCart();
  });
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function renderCart() {
  cartCount.textContent = String(state.count);
  cartTotal.textContent = `$${state.total}`;
  cartItems.innerHTML = "";

  if (state.items.length === 0) {
    cartEmpty.style.display = "block";
    return;
  }

  cartEmpty.style.display = "none";

  state.items.slice(-6).forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span><strong>$${item.price}</strong>`;
    cartItems.appendChild(li);
  });
}
