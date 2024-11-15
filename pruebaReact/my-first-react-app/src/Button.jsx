import { useState } from 'react';
import './Profile.css';

function Button() {
    const [fav, setFav] = useState(false);

    function toggleFav() {
        setFav(!fav);
    }

    const src = fav ? "favoritoFull" : "favorito";

    return (
        <div>
            <a onClick={toggleFav} href="#">
                <img className="fav" src={`src/img/${src}.png`} alt="fav" />
            </a>
        </div>
    );
}

export default Button;
