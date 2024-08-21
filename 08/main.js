// exercise I
// Make a clone of the image in the main-content (where it says Exercise I) and put it inside the sidebar. See how it's supposed to look like on the screenshot.

let img = document.querySelector(".img-clone").innerHTML;
let sidebar = document.querySelector(".sidebar");

sidebar.innerHTML += img;

// example II
// let sidebar = document.querySelector(".sidebar");
// let originalImgSrc = document.querySelector('.img-clone img').src;
// // console.log(originalImgSrc);
// let newImg = document.createElement('img');
// newImg.src = originalImgSrc;
// // newImg.classList.add('img-fluid', 'mt-3');
// newImg.setAttribute('class', 'img-fluid mt-3');

// sidebar.appendChild(newImg);

// example III
// let originalImg = document.querySelector(".img-clone");
// let sidebar = document.querySelector(".sidebar");
// sidebar.appendChild(originalImg.cloneNode(true));

// console.log(img)

// ---------------------------------------------

// exercise II
// There's an array of tags below. Inside the index.html you will find the section where it says Exercise II, there is a div with a class of '.widget-sidebar-tags'. Iterate through the tags and show them as buttons with the following html structure (<a href="#" class="btn btn-outline-secondary btn-sm mr-2 mb-2">Books</a>) inside the '.widget-sidebar-tags' div. See the screenshot how they are supposed to look like.
let sidebarWidgetTags = document.querySelector(".widget-sidebar-tags");
let tags = [
  "Books",
  "Presentation",
  "Study",
  "Blog",
  "Teachers",
  "Courses",
  "Student Life",
  "Test",
  "Certifications",
  "Images",
  "Recent",
];

for (let i = 0; i < tags.length; i++) {
  // example I
  sidebarWidgetTags.innerHTML += `<a href="#" class="btn btn-outline-secondary btn-sm mr-2 mb-2">${tags[i]}</a>`;

  // // example II
  // let link = document.createElement("a");
  // link.innerText = tags[i];
  // link.setAttribute("class", "btn btn-outline-secondary btn-sm mr-2 mb-2");
  // // link.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'mr-2', 'mb-2');
  // link.href = "#";
  // sidebarWidgetTags.appendChild(link);
}

// ---------------------------------------------------

// exercise III
// In the first sidebar widget (that's already done) there are bunch of links and in the main-content there is a main-content-widget that is hidden (display: none), where it says Exercise III. Get every odd link (1/3/5) and place that same link as a child of the main-content-widget, don't re-create it from scratch (hint: innerHTML). After inserting all the links as children, show the main-content-widget on the page (display: block)
let widgetSidebarLinks = document.querySelectorAll(
  ".widget-sidebar .link-block"
);
let mainContentWidget = document.querySelector(".main-content-widget");
let mainContentWidgetPosts = document.querySelector(
  ".main-content-widget .posts-cont"
);
// console.log(widgetSidebarLinks);

for (let i = 0; i < widgetSidebarLinks.length; i++) {
  if (i % 2 === 0) {
    // example I
    let linkHTML = widgetSidebarLinks[i].innerHTML;
    mainContentWidgetPosts.innerHTML += linkHTML;

    // example II
    // mainContentWidgetPosts.appendChild(widgetSidebarLinks[i].cloneNode(true));
  }
}

mainContentWidget.style.display = "block";

// ANOTHER EXAMPLE
// let widgetSidebarLinks = document.querySelectorAll(
//   ".widget-sidebar .link-block:nth-of-type(odd)"
// );
// let mainContentWidget = document.querySelector(".main-content-widget");
// let mainContentWidgetPosts = document.querySelector(
//   ".main-content-widget .posts-cont"
// );

// for (let i = 0; i < widgetSidebarLinks.length; i++) {
//     // example I
//     let linkHTML = widgetSidebarLinks[i].innerHTML;
//     mainContentWidgetPosts.innerHTML += linkHTML;

//     // example II
//     // mainContentWidgetPosts.appendChild(widgetSidebarLinks[i].cloneNode(true));
// }

// mainContentWidget.style.display = "block";

// ----------------------------------------------------

// exercise IV
// You are given an array of images. In html there is a carousel that is hidden (display: none), where it says Exercise IV. The carousel has no carousel-items inside the carousel-inner div. Your task is to iterate through the array of images and for every image create a new slide in the carousel. Make sure you put the active class on the first one only in order to make the carousel work properly. After inserting all the images as carousel slides show the carousel on the page (display: block).
let carousel = document.querySelector(".carousel");
let carouselInner = document.querySelector(".carousel-inner");
// console.log(carouselInner);

let imgsArr = [
  "https://picsum.photos/id/1044/1280/720",
  "https://picsum.photos/id/1040/1280/720",
  "https://picsum.photos/id/1041/1280/720",
  "https://picsum.photos/id/1042/1280/720",
];
// console.log(imgsArr)

// Example of one carousel item (slide)
{
  /* <div class="carousel-item active">
    <img class="d-block w-100" src="https://picsum.photos/id/1044/1280/720" alt="3 slide">
  </div> */
}

for (let i = 0; i < imgsArr.length; i++) {
  // example I
  if (i === 0) {
    carouselInner.innerHTML += `<div class="carousel-item active">
    <img class="d-block w-100" src="${imgsArr[i]}" alt="0 slide">
  </div>`;
  } else {
    carouselInner.innerHTML += `<div class="carousel-item">
    <img class="d-block w-100" src="${imgsArr[i]}" alt="${i+1} slide">
  </div>`;
  }

  // example I - short
  // carouselInner.innerHTML += `<div class="carousel-item ${i==0 ? "active" : ""}">
  //   <img class="d-block w-100" src="${imgsArr[i]}" alt="${i} slide">
  // </div>`;

  // // example II
  // let newDiv = document.createElement("div");
  // newDiv.classList.add("carousel-item");
  // // newDiv.setAttribute('class', 'carousel-item');

  // if (i === 0) {
  //   newDiv.classList.add("active");
  //   // newDiv.setAttribute('class', 'active');
  // }

  // let newImg = document.createElement("img");
  // newImg.src = imgsArr[i];
  // // newImg.setAttribute('src', imgsArr[i]);
  // newImg.classList.add("d-block", "w-100");
  // // newImg.setAttribute('class', 'd-block w-100');
  // newImg.alt = `${i+1} slide`;
  // newDiv.appendChild(newImg);
  // carouselInner.appendChild(newDiv);
}

carousel.style.display = "block";
