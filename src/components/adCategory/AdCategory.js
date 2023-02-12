import './adCategory.css';

import { Link } from 'react-router-dom';

function AdCategory({title, src}) {
    

    return (
        <div className="category">
            <Link to={"/ad/" + title} className="category__title">{title}</Link>
            <img src={src} alt="" className="category__img" />
        </div>
    )
}

export default AdCategory;