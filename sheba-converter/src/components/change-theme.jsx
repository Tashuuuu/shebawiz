import {useAppContext} from "../contexts/app/app-context.jsx";
import {useEffect} from "react";

const ChangeTheme = () => {
    const {theme, changeTheme} = useAppContext();
    useEffect(() => {
        const lightStylesheet = document.getElementById("light-stylesheet");
        const darkStylesheet = document.getElementById("dark-stylesheet");
        if (theme === "light") {
            lightStylesheet.removeAttribute("disabled");
            darkStylesheet.setAttribute("disabled", "disabled");
            document.body.style.backgroundColor = '#DAD7D7'
        } else {
            lightStylesheet.setAttribute("disabled", "disabled");
            darkStylesheet.removeAttribute("disabled");
            document.body.removeAttribute('style');
        }
    }, [theme])
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <button className='theme-toggle pb-2 d-flex align-items-center justify-content-center' data-theme={theme}
                onClick={changeThemeHandler}>
            <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"
                 style={{width: '2rem', height: '2rem', marginBottom: "20px"}}>
                <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                    <circle cx="24" cy="10" r="6" fill="black"></circle>
                </mask>
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
                <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </g>
            </svg>
        </button>
    )
}
export default ChangeTheme;