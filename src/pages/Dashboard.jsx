//rrd imports
import { useLoaderData } from "react-router-dom";
//helper functonss
import { fetchdata } from "../helpers"

//loader
export function dashboardLoader(){
    const userName = fetchdata("userName");
    return { userName }

}

const Dashboard = () => {
    const {userName} =useLoaderData()
  return (
    <div>
      <h1>{userName}</h1>
      DASHBOAD
    </div>
  )
}

export default Dashboard
