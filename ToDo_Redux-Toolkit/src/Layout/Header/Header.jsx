import './Header.css'
import Button from "../../Components/Button/Button";

const Header = () => {
    return (
        <header className="header">
            <span className="header__icon">📝</span>
            <h1 className="header__h1">ToDO LisT</h1>
            <Button 
            className={'header__theme-button'}
            text={'🌙'} 
            />
        </header>
    )
};

export default Header