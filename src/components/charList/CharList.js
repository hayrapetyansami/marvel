import { Component } from "react";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import MarvelService from "../../services/MarvelService";
import "./charList.scss";

export default class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    onRequestLoading: false,
    error: false,
    offset: 0, //  max limit 1560
    charEnded: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService.getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  }

  onCharListLoading = () => {
    this.setState({
      onRequestLoading: true
    });
  }

  onCharListLoaded = (newCharList) => {
    let ended = false;

    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ charList, offset }) => {
      return {
        charList: [...charList, ...newCharList],
        loading: false,
        onRequestLoading: false,
        offset: offset + 9,
        charEnded: ended
      };
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  refItems = [];

  setRef = (ref) => {
    this.refItems.push(ref);
  }

  focucOnItem = (id) => {
    this.refItems.forEach(item => item.classList.remove("char__item_selected"));
    this.refItems[id].classList.add("char__item_selected");
    this.refItems[id].focus();
  }

  renderItems(arr) {
    const items = arr.map(({ id, thumbnail, name }, i) => {
      let imgStyle = { "objectFit": "cover" };
      if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = { "objectFit": "contain" };
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={this.setRef}
          key={id}
          onClick={() => {
            this.props.onCharSelected(id);
            this.focucOnItem(i);
          }}
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
    const {
      charList,
      loading,
      error,
      onRequestLoading,
      offset,
      charEnded
    } = this.state;
    const items = this.renderItems(charList);

    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const isContent = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        {isError}
        {isLoading}
        {isContent}

        <button
          onClick={() => this.onRequest(offset)}
          disabled={onRequestLoading}
          className="button button__main button__long"
          style={charEnded ? { "display": "none" } : null}
        >
          <div className="inner">
            {onRequestLoading ? "Loading..." : "load more"}
          </div>
        </button>
      </div>
    );
  }
}