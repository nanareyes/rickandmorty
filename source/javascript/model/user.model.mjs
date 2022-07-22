"use strict";

export class UserModel {
  #id;
  #name;
  #image;
  #gender;
  #species;
  #status;
  #origin;
  #location;
  #episode;

  constructor(id, name, image, gender, species) {
    this.#id = id;
    this.#name = name;
    this.#image = image;
    this.#gender = gender;
    this.#species = species;
  }

  getId() {
    return this.#id;
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
  getLocation() {
    return this.#location;
  }
  getStatus() {
    return this.#status;
  }
  getOrigin() {
    return this.#origin;
  }
  getEpisode() {
    return this.#episode;
  }
  getImage() {
    return this.#image;
  }

  setId(id) {
    this.#id = id;
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
  setSpecies(species) {
    this.#species = species;
  }
  setLocation(location) {
    this.#location = location;
  }
  setStatus(status) {
    this.#status = status;
  }
  setOrigin(origin) {
    this.#origin = origin;
  }
  setOrigin(origin) {
    this.#origin = origin;
  }
  setEpisode(episode) {
    this.#episode = episode;
  }

  toString() {
    return `${this.#id} ${this.#name}${this.#image}${this.#gender}${this.#species}`;
  }
}
