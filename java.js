// Data kegiatan dengan password dan foto dokumentasi
const activities = {
   "apel": {
    password: "apel",
    images: [
      "apel1.jpg",
      "apel2.jpg"
    ]
  },
  "keagamaan": {
    password: "keagamaan",
    images: [
      "yasinan1.jpg",
      "nonis.jpg"
    ]
  },
  "materi": {
    password: "materi",
    images: [
      "materi1.jpg",
      "materi2.jpg"
    ]
  },
  "bootcamp": {
    password: "bootcamp",
    images: [
      "bootcamp1.JPG",
      "bootcamp2.JPG"
    ]
  },
  "bukber": {
    password: "bukber",
    images: [
      "bukber1.png",
      "bukber2.png"
    ]
  },
  "ukt": {
    password: "ukt",
    images: [
      "uktt.jpg",
      "ukt2.jpg"
    ]
  },
  "ldk": {
    password: "ldk",
    images: [
      "ldk1.png",
      "ldk2.png"
    ]
  },
  "invention": {
    password: "invention",
    images: [
      "ivention1.jpg",
      "ivention2.jpg"
    ]
  }
  // Tambah kegiatan lain sesuai kebutuhan
};

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

// Fungsi validasi login
function checkLogin(event) {
  event.preventDefault();

  const eventNameInput = document.getElementById("eventName").value.trim().toLowerCase();
  const passwordInput = document.getElementById("password").value.trim();

  if (!activities[eventNameInput]) {
    alert("Nama kegiatan tidak ditemukan.");
    return false;
  }

  if (activities[eventNameInput].password !== passwordInput) {
    alert("Password salah.");
    return false;
  }

  // Login berhasil
  showDocumentation(eventNameInput);

  return true;
}

function showDocumentation(eventName) {
  const docSection = document.getElementById("docContent");
  const gallery = document.getElementById("gallery");
  const eventTitle = document.getElementById("eventTitle");

  // Clear previous images
  gallery.innerHTML = "";

  const images = activities[eventName].images;

  images.forEach((imgUrl) => {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = eventName + " documentation";
    gallery.appendChild(img);
  });

  eventTitle.textContent = eventName.charAt(0).toUpperCase() + eventName.slice(1);
  docSection.classList.remove("hidden");
}