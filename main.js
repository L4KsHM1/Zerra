import "./style.css";
const imgContainer = document.querySelector(".gallery");
const blogContainer = document.querySelector(".blog-img");
const imgArray = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1584280795027-321f4d68e77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1527005980469-e172416c200b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
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
    img: "https://images.unsplash.com/photo-1580785692886-839ae39fc37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    text: "Webinar event Mental training for young people to develop",
    date: "15 Apr 2023",
  },
];

blogArray.forEach((blog) => {
  let blogHtml = `<img
    src=" ${blog.img}"
    alt=""
  />
  <p>${blog.text}</p>
  <h4>${blog.date}</h4>`;
  blogContainer.innerHTML += blogHtml;
});

imgArray.forEach((url) => {
  let imgHtml = `<div class="img1">
  <img
    src="${url.imgUrl}"
    alt=""
  />
</div>`;
  imgContainer.innerHTML += imgHtml;
});
