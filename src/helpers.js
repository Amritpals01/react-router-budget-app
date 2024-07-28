

// local storage 
export const fetchdata = (key)=>{
    return JSON.parse(localStorage.getItem(key));
};

//delete users
export const deletItem= ({key}) =>{
    return localStorage.removeItem(key)
}