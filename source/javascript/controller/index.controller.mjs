"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { UserModel } from "../model/user.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class IndexController {
  #privateUser;
  #privateRickAndMortyURL;
  #privateView;

  constructor() {
    this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
    this.#privateView = new IndexView();
  }

  async init() {
    const service = new RickAndMortyService(this.#privateRickAndMortyURL);
    // const data = await service.getCharacters();
    // this.#privateView.showCharacter(data)

    //   const data = await service.getCharacters(service);
    //   data.results.map(character => {
    //     this.#privateView.showCharacter(character)
    //   } );
    //   this.#privateView.init(
    //     data.results[0].name
    //   );
    //   console.log("data",data);
    // }

    const data = await service.getCharacters(service);
    const dataRickAndMorty = data.results.map((character) => {
      return new UserModel(
        character.name,
        character.image,
        character.species,
        character.gender
      );
    });
    console.log(dataRickAndMorty)
    this.#privateView.showCharacters(dataRickAndMorty);
  }
}

export const index = new IndexController();
index.init();
