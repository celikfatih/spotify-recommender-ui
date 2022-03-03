import React, { useEffect, useState } from "react";
import Shapes from "../components/Shapes";
import api from "../api";

const TrackSelectionPage = ({ handleClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [shapes, setShapes] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        api.get('tracks/random')
            .then(res => {
                setShapes(res.data);
            })
            .catch(err => {
                setError(err.message);
            });
        setIsLoading(false);
    }, []);

    return <Shapes type="tracks" isLoading={isLoading} shapes={shapes} error={error} handleClick={handleClick} />
}

export default TrackSelectionPage;