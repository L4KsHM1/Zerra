import "./style.css";
const imgContainer = document.querySelector(".gallery");
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
imgArray.forEach((url) => {
  let imgHtml = `<div class="img1">
  <img
    src="${url.imgUrl}"
    alt=""
  />
</div>`;
  imgContainer.innerHTML += imgHtml;
});
