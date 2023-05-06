
import Header from "./Components/Header";
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import  routes from "./Components/routes"
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import CompanyDeatails from "./Components/CompanyDeatails";
import 'react-toastify/dist/ReactToastify.css';
import Machines from "./Pages/Machines";
import SearchResult from "./Components/SearchResult";
import FilteredProducts from "./Components/FilteredProducts";
import DummySearch from "./Components/DummySearch";
import { useSelector } from "react-redux";
import { getAllProducts } from "./Redux/products/productSlice";
import { getAllFilters } from "./Redux/products/FilteredProductslice";
import ProductDetails from "./Pages/ProductDetails";
import ProductEnquiryForm from "./Components/ProductEnquiryForm";
import Whatapp from "./Components/Whatapp";
import ShopByBrand from "./Components/ShopByBrand";
import ShopByCategory from "./Components/ShopByCategory";

function App() {
  const products = useSelector(getAllProducts);
  const filters = useSelector(getAllFilters);
  const [originalTitle, setOriginalTitle] = useState();
  // const location = useLocation();
  // const {category} = location.state;
// console.log("appbrand", brand) 

  // const {id} = useParams();
  // console.log("avi==>", id)

  const handleTabChange = () => {
    if (document.hidden) {
      document.title = 'Please Come back🤗';
    } else {
      document.title = originalTitle;
    }
  };

  useEffect(() => {
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    window.addEventListener('visibilitychange', handleTabChange);
    return () => window.removeEventListener('visibilitychange', handleTabChange);
  });
  return (
    <div className="App">
      <Header />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}

        {/* <Route path="*" element={<Page404 />} /> */}
        <Route path="/companies/:id" element={<CompanyDeatails />} />
        <Route path="/productDetails/:productname" element={<ProductDetails />} />
        {/* <Route path="/:id" element={<ProductEnquiryForm />} /> */}
        <Route path="/machines/:debouceSearchTerm"  element={<SearchResult />} />
        <Route path="/:brand"  element={<ShopByBrand />} />
        <Route path="/products/:category"  element={<ShopByCategory />} />
        {/* <Route path="/machines/:filters"  element={<SearchResult />} /> */}
 
      </Routes> 
      <Whatapp />
      <Footer />
    </div>
  );
}

export default App;
