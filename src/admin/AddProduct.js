import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createProduct } from "./helper/adminApiCall";
import { isAuthenticated } from "../auth/helper/auth-data";
import InputField from "../components/input/input.component";
import SubmitButton from "../components/submit-button/submit-button.component";

const AddProduct = () => {
    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        category: "",
        loading: false,
        error: "",
        createdProduct: "",
        getRedirect: false,
        formData: ""
    });

    // const preload = () => {
    //     isAuthenticated().then(data => {
    //         if(data.error){
    //             setValues({...values, error: data.error, formData: new FormData()})
    //         }else{
    //             setValues({...values, category: data, formData: new FormData()})
    //         }
    //     })
    // }

    // useEffect(() => {
    //     preload();
    // })

    const handleSubmit = async(event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true })
        await createProduct(user._id, token, formData).then(data => {
            if(data.error){
                setValues({ ...values, error: data.error })
            }else{
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    price: "",
                    photo: "",
                    category: "",
                    stock: "",
                    loading: false,
                    createdProduct: data.name
                });
            }
        });
    }
   
    const handleChange = (event) => {
        const {name, value} = event.target;
        const formData = new FormData()
        formData.set(name, value);
        setValues(prevState => ({
            ...prevState,
            error: false,
            [name]: value
        }))
    }

    const { name, description, price, stock, photo, category, loading, error, createdProduct, getRedirect, formData } = values
    
    const createProductForm = () => {
    return(
        <form method="post">
            <InputField
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
            handleChange={handleChange}
            />
            <InputField
            name="name"
            placeholder="Name"
            value={name}
            handleChange={handleChange}
            />
            <textarea
            name="description"
            placeholder="Description"
            value={description}
            cols="5"
            rows="10"
            onChange={handleChange}
            />
            <InputField
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
            value={stock}
            handleChange={handleChange}
            />
            <select name="category" id="category" placeholder="Categoruy" value={category} onChange={handleChange}>
                <option>Select</option>
                <option value="vegetable">vegetables</option>
                <option value="grain">grains</option>
            </select>
            <InputField
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            handleChange={handleChange}
            />
            <SubmitButton
            type="submit"
            value="CREATE"
            onClick={handleSubmit}
            />
        </form>
    );
}

return (
    <div>
        {createProductForm()}
    </div>
)
}

export default AddProduct;