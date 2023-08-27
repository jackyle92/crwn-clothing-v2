import "./button.style.scss";

/**
 default

 inverted

 google sign in
 */

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ children, button_type, ...otherProps }) => {
  return (
    <div
      className={`button-container ${BUTTON_TYPE_CLASSES[button_type]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
