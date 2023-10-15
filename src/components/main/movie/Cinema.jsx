import './Cinema.scss';
import MovieList from './MovieList';

export const Cinema = () => (
    <div className="cinema">
        <div className="cinema--flex">
            <h2 className='cinema-title'>now in rental</h2>

        </div>

        <MovieList />
    </div>
)

