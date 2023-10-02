import "./style.css";
const galleryContainer = document.querySelector(".gallery");
const blogContainer = document.querySelector(".blog-img");
const indoorContainer = document.querySelector(".indoor");

const indoorDetails = [
  {
    img: "https://images.unsplash.com/photo-1602774895672-b553538bceb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    number: "01",
    title: "Indoor Swiming Pool",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
  {
    img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    number: "02",
    title: "Gym Training Ground",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
  {
    img: "https://images.unsplash.com/photo-1615976678499-7e642bc84f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    number: "03",
    title: "Caffe & Restaurant",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
];
const galleryImages = [
  "https://images.unsplash.com/photo-1584280795027-321f4d68e77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1527005980469-e172416c200b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
];

const blogArray = [
  {
    img: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    text: "New facilites: Large golf course at the Zerra hotel",
    date: "25 May 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1580785692886-839ae39fc37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    text: "Coming soon! a posh supermarket near the hotel",
    date: "12 May 2023",
  },
  {
    img: "https://images.unsplash.com/photo-1559523275-98fb3c56faf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
    text: "Webinar event Mental training for young people to develop",
    date: "15 Apr 2023",
  },
];

indoorDetails.forEach((details) => {
  let indoorHtml = `
    <img
      src="${details.img}"
      alt=""
    />
    <h3>${details.number}</h3>
    <div class="desc">
      <h1>${details.title}</h1>
      <p class="padding">
        ${details.desc}
      </p>
      <a href="">
        <svg
          fill="#a9a1a1"
          class="padding"
          width="50px"
          height="50px"
          viewBox="0 0 0.939 0.939"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow"
        >
          <path
            d="M0.519 0.144a0.061 0.061 0 0 1 0.089 0L0.889 0.425a0.061 0.061 0 0 1 0 0.089L0.606 0.795a0.061 0.061 0 0 1 -0.088 -0.089l0.168 -0.175H0.094a0.061 0.061 0 0 1 0 -0.125H0.688L0.519 0.231a0.061 0.061 0 0 1 0 -0.089Z"
          />
        </svg>
      </a>
    </div>
  <hr>`;
  indoorContainer.innerHTML += indoorHtml;
});

blogArray.forEach((blog) => {
  let blogHtml = `<div class="section">
    <img
    src="${blog.img}"
    alt=""
    />
  <p>${blog.text}</p>
  <h4>${blog.date}</h4>
</div>`;
  blogContainer.innerHTML += blogHtml;
});

galleryImages.forEach((url) => {
  let imgHtml = `<div class="">
  <img
    src="${url}"
    alt=""
  />
</div>`;
  galleryContainer.innerHTML += imgHtml;
});
