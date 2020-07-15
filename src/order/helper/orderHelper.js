import { API } from "../../backend";

const makePayment = (token, products) => {
    const body = {
        token, 
        products
    }

    const headers = {
        "Content-Type": "application/json"
    }
    return fetch(`${API}/stripepayment`, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    })
    .then(response => {
        console.log(response);
        const {status} = response;
        console.log(status);
        
    })
    .catch(error => console.log(error))
}

export {makePayment}