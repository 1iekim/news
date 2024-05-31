import "./Button-module.scss";

const Button = (props) => {
  return (
    <button className="button" {...props}>
      {props.children.slice(0, -4)}
    </button>
  )
}

export default Button;