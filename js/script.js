// === NAV TOGGLE === //
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

if (ToggleBtnId) {
  ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
  });
}
if (CloseBtnId) {
  CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
  });
}

// === AOS === //
AOS.init();

// === GSAP ANIMASI DENGAN CEK ELEMENT === //
const animate = (selector, config) => {
  if (document.querySelector(selector)) {
    gsap.from(selector, config);
  }
};

animate(".logo", { opacity: 0, y: -10, delay: 1, duration: 0.5 });
animate(".nav_menu_list .nav_menu_item", { opacity: 0, y: -10, delay: 1, duration: 0.5, stagger: 0.3 });
animate(".toggle_btn", { opacity: 0, y: -10, delay: 1, duration: 0.5 });
animate(".main-heading", { opacity: 0, y: 20, delay: 2, duration: 0.5 });
animate(".btn_wrapper", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".team_img_wrapper img", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".info-text", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".fasilitas", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".tentang", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".title_tipe_rumah", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });
animate(".tipe_rumah", { opacity: 0, y: 20, delay: 1.8, duration: 0.5 });

// === DARK MODE TOGGLE === //
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (toggle) {
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
  });
}

// LOAD ALL TYPE HOUSE

const jsonData = {
  "rumah": [
    {
      type: "A",
      gambar_rumah: "./img/house-1.png",
      nama: "Case Verde",
      luas_bangunan: 120,
      luas_tanah: 200,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi: "Case Verde, Rumah dengan design modern dan luas tanah yang cukup untuk kehidupan keluarga. dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga Anda.",
      harga: "700Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg"
    },
    {
      type: "B",
      gambar_rumah: "./img/house-2.png",
      nama: "Sky Villa",
      luas_bangunan: 180,
      luas_tanah: 250,
      kamar_mandi: 3,
      kamar_tidur: 4,
      deskripsi: "Sky Villa, Rumah mewah dengan pemandangan yang menakjubkan, Dengan 3 kamar mandi dan 4 kamar tidur, rumah ini adalah tempat yang sempurna untuk hidup bergaya dengan bersantai di atas langit biru.",
      harga: "800Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg"
    },
    {
      type: "C",
      gambar_rumah: "./img/house-3.png",
      nama: "Lakeview Mansion",
      luas_bangunan: 220,
      luas_tanah: 300,
      kamar_mandi: 4,
      kamar_tidur: 5,
      deskripsi: "Lakeview Mansion, Rumah megah dengan pemandangan danau yang menakjubkan dengan empat kamar mandi dan lima kamar tidur, rumah ini menghadirkan keagungan dan kenyamanan untuk gaya hidup bergengsi.",
      harga: "900Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg"
    },
    {
      type: "D",
      gambar_rumah: "./img/house-4.png",
      nama: "Garden Retreat",
      luas_bangunan: 150,
      luas_tanah: 180,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi: "Garden Retreat, rumah elgan dengan taman yang indah. dengan dua kamar mandi dan tiga kamar tidur, memberikan keseimbangan sempurna antara ke indahan alam dan kenyamanan rumah modern.",
      harga: "950Jt-an",
      carpot: "1",
      denah_rumah: "./img/denah_rumah.jpg"
    }
  ]
}
//function dynamic create html for each house
function createHouseCard(house, index, isMobileView) {
  const isOdd = index % 2 === 1;

  const penjelasan = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_bangunan}</h3>
              <p>Luas Bangunan</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_tanah}</h3>
              <p>Luas Tanah</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-shower"></i>
              <h3>${house.kamar_mandi}</h3>
              <p>Kamar Mandi</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
          <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
            <i class="fa fa-bed"></i>
            <h3>${house.kamar_tidur}</h3>
            <p>Kamar Tidur</p>
          </div>
        </div>
        </div>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-1" style="text-decoration:none;">
            Selengkapnya
        </a>
      </div>
    `;

  const gambar_rumah = `
      <div class="col-md-6 mt-4 mb-4">
        <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
    </div>
      `;

  var html = ``
  if (isOdd) {
    html = gambar_rumah + penjelasan;
  } else {
    html = penjelasan + gambar_rumah;
  }

  // handle mobile view 
  if (isMobileView) {
    html = gambar_rumah + penjelasan;
  }

  return html;

}

function createTipeLain(house) {
  const item = `
  <div class="col-md-6 mt-4 mb-4">
    <img src="${house.gambar_rumah}" class="w-100" style="max-height: 200px; object-fit:cover; object-position: bottom;">
    <br><br>
    <a href="./detail_rumah.html?tipe_rumah=${house.type}">
        <h3 class="text-center">Rumah ${house.nama}</h3>
    </a>
  </div>
  `;

  return item;
}

// Load data into html  web view
const rumahContainer = document.getElementById('rumahContainer')
if (rumahContainer != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, false);
    rumahContainer.innerHTML += houseCard;
  })
}

// load data into mobile html view
const rumahContainerMobile = document.getElementById('rumahContainerMobile')
if (rumahContainerMobile != null) {
  jsonData.rumah.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, true);
    rumahContainerMobile.innerHTML += houseCard;
  })
}

// load data tipe lain
const lihatTipeLain = document.getElementById('lihatTipeLain')
if (lihatTipeLain != null) {
  jsonData.rumah.forEach((house) => {
    const tipeCard = createTipeLain(house);
    lihatTipeLain.innerHTML += tipeCard;
  });
}

// LOAD DERTAIL RUMAH --------

function filterRumahByTipe(type) {
  const filteredRumah = jsonData.rumah.find(rumah => rumah.type == type);
  return filteredRumah || null;
}

var queryString = window.location.search;

var searchParams = new URLSearchParams(queryString);

var tipeRumahValue = searchParams.get('tipe_rumah');

//LOAD DATA TO VIEW HTML

if (tipeRumahValue != null && tipeRumahValue != "") {
  const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase())

  if (filteredRumah == null) {
    console.log("rumah not found");
  } else {
    document.getElementById("title-nama-rumah").innerText = 'Rumah' + filteredRumah.nama;
    document.getElementById("gambar-rumah").src = filteredRumah.gambar_rumah;
    document.getElementById("nama-rumah").innerText = filteredRumah.nama;
    document.getElementById("deskripsi-rumah").innerText = filteredRumah.deskripsi;
    document.getElementById("harga-rumah").innerText = filteredRumah.harga;
    document.getElementById("luas-bangunan-rumah").innerText = filteredRumah.luas_bangunan;
    document.getElementById("luas-tanah-rumah").innerText = filteredRumah.luas_luas_tanah;
    document.getElementById("kamar-mandi-rumah").innerText = filteredRumah.kamar_mandi;
    document.getElementById("kamar-tidur-rumah").innerText = filteredRumah.kamar_tidur;
    document.getElementById("carpot-rumah").innerText = filteredRumah.carpot;
    document.getElementById("denah-rumah").src = filteredRumah.denah - rumah;
  }
}

// ===== BLOG DATA =====
const blogData = [
  {
    id: 1,
    title: "Perumahan dengan Hunian Nyaman dan Modern: Casa Verde di MySkill Residence",
    date: "21 Maret 2025, 09:00 AM",
    description:
      "Dalam dunia properti, terutama di industri perumahan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. Salah satu perumahan yang menawarkan konsep tersebut adalah Myskill Residence dengan tipe hunian bernama Casa Verde...",
    detail_blog: "./content/blog-1.html",
    image_blog: "./img/house-1.png"
  },
  {
    id: 2,
    title: "Menikmati Kemewahan Hidup di Sky Villa: Rumah Hunian Modern dengan Pemandangan Mengagumkan",
    date: "22 Maret 2024, 08:00 AM",
    description:
      "Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru...",
    detail_blog: "./content/blog-2.html",
    image_blog: "./img/house-2.png"
  }
];

// ===== GENERATE BLOG CARD =====
function generateBlogHTML(blogPost) {
  return `
    <div class="card mb-4">
      <div class="row">
        <div class="col-md-4">
          <img src="${blogPost.image_blog}" alt="${blogPost.title}" width="100%" height="100%" />
        </div>
        <div class="col-md-8 pt-4">
          <div>
            <h5>${blogPost.title}</h5>
            <div class="blog-date d-flex mt-1">
              <i class="fa fa-calendar me-2 mt-1"></i>
              <p>${blogPost.date}</p>
            </div>
            <p class="description-blog mt-1">${blogPost.description}</p>
            <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
              <i class="fa fa-book me-1"></i>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== GENERATE LATEST BLOG =====
function generateLatestBlogHTML(blogPost) {
  return `
    <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-item">
      <p>${blogPost.title}</p>
      <div class="blog-date d-flex mt-1">
        <i class="fa fa-calendar me-2 mt-1"></i>
        <p>${blogPost.date}</p>
      </div>
      <hr>
    </a>
  `;
}

// ===== RENDER BLOGS =====
function renderBlogPosts(filteredBlogData = [], isFiltered = false) {
  const blogContainer = document.getElementById('blogContainer');
  const latestBlogContent = document.getElementById('latestBlogContent');

  if (latestBlogContent) {
    latestBlogContent.innerHTML = '';
    const lastTwoBlogPosts = blogData.slice(-2);
    lastTwoBlogPosts.forEach(blogPost => {
      latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost);
    });
  }

  if (!blogContainer) return;

  blogContainer.innerHTML = '';

  const dataToRender = isFiltered ? filteredBlogData : blogData;

  if (isFiltered && dataToRender.length === 0) {
    const emptyStateDiv = document.createElement('div');
    emptyStateDiv.textContent = "No blog posts available.";
    blogContainer.appendChild(emptyStateDiv);
    return;
  }

  dataToRender.forEach(blogPost => {
    blogContainer.innerHTML += generateBlogHTML(blogPost);
  });
}

// ===== SEARCH BLOG =====
function searchBlog(input) {
  const searchTerm = input.value.toLowerCase();
  const filteredBlogData = blogData.filter(blogPost =>
    blogPost.title.toLowerCase().includes(searchTerm) ||
    blogPost.description.toLowerCase().includes(searchTerm)
  );

  renderBlogPosts(filteredBlogData, searchTerm !== '');
}

// ===== ON LOAD PAGE =====
window.onload = function () {
  renderBlogPosts();
  renderBlogDetailFromQuery();
};

// ===== GET BLOG BY ID =====
function getBlogById(blogId) {
  return blogData.find(blog => blog.id === blogId) || null;
}

// ===== LOAD BLOG DETAIL =====
function renderBlogDetailFromQuery() {
  const searchParams = new URLSearchParams(window.location.search);
  const idBlogValue = searchParams.get('id');

  if (idBlogValue) {
    const selectedBlog = getBlogById(parseInt(idBlogValue, 10));
    if (selectedBlog) {
      const img = document.getElementById("cardDetailImg");
      const tgl = document.getElementById("tgl-blog");
      const title = document.getElementById("title-blog");
      const frame = document.getElementById("cardDetailBlog");

      if (img) img.src = selectedBlog.image_blog;
      if (tgl) tgl.innerText = selectedBlog.date;
      if (title) title.innerText = selectedBlog.title;
      if (frame) frame.src = selectedBlog.detail_blog;
    } else {
      console.error("Error: Blog post not found for id: " + idBlogValue);
    }
  }
}
