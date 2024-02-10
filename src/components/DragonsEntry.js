import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservations, makeReservations } from '../redux/dragon/dragonSlice';

const DragonEntry = ({
  name, type, img, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <article id="dragon_article" className="rocket ">
        <div className="image-container">
          <img className="rocket-img" src={img} alt="" />
        </div>
        <div className="rocket-detail-container">
          <h2>{name}</h2>
          <p>
            {reserved && <span className="reservation">Reserved</span>}
            {type}
          </p>
          {reserved ? (
            <button
              className="cancelbtn"
              type="button"
              onClick={() => {
                dispatch(cancelReservations(id));
                // console.log('you good?');
              }}
            >
              Cancel
            </button>
          ) : (
            <button
              type="button"
              className="reservebtn"
              onClick={() => {
                dispatch(makeReservations(id));
              }}
            >
              Reserve Dragon
            </button>
          )}
        </div>
      </article>
    </>
  );
};

DragonEntry.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default DragonEntry;
