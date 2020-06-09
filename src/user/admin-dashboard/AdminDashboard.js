import React from "react";
import { Link } from "react-router-dom";

import "./admin-dashboard.styles.css";
import { isAuthenticated } from "../../auth/helper/auth-data";
import VegetableImage from '../../assets/vegetables.jpg';
import ManageProductImage from "../../assets/manageProduct.jpg";
import ManageOrderImage from "../../assets/orderImage.jpeg";


const AdminDashBoard = () => {
    const { user: { firstName, lastName, email, mobileNumber, role }} = isAuthenticated();

    const adminFirstSection = () => {
        return (
            <div className="adminFirstSection" >
                <div >
                    <ul>
                        <li className="adminOptionCard" style={{backgroundImage: `URL(${VegetableImage})`}}>
                            <Link 
                            to="/farmer/create/product"
                            className="adminOption" 
                            >
                                <span className="adminTitle">Add Product</span>
                                
                            </Link>
                        </li>
                        <li className="adminOptionCard" style={{backgroundImage: `URL(${ManageProductImage})`}}>
                            <Link 
                            to="/farmer/create/product"
                            className="adminOption"
                            >
                             <span className="adminTitle">Manage Product</span>   
                            </Link>
                        </li>
                        <li className="adminOptionCard" style={{backgroundImage: `URL(${ManageOrderImage})`}}>
                            <Link 
                            to="/farmer/create/product"
                            className="adminOption"
                            >
                              <span className="adminTitle">Manage Orders</span>  
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h3 style={{textAlign: "center"}}>Farmer Dashboard</h3>
            <div>{adminFirstSection()}</div>
        </div>
    )
}

export default AdminDashBoard;