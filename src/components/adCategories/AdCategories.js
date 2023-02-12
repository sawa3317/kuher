import {useEffect, useState} from 'react';

import './adCategories.css';
import AdCategory from '../adCategory/AdCategory';

import useAdCategoriesService from '../../services/adCategoriesService'

function AdCategorises() {
    
    const {getAdCategories} = useAdCategoriesService();
    const [categories, setCategories] = useState(null);

    

    useEffect(() => {
        getAdCategories()
        .then(categories => {
            setCategories(categories)
        });
    },[]);

    return (
        <div className="container">
            <div className="categories">
                {categories? categories.map(({name, img, id}) => {
                    return <AdCategory key={id} title={name} src={img}/>
                }) : null}
            </div>
        </div>
    )
}

export default AdCategorises;