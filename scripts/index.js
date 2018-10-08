// Data File
var bunsData = [{
    identifier: "original",
    image: "bunbun_original.jpg",
    icon: "icon_popular.png",
    title: "Original Bun",
    desc: "The original bun tastes great. It is great for people who have not experienced Bun Bun Bakeshop yet and want to try the first flavor we came up with."
  },
  {
    identifier: "walnut",
    image: "bunbun_walnut.jpg",
    icon: "icon_healthy.png",
    title: "Walnut Bun",
    desc: "The walnut bun tastes great. It is great for people whowant to be healthier. For those who need a diet change or a healthier lifestyle, this is a great roll to try."
  },
  {
    identifier: "originalGF",
    image: "bunbun_original.jpg",
    icon: "icon_popular.png",
    title: "Original Bun (GF)",
    desc: "The original bun tastes great - this is the gluten free edition! It is great for people who have not experienced Bun Bun Bakeshop yet and want to try the first flavor we came up with."
  },
  {
    identifier: "blackberry",
    image: "bunbun_blackberry.jpg",
    icon: "icon_healthy.png",
    title: "Blackberry",
    desc: "The original bun tastes great - this is the gluten free edition! It is great for people who have not experienced Bun Bun Bakeshop yet and want to try the first flavor we came up with."
  },
  {
    identifier: "pumpkinSpice",
    image: "bunbun_pumpkinSpice.jpg",
    icon: "icon_healthy.png",
    title: "Pumpkin Spice",
    desc: "The original bun tastes great - this is the gluten free edition! It is great for people who have not experienced Bun Bun Bakeshop yet and want to try the first flavor we came up with."
  },
  {
    identifier: "caramelPecan",
    image: "bunbun_caramelPecan.jpg",
    icon: "icon_popular.png",
    title: "Caramel Pecan",
    desc: "The original bun tastes great - this is the gluten free edition! It is great for people who have not experienced Bun Bun Bakeshop yet and want to try the first flavor we came up with."
  }
];

const bunContainerStyles = {
  IMAGETITLE: 0,
  IMAGETITLEBUTTON: 1,
  ALL: 2
}

// These functions are called once the DOM loads

function loadPageWith(bunContainerStyle, numberOfItems) {
  console.log("Page loaded");

  let contentArea = document.getElementsByClassName("whiteBox")[0]

  let bunItemsContainer = document.createElement("div")
  bunItemsContainer.classList.add("bunItemsContainer")

  bunsData.forEach((item, index) => {
    let bun = new Bun(item.identifier, item.image, item.icon, item.title, item.desc);
    console.log(bun);
    console.log(index);
    console.log(numberOfItems);

    if (index < numberOfItems) {
      let style = bunContainerStyle
      switch (style) {
        case bunContainerStyles.IMAGETITLE:
          bunItemsContainer.appendChild(bun.elementWithTitleImage);
          break;
        case bunContainerStyles.IMAGETITLEBUTTON:
          bunItemsContainer.appendChild(bun.elementWithTitleImageButton);
          break;
        case bunContainerStyles.ALL:
          bunItemsContainer.appendChild(bun.elementWithAll);
          break;
        default:
          break;
      }
    }
  })

  contentArea.appendChild(bunItemsContainer);
}

function loadMainBun(identifier) {
  console.log("Main item loaded");

  let contentArea = document.getElementsByClassName("leftContainer")[0]

  bunsData.forEach((item, index) => {
    let bun = new Bun(item.identifier, item.image, item.icon, item.title, item.desc);
    if (identifier === item.identifier) {
      contentArea.appendChild(bun.elementWithMain);
    }
  })
}
