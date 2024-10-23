import Counter from "./Counter";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <hr />
      <div>Contact</div>
      <Counter />
    </>
  );
};

export default Contact;
