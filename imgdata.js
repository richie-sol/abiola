const imgData = [
    "image1/0R8A0166-min_converted.webp",
    'image1/Anita2270-min_converted.webp',
    'image1/4U2A0190 (1)_converted.webp',
    'image1/Ada2107-min_converted.webp', 
    'image1/Ayomide-Grad0582-min_converted.webp',
    'image1/Ayomideji11793-min_converted.webp',
    'image1/4U2A1842_converted.webp',
    'image1/CHILOTA14578-min_converted.webp',
    'image1/Chioma5597-min_converted.webp',
    "image1/Elo's-Shoot2393-min_converted.webp",
    'image1/Faithful0181-min_converted.webp',
    "image1/Fareedah1231-min_converted.webp",
    "image1/Folashade2464Reworked-min_converted.webp",
    "image1/Funmi4751-min_converted.webp",
    "image1/Ibukun-Ajadi7437-min_converted.webp",
    "image1/IMG_9271-min_converted.webp",
    "image1/Lilly3323-min_converted.webp",
    "image1/Madam-Bukunmi's-Mom15872-min_converted.webp",
    "image1/Moyo3636-min_converted.webp",
    "image1/Tosin7014_converted.webp",
    "image1/Uwaks4521_converted.webp",
    "image1/Victor-williams9945_converted.webp",
    "image1/Tomilola5328_converted.webp",
    "image1/4U2A5223_converted.webp",
    "image1/Ayomideji11664_converted.webp",
    "image1/CHILOTA14421_converted.webp",
    "image1/Folashade2678_converted.webp",
    "image1/Oreofe0004_converted.webp",
    "image1/Orinope1590_converted.webp",
    "image1/PIC_4660_converted.webp",
    "image1/PIKUDA6190_converted.webp",
    "image1/ROMINA7226_converted.webp",
    "image1/SEUN6470_converted.webp",
    "image1/Shukurat6198_converted.webp",
    "image1/Tega-Biodun0874_converted.webp",
    "image1/Tomilola5048_converted.webp",
    "image1/Victor-williams10044_converted.webp",
    "image2/0R8A0229.jpgb-min_converted.webp",
    "image2/Chioma5426-min_converted.webp",
    "image2/Stephanie's-Mom13214-min_converted.webp",
    "image2/David-11308-min_converted.webp",
    "image2/DInma's-Mum0146-1-min_converted.webp",
    "image2/Tega-Biodun1014-min_converted.webp",
    "image2/Jessica12376-min_converted.webp",
    "image2/Madam-Bukunmi's-Mom16182-min_converted.webp",
    "image2/Stephanie's-Mom13328-min_converted.webp",
    "image2/DInma's-Mum0361-min_converted.webp",
    "image2/Semilore5985-min_converted.webp",
    "image2/Faithful0139-min_converted.webp",
    "image2/IMG_9214-min_converted.webp",
    "image1/2U9A7334-min_converted.webp",

]

const gridEl = document.getElementById("image-grid")

let html = ""

for (let i = 0; i < imgData.length; i++){
    html += `
    <a href="${imgData[i]}" data-lightbox="abiola">
  
    <img class="object-cover object-center h-100 max-w-full w-full rounded-md md:h-100 shadow-md hover:scale-[1.02] duration-300 transition"
      src="${imgData[i]}"
      alt=""
      loading="lazy"
       />
  </a>


`
}

gridEl.innerHTML = html;