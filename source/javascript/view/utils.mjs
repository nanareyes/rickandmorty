export class Utils {
  static createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style ="width: 18rem"
    return card;
  }
  static createSimpleCard() {
    const simpleCard = document.createElement("div");
    simpleCard.classList.add("card");
    simpleCard.style ="width: 30rem"
    return simpleCard;
  }

  static createImage() {
    return document.createElement("img");
  }

  static createTitle(level = "h1") {
    return document.createElement(level);
  }
  static createDiv() {
    return document.createElement("div");
  }
  static createButton() {
    return document.createElement("button");
  }
  static createParagraph() {
    return document.createElement("p");
  }
}
