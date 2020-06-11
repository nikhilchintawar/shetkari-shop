import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { createProduct } from "./helper/adminApiCall";
import { isAuthenticated } from "../auth/helper/auth-data";
import InputField from "../components/input/input.component";
import SubmitButton from "../components/submit-button/submit-button.component";

const AddProduct = () => {
    const { user: {_id: id, firstName}, token } = isAuthenticated();

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

    const preload = () => {
        setValues({...values, formData: new FormData()})
    };

    useEffect(() => {
        preload();
    }, []);
    
    const handleSubmit = async(event) => {
        event.preventDefault();
       
        setValues({...values, error: "", loading: true })
        
        await createProduct(id, token, formData).then(data => {
            if(data.error){
                console.log(data.error)
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
        })
    }

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.append(name, value);
        
        setValues({ ...values, [name]: value });
      };

    const { name, description, price, stock, category, loading, error, createdProduct, getRedirect, formData } = values
    const createProductForm = () => {
    return(
        <form method="post">
            <InputField
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
            handleChange={handleChange("photo")}
            />
            <InputField
            name="name"
            placeholder="Name"
            value={name}
            handleChange={handleChange("name")}
            />
            <textarea
            name="description"
            placeholder="Description"
            value={description}
            cols="5"
            rows="10"
            onChange={handleChange("description")}
            />
            <InputField
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
            value={stock}
            handleChange={handleChange("stock")}
            />
            <select name="category" id="category" placeholder="Categoruy" value={category} onChange={handleChange("category")}>
                <option>Select</option>
                <option value="vegetable">vegetables</option>
                <option value="grain">grains</option>
            </select>
            <InputField
            type="number"
            name="price"
            placeholder="Price(in RS)"
            value={price}
            handleChange={handleChange("price")}
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
    <h4>Welcome back, {firstName}</h4>
        {createProductForm()}
    </div>
)
}

export default AddProduct;