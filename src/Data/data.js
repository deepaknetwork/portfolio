import { createContext } from "react"

const data=[
    {btn:"Click to try!",id:13,catagory:"React & Spring Boot ",title:"RoomieReserve",discription:"A simple and convenient room booking application.",image:"RR",link:"https://deepaknetwork.github.io/RR"},
    {btn:"Click to try!",id:1,catagory:".NET & Angular ",title:"CRM admin",discription:"A CRM admin application for managing customer interactions in a web development startup.",image:"crmadmin",link:"https://deepaknetwork.github.io/crmadmin"},
    {btn:"Click to try!",id:12,catagory:".NET & Angular",title:"CRM client",discription:"A customer-side application for interacting with services in a web development startup.",image:"crmuser",link:"https://deepaknetwork.github.io/crmuser"},
    {btn:"Go to repository",id:8,catagory:"Spring Boot (RestAPI)",title:"Law Zone",discription:"An API that suggests laws based on location zones and provides a categorized law listing.",image:"lawzones",link:"https://github.com/deepaknetwork/LawZone-REST-API"},
    {btn:"Click to try!",id:8,catagory:".NET & Angular",title:"Law Zone",discription:"An app that suggests laws based on location zones and provides a categorized law listing.",image:"lawzonec",link:"https://deepaknetwork.github.io/law.net"},
    {btn:"Go to repository",id:11,catagory:"Spring Boot (RestAPI)",title:"Sell Buy",discription:"An API for purchasing former products",image:"farmer",link:"https://github.com/deepaknetwork/SellBuy-REST-API"},
    {btn:"Go to repository",id:8,catagory:"Spring Boot (RestAPI)",title:"ChatAPP",discription:"An API for real-time messaging.",image:"chat",link:"https://github.com/deepaknetwork/ChatApp-REST-API"},
    {btn:"Go to repository",id:9,catagory:"Spring Boot (RestAPI)",title:"Student teacher management",discription:"A student-teacher management system for efficient tracking and communication.",link:"https://github.com/deepaknetwork/PupilPro-REST-API"},
    {btn:"Go to repository",id:10,catagory:"Spring Boot (RestAPI)",title:"Todos" ,discription:"A simple to-do application for task management and organization.",image:"todo",link:"https://github.com/deepaknetwork/Todo-REST-API"},
    {btn:"Click to try!",id:4,catagory:"React",title:"Wallet",discription:"A daily expenditure tracking application to monitor and manage expenses.",image:"wallet",link:"https://deepaknetwork.github.io/wallet"},
    {btn:"Click to try!",id:6,catagory:"React",title:"Fashionsew",discription:"A commercial advertisement site for promoting tailor shop services.",image:"fashionsew",link:"https://deepaknetwork.github.io/fashionsew/"},
    {btn:"Click to try!",id:3,catagory:"React",title:"XO",discription:"A modern XO (Tic-Tac-Toe) game for two players",image:"xo",link:"https://deepaknetwork.github.io/XO/"},
    {btn:"Click to try!",id:7,catagory:"React",title:"Notes",discription:"A note-taking application for organizing and managing your ideas.",image:"notes",link:"https://deepaknetwork.github.io/notes/"},
    {btn:"Click to try!",id:2,catagory:"React",title:"Piano",discription:"A piano music application for playing and creating music.",image:"piano",link:"https://deepaknetwork.github.io/piano/"},
   
]
const cerData=[
    {id:1,title:"Master Spring Boot 3 & Spring Framework 6 with Java",platform:"Udemy",link:"https://drive.google.com/file/d/1bmKiKZ61L8jDhuvuy5z5GfuOyxRQnnRn/view?usp=sharing"},
    {id:1,title:"Azure Fundamentals",platform:"Microsoft",link:"https://drive.google.com/file/d/118eRIQfwJCGpozlUwbGrTinbqIEeJlNW/view?usp=drive_link"},
    {id:2,title:"Introduction to Industry 4.0 and Industrial Internet of Things",platform:"NPTL",link:"https://drive.google.com/file/d/1H-05OyXBVcVVdTg1F6kBI--LlenYrgjy/view?usp=sharing"},
    {id:3,title:"C Programming",platform:"PrepInsta",link:"https://drive.google.com/file/d/18MDl0vO5c5YXziZbVlwIdIt4tWWKwcaM/view?usp=sharing"},
    {id:4,title:"Java",platform:"PrepInsta",link:"https://drive.google.com/file/d/1kWkigiFk0RfKLwTPIul05IRObQQYJwA_/view?usp=sharing"},
    {id:5,title:"DSA in Java",platform:"PrepInsta",link:"https://drive.google.com/file/d/1cPFUyNXw7uCNBonRdK1ydyl4CyXNCjaw/view?usp=sharing"},
    {id:6,title:"SDLC",platform:"PrepInsta",link:"https://drive.google.com/file/d/1KnAmEeiSrgHUbuMPfFMpq4cvXJNkbOUJ/view?usp=sharing"},
    {id:6,title:"‘CAUSE 2023 - A Global Open Innovation Challenge",platform:"CMR Unversity",link:"https://drive.google.com/file/d/1hT3-EYrasUqz3HkQLqtZCg2DNksI7Feo/view?usp=sharing"},
    {id:6,title:"Bootcamp on Python and Deep Learning",platform:"Devtown",link:"https://drive.google.com/file/d/1zTWomk5Kynv6pYC18_vKvCU3gk2URbtJ/view?usp=sharing"},
    {id:6,title:"Developer Virtual Experience Program",platform:"Accenture - Forage",link:"https://drive.google.com/file/d/1hQ8O0k_kM0DGvBLirshUUquwhfu5XN-J/view?usp=sharing"},
    {id:6,title:"Problem Solving - Internship (Java-DS)",platform:"Suven Consultants & Technology",link:"https://drive.google.com/file/d/1Mi3Tz5LMMl0gbfEbb0g3DsCWa1xC2BbM/view?usp=sharing"},
    {id:6,title:"Paper Publication",platform:"IJITC",link:"http://journal.hmjournals.com/index.php/IJITC/article/view/1524"},
    {id:6,title:"Paper Publication",platform:"JAIMLNN",link:"http://journal.hmjournals.com/index.php/JAIMLNN/article/view/1748"}
]

const cont=[
    {id:1,image:"linkedin",link:"https://www.linkedin.com/in/deepakbasuvaraj/"},
    {id:2,image:"gmail",link:"mailto:deepaksmail200@gmail.com"},
    {id:3,image:"insta",link:"https://www.instagram.com/__deepak___/"},
    {id:4,image:"whatsapp",link:"https://wa.me/95850"},
    {id:5,image:"git",link:"https://github.com/deepaknetwor"},
    {id:6,image:"facebook",link:"https://www.facebook.com/deepak.mass.52687"}]


export default data
export {cont,cerData}

export var NavContext=createContext();

