import React from "react";

function Nav() {

    const categories = [
        {
            name: "Group Projects",
            description: "Projects that were created from working in a group."
        },

        {
            name: "Solo Projects",
            description: "Projects that were worked on stricly by me."
        }
    ];

    function categorySelected() {
        console.log('hi');
    }

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about-me">About Me</a>
                    </li>

                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}

export default Nav;