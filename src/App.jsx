import "./App.css";
import { Myprovider } from "./Components/AI_Context/AiContext";
import History from "./Components/History/History";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const{history,}=Myprovider();
  return (
    <>
   
   
      <div className="flex">
        <Sidebar />
    {history ? <History/> : <Main />   }
       
      </div>
    
    
    </>
  );
}

export default App;
