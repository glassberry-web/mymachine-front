import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
 import axios from "axios"


const Offcanvass = ({show, hideShow}) => {
    // const {display} = props.display;
    const [pageNo, setPageNo] = useState(0);
const [limit] = useState(9);
const [data, setData] = useState([]);
const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        const fetchMachine = async () => {
          const res = await axios
            .get(`http://localhost:5000/products?page=${pageNo}`)
            //  .get("http://localhost:5000/fetch")
            // .get(`http://localhost:5000/api/products?page=${pageNo}`)
            .then((res)=>{
              console.log("machine=>", res?.data);
          setData(res.data.result);
          setTotalPage(res?.data?.totalPages);
            })
            .then(() => {})
    
            .catch((error) => {
              console.log("err=>", error);
            });
          
        };
        fetchMachine();
      }, [pageNo]);
      console.log("machineFetch=>", data);

      let uniqueCat = [...new Set(data.map((cat) => cat.category))];
      console.log("slideruni=>", uniqueCat);
    
      let uniqueBrand = [...new Set(data.map((brand) => brand.brand))];
    
      const [Checked, setChecked] = useState([]);

      const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        console.log("index", currentIndex);
        const newChecked = [...Checked];
        console.log("newchecked=>", newChecked);
    
        if (currentIndex === -1) {
          newChecked.push(value);
          setChecked([...newChecked]);
    
          console.log("newcheckedin=>", Checked);
        } else {
          newChecked.splice(currentIndex, 1);
          setChecked([...newChecked]);
          console.log("newcheckedout=>", Checked);
        }
    
        setChecked([...newChecked]);
        console.log("checked=>", Checked);
      };
  return (
   <>
   <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Offcanvas show={show} hideShow = {hideShow} scrollable={true} placement="top">
            <Offcanvas.Header className="offcanvas-header border-bottom" closeButton onClick={hideShow} >
              <Offcanvas.Title className="offcanvas-title"><h5>avi</h5></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="modal-body">
            <div className="product-widget mb-30">
                <h5 className="pt-title">Machine categories</h5>
                <div className="widget-category-list mt-20">
                  {uniqueCat.map((category) => (
                    <div className="single-widget-category">
                      <input
                        type="checkbox"
                        id="cat-item-8"
                        checked={
                          Checked.indexOf(category) === -1 ? false : true
                        }
                        onChange={() => handleToggle(category)}
                        name="cat-item"
                      />
                      <label htmlFor="cat-item-3">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
            </Offcanvas.Body>
            <div className="offcanvas-foorter border-top p-3 text-center">
          <button
            type="button"
            onClick={hideShow}
            className="btn btn-light"
            data-bs-dismiss="modal"
            form="myForm"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary" onClick={hideShow}>
            Save changes
          </button>
        </div>
          </Offcanvas>
        </div>
        </div>
   </>
  )
}

export default Offcanvass