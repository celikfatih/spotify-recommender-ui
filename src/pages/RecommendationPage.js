import { Box, List, ResponsiveContext, Text } from "grommet";
import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";

const RecommendationPage = ({ stepInfo }) => {
    const size = useContext(ResponsiveContext);
    const [isLoading, setIsLoading] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        const request = {
            genres: stepInfo.genres.map(g => g.name),
            tracks: stepInfo.tracks.map(t => t.spotifyId),
            artists: stepInfo.artists.map(a => a.spotifyId),
        }
        api.post('recommendations/recommend-tracks', request)
            .then(res => {
                setRecommendations(res.data);
            })
            .catch(err => {
                setError(err);
            });
        setIsLoading(false);
    }, [stepInfo]);
    return (
        <>
            {isLoading && <Loading />}
            {error || (!Array.isArray(recommendations) && !recommendations.length) ?
                <Text>Something went wrong, please try again later. We are sorry for problem. 😞</Text>
                :
                <Box pad="large" height="100%" align="center">
                    <List data={recommendations} pad="xxsmall" align="center">
                        {(recommendation) => (
                            <iframe src={recommendation} width={['xsmall', 'small'].includes(size) ? 250 : 300} height={80} title={recommendation} />
                        )}
                    </List>
                </Box>
            }
        </>
    )
}

export default RecommendationPage;