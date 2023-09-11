// **** Library Imports ****
import { Link } from "react-router-dom";

// **** Local Imports ****

const LinkWithoutChildren = ({ slug, label }) => {
  return (
    <Link to={slug} className="text-main-text">
      <span>{label}</span>
    </Link>
  );
};

export default LinkWithoutChildren;
