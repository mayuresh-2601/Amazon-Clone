/*  SEARCH FUNCTIONALITY  */

const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

if (searchInput && searchIcon) {
  searchIcon.addEventListener("click", () => {
    const query = searchInput.value.trim();

    if (query !== "") {
      alert(`Searching for: ${query}`);
      searchInput.value = "";
    } else {
      alert("Please enter a product name");
    }
  });

  /* Press Enter to search */
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchIcon.click();
    }
  });
}

/*  CART COUNTER SIMULATION  */

let cartCount = 0;
const cart = document.querySelector(".nav-cart");

document.querySelectorAll(".box a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    cartCount++;

    if (cart) {
      cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    }
  });
});

/* STICKY NAVBAR  */

const navbar = document.querySelector(".navbar");
const stickyOffset = navbar ? navbar.offsetTop : 0;

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.pageYOffset > stickyOffset) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
  } else {
    navbar.style.position = "static";
  }
});

/*  BACK TO TOP  */

const backToTop = document.querySelector(".foot-panel1 a");

if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/*  MOBILE MENU TOGGLE */

const menuIcon = document.querySelector(".panel-all");
const panelOps = document.querySelector(".panel-ops");

if (menuIcon && panelOps) {
  menuIcon.addEventListener("click", () => {
    if (panelOps.style.display === "block") {
      panelOps.style.display = "none";
    } else {
      panelOps.style.display = "block";
      panelOps.style.backgroundColor = "#222f3d";
      panelOps.style.padding = "10px";
    }
  });
}
