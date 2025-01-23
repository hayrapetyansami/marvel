import { Component } from "react";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import MarvelService from "../../services/MarvelService";
import "./charList.scss";

export default class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService.getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError);
  }

  onCharListLoaded = (charList) => {
    this.setState({
      charList,
      loading: false
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  renderItems(arr) {
    const items = arr.map(({ id, thumbnail, name }) => {
      let imgStyle = { "objectFit": "cover" };
      if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = { "objectFit": "contain" };
      }

      return (
        <li
          className="char__item"
          key={id}
          onClick={() => this.props.onCharSelected(id)}
        >
          <img src={thumbnail} alt={name} style={imgStyle} />
          <div className="char__name">{name}</div>
        </li>
      );
    });

    return (
      <ul className="char__grid">
        {items}
      </ul>
    );
  }

  render() {
    const { charList, loading, error } = this.state;
    const items = this.renderItems(charList);

    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const isContent = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        {isError}
        {isLoading}
        {isContent}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}