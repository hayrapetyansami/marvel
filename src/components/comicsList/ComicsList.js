import { Component } from "react";

import "./comicsList.scss";

import uw from "../../resources/img/UW.png"
import xMen from "../../resources/img/x-men.png"

export default class ComicsList extends Component {
  render() {
    return (
      <div className="comics__list">
        <ul className="comics__grid">
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics__item-img" />
              <div className="comics__item-name">X-Men: Days of Future Past</div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics__item-img" />
              <div className="comics__item-name">X-Men: Days of Future Past</div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics__item-img" />
              <div className="comics__item-name">X-Men: Days of Future Past</div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={uw} alt="ultimate war" className="comics__item-img" />
              <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
              <div className="comics__item-price">9.99$</div>
            </a>
          </li>
          <li className="comics__item">
            <a href="#">
              <img src={xMen} alt="x-man" className="comics__item-img" />
              <div className="comics__item-name">X-Men: Days of Future Past</div>
              <div className="comics__item-price">NOT AVAILABLE</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}