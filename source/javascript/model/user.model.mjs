"use strict";

export class UserModel {

  #name;
  #image;
  #gender;
  #species;

  constructor(name, image, gender, species) {
    this.#name = name;
    this.#image = image;
    this.#gender = gender;
    this.#species = species;
  }

  getName() {
    return this.#name;
  }

  getGender() {
    return this.#gender;
  }

  getSpecies() {
    return this.#species;
  }
  getImage() {
    return this.#image;
  }

  setName(name) {
    this.#name = name;
  }

  setGender(gender) {
    this.#gender = gender;
  }
  setImage(image) {
    this.#image = image;
  }
  setGender(species) {
    this.#species = species;
  }

  toString() {
    return `${this.#name} ${this.#image}${this.#gender}${this.#species}`;
  }
}
