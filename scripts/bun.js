class Bun {

  constructor(identifier, imgSrc, icon, title, desc) {
    this.identifier = identifier
    this.imgSrc = imgSrc
    this.icon = icon
    this.title = title
    this.desc = desc
    this.elementWithAll = this.buildAll()
    this.elementWithTitleImage = this.buildWithTitleImage()
    this.elementWithTitleImageButton = this.buildWithTitleImageButton()
    this.elementWithMain = this.buildWithMainTitleImage()
  }

  buildAll() {
    let bunItem = document.createElement("div")
    bunItem.classList.add("bunContainer")

    bunItem.id = this.identifier

    let bunIcon = document.createElement("img")
    bunIcon.classList.add("bunIcon")
    bunIcon.src = "icons/" + this.icon
    bunItem.appendChild(bunIcon)

    let link = document.createElement("a");
    link.href = this.identifier + "Bun.html";
    bunItem.appendChild(link);

    let bunImage = document.createElement("img")
    bunImage.classList.add("bunImage")
    bunImage.src = "images/" + this.imgSrc
    link.appendChild(bunImage);

    let bunTitle = document.createElement("div")
    bunTitle.textContent = this.title
    bunTitle.classList.add("bunTitle")
    bunItem.appendChild(bunTitle)

    let bunDesc = document.createElement("div")
    bunDesc.textContent = this.desc
    bunDesc.classList.add("bunDesc")
    bunItem.appendChild(bunDesc)

    let bunButton = document.createElement("div")
    bunButton.textContent = "Quick Add +"
    bunButton.classList.add("button", "mediumButton")
    bunItem.appendChild(bunButton);

    let bunTextContainer = document.createElement("div")
    bunTextContainer.classList.add("bunTextContainer")
    bunTextContainer.appendChild(bunTitle)
    bunTextContainer.appendChild(bunDesc)
    bunTextContainer.appendChild(bunButton)
    bunItem.appendChild(bunTextContainer)

    return bunItem
  }

  buildWithTitleImage() {
    let bunItem = document.createElement("div")
    bunItem.classList.add("bunContainer")

    bunItem.id = this.identifier

    let bunIcon = document.createElement("img")
    bunIcon.classList.add("bunIcon")
    bunIcon.src = "icons/" + this.icon
    bunItem.appendChild(bunIcon)

    let link = document.createElement("a");
    link.href = this.identifier + "Bun.html";
    bunItem.appendChild(link);

    let bunImage = document.createElement("img")
    bunImage.classList.add("bunImage")
    bunImage.src = "images/" + this.imgSrc
    link.appendChild(bunImage);

    let bunTitle = document.createElement("div")
    bunTitle.textContent = this.title
    bunTitle.classList.add("bunTitle")

    let bunImageAndTitle = document.createElement("div")
    bunImageAndTitle.classList.add("bunImageAndTitleContainer")
    bunImageAndTitle.appendChild(link)
    bunImageAndTitle.appendChild(bunTitle)
    bunItem.appendChild(bunImageAndTitle)

    return bunItem
  }

  buildWithTitleImageButton() {
    let bunItem = document.createElement("div")
    bunItem.classList.add("bunContainer")

    bunItem.id = this.identifier

    let bunIcon = document.createElement("img")
    bunIcon.classList.add("bunIcon")
    bunIcon.src = "icons/" + this.icon
    bunItem.appendChild(bunIcon)

    let link = document.createElement("a");
    link.href = this.identifier + "Bun.html";
    bunItem.appendChild(link);

    let bunImage = document.createElement("img")
    bunImage.classList.add("bunImage")
    bunImage.src = "images/" + this.imgSrc
    link.appendChild(bunImage);

    let bunTitle = document.createElement("div")
    bunTitle.textContent = this.title
    bunTitle.classList.add("bunTitle")
    bunItem.appendChild(bunTitle)

    let bunButton = document.createElement("div")
    bunButton.textContent = "Quick Add +"
    bunButton.classList.add("button", "mediumButton")
    bunItem.appendChild(bunButton);

    let bunTextContainer = document.createElement("div")
    bunTextContainer.classList.add("bunTextContainer")
    bunTextContainer.appendChild(bunTitle)
    bunTextContainer.appendChild(bunButton)
    bunItem.appendChild(bunTextContainer)

    return bunItem
  }

  buildWithMainTitleImage() {
    let bunItem = document.createElement("div")
    bunItem.classList.add("mainBunContainer")

    bunItem.id = this.identifier

    let bunIcon = document.createElement("img")
    bunIcon.classList.add("mainBunIcon")
    bunIcon.src = "icons/" + this.icon
    bunItem.appendChild(bunIcon)

    let link = document.createElement("a");
    link.href = this.identifier + "Bun.html";
    bunItem.appendChild(link);

    let bunImage = document.createElement("img")
    bunImage.classList.add("mainBunImage")
    bunImage.src = "images/" + this.imgSrc
    link.appendChild(bunImage);

    let bunTitle = document.createElement("div")
    bunTitle.textContent = this.title
    bunTitle.classList.add("mainBunTitle")
    bunItem.appendChild(bunTitle);

    let bunIconAndImage = document.createElement("div")
    bunIconAndImage.classList.add("mainBunIconImgContainer")
    bunIconAndImage.appendChild(link)
    bunIconAndImage.appendChild(bunIcon)
    bunItem.appendChild(bunIconAndImage)

    return bunItem
  }

}
