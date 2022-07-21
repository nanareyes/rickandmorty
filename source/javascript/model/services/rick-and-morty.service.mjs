//import { UserModel } from "../user.model.mjs";

export class RickAndMortyService {
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

    getCharacters() {
        return fetch(`${this.#privateUrl}/character`).then(response => response.json());
    }


}