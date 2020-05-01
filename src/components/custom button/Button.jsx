import React from "react";
import "./Button.styles.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? "google-sign-in" : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
