/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title, author, publishYear,
}) => (
  <div className="col-sm-4">
    <div className="card">
      <h5 className="card-header bg-info ">
        Title :
        {title.substring(0, 25)}
        ...
      </h5>
      <div className="card-body fixed ">
        <h6 className="card-text">
          Author :
          {author}
        </h6>
        <h6>
          Publish Year:
          {publishYear}
        </h6>
      </div>
      <div className="card-footer">
        Price: 50$
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishYear: PropTypes.number,
};
Card.defaultProps = {
  title: '',
  author: '',
  publishYear: 0,
};

export default Card;
