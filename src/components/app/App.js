import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

// Page
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";

import decoration from "../../resources/img/vision.png";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList />
            <CharInfo />
          </div>
          <img src={decoration} alt="vision" className="bg-decoration" />
        </main>
      </div>
    );
  }
}