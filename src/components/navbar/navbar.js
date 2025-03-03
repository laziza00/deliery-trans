import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__item-link">Услуги</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__item-link">Международные перевозки</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__item-link">Для бизнеса</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__item-link">Частным лицам</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__item-link">О компании</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__item-link">Контакты</Link>
                </li>
                <li className="navbar__item">
                    <a className="navbar__item-link" href="https://deliverytrans@gmail.com">deliverytrans@gmail.com</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;