import Chart_fill from './assets/Chart_fill.png'
import Chat from './assets/Chart.png';
import Calendar from './assets/Calendar.png';
import Folder from './assets/Folder.png';
import User from './assets/User.png';



export const StudentSideBar = [
    { title: "Dashboard", src: Chart_fill, link: "/studentLogin" },
    { title: "Profile", src: Chart_fill, link: "/studentLogin/Profile"},
    // { title: "Settlement", src: Chat, link: '/studentLogin', gap: true },
    { title: "Applications", src: User, link: "/studentLogin/application",gap: true  },
    { title: "Fill Form", src: Calendar, link: "/studentLogin/formFill" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];

export const FacultySideBar = [
    { title: "Dashboard", src: Chart_fill, link: "/facultyLogin" },
    { title: "TBD", src: Chat, link: '/facultyLogin' },
    { title: "Applications", src: User, gap: true, link: "/facultyLogin/application" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];


export const ResarchSideBar = [
    { title: "Dashboard", src: Chart_fill, link: "/researchLogin" },
    { title: "TBD", src: Chat, link: "/researchLogin" },
    { title: "Applications", src: User, gap: true, link: "/researchLogin/application" },
    { title: "Students", src: Calendar, link: "/researchLogin/student" },
    { title: "Faculty", src: Calendar, link: "/researchLogin/faculty" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];

export const AccountSideBar = [
    { title: "Dashboard", src: Chart_fill, gap: false, link: "/accountLogin" },
    { title: "TBD", src: Chat, gap: false, link: "/accountLogin" },
    { title: "Applications", src: User, gap: true, link: "/accountLogin/application" },
    { title: "Settlement", src: User, gap: false, link: "/accountLogin/" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];

export const HodSideBar = [
    { title: "Dashboard", src: Chart_fill, link: "/hodLogin" },
    { title: "TBD", src: Chat, link: '/hodLogin' },
    { title: "Applications", src: User, gap: true, link: "/hodLogin/application" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];

export const DeanSideBar = [
    { title: "Dashboard", src: Chart_fill, link: "/deanLogin" },
    { title: "TBD", src: Chat, link: '/deanLogin' },
    { title: "Applications", src: User, gap: true, link: "/deanLogin/application" },
    { title: "Logout ", src: Folder, gap: true, link: "logout" },
];