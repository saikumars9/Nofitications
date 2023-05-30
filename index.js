const Notification = (props) => {
  const { name, message } = props;
  return <h1 className="Message">{(name, message)}</h1>;
};

const element = (
  <div>
    <p name="message" message="Information Message"></p>
    <p name="message" message="Success Message"></p>
    <p name="message" message="Warning Message"></p>
    <p name="message" message="Error Message"></p>

    <img
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="image"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
