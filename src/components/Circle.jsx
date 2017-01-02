import React, { PropTypes } from 'react';

const Circle = (props) => {
  let width = 0;
  let height = 0;
  const windowWidth = window.innerWidth;
  const x = props.pos.x;

  width = window.innerWidth / 300 * props.pos.x;
  height = window.innerHeight / 150 * props.pos.y;

  const circle = {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'fixed',
    top: 0,
    left: 0,
    transform: `translateX(${width}px) translateY(${height}px)`,
  };

  return (
    <div style={circle} />
  )
}

export default Circle;
