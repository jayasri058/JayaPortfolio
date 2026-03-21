import {
    SiPython,
    SiBootstrap,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiTableau,
    SiPowerbi, 
} from "react-icons/si";
import { GiJupiter } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
       {
            id: "skills-1",
            className: "skill-icon",
            icon: <BiBrain  size={50}/>,
            text: "AI & ML"
        },
        {
            id:"skills-2",
            className: "skill-icon",
            icon:<AiOutlineBarChart size={50}/>,
            text:"Visualization"
        },
        {
            id:"skills-3",
            className: "skill-icon",
            icon:<GiArtificialIntelligence size={50}/>,
            text:"AI"
        },
       {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiBootstrap size={50}/>,
            text: "Bootstrap"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableu"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <GiJupiter size={50}/>,
            text: "Jupiter"
        },
    ]
}

export default skillsConfig
