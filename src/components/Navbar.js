import React from 'react';
import { Link} from 'gatsby';
import Menu from "./Menu";

const Navbar = ({profile}) => {

    return (
        <nav
            style={{
                backgroundColor: '#f5f5f5',
                margin: 0,
                padding: 0,
                borderBottom: '#000000 solid 2px shadow',
            }}
        >
            <div
                className="row fixed-top"
                style={{
                    backgroundColor: '#f5f5f5',
                    margin: 0,
                    padding: 0,
                }}
            >
                <div
                    className="col-9 pt-4"
                    style={{
                        textAlign: 'left',
                        paddingLeft: '10px',
                        color: 'black',
                    }}
                >
          <span className="ms-3 ms-md-5">
            <strong>
              <Link to="/" style={{ textDecoration: 'none' }}>
                  { profile ? <span>&lt; Bienvenue sur mon site /&gt;</span> : <span>Berckson Johnsly JEAN-LOUIS</span> }
              </Link>
            </strong>
          </span>
                </div>
                <div
                    className="col-3"
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Menu></Menu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
