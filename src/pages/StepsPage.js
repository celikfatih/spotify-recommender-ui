import { Box, Button, Grid, ResponsiveContext } from "grommet";
import React, { useContext, useState } from "react";
import Message from "../components/Message";
import ArtistSelectionPage from "./ArtistSelectionPage";
import GenreSelectionPage from "./GenreSelectionPage";
import RecommendationPage from "./RecommendationPage";
import TrackSelectionPage from "./TrackSelectionPage";

const StepsPage = ({ title, next }) => {
    const size = useContext(ResponsiveContext);
    const [showNext, setShowNext] = useState(false);
    const [stepInfo, setStepInfo] = useState({
        step: 1,
        artists: [],
        genres: [],
        tracks: [],
    });

    const nextStep = () => {
        setStepInfo({ ...stepInfo, step: stepInfo.step + 1 });
        setShowNext(!showNext);
    }

    const handleClick = (input, value) => {
        setStepInfo({ ...stepInfo, [input]: (stepInfo[input].indexOf(value) === -1 ? [...stepInfo[input], value] : [...stepInfo[input].filter(v => v !== value)]) });
        setShowNext(!showNext);
    }

    const currentStep = (step) => {
        switch (step) {
            case 1:
                return <ArtistSelectionPage handleClick={handleClick} />
            case 2:
                return <GenreSelectionPage handleClick={handleClick} />
            case 3:
                return <TrackSelectionPage handleClick={handleClick} />
            default:
                return <RecommendationPage stepInfo={stepInfo} />
        }
    }

    return (
        <Box direction="row" align="center" justify="center" flex>
            <Grid
                align="center"
                justify="center"
                rows={['xsmall', 'small'].includes(size) ? ['xsmall', 'small', 'xsmall'] : ['small', 'small', 'small']}
                columns={{ size: 'auto' }}
                areas={[
                    ['title'],
                    ['shapes'],
                    ['next']
                ]}
            >
                <Box
                    gridArea="title"
                    justify="center"
                    pad="small"
                >
                    <Message message={stepInfo.step === 4 ? 'Here it\'s tracks for you 😎' : title}></Message>
                </Box>
                <Box
                    gridArea="shapes"
                    justify="center"
                    pad="small"
                >
                    {currentStep(stepInfo.step)}
                </Box>
                <Box
                    gridArea="next"
                    justify="center"
                    pad="small"
                >
                    {showNext && stepInfo.step !== 4 && (<Box direction="column">
                        <Message message={next}></Message>
                        <Box pad="small">
                            <Button size="large" margin={{ horizontal: 'auto' }} primary label="Go ➡️" onClick={() => { nextStep() }}></Button>
                        </Box>
                    </Box>)}
                </Box>
            </Grid>
        </Box>
    )
}

export default StepsPage;