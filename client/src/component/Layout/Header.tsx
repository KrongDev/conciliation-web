import { HiddenSearchButton } from "../Search";

const Header = () => {

    const onClickLogo = () => {
        window.location.href = "/";
    }

    return (
        <header className="header">
            <div className="logo" onClick={onClickLogo}>화해</div>
            <nav className="nav">
                <HiddenSearchButton/>
                {/*<a href="/">Home</a>*/}
                {/*<a href="/about">About</a>*/}
                {/*<a href="/contact">Contact</a>*/}
            </nav>
        </header>
    );
};

export default Header;
