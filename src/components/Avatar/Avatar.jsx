import React from 'react';

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor }) => {
  const style = {
    backgroundColor: backgroundColor,
    padding: `${py}px ${px}px`,
    color: color || 'black',
    borderRadius: borderRadius,
    fontSize: fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Avatar;
