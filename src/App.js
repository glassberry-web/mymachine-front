
import Header from "./Components/Header";
import { Route, Routes } from 'react-router-dom';
import  routes from "./Components/routes"
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [originalTitle, setOriginalTitle] = useState();

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
