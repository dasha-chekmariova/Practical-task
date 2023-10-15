import { Nav } from './Nav';
import './header.scss'

export const Header = () => {
    return (
        <header className="header">
            <Nav />
            <div className="header-face">
                <h1 className='header-face-h1'>cinema trustee</h1>
                <h2 className='header-face-h2'>a service that will help you plan your free time and enjoy the best bestsellers</h2>

                <div className="header-robot">
                    <img className='header-face-img' src="robot.png" alt="robot" />
                    </div>
                
                    <img className='header-face-img-gl'src="glass.png" alt="glass" />
              
            </div>
            
        </header>
    );
}