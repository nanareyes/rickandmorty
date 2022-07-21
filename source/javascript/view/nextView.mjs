"use strict";

import { Utils } from "./utils.mjs";

export class NextView {
  #privateBody;

  constructor() {
    document.title = "RickAndMortyApi";
    this.#privateBody = document.querySelector("body");
  }
  showCharacters(characters) {
    characters.forEach(character => {
      this.showCharacter(character);
    });
  }

  showCharacter(character) {
    const card = Utils.createCard();
    const title = Utils.createTitle("h5");
    title.textContent = `${character.getName()}`;
    title.classList.add("card-title");
    const img = Utils.createImage();
    img.src = `${character.getImage()}`;
    img.alt = `${character.getName()} image`;
    img.classList.add("card-img-top" );
    const body = Utils.createDiv();
    body.classList.add("card-body");
    const gender = Utils.createParagraph();
    gender.textContent = `Gender: ${character.getGender()}`;
    gender.classList.add("card-text")
    const species = Utils.createParagraph();
    species.classList.add("card-text")
    species.textContent = `Specie: ${character.getSpecies()}`
    const button = Utils.createButton();
    button.classList.add("btn", "btn-primary")
    button.textContent= "more information"
    body.append(title, gender,species)
    card.append(img,body, button)

    this.#privateBody.append(card);
  }
}
