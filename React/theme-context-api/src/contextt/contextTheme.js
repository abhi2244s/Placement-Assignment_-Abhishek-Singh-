import  { createContext, useState} from 'react';

export const contextTheme = createContext();

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(false);
    
    // const toggleTheme = ()=>{
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // }
    return(
        <contextTheme.Provider value={{theme,setTheme}}>
            {children}
        </contextTheme.Provider>
    )
}