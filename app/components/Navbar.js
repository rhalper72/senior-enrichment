import React from 'react';
import { Link } from 'react-router-dom';

//This my navbar, no CSS currently.  Just 3 links at the top of the page.
const Navbar = (props) =>
{
    return (
    <navbar>
    <div>
        <h5>
            <Link to="/">
            HOME
            </Link>
        </h5>
      </div>
      <div>
        <h5>
            <Link to="/campuses">
            CAMPUSES
            </Link>
        </h5>
      </div>
      <div>
        <h5>
            <Link to="/students">
            STUDENTS
            </Link>
        </h5>
      </div>
    </navbar>
    );
}

export default Navbar;
