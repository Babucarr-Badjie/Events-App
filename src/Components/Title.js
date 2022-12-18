import "./Title.css";

export default function Title(props) {
  return (
    <div>
      <h1 className="main-heading">
        <i>{props.mainHeading}</i>
          </h1>
          <br />
      <h2 className="heading">{props.heading}</h2>
      <h3 className="sub-heading">{props.subHeading}</h3>
    </div>
  );
}
