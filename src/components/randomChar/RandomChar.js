import { Component } from "react";
import MarvelService from "../../services/MarvelService.js"
import Spinner from "../spinner/Spinner.js";
import Error from "../error/Error.js";

import "./randomChar.scss";

import mjolnir from "../../resources/img/mjolnir.png"

export default class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar();
    // this.timerID = setInterval(this.updateChar, 3000);
  }

  componentDidUpdate() {
    // pass
  }

  componentWillUnmount() {
    // pass
    // clearInterval(this.timerID);
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  }

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.setState({ loading: true })
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { char, loading, error } = this.state;

    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const isContent = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {isError}
        {isLoading}
        {isContent}

        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">
            Or choose another one
          </p>
          <button
            className="button button__main"
            onClick={this.updateChar}
          >
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt={name} className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a
            href={homepage}
            className="button button__main"
            target="_blank"
          >
            <div className="inner">homepage</div>
          </a>
          <a
            href={wiki}
            className="button button__secondary"
            target="_blank"
          >
            <div className="inner">wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
}