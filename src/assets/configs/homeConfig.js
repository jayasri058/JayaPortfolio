import React from 'react'
//import {BsClipboardData} from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
//import {GiCommercialAirplane} from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Jayasri Kedarisetti</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "Artificial Intellegence",
        "Data Engineer",
        "UI Development"
    ],
    about: {
        start: "I've been working for over 4.7 years of total working professional experience and 2 years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Python & GenAI Developer",
            company: "Tata Consultancy Services",
            description: "Working on Verizon client project by designing and implementing an AI-powered network inventory automation system. Built a Retrieval-Augmented Generation (RAG) pipeline to extract and structure device data, enabling automated template generation. Improved operational efficiency by reducing manual processing time by 95% and supporting over 50 device types.",
            date: "2024-Present",
            icon: <BiRocket />,
            tags: ["python", "GenAI", "RAG", "LLM", "LangChain", "VectorDB"]
        },
        {
            id: "work-3",
            title: "UI Developer",
            company: "Tata Consultancy Services",
            description: "At Home Depot, I analyzed and optimized React.js code, enhancing performance and maintainability. I refactored standalone applications for better integration, improved UI components, optimized API interactions, and streamlined state management to enhance scalability and user experience.",
            date: "2023-2024",
            icon: <DiCodeigniter />,
            tags: ["React js"]
        },
        {
            id: "work-2",
            title: "Web Developer",
            company: "Omics International PVT Ltd",
            description: "As a Web Developer at Omics International PVT Ltd, I built and managed PHP & MySQL-based web applications, handled content updates, and managed on-demand website requests. I also worked on CSS styling, HTML structuring, and designed web pages for the pharma domain.",
            date: "2021-2023",
            icon: <FaMobileAlt />,
            tags: ["HTML", "CSS", "Bootstrap", "Javascript", "SQL", "PHP"]
        }
    ]
}


export default homeConfig