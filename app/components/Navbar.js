import React from 'react';
import { Link } from 'react-router-dom';

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
