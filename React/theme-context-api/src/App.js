import { Switch } from "antd";
import { contextTheme } from "./contextt/contextTheme";
import { useContext } from "react";

function App() {
  const { theme, setTheme } = useContext(contextTheme);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={`app `}
      style={{ backgroundColor: `${theme ? "#ffffff" : "#000000"}` }}
    >
      <div>
        {/* <div className="text-center">
          <h1 style={{ color: `${theme ? "#000000" : "#ffffff"}` }}>
            Theme Toggler
          </h1>
        </div> */}
        <div>
          <h1 style={{ color: `${theme ? "#000000" : "#ffffff"}` }}>Theme Toggler</h1>
          <Switch defaultChecked onClick={toggleTheme}/>
        </div>
      </div>
    </div>
  );
}

export default App;
