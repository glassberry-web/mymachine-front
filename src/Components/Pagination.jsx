import React from 'react'
 import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi"

const Pagination = () => {
    return (
        <>
            <div className="tp-pagination text-center">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="basic-pagination pt-30 pb-30">
                            <nav>
                                <ul>
                                <li>
                                        <a href="#">
                                            
                                            <FiChevronsLeft />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html" className="active">1</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">2</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">3</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">5</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">6</a>
                                    </li>
                                    <li>
                                        <a href="">
                                          
                                            <FiChevronsRight />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pagination