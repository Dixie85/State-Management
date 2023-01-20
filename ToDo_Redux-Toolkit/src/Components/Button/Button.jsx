const Button = (props) => {
  return (
    <button
      className={props?.className}
      id={props?.id}
      onClick={props?.onButtonClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
