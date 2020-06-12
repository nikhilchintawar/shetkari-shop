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
const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/user/${userId}/product/${productId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => response.json())
    .catch(error => console.log(error)
    )
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

// const getPhoto = (productId, photo) => {
//     return fetch(`${API}/products/photo/${productId}`, {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

export {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct}