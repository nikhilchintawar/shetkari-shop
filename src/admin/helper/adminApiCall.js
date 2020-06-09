import { API } from "../../backend";


//product calls
//create product
const createProduct = (userId, token, product) => {
    return fetch(`${API}/user/${userId}/product/create`, {
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error))
}

//get all products
const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error))
};

//get product
const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

//update a product
const updateProduct = (productId, userId, token) => {
    return fetch(`${API}/user/${userId}/product/${productId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

//delete product
const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/user/${userId}/product/${productId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct}