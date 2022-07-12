import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </header>
  );
};

export { Header };
