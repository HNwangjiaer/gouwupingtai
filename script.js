const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");
const addButtons = document.querySelectorAll(".add-btn");
const langButtons = document.querySelectorAll(".lang-btn");
const i18nTextNodes = document.querySelectorAll("[data-i18n]");
const i18nAriaNodes = document.querySelectorAll("[data-i18n-aria-label]");

const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartEmpty = document.getElementById("cartEmpty");

const translations = {
  en: {
    meta: { title: "NovaCart - Shopping Platform" },
    nav: { featured: "Featured", categories: "Categories", deals: "Deals", community: "Community" },
    hero: {
      tagline: "Curated for everyday upgrades",
      title: "Shop the next wave of smart essentials.",
      text: "A modern shopping platform with fresh drops, fast checkout, and a clean buying experience.",
      explore: "Explore products",
      bestDeals: "See best deals"
    },
    metrics: {
      delivery: "Average delivery",
      orders: "Orders fulfilled",
      rating: "Customer rating"
    },
    categories: {
      title: "Shop by Category",
      aria: "Product category tabs"
    },
    tabs: { all: "All", tech: "Tech", home: "Home", fitness: "Fitness", audio: "Audio" },
    featured: { title: "Featured Picks" },
    buttons: { addToCart: "Add to cart" },
    products: {
      smartwatch: {
        badge: "Best Seller",
        name: "Pulse Smartwatch X2",
        desc: "Track health, notifications, and performance with a vivid AMOLED display."
      },
      airpurifier: {
        badge: "New",
        name: "Glow Air Purifier Mini",
        desc: "Compact filtration designed for bedrooms, studios, and home offices."
      },
      resistancekit: {
        badge: "Limited",
        name: "Motion Resistance Kit",
        desc: "Five resistance levels with premium handles and travel-ready storage bag."
      },
      headphones: {
        badge: "Top Rated",
        name: "Orbit Noise-Cancel Headphones",
        desc: "Immersive sound, adaptive ANC, and up to 40 hours of battery life."
      },
      powerdock: {
        badge: "Value Pick",
        name: "MagSafe Power Dock",
        desc: "Charge phone, earbuds, and watch with one minimal desk setup."
      },
      smartlamp: {
        badge: "Hot Deal",
        name: "Luma Smart Lamp",
        desc: "Color scenes, scheduling, and voice control in one elegant lamp body."
      }
    },
    promo: {
      tagline: "Weekend Drop",
      title: "Up to 45% off selected bundles",
      text: "Bundle tech + home essentials and unlock extra savings at checkout.",
      cta: "Claim discounts"
    },
    community: { title: "What shoppers say" },
    reviews: {
      r1: "\"Checkout is clean and fast. Found exactly what I needed in minutes.\"",
      r1c: "- Jamie L.",
      r2: "\"The product curation is excellent. Every buy feels intentional.\"",
      r2c: "- Morgan T.",
      r3: "\"Love the delivery speed and the quality of their featured products.\"",
      r3c: "- Riley K."
    },
    cart: {
      label: "Cart",
      title: "Your cart",
      empty: "No items yet.",
      total: "Total",
      openAria: "Open cart",
      closeAria: "Close cart"
    }
  },
  zh: {
    meta: { title: "NovaCart - 购物平台" },
    nav: { featured: "精选", categories: "分类", deals: "优惠", community: "社区" },
    hero: {
      tagline: "为每日升级精心挑选",
      title: "选购新一代智能好物",
      text: "一个现代化购物平台，支持新品速览、快速结算和更清晰的购买体验。",
      explore: "浏览商品",
      bestDeals: "查看优惠"
    },
    metrics: {
      delivery: "平均送达时间",
      orders: "累计订单",
      rating: "用户评分"
    },
    categories: {
      title: "按分类选购",
      aria: "商品分类标签"
    },
    tabs: { all: "全部", tech: "科技", home: "家居", fitness: "运动", audio: "音频" },
    featured: { title: "精选推荐" },
    buttons: { addToCart: "加入购物车" },
    products: {
      smartwatch: {
        badge: "热销",
        name: "Pulse X2 智能手表",
        desc: "高亮 AMOLED 屏幕，轻松追踪健康数据、通知消息与运动表现。"
      },
      airpurifier: {
        badge: "新品",
        name: "Glow 迷你空气净化器",
        desc: "小巧高效，适合卧室、工作室和家庭办公空间。"
      },
      resistancekit: {
        badge: "限量",
        name: "Motion 阻力训练套装",
        desc: "五档阻力搭配高品质握把和便携收纳袋，训练更灵活。"
      },
      headphones: {
        badge: "高分好评",
        name: "Orbit 主动降噪耳机",
        desc: "沉浸式音质，自适应降噪，最长 40 小时续航。"
      },
      powerdock: {
        badge: "超值推荐",
        name: "MagSafe 三合一充电底座",
        desc: "一个桌面底座即可同时为手机、耳机和手表充电。"
      },
      smartlamp: {
        badge: "热门优惠",
        name: "Luma 智能氛围灯",
        desc: "支持场景配色、定时开关和语音控制，造型简洁。"
      }
    },
    promo: {
      tagline: "周末限时",
      title: "指定套装最高立减 45%",
      text: "科技 + 家居组合购买，结算时可解锁额外优惠。",
      cta: "立即领取优惠"
    },
    community: { title: "用户评价" },
    reviews: {
      r1: "\"结算流程很快很清晰，几分钟就找到了我想买的东西。\"",
      r1c: "- Jamie L.",
      r2: "\"商品选品非常好，每一次下单都很有价值。\"",
      r2c: "- Morgan T.",
      r3: "\"发货速度快，精选商品质量也很稳定。\"",
      r3c: "- Riley K."
    },
    cart: {
      label: "购物车",
      title: "我的购物车",
      empty: "购物车还没有商品。",
      total: "合计",
      openAria: "打开购物车",
      closeAria: "关闭购物车"
    }
  }
};

let state = {
  count: 0,
  total: 0,
  items: [],
  language: "en"
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
    const productId = card.dataset.product;
    const price = Number(card.dataset.price);

    state.count += 1;
    state.total += price;
    state.items.push({ productId, price });

    renderCart();
    openCart();
  });
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);
langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(localStorage.getItem("novacart-lang") === "zh" ? "zh" : "en");

function getText(key) {
  const parts = key.split(".");
  let value = translations[state.language];
  for (const part of parts) {
    value = value?.[part];
  }
  if (value !== undefined) {
    return value;
  }

  let fallback = translations.en;
  for (const part of parts) {
    fallback = fallback?.[part];
  }
  return fallback ?? key;
}

function applyLanguage(language) {
  state.language = language;
  localStorage.setItem("novacart-lang", language);

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = getText("meta.title");

  i18nTextNodes.forEach((node) => {
    node.textContent = getText(node.dataset.i18n);
  });

  i18nAriaNodes.forEach((node) => {
    node.setAttribute("aria-label", getText(node.dataset.i18nAriaLabel));
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === language);
  });

  renderCart();
}

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
    const productName = getText(`products.${item.productId}.name`);
    li.innerHTML = `<span>${productName}</span><strong>$${item.price}</strong>`;
    cartItems.appendChild(li);
  });
}
