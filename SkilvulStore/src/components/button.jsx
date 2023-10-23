/* eslint-disable react/prop-types */
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
