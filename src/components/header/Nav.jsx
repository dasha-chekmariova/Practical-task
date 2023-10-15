import './nav.scss'

export const Nav = () => (
    <>
        <nav className="nav">
                <div className="nav-img">
                    <img src="favicon.png" className="nav-favicon" alt="icon" />
                    <div className="nav-img-text">
                        cinema-trustee
                    </div>
                </div>
                
                <a href="#" className="nav-contact nav-link">contact</a>
                <a href="#" className="nav-schedule nav-link">schedule</a>
                <a href="#" className="nav-about-us nav-link">about us</a>
        </nav>
    </>
)