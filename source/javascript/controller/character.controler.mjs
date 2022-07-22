"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { CharacterView } from "../view/characterView.mjs";

// Models
import { UserModel } from "../model/user.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class CharacterController {
  #privateUser;
  #privateRickAndMortyURL;
  #characterView;

  constructor() {
    this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
    this.#characterView = new CharacterView();
  }

  async start() {
    const service = new RickAndMortyService(this.#privateRickAndMortyURL);
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    const data = await service.getCharacter(id);
    console.log("data controler", data);
    const character = new UserModel(
      data.id,
        data.name,
        data.image,
        data.species,
        data.gender
    );
    character.setLocation(data.location);
    character.setStatus(data.status);
    character.setEpisode(data.episode.length);
    character.setOrigin(data.origin);

    this.#characterView.showCharacter(character);
  }
}

export const characterPage = new CharacterController();
characterPage.start();
