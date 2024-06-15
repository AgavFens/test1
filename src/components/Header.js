import React from 'react';
import '../styles/Header.css';

function Header({ onTopMoviesClick, onTopSeriesClick, onSearchSubmit }) {
  return (
    <header className="container header">
      <div className="header__content">
        <button className="header__button" onClick={onTopMoviesClick}>20 ФИЛЬМОВ</button>
        <button className="header__button" onClick={onTopSeriesClick}>20 СЕРИАЛОВ</button>
        <form onSubmit={onSearchSubmit}>
          <input type="text" className="header__search" placeholder="Поиск" />
          <button type="submit" className="header__search-btn">Найти</button>
        </form>
      </div>
    </header>
  );
}

export default Header;