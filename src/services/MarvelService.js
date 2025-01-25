export default class MarvelService {
  _API_URL = "https://gateway.marvel.com:443/v1/public";
  _API_KEY = "apikey=f886cb3db7c49504cc7206fb26ead8c0";
  _LIMIT = 9;
  _CHAR_OFFSET = 210;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async (offset = this._CHAR_OFFSET) => {
    const res = await this.getResource(`${this._API_URL}/characters?limit=${this._LIMIT}&offset=${offset}&${this._API_KEY}`);
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._API_URL}/characters/${id}?${this._API_KEY}`);
    return this._transformCharacter(res.data.results[0]);
  }

  _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  }
}