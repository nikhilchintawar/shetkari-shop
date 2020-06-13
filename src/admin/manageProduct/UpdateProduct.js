import React, {useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, updateProduct } from '../helper/adminApiCall';
import { isAuthenticated } from '../../auth/helper/auth-data';
import InputField from '../../components/input/input.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import { loadingMessage, errorMessage } from '../../user-authentication/utils/utils';
import { UpdateSuccessMessage } from "../utils/utils";

const UpdateProduct = ({match}) => {
    const { user: {_id: id, firstName}, token} = isAuthenticated();

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
        success: false,
        formData: ""
    });

    const { name, description, price, stock, category, loading, error, createdProduct, success, formData } = values

    const preload = (productId) => {
        getProduct(productId).then(data => {
            if(data.error){
                setValues({...values, error: data.error, success: false });
            }else{
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category,
                    stock: data.stock,
                    photo: data.photo,
                    formData: new FormData()
                });
            }
        });
    };


    useEffect(() => {
        preload(match.params.productId);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true});

        updateProduct(match.params.productId,id, token, formData).then(data => {
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }else{
                console.log(data)
                setValues({
                ...values,
                name:"",
                description: "",
                price: "",
                photo: "",
                stock: "",
                loading: false,
                success: true,
                createdProduct: data.name
                })

            }
        })
    }

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.append(name, value);
        
        setValues({ ...values, [name]: value });
      };

    const createProductForm = () => {
    return(
        <div className="createProductForm">
        <form method="post">
            <InputField
            type="file"
            name="photo"
            accept="image"
            placeholder="choose file"
            handleChange={handleChange("photo")}
            />
            <InputField
            type="text"
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
            value="UPDATE"
            onClick={handleSubmit}
            />
        </form>
        <Link to="/farmer/manage/product"><SubmitButton type="submit" value="BACK" /></Link>
        </div>
    );
}
    return (
        <div>
        <h4 className="createProductTitle">Welcome back, {firstName}</h4>
        {loadingMessage(loading)}
        {errorMessage(error)}
        {UpdateSuccessMessage(success, createdProduct)}
        {createProductForm()}
        </div>
    );
};

export default UpdateProduct;