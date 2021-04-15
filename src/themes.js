import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "rgb(83, 83, 83)",
};

export const darkTheme = {
  body: "rgb(32, 32, 32)",
  fontColor: "#fff",
 
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        
	}
  .Home1, .Home, .allblog{
    color: ${(props) => props.theme.fontColor}
  }
  .blog-preview p{
    color: ${(props) => props.theme.fontColor}
  }
  .lets, .Effect, .rishi, .catp{
    color: ${(props) => props.theme.fontColor}
  }
  .blogtitle, .blogauthor, .blogbody{
    color: ${(props) => props.theme.fontColor}
  }
  
  
  
`;