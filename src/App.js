

import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import Notfound from './Notfound';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { useState } from 'react';
import Category from './Category';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {  //Making router functionality avaliable to all the compoent
  //So for making an variable path which will be blog id to be open it will look like
  //Compnent name always start with capital letter
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>    
    <Router>
      <div className="App">
        <button onClick={() => themeToggler()} className="themeb"></button>
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/"> 
              <Home />
          </Route>
          <Route exact path="/Create">
              <Create />
          </Route>
          <Route exact path="/blogs/:id"> 
            <BlogDetail />
          </Route>
          <Route exact path="/Category"> 
            <Category />
          </Route>
          <Route path="*"> 
            <Notfound />
          </Route>
          
          </Switch>
            
        </div>
      </div>
    </Router>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
