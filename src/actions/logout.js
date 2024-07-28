import { redirect } from "react-router-dom"
import { deletItem } from "../helpers"

export async function logoutAction(){
    //delet user
    deletItem({key: "userName"})

    // redirect
    return redirect("/")
}