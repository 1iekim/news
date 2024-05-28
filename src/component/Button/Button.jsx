import "./Button-module.scss";

const Button = (props) => {
  return (
    <button className="button" onClick={() => console.log(props)}>
      {props.children}
    </button>
  )
}

export default Button;