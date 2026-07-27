// src/data/skills.jsx
import { FaHtml5, FaCss3Alt, FaJava, FaPhp, FaReact, FaCode } from "react-icons/fa";
import { SiJavascript, SiMysql, SiCplusplus, SiPython, SiScikitlearn, SiPandas, SiNumpy, SiFirebase, SiSupabase } from "react-icons/si";

export const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", description: "The standard markup language used to structure content on the web." },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", description: "The styling language used to control layout, color, and visual presentation of web pages." },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", description: "The core scripting language of the web, used to build dynamic and interactive experiences." },
      { name: "React Native (Expo)", icon: <FaReact />, color: "#61DBFB", description: "A framework for building cross-platform mobile applications using JavaScript and React, streamlined with the Expo toolchain." },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "PHP", icon: <FaPhp />, color: "#777BB4", description: "A server-side scripting language for building dynamic websites and interacting with databases." },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", description: "A relational database management system used for storing and querying structured data." },
      { name: "Java", icon: <FaJava />, color: "#007396", description: "An object-oriented programming language widely used for enterprise and Android application development." },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C", description: "A general-purpose programming language used for performance-critical applications and systems programming." },
      { name: "Python", icon: <SiPython />, color: "#3776AB", description: "A versatile, general-purpose programming language used for backend scripting and application logic." },
    ],
  },
  {
    title: "Machine Learning / Data",
    skills: [
      { name: "scikit-learn", icon: <SiScikitlearn />, color: "#F7931E", description: "A Python library providing simple and efficient tools for machine learning and data modeling." },
      { name: "pandas", icon: <SiPandas />, color: "#150458", description: "A Python library for data manipulation and analysis using flexible data structures." },
      { name: "NumPy", icon: <SiNumpy />, color: "#4DABCF", description: "A Python library for numerical computing, providing support for large arrays and matrix operations." },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio Code", icon: <FaCode />, color: "#007ACC", description: "A lightweight, extensible code editor used for writing and debugging across most of my projects." },
      { name: "NetBeans", icon: <FaCode />, color: "#1B6AC6", description: "An IDE commonly used for Java development and desktop application projects." },
      { name: "Eclipse", icon: <FaCode />, color: "#2C2255", description: "An IDE widely used for Java-based application development." },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", description: "A backend-as-a-service platform used for authentication, databases, and hosting." },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E", description: "An open-source backend platform providing databases, authentication, and storage." },
    ],
  },
];