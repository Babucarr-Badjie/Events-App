import "./Title.css";

export default function Title(props) {
  return (
    <div className="my-events">
      <h1 className="main-heading">{props.mainHeading}</h1>

      <h2 className="heading">{props.heading}</h2>
      <h3 className="sub-heading">{props.subHeading}</h3>
    </div>
  );
}
