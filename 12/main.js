let logos = [
  {
    id: 1,
    img: "./img/apple.png",
  },
  {
    id: 2,
    img: "./img/brainster.png",
  },
  {
    id: 3,
    img: "./img/github.png",
  },
  {
    id: 4,
    img: "./img/google.png",
  },
  {
    id: 5,
    img: "./img/lyft.png",
  },
  {
    id: 6,
    img: "./img/paypal.png",
  },
  {
    id: 7,
    img: "./img/ripple.png",
  },
  {
    id: 8,
    img: "./img/spotify.png",
  },
  {
    id: 9,
    img: "./img/tesla.png",
  },
  {
    id: 10,
    img: "./img/uber.png",
  },
  {
    id: 11,
    img: "./img/youtube.png",
  },
];

// exercise I
let logosWrapper = document.querySelector(".logos-wrapper");

logos.forEach((el) => {
  logosWrapper.innerHTML += `<div class="col-3 mb-3 logo-item">
        <img src="${el.img}"/>
    </div>`;
});

let logosLength = logos.length;

if (logosLength > 4) {
  // exercise II
  let shuffledArr = [];

  // i = 0, 1, 2
  for (let i = 0; i < logos.length; i++) {
    let randomElement = Math.floor(Math.random() * logos.length); //2 , 5, 7

    if (shuffledArr.includes(logos[randomElement])) {
      console.log('postoi toj element, ne go dodavaj');
      i--;
    } else {
      shuffledArr.push(logos[randomElement]); //[logos[2]--3tiot objekt, logos[5]--6ti objekt]
    }
  }

  logosWrapper.innerHTML = '';

  shuffledArr.forEach((result) => {
    logosWrapper.innerHTML += `<div class="col-3 mb-3 logo-item">
        <img src="${result.img}"/>
    </div>`;
  });

  console.log(shuffledArr);

  // exercise III
  let results = [];

  for (let i = 0; i < logos.length; i = i + 4) {
    results.push(shuffledArr.slice(i, i + 4));

    // slice(0,4) slice(4,8) slice(8,12)
    // shuffledArr - [{}, {}, {}, {}, {}, {},{}, {}, {}, {}, {},]
    // results - [ [{}, {}, {}, {}], [{},{}, {}, {}], [{}, {}, {}]]
  }

  console.log(results);

  // exercise IV
  logosWrapper.innerHTML = '';

  results[0].forEach((result) => {
    logosWrapper.innerHTML += `<div class="col-3 mb-3 logo-item">
        <img src="${result.img}"/>
    </div>`;
  });

  //   exercise V
  let currentShown = 0;

  setInterval(() => {
    // (currentShown === results.length - 1) ? (currentShown = 0) : currentShown++;

    if(currentShown === results.length - 1) {
      currentShown = 0;
    } else {
      currentShown++;
    }

    logosWrapper.innerHTML = '';

    results[currentShown].forEach((result) => {
      logosWrapper.innerHTML += `<div class="col-3 mb-3 logo-item">
            <img src="${result.img}"/>
        </div>`;
    });
  }, 6000);
}
