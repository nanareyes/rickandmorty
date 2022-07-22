"use strict";

import { Utils } from "./utils.mjs";

export class CharacterView {
  #privateBody;

  constructor() {
    document.title = "RickAndMortyApi";
    this.#privateBody = document.querySelector("body");
  }

  showCharacter(character) {
    const card= Utils.createSimpleCard();
    card.classList.add("card", "bg-dark","text-white")
    const img = Utils.createImage();
    img.classList.add("card-img-top")
    img.src = `${character.getImage()}`;
    img.alt = `${character.getName()} image`;
    const body = Utils.createDiv();
    body.classList.add("card-body");
    const title = Utils.createTitle();
    title.textContent = `${character.getName()}`;
    title.classList.add("card-title");
    const gender = Utils.createParagraph();
    gender.textContent = `Gender: ${character.getGender()}`;
    gender.classList.add("card-text")
    const species = Utils.createParagraph();
    species.classList.add("card-text")
    species.textContent = `Specie: ${character.getSpecies()}`
    const status = Utils.createParagraph();
    status.classList.add("card-text")
    status.textContent = `Status: ${character.getStatus()}`
    const episode = Utils.createParagraph();
    episode.classList.add("card-text")
    episode.textContent = `Total episodes: ${character.getEpisode()}`
    const origin = Utils.createParagraph();
    origin.classList.add("card-text")
    origin.textContent = `Origin: ${character.getOrigin().name}`
    const location = Utils.createParagraph();
    location.classList.add("card-text")
    location.textContent = `Location: ${character.getLocation().name} \n ${character.getLocation().url}`
    const button = Utils.createButton();
    button.classList.add("btn", "btn-secondary");
    button.textContent= "back to";
    button.addEventListener("click", ()=>{
      window.location.href = `index.html`
    });
    body.append(title, gender,species,status,episode, origin,location)
    card.append(img,body,button)

    this.#privateBody.append(card);
  }
}
