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

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header className="">
            <h2>
                <a href="/">
                    Portfolio
                </a>
            </h2>
            <nav>
                <ul className="">
                    <li className="">
                        <a href="#about-me">About Me</a>
                    </li>

                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className="" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
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