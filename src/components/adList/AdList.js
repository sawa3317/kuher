import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useAdService from "../../services/adService";



function AdList() {
    const {category} = useParams();
    const {getAd} = useAdService();

    const [ads, setAds] = useState(null);

    const updateAd = () => {
        getAd(category).then(onAdLoaded);
    }

    useEffect(() => {
        updateAd();
    },[category])

    const onAdLoaded = (ad) => {
        setAds(ad);
    }

    return (
        <div className="container">
            <div className="ad">
                <ul className="ad__list">
                    {ads?.map(ad => <li key={ad.id}>{ad.name}</li>)}
                </ul>
            </div>
        </div>
            
    )
}

export default AdList;