import GymEquipment from "../Pages/GymEquipment";
import Home from "../Pages/Home";
import Machines from "../Pages/Machines";
import Furniture from "../Pages/Furniture";
import Automobile from "../Pages/Automobile";
import ProcessEquipment from "../Pages/ProcessEquipment"
import Agricultural from "../Pages/Agricultural"
import Textile from "../Pages/Textile";
import Semiconductor from "../Pages/Semiconductor";
import Chemicalprocess from "../Pages/ChemicalProcess";
import Media from "../Pages/Media";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Application from "../Pages/Application";
import Companies from "../Pages/Companies";


const routes =[
    { path:'/', component:<Home />},
    { path:'/about', component: <About />},
    { path:'/machines', component:<Machines />},
    { path:'/gymEquipment', component: <GymEquipment />},
    { path:'/furnitures', component: <Furniture />},
    { path:'/automobile', component: <Automobile />},
    { path: '/processEquipment', component: <ProcessEquipment />},
    { path: '/agricultural', component: <Agricultural />},
    { path: '/textile', component: <Textile />},
    {path: '/semiconductor', component: <Semiconductor />},
    {path: '/chemicalprocess', component: <Chemicalprocess />},
    {path: '/media', component: <Media />},
    {path: '/blogs', component: <Blogs />},
    {path: '/contact', component: <Contact />},
    {path: '/application', component: <Application />},
    {path: '/companies', component: <Companies />},


]
export default routes