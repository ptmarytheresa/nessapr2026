import { Provider } from "react-redux"
import Allroutes from "./components/Allroutes"
import ToolkitDashboard from "./components/ToolkitDashboard"
import { apicontext } from "./contextdata"
import Sample from "./Sample"
 


function App() {
 

  return (
    <>
     {/* <Allroutes/> */}
     <ToolkitDashboard/>

     <Provider context={apicontext}>
       <Sample>
           <Samplechild/>
        </Sample>
     </Provider>
    </>


  )
}

export default App
