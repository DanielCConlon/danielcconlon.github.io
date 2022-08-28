import React from "react";

function Skills() {

    const icons = [
        {
            name: "HTML",
            imageIcon: require("../../utils/images/html.png")
        },

        {
            name: "CSS",
            imageIcon: require("../../utils/images/css.png")
        },

        {
            name: "JavaScript",
            imageIcon: require("../../utils/images/javascript.png")
        },

        {
            name: "Bootstrap",
            imageIcon: require("../../utils/images/bootsrap.png")
        },

        {
            name: "Git",
            imageIcon: require("../../utils/images/github.png")
        },

        {
            name: "Node",
            imageIcon: require("../../utils/images/node.png")
        },

        {
            name: "Express",
            imageIcon: require("../../utils/images/express.png")
        },
        
        {
            name: "mySql",
            imageIcon: require("../../utils/images/mysql.png")
        },

        {
            name: "Sequelize",
            imageIcon: require("../../utils/images/css.png")
        },

        {
            name: "MongoDb",
            imageIcon: require("../../utils/images/mongodb.png")
        },

        {
            name: "Mongoose",
            imageIcon: require("../../utils/images/css.png")
        },

        {
            name: "React",
            imageIcon: require("../../utils/images/react.png")
        }
    ]

    return(
        <section>
            <div id="skillsHeader">
                <h2>Skills</h2>
            </div>

            <div>
                {icons.map((iconInfo) => (
                    <div key={iconInfo.name}>
                        {iconInfo.name}
                        <img src={iconInfo.imageIcon} alt="Icon pic" />
                    </div>
                    ))}
            </div>

        </section>
    );
}

export default Skills;