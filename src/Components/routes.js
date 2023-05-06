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
import CompaniesComponent from "./CompaniesComponent";
import CompanyDeatails from "./CompanyDeatails";
import ProductDetails from "../Pages/ProductDetails";
import ProductEnquiryForm from "./ProductEnquiryForm";

const routes =[
    { path:'/', component:<Home />},
    { path:'/about', component: <About />},
    { path:'/machines', component:<Machines />},
    { path:'/gymequipment', component: <GymEquipment />},
    { path:'/furniture', component: <Furniture />},
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
    {path: '/companiesDetails', component: <CompanyDeatails />},
    {path: '/productDetails', component: <ProductDetails />},
    {path: '/productEnquiry', component: <ProductEnquiryForm />},
    // {path: `{/companies/${data.}}`}


]
export default routes