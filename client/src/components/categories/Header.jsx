import React from "react";

const Header = ({ filterItem, newData }) => {
  return (
    <>
      <div className="container m-0">
        <header className="d-flex justify-content-start py-3">
          <ul className="nav nav-pills">
            <div className="dropdown p-1">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {newData.map((curElem) => {
                  return (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => filterItem(curElem)}
                      >
                        {curElem}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="dropdown p-1">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Relevance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: High To Low
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: Low To High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rating: High To Low
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rating: Low To High
                  </a>
                </li>
              </ul>
            </div>

            <form className="d-flex">
              <input
                className="form-control m-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success m-1" type="submit">
                Search
              </button>
            </form>
          </ul>
        </header>
      </div>
      <hr className="featurette-divider mt-0" />
    </>
  );
};

export default Header;
