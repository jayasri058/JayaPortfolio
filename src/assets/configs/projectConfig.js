import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
//import {ImBook} from "react-icons/im";

import customerSegmentation from "../images/customerSegmentation.png"
import speechRecognition from "../images/speech-recognition.png"
import portfolio from "../images/portfolio.png"
import teaser from "../images/teaser.png"
import MemoAI from "../images/MemoAI.png"
import React from 'react'

const projectConfig = [
    {
        id: "project-6",
        title: "MemoAI",
        links: [
            {
                name: "repo",
                url: "https://github.com/jayasri058/MemoAi.git",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/jayasri058/MemoAi/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/jayasri058/MemoAi/subscription",
                icon: <AiFillEye />,
            }
        ],
        image: MemoAI,
        description: "MemoAI is an intelligent personal memory assistant that seamlessly captures, categorizes, and retrieves your thoughts, conversations, and visual memories. Built with advanced AI, it features instant voice-to-text recognition, dynamic categorization, and natural language search to help you build a searchable second brain.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Customer Segmentation",
        links: [
            {
                name: "repo",
                url: "https://github.com/jayasri058/CustomerSegmentationProject.git",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/jayasri058/CustomerSegmentationProject/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/jayasri058/CustomerSegmentationProject/subscription",
                icon: <AiFillEye />,
            }
        ],
        image: customerSegmentation,
        description: "This Data Science project segments a company's customers into distinct groups using K-means clustering and EDA, providing insights into behaviors and preferences to drive personalized marketing strategies and product offerings, ensuring business relevance and actionable outcomes.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Speech Recoginition",
        links: [
            {
                name: "repo",
                url: "https://github.com/jayasri058/Speech-Recognition.git",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/jayasri058/Speech-Recognition/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/jayasri058/Speech-Recognition/subscription",
                icon: <AiFillEye />
            }
        ],
        image: speechRecognition,
        description: "Speech detection systems analyze spoken language by identifying pitch, tone, and volume, converting audio to text, filtering noise, detecting emotions, and processing in real-time, improving accuracy in various applications.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "EmbryoClassificationModel",
        links: [
            {
                name: "repo",
                url: "https://github.com/jayasri058/EmbryoClassificationModel.git",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/jayasri058/EmbryoClassificationModel/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/jayasri058/EmbryoClassificationModel/subscription",
                icon: <AiFillEye />
            }
        ],
        image: teaser,
        description: "The EmbryoClassificationModel uses machine learning to classify embryo quality and viability based on features like cell count, shape, and development stage for fertility treatments.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/jayasri058/JayaPortfolio.git",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/jayasri058/JayaPortfolio/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/jayasri058/JayaPortfolio/subscription",
                icon: <AiFillEye />
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    }
]

export default projectConfig