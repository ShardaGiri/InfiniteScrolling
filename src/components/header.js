/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import books from '../assets/books.png';

function header() {
  return (
    <div className="headerOne">
      <div className="header-row">
        <div className="header-col1">
          <h1 className="BookHeader"> Books Gallery </h1>
        </div>
        <div className="header-col2">
          <img src={books} alt={books} className="responsive" />
        </div>
      </div>
    </div>
  );
}

export default header;
