import React, {useEffect} from "react";
import './index.css';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
    pageSelected,
    setPageSelected
  } = props;

    //   if currentPage changes, the component wil re-render so the change in document.title is visible
    useEffect(() => {
      document.title = currentPage.name;
    }, [currentPage]);

    return(
      <header>
        <h2>A logo will go here</h2>
        <nav>
          <ul>
            {pages.map((page) => (
              <li className={`${currentPage.name === page.name && !pageSelected && `navActive`}`}
              key={page.name}
              >
                <span onClick={() => {
                  setCurrentPage(page);
                  setPageSelected(false);
                }}>
                  {page.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}


export default Nav;