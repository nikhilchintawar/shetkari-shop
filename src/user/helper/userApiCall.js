import {API} from "../../backend";


// const getUser = (userId, token) => {
//     return fetch(`${API}/user/${userId}`, {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         }
//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))
// } 

const updateUser = (userId, token, user) => {
    return fetch(`${API}/user/${userId}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const deleteUser = (userId, token) => {
    return fetch(`${API}/user/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export {updateUser, deleteUser}
