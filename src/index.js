const imagesMap = [
  "tents6.jpeg",
  "flowers.jpg",
  "backyard7.jpeg",
  "tents2.jpg",
  "backyard4.jpeg",
  "backyard3.jpeg",
  "tents7.jpeg",
  "fireplace.jpeg",
  "hamacks.jpeg",
  "summercamp.jpg",
  "backyard6.jpeg",
  "tents4.jpeg",
];

const galleryContainer = document.getElementById("photo-gallery-wrapper");

const fragment = document.createDocumentFragment();

imagesMap.forEach((imgSrc) => {
  const image = document.createElement("img");
  image.src = "./media/img/" + imgSrc;
  image.alt = "...";
  const link = document.createElement("a");
  link.href = "./media/img/" + imgSrc;
  link.target = "_blank";
  link.appendChild(image);
  fragment.appendChild(link);
});

galleryContainer.appendChild(fragment);
