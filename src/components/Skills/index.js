import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

            <div id="skillsInfo">
                <Row>
                    {icons.map((iconInfo) => (
                        <Col sm="6" lg="4">
                            <div id="skillsName" key={iconInfo.name}>
                                {iconInfo.name}
                            </div>
                            <img src={iconInfo.imageIcon} alt="Icon pic" />
                        </Col>
                    ))}
                </Row>
            </div>

        </section>
    );
}

export default Skills;