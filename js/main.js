document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCart();
  initWishlist();
});

/* ====== THEME MANAGEMENT ====== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ====== MOBILE MENU ====== */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

/* ====== WHATSAPP HELPER ====== */
function getWhatsAppNumber() {
  return window.WHATSAPP_NUMBER || '233558860176';
}

function buildWhatsAppMessage(items) {
  let message = "Hello *Velvet Scent*, I would like to order:%0A%0A";
  items.forEach(item => {
    message += `*Product:* ${item.name}%0A*Quantity:* ${item.qty}%0A%0A`;
  });
  const totalGHS = items.reduce((sum, item) => sum + (item.priceGHS * item.qty), 0);
  const totalUSD = items.reduce((sum, item) => sum + (item.priceUSD * item.qty), 0);
  message += `*Total Amount:* GHS ${totalGHS.toLocaleString()} / $${totalUSD.toLocaleString()}%0A%0APlease assist me with delivery.`;
  return message;
}

/* ====== STATE ====== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

/* ====== CART LOGIC ====== */
function initCart() {
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');

  if (cartBtn && cartDrawer && overlay) {
    cartBtn.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      overlay.classList.add('active');
    });

    const closeDrawer = () => {
      cartDrawer.classList.remove('active');
      overlay.classList.remove('active');
    };

    if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
  }

  updateCartUI();
}

function addToCart(productId, quantity = 1) {
  const product = window.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cart.push({ ...product, qty: quantity });
  }

  saveCart();

  // Open drawer automatically
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (cartDrawer && overlay) {
    cartDrawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function updateQty(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartUI() {
  // Update count badge
  const countEls = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  countEls.forEach(el => el.textContent = totalItems);

  // Update Drawer Body
  const drawerBody = document.querySelector('.drawer-body');
  if (drawerBody) {
    if (cart.length === 0) {
      drawerBody.innerHTML = '<p style="text-align:center; margin-top:50px;">Your cart is empty.</p>';
    } else {
      drawerBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=800&fit=crop';" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">GHS ${item.priceGHS.toLocaleString()} / $${item.priceUSD}</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
              </div>
              <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Update Totals
  const totalGHS = cart.reduce((sum, item) => sum + (item.priceGHS * item.qty), 0);
  const totalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * item.qty), 0);

  const totalEl = document.querySelector('.cart-total');
  if (totalEl) {
    totalEl.innerHTML = `<span>Total:</span> <span>GHS ${totalGHS.toLocaleString()} / $${totalUSD.toLocaleString()}</span>`;
  }

  // Setup WhatsApp Button
  const waBtn = document.getElementById('whatsapp-checkout');
  if (waBtn) {
    if (cart.length === 0) {
      waBtn.style.display = 'none';
    } else {
      waBtn.style.display = 'flex';
      const message = buildWhatsAppMessage(cart);
      waBtn.href = `https://wa.me/${getWhatsAppNumber()}?text=${message}`;
    }
  }
}

/* ====== WISHLIST LOGIC ====== */
function initWishlist() {
  updateWishlistUI();
}

function toggleWishlist(productId, btnElement) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    if (btnElement) btnElement.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    wishlist.push(productId);
    if (btnElement) btnElement.innerHTML = '<i class="fas fa-heart" style="color:var(--gold-primary)"></i>';
  }
  saveWishlist();
}

function updateWishlistUI() {
  // Can be used to sync all wishlist buttons on page load
  const heartBtns = document.querySelectorAll('.wishlist-toggle');
  heartBtns.forEach(btn => {
    const id = parseInt(btn.getAttribute('data-id'));
    if (wishlist.includes(id)) {
      btn.innerHTML = '<i class="fas fa-heart" style="color:var(--gold-primary)"></i>';
    } else {
      btn.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

/* ====== PRODUCT RENDERER ====== */
function renderProductCard(product) {
  const inWishlist = wishlist.includes(product.id);
  const heartIcon = inWishlist ? '<i class="fas fa-heart" style="color:var(--gold-primary)"></i>' : '<i class="far fa-heart"></i>';

  let badge = '';
  if (product.isNew) badge = '<div class="product-badge">New</div>';
  else if (product.isBestSeller) badge = '<div class="product-badge" style="background:#000; color:var(--gold-primary);">Best Seller</div>';

  return `
    <div class="product-card">
      ${badge}
      <div class="product-img-wrapper">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=800&fit=crop';" alt="${product.name}" class="product-img" loading="lazy">
        </a>
        <div class="product-actions-overlay">
          <button onclick="addToCart(${product.id})" title="Add to Cart"><i class="fas fa-shopping-bag"></i></button>
          <button class="wishlist-toggle" data-id="${product.id}" onclick="toggleWishlist(${product.id}, this)" title="Wishlist">${heartIcon}</button>
          <button onclick="window.location.href='product.html?id=${product.id}'" title="Quick View"><i class="fas fa-eye"></i></button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title" onclick="window.location.href='product.html?id=${product.id}'">${product.name}</h3>
        <div class="product-price">GHS ${product.priceGHS.toLocaleString()} <span>/ $${product.priceUSD}</span></div>
      </div>
    </div>
  `;
}

function renderProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = productsArray.map(renderProductCard).join('');
    // Re-init wishlist UI to catch the newly rendered buttons
    updateWishlistUI();
  }
}
