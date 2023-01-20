import './Header.css'
import Button from "../../Components/Button/Button";
import { useEffect, useState ,useContext } from 'react';
import ToggleContext from '../../Context/ToggleContext';



const Header = () => {
    const {isToggleled ,setIsToggeled } = useContext(ToggleContext);

    // const [theme, setTheme] = useState(false)

    const onThemeToggle = () => {
        console.log("in the toggle fun");
        setIsToggeled(current => !current)
    };

    // useEffect(()=>{
    //     localStorage.setItem('todosList', JSON.stringify(todos));
    // },[todos]);

    return (
        <header className={`header ${isToggleled ? 'lightTheme-header' : ''}`}>
            <span className="header__icon">📝</span>
            <h1 className="header__h1">ToDO LisT</h1>
            <Button 
            className={'header__theme-button'}
            text={`${isToggleled ? '☀️' : '🌙'}`}
            onButtonClick={onThemeToggle} 
            />
        </header>
    )
};

export default Header