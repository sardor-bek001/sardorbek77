document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Menu filtri funksiyasi
  const filterBtns = document.querySelectorAll(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      menuItems.forEach(function (item) {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Modal elementlari
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const closeBtn = document.querySelector(".close-btn");

  function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = "flex";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // 2. Booking form yuborish
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      showModal(
        "Stol Band Qilindi!",
        `Rahmat, ${name}! Sizning stolingiz ${date} kuni soat ${time} ga muvaffaqiyatli band qilindi.`
      );
      bookingForm.reset();
    });
  }

  // 3. Contact form yuborish
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      showModal(
        "Xabar Yuborildi!",
        "Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz!"
      );
      contactForm.reset();
    });
  }

  // 4. QO'SHIMCHA: Back to top (Tepaga qaytish) tugmasi
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
  // 10. QO'SHIMCHA: Preloader
  const preloader = document.getElementById("preloader");

  function hidePreloader() {
    if (preloader) preloader.classList.add("hide");
  }

  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 800);
  });
  setTimeout(hidePreloader, 3000);

  // 11. QO'SHIMCHA: Navbar scroll qilganda fon olishi
  const mainNavbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      mainNavbar.classList.add("scrolled");
    } else {
      mainNavbar.classList.remove("scrolled");
    }
  });

  // 12. QO'SHIMCHA: Typewriter effekti
  const subtitle = document.querySelector(".hero-content .subtitle");
  if (subtitle) {
    const fullText = subtitle.textContent.trim();
    let charIndex = 0;
    subtitle.textContent = "";
    subtitle.classList.add("typing");

    setTimeout(function () {
      const typer = setInterval(function () {
        subtitle.textContent = fullText.slice(0, ++charIndex);
        if (charIndex >= fullText.length) {
          clearInterval(typer);
        }
      }, 150);
    }, 1200);
  }

  // 13. QO'SHIMCHA: Raqamlar sanab chiqishi (counter)
  const counters = document.querySelectorAll(".counter");

  function runCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString() + "+";
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (c) {
    counterObserver.observe(c);
  });
  document.addEventListener("DOMContentLoaded", function () {

  // 1. Menu filtri funksiyasi
  const filterBtns = document.querySelectorAll(".menu-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      menuItems.forEach(function (item) {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Modal elementlari
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const closeBtn = document.querySelector(".close-btn");

  function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = "flex";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // 2. Booking form yuborish
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      showModal(
        "Stol Band Qilindi!",
        `Rahmat, ${name}! Sizning stolingiz ${date} kuni soat ${time} ga muvaffaqiyatli band qilindi.`
      );
      bookingForm.reset();
    });
  }

  // 3. Contact form yuborish
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      showModal(
        "Xabar Yuborildi!",
        "Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz!"
      );
      contactForm.reset();
    });
  }

  // 4. Back to top (Tepaga qaytish) tugmasi
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 5. Scroll progress chizig'i
  const progressBar = document.getElementById("scrollProgress");

  window.addEventListener("scroll", function () {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = percent + "%";
  });

  // 6. Bo'limlar scroll qilinganda silliq paydo bo'lishi
  const revealTargets = document.querySelectorAll(".section .container");
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach(function (el) {
    revealObserver.observe(el);
  });

  // 7. Navbar faol havolasini scroll bo'yicha belgilash
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-link");
      }
    });
  });

  // 8. Booking sanasini bugundan oldin tanlab bo'lmasligi
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // 10. Preloader
  const preloader = document.getElementById("preloader");

  function hidePreloader() {
    if (preloader) preloader.classList.add("hide");
  }

  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 800);
  });
  setTimeout(hidePreloader, 3000);

  // 11. Navbar scroll qilganda fon olishi
  const mainNavbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (!mainNavbar) return;
    if (window.scrollY > 80) {
      mainNavbar.classList.add("scrolled");
    } else {
      mainNavbar.classList.remove("scrolled");
    }
  });

  // 12. Typewriter effekti
  const subtitle = document.querySelector(".hero-content .subtitle");
  if (subtitle) {
    const fullText = subtitle.textContent.trim();
    let charIndex = 0;
    subtitle.textContent = "";
    subtitle.classList.add("typing");

    setTimeout(function () {
      const typer = setInterval(function () {
        subtitle.textContent = fullText.slice(0, ++charIndex);
        if (charIndex >= fullText.length) {
          clearInterval(typer);
        }
      }, 150);
    }, 1200);
  }

  // 13. Raqamlar sanab chiqishi (counter)
  const counters = document.querySelectorAll(".counter");

  function runCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString() + "+";
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (c) {
    counterObserver.observe(c);
  });

  // 14. Toast (kichik xabar)
  const toastEl = document.getElementById("toast");
  let toastTimer;
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2200);
  }

  // 15. Savatcha
  let cart = [];
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartItemsBox = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
  }
  function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
  }

  function renderCart() {
    cartItemsBox.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
      cartItemsBox.innerHTML = '<p class="cart-empty">Savatcha hozircha bo\'sh</p>';
    }

    cart.forEach(function (item, index) {
      total += item.price * item.qty;
      count += item.qty;

      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML =
        "<div><h5>" + item.name + "</h5><small>$" + item.price.toFixed(2) + "</small></div>" +
        '<div class="qty"><button data-act="minus" data-i="' + index + '">-</button>' +
        "<span>" + item.qty + "</span>" +
        '<button data-act="plus" data-i="' + index + '">+</button></div>';
      cartItemsBox.appendChild(row);
    });

    cartTotal.textContent = "$" + total.toFixed(2);
    cartCount.textContent = count;
  }

  function addToCart(name, price) {
    const found = cart.find(function (c) { return c.name === name; });
    if (found) {
      found.qty++;
    } else {
      cart.push({ name: name, price: price, qty: 1 });
    }
    renderCart();
    showToast(name + " savatga qo'shildi");
  }

  cartItemsBox.addEventListener("click", function (e) {
    const act = e.target.getAttribute("data-act");
    if (!act) return;
    const i = parseInt(e.target.getAttribute("data-i"), 10);
    if (act === "plus") cart[i].qty++;
    if (act === "minus") {
      cart[i].qty--;
      if (cart[i].qty <= 0) cart.splice(i, 1);
    }
    renderCart();
  });

  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  document.getElementById("clearCart").addEventListener("click", function () {
    cart = [];
    renderCart();
  });

  document.getElementById("checkoutBtn").addEventListener("click", function () {
    if (cart.length === 0) {
      showToast("Savatcha bo'sh!");
      return;
    }
    const total = cartTotal.textContent;
    closeCart();
    showModal("Buyurtma qabul qilindi!", "Jami summa: " + total + ". Tez orada siz bilan bog'lanamiz.");
    cart = [];
    renderCart();
  });

  // Menyu kartalariga "SAVATGA" tugmasini JS orqali qo'shamiz
  function getItemData(item) {
    return {
      name: item.querySelector("h4").textContent.trim(),
      price: parseFloat(item.querySelector(".menu-header span").textContent.replace("$", "")),
      desc: item.querySelector("p").textContent.trim()
    };
  }

  menuItems.forEach(function (item) {
    const btn = document.createElement("button");
    btn.className = "add-cart-btn";
    btn.innerHTML = '<i class="fa-solid fa-plus"></i> SAVATGA';
    item.appendChild(btn);

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const d = getItemData(item);
      addToCart(d.name, d.price);
    });
  });

  renderCart();

  // 16. Taom tafsilotlari oynasi
  const dishModal = document.getElementById("dishModal");
  let currentDish = null;

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      currentDish = getItemData(item);
      document.getElementById("dishName").textContent = currentDish.name;
      document.getElementById("dishPrice").textContent = "$" + currentDish.price.toFixed(2);
      document.getElementById("dishDesc").textContent = currentDish.desc;
      dishModal.classList.add("open");
    });
  });

  document.getElementById("dishAdd").addEventListener("click", function () {
    if (currentDish) addToCart(currentDish.name, currentDish.price);
    dishModal.classList.remove("open");
  });
  document.querySelector(".dish-close").addEventListener("click", function () {
    dishModal.classList.remove("open");
  });
  dishModal.addEventListener("click", function (e) {
    if (e.target === dishModal) dishModal.classList.remove("open");
  });

  // 17. Galereya lightbox
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  let lbIndex = 0;

  function showLightbox(i) {
    lbIndex = (i + galleryItems.length) % galleryItems.length;
    const img = galleryItems[lbIndex].querySelector("img");
    lbImg.src = img.src.replace("w=600", "w=1200");
    lbCaption.textContent = img.alt.toUpperCase() + "  (" + (lbIndex + 1) + "/" + galleryItems.length + ")";
    lightbox.classList.add("open");
  }

  galleryItems.forEach(function (g, i) {
    g.addEventListener("click", function () { showLightbox(i); });
  });
  document.querySelector(".lb-prev").addEventListener("click", function () { showLightbox(lbIndex - 1); });
  document.querySelector(".lb-next").addEventListener("click", function () { showLightbox(lbIndex + 1); });
  document.querySelector(".lb-close").addEventListener("click", function () {
    lightbox.classList.remove("open");
  });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) lightbox.classList.remove("open");
  });

  // Klaviatura: Escape hamma oynani yopadi, o'qlar galereyani almashtiradi
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.style.display = "none";
      lightbox.classList.remove("open");
      dishModal.classList.remove("open");
      closeCart();
    }
    if (lightbox.classList.contains("open")) {
      if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
      if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
    }
  });

  // 18. Mijozlar fikri slayderi
  const slides = document.querySelectorAll(".slide");
  const dotsBox = document.getElementById("sliderDots");
  let slideIndex = 0;
  let slideTimer;

  slides.forEach(function (_, i) {
    const dot = document.createElement("span");
    dot.addEventListener("click", function () { goSlide(i); });
    dotsBox.appendChild(dot);
  });
  const dots = dotsBox.querySelectorAll("span");

  function goSlide(i) {
    slideIndex = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) {
      s.classList.toggle("active", k === slideIndex);
      dots[k].classList.toggle("active", k === slideIndex);
    });
    clearInterval(slideTimer);
    slideTimer = setInterval(function () { goSlide(slideIndex + 1); }, 5000);
  }

  document.getElementById("prevSlide").addEventListener("click", function () { goSlide(slideIndex - 1); });
  document.getElementById("nextSlide").addEventListener("click", function () { goSlide(slideIndex + 1); });
  if (slides.length) goSlide(0);

  // 19. FAQ akkordeon
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      const item = q.parentElement;
      const answer = item.querySelector(".faq-a");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item").forEach(function (f) {
        f.classList.remove("open");
        f.querySelector(".faq-a").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 20. Dark mode
  const themeBtn = document.getElementById("themeToggle");

  function applyTheme(dark) {
    document.body.classList.toggle("dark-mode", dark);
    themeBtn.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }

  let savedDark = false;
  try { savedDark = localStorage.getItem("theme") === "dark"; } catch (err) {}
  applyTheme(savedDark);

  themeBtn.addEventListener("click", function () {
    const dark = !document.body.classList.contains("dark-mode");
    applyTheme(dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (err) {}
    showToast(dark ? "Qorong'i rejim yoqildi" : "Yorug' rejim yoqildi");
  });

  // 21. Tezkor aloqa tugmasi
  const speedDial = document.getElementById("speedDial");
  document.getElementById("dialMain").addEventListener("click", function () {
    speedDial.classList.toggle("open");
  });

  // 22. Footerga boshqa sahifalar havolalari
  const footerEl = document.querySelector("footer");
  if (footerEl) {
    const links = document.createElement("div");
    links.className = "footer-links";
    links.innerHTML =
      '<a href="team.html">JAMOA</a>' +
      '<a href="blog.html">BLOG</a>' +
      '<a href="offers.html">AKSIYALAR</a>';
    footerEl.insertBefore(links, footerEl.firstChild);
  }

});/* more.js: script.js dan KEYIN ulanadi. Mavjud kodga tegmaydi. */
document.addEventListener("DOMContentLoaded", function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function toast(m) {
    var t = document.getElementById("toast"); if (!t) return;
    t.textContent = m; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  // 1. Ochiq / yopiq belgisi (Toshkent vaqti, 10:00-23:00)
  var h1 = $(".hero-content h1");
  if (h1) {
    var hour = parseInt(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone: "Asia/Tashkent" }).format(new Date()), 10);
    var open = hour >= 10 && hour < 23;
    var b = document.createElement("div");
    b.className = "open-badge" + (open ? "" : " closed");
    b.innerHTML = "<i></i>" + (open ? "HOZIR OCHIQ · 23:00 GACHA" : "HOZIR YOPIQ · 10:00 DA OCHILADI");
    h1.insertAdjacentElement("afterend", b);
  }

  // 2. Menyu: qidiruv + narx bo'yicha tartiblash
  var grid = $(".menu-grid");
  if (grid) {
    var tools = document.createElement("div");
    tools.className = "menu-tools";
    tools.innerHTML = '<input type="search" placeholder="Taom qidirish..." id="menuSearch">' +
      '<select id="menuSort"><option value="">Tartib: standart</option><option value="asc">Narx: arzondan qimmatga</option><option value="desc">Narx: qimmatdan arzonga</option></select>';
    grid.parentNode.insertBefore(tools, grid);
    var empty = document.createElement("p");
    empty.className = "menu-empty"; empty.textContent = "Hech narsa topilmadi";
    grid.appendChild(empty);
    var original = Array.prototype.slice.call(grid.querySelectorAll(".menu-item"));
    var price = function (el) { return parseFloat($(".menu-header span", el).textContent.replace("$", "")); };

    $("#menuSearch").addEventListener("input", function () {
      var q = this.value.toLowerCase().trim(), n = 0;
      original.forEach(function (it) {
        var ok = it.textContent.toLowerCase().indexOf(q) > -1;
        it.classList.toggle("hidden-by-search", !ok);
        if (ok && it.style.display !== "none") n++;
      });
      empty.style.display = n ? "none" : "block";
    });
    $("#menuSort").addEventListener("change", function () {
      var arr = original.slice();
      if (this.value) arr.sort(function (a, b) { return this.value === "asc" ? price(a) - price(b) : price(b) - price(a); }.bind(this));
      arr.forEach(function (it) { grid.insertBefore(it, empty); });
    });
  }

  // 3. Telefon raqam maskasi: +998 90 123 45 67
  var phone = document.getElementById("phone");
  if (phone) {
    phone.setAttribute("maxlength", "17");
    phone.addEventListener("input", function () {
      var d = this.value.replace(/\D/g, "");
      if (d.indexOf("998") === 0) d = d.slice(3);
      d = d.slice(0, 9);
      var p = "+998";
      if (d.length) p += " " + d.slice(0, 2);
      if (d.length > 2) p += " " + d.slice(2, 5);
      if (d.length > 5) p += " " + d.slice(5, 7);
      if (d.length > 7) p += " " + d.slice(7, 9);
      this.value = p;
    });
  }

  // 4. Bronlarni saqlash va ko'rsatish (localStorage)
  var form = document.getElementById("bookingForm");
  if (form) {
    var list = document.createElement("div");
    list.className = "my-bookings";
    form.parentNode.appendChild(list);
    var load = function () { try { return JSON.parse(localStorage.getItem("bookings") || "[]"); } catch (e) { return []; } };
    var save = function (a) { try { localStorage.setItem("bookings", JSON.stringify(a)); } catch (e) {} };
    var render = function () {
      var a = load();
      list.innerHTML = a.length ? "<h4>MENING BRONLARIM</h4><ul></ul>" : "";
      var ul = $("ul", list);
      a.forEach(function (x, i) {
        var li = document.createElement("li");
        li.innerHTML = "<span>" + x.date + " · " + x.time + " · " + x.people + " kishi</span><button data-i=\"" + i + "\">O'CHIRISH</button>";
        ul.appendChild(li);
      });
    };
    list.addEventListener("click", function (e) {
      var i = e.target.getAttribute("data-i"); if (i === null) return;
      var a = load(); a.splice(+i, 1); save(a); render(); toast("Bron o'chirildi");
    });
    form.addEventListener("submit", function () {
      var a = load();
      a.push({ date: $("#date").value, time: $("#time").value, people: $("#people").value });
      save(a); render();
    }, true);
    render();
  }

  // 5. Yangiliklarga obuna bo'limi (footer oldidan)
  var foot = $("footer");
  if (foot) {
    var sec = document.createElement("section");
    sec.className = "news-section";
    sec.innerHTML = '<div class="container"><h2>YANGILIKLARGA OBUNA BO\'LING</h2><div class="line yellow-line"></div>' +
      '<form class="news-form"><input type="email" placeholder="Email manzilingiz" required><button class="btn btn-yellow">OBUNA</button></form></div>';
    foot.parentNode.insertBefore(sec, foot);
    $("form", sec).addEventListener("submit", function (e) {
      e.preventDefault(); this.reset(); toast("Obuna bo'ldingiz! Rahmat");
    });
  }

  // 6. Cookie banner
  var accepted = false; try { accepted = localStorage.getItem("cookies") === "1"; } catch (e) {}
  if (!accepted) {
    var c = document.createElement("div");
    c.className = "cookie-bar";
    c.innerHTML = "<span>Sayt tajribangizni yaxshilash uchun cookie fayllardan foydalanadi.</span><button class=\"btn btn-yellow\">OK</button>";
    document.body.appendChild(c);
    setTimeout(function () { c.classList.add("show"); }, 2500);
    $("button", c).addEventListener("click", function () {
      try { localStorage.setItem("cookies", "1"); } catch (e) {}
      c.classList.remove("show"); setTimeout(function () { c.remove(); }, 700);
    });
  }

  // 7. Mobil hamburger menyu
  var nav = $(".navbar");
  if (nav) {
    var tg = document.createElement("button");
    tg.className = "nav-toggle"; tg.setAttribute("aria-label", "Menyu");
    tg.innerHTML = '<i class="fa-solid fa-bars"></i>';
    nav.insertBefore(tg, $(".logo", nav).nextSibling);
    tg.addEventListener("click", function () { nav.classList.toggle("nav-open"); });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") nav.classList.remove("nav-open"); });
  }
});/* plus.js: script.js (va more.js) dan KEYIN ulanadi. Mavjud kodga tegmaydi. */
document.addEventListener("DOMContentLoaded", function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function toast(m) {
    var t = $("#toast"); if (!t) return;
    t.textContent = m; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  // 1. Sevimli taomlar (yurakcha) + "SEVIMLILAR" filtri
  var items = $$(".menu-item");
  var favs = []; try { favs = JSON.parse(localStorage.getItem("favs") || "[]"); } catch (e) {}
  var nameOf = function (it) { return $("h4", it).textContent.trim(); };
  items.forEach(function (it) {
    var b = document.createElement("button");
    b.className = "fav-btn" + (favs.indexOf(nameOf(it)) > -1 ? " on" : "");
    b.innerHTML = '<i class="fa-solid fa-heart"></i>';
    it.appendChild(b);
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var n = nameOf(it), i = favs.indexOf(n);
      if (i > -1) favs.splice(i, 1); else favs.push(n);
      b.classList.toggle("on", i === -1);
      try { localStorage.setItem("favs", JSON.stringify(favs)); } catch (er) {}
      toast(i === -1 ? "Sevimlilarga qo'shildi" : "Sevimlilardan olindi");
    });
  });
  var cats = $(".menu-categories");
  if (cats) {
    var fb = document.createElement("button");
    fb.className = "menu-btn fav-filter";
    fb.innerHTML = '<i class="fa-solid fa-heart"></i> SEVIMLI';
    cats.appendChild(fb);
    fb.addEventListener("click", function () {
      $$(".menu-btn", cats).forEach(function (x) { x.classList.remove("active"); });
      fb.classList.add("active");
      items.forEach(function (it) { it.style.display = favs.indexOf(nameOf(it)) > -1 ? "block" : "none"; });
    });
    $$(".menu-btn", cats).forEach(function (x) {
      if (x !== fb) x.addEventListener("click", function () { fb.classList.remove("active"); });
    });
  }

  // 2. Savatni Telegram orqali yuborish
  var clear = $("#clearCart");
  if (clear) {
    var tg = document.createElement("button");
    tg.className = "tg-order";
    tg.innerHTML = '<i class="fa-brands fa-telegram"></i> TELEGRAMGA YUBORISH';
    clear.parentNode.insertBefore(tg, clear);
    tg.addEventListener("click", function () {
      var rows = $$(".cart-row");
      if (!rows.length) { toast("Savatcha bo'sh!"); return; }
      var txt = "Hungry People buyurtmasi:\n" + rows.map(function (r) {
        return "- " + $("h5", r).textContent + " x" + $(".qty span", r).textContent;
      }).join("\n") + "\nJami: " + $("#cartTotal").textContent;
      window.open("https://t.me/share/url?url=" + encodeURIComponent("https://t.me/") + "&text=" + encodeURIComponent(txt), "_blank");
    });
  }

  // 3. Aloqa ma'lumotlari kartalari (bosib nusxalash)
  var cf = $("#contactForm");
  if (cf) {
    var cards = document.createElement("div");
    cards.className = "info-cards";
    cards.innerHTML =
      '<div class="info-card" data-copy="+998901234567"><i class="fa-solid fa-phone"></i><h4>TELEFON</h4><p>+998 90 123 45 67</p></div>' +
      '<div class="info-card" data-copy="Samarqand shahri"><i class="fa-solid fa-location-dot"></i><h4>MANZIL</h4><p>Samarqand shahri</p></div>' +
      '<div class="info-card" data-copy="10:00 - 23:00"><i class="fa-regular fa-clock"></i><h4>ISH VAQTI</h4><p>10:00 - 23:00</p></div>';
    cf.parentNode.insertBefore(cards, cf);
    cards.addEventListener("click", function (e) {
      var c = e.target.closest(".info-card"); if (!c) return;
      if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).catch(function () {});
      toast("Nusxalandi: " + c.dataset.copy);
    });
  }

  // 4. Hero fon rasmlari almashinuvi
  var hero = $(".hero");
  if (hero) {
    var bg = ["1544025162-d76694265947", "1555396273-367ea4eb4db5", "1567620905732-2d1ec7ab7445", "1511795409834-ef04bbd61622"], k = 0;
    setInterval(function () {
      k = (k + 1) % bg.length;
      hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-" + bg[k] + "?w=1200&auto=format&fit=crop')";
    }, 6000);
  }

  // 5. Konfetti (bron va buyurtmada)
  function confetti() {
    var cv = document.createElement("canvas");
    cv.className = "confetti-canvas";
    cv.width = innerWidth; cv.height = innerHeight;
    document.body.appendChild(cv);
    var ctx = cv.getContext("2d"), cols = ["#e8c300", "#fff", "#e74c3c", "#2ecc71", "#3498db"];
    var ps = Array.apply(null, Array(110)).map(function () {
      return { x: Math.random() * cv.width, y: -20 - Math.random() * 200, r: 4 + Math.random() * 5, vy: 2 + Math.random() * 4, vx: -2 + Math.random() * 4, c: cols[Math.floor(Math.random() * cols.length)] };
    });
    var t0 = Date.now();
    (function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(function (p) { p.x += p.vx; p.y += p.vy; ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.r, p.r * 1.6); });
      if (Date.now() - t0 < 2800) requestAnimationFrame(draw); else cv.remove();
    })();
  }
  var bf = $("#bookingForm");
  if (bf) bf.addEventListener("submit", confetti, true);
  var co = $("#checkoutBtn");
  if (co) co.addEventListener("click", function () {
    if ($("#cartTotal").textContent !== "$0.00") confetti();
  }, true);

  // 6. O'ng tomondagi bo'limlar nuqtalari
  var secs = [["about", "ABOUT"], ["chef", "TEAM"], ["booking", "BOOKING"], ["menu", "MENU"], ["events", "EVENTS"], ["gallery", "GALLERY"], ["contact", "CONTACT"]]
    .filter(function (s) { return document.getElementById(s[0]); });
  if (secs.length) {
    var dots = document.createElement("div");
    dots.className = "side-dots";
    dots.innerHTML = secs.map(function (s) { return '<a href="#' + s[0] + '" data-label="' + s[1] + '"></a>'; }).join("");
    document.body.appendChild(dots);
    var obs = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (e.isIntersecting) $$("a", dots).forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { threshold: 0.4 });
    secs.forEach(function (s) { obs.observe(document.getElementById(s[0])); });
  }

  // 7. Maxsus taklif oynasi (25 soniyadan keyin, bir marta)
  var seen = false; try { seen = sessionStorage.getItem("promo") === "1"; } catch (e) {}
  if (!seen) setTimeout(function () {
    var ov = document.createElement("div");
    ov.className = "promo-overlay";
    ov.innerHTML = '<div class="promo-box"><span class="promo-x">&times;</span><p>MAXSUS TAKLIF</p><div class="big">20%</div><p>birinchi buyurtmaga chegirma</p><div class="code">HUNGRY20</div><br><a href="#booking" class="btn btn-yellow">STOL BAND QILISH</a></div>';
    document.body.appendChild(ov);
    setTimeout(function () { ov.classList.add("open"); }, 50);
    try { sessionStorage.setItem("promo", "1"); } catch (e) {}
    var close = function () { ov.remove(); };
    $(".promo-x", ov).addEventListener("click", close);
    $(".btn", ov).addEventListener("click", close);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    $(".code", ov).addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText("HUNGRY20").catch(function () {});
      toast("Kupon nusxalandi: HUNGRY20");
    });
  }, 25000);
});