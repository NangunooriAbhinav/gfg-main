"use client";
import { useState } from "react";
import Card from "../components/card";
import Courses from "../components/courses";

export default function GeekCoins() {

    const [bal, setBal] = useState<number>(500);

    const exchange = (updated: number) => {
        if (bal >= updated) {
            setBal(bal - updated);
        } else {
            alert("Insufficient Balance");
        }
    }

    const events = [
        {
            name: "Codeathon",
            cost: 71,
            description: "A competitive event where developers race to build a project in a limited time. Participate and showcase your coding skills."
        },
        {
            name: "Workshop on Machine Learning",
            cost: 71,
            description: "An in-depth workshop focused on machine learning techniques and algorithms. Learn the foundations and applications of AI."
        },
        {
            name: "Hackathon",
            cost: 55,
            description: "A collaborative event where teams build software or hardware solutions in a short period. Challenge yourself and innovate."
        },
        {
            name: "Web Development Bootcamp",
            cost: 55,
            description: "An intensive course aimed at teaching you web development from scratch. Gain hands-on experience with HTML, CSS, and JavaScript."
        },
        {
            name: "UI/UX Design Session",
            cost: 62,
            description: "Learn about creating user-friendly interfaces and crafting looth user experiences. Ideal for aspiring designers."
        },
        {
            name: "Data Science Conference",
            cost: 88,
            description: "A gathering of experts to discuss the latest trends in data science, analytics, and big data. Enhance your knowledge in the field."
        },
        {
            name: "Tech Talk on Cloud Computing",
            cost: 89,
            description: "Join industry leaders in a discussion about the future of cloud technologies. Learn how cloud computing is transforming businesses."
        },
        {
            name: "Artificial Intelligence Webinar",
            cost: 54,
            description: "An online event exploring the latest developments in AI. Gain insights from professionals working in the field of artificial intelligence."
        },
        {
            name: "Mobile App Development Challenge",
            cost: 98,
            description: "A challenge to build a fully functional mobile app in a set time. Sharpen your skills and compete for prizes."
        },
        {
            name: "Programming Language Masterclass",
            cost: 45,
            description: "Master a programming language of your choice in this hands-on class. Perfect for beginners and experienced developers alike."
        }
    ];
    const courses = [
        {
            name: "Full Stack Web Development",
            cost: 299,
            description: "Learn to build dynamic and interactive websites using both front-end and back-end technologies. Master HTML, CSS, JavaScript, Node.js, and more."
        },
        {
            name: "Machine Learning ",
            cost: 250,
            description: "A comprehensive course that takes you through machine learning techniques from basic to advanced. Learn algorithms, models, and real-world applications."
        },
        {
            name: "Mobile App Development ",
            cost: 230,
            description: "Create mobile apps for both iOS and Android using React Native. Build, test, and deploy your own cross-platform mobile application."
        }
    ];

    return (
        <div className="h-[100vh] flex">
            <div className="w-[20%] h-[100%] border-r-gray-500 border flex flex-col align-center gap-2 py-2">
                <div className="flex items-center justify-center">
                    <svg className="w-40 h-40 me-2.5 text-primary-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>
                <div className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center justify-center">{bal}<img className="w-10" src="/coin.png"></img></div>
                <div className="mt-4 flex flex-col items-center justify-center">
                    <button type="button" className="relative inline-flex items-center w-full px-4 py-2 text-l font-medium ">
                        <svg className="w-5 h-5 me-2.5 text-primary-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        Profile
                    </button>
                    <button type="button" className="relative inline-flex items-center w-full px-4 py-2 text-l font-medium   ">
                        <svg className="w-5 h-5 me-2.5 text-primary-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                        </svg>
                        Settings
                    </button>
                    <button type="button" className="relative inline-flex items-center w-full px-4 py-2 text-l font-medium   ">
                        <svg className="w-5 h-5 me-2.5 text-primary-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                        </svg>
                        Messages
                    </button>
                    <button type="button" className="relative inline-flex items-center w-full px-4 py-2 text-l font-medium">
                        <svg className="w-5 h-5 me-2.5 text-primary-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>
                        Download
                    </button>
                </div>
            </div>
            <div className="w-[80%] h-[100%] flex flex-col">
                <div className="w-[100%] h-[20%] bg-primary-50 flex items-center justify-center">
                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-300 ">Programme By <span className="text-white dark:text-white">GeeksForGeeks</span></h1>
                </div>
                <div className="w-[100%] h-[80%] flex">
                    <div className="w-[80%] scroll-auto h-[100%] overflow-y-scroll scrollbar-custom flex flex-col gap-2 p-1">
                        {
                            events.map((event, index) => {
                                return <Card title={event.name} price={event.cost.toString()} desc={event.description} key={index} />
                            })
                        }
                    </div>
                    <div className="w-[20%] flex flex-col gap-2 p-1 overflow-y-scroll">
                        {
                            courses.map((course, index) => {
                                return <Courses exchange={exchange} title={course.name} desc={course.description} cost={course.cost} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}