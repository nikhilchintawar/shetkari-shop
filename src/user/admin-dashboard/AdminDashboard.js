import React from "react";
import { Link } from "react-router-dom";


import "./admin-dashboard.styles.css";
import { isAuthenticated } from "../../auth/helper/auth-data";
import VegetableImage from '../../assets/vegetables.jpg';
import ManageProductImage from "../../assets/manageProduct.jpg";
import ManageOrderImage from "../../assets/orderImage.jpeg";



const AdminDashBoard = () => {
    const { user: { firstName, role }} = isAuthenticated();

    const adminFirstSection = () => {
        return (
            <div className="adminFirstSection" >
                <div>
                    <ul>
                        <li>
                        <Link 
                            to="/farmer/create/product"
                            className="adminOption" 
                            >
                            <img src={VegetableImage} alt="VegetableImage" className="adminImage"/>
                            
                                <span className="adminTitle">Add Product</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/farmer/manage/product"
                            className="adminOption"
                            >
                            <img src={ManageProductImage} alt="ManageProductImage" className="adminImage"/>
                             <span className="adminTitle">Manage Product</span>   
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/farmer/create/product"
                            className="adminOption"
                            >
                            <img src={ManageOrderImage} alt="ManageOrderImage" className="adminImage"/>
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
            <h3 className="createProductTitle">Welcome back to Farmer Dashboard <span className="userName">{firstName.toUpperCase()}</span></h3>
            <div>{adminFirstSection()}</div>
        </div>
    )
}

export default AdminDashBoard;