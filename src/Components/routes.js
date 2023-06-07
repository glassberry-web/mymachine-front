import GymEquipment from "../Pages/Applications";
import Home from "../Pages/Home";
import Machines from "../Pages/Machines";

import Media from "../Pages/Media";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
// import Application from "../Pages/Application";
import Companies from "../Pages/Companies";
import CompaniesComponent from "./CompaniesComponent";
import CompanyDeatails from "./CompanyDeatails";
import ProductDetails from "../Pages/ProductDetails";
import ProductEnquiryForm from "./ProductEnquiryForm";

const routes =[
    { path:'/', component:<Home />},
    { path:'/about', component: <About />},
    { path:'/machines', component:<Machines />},

    {path: '/media', component: <Media />},
    {path: '/blogs', component: <Blogs />},
    {path: '/contact', component: <Contact />},
    // {path: '/application', component: <Application />},
    {path: '/companies', component: <Companies />},
    {path: '/companiesDetails', component: <CompanyDeatails />},
    {path: '/productDetails', component: <ProductDetails />},
    {path: '/productEnquiry', component: <ProductEnquiryForm />},
    // {path: `{/companies/${data.}}`}


]
export default routes