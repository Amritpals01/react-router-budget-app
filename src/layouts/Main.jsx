//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
//helper functonss
import { fetchdata } from "../helpers"
//assets
import wave from "../assets/wave.svg";
//components,navbar
import  Nav  from "../components/Nav";
//loader
export function mainLoader(){
    const userName = fetchdata("userName");
    return { userName }
}

const Main = () => {
    const {userName} =useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
      <Outlet/>
      </main>
      <img src={wave} alt="" />
    </div>
  )
}

export default Main
