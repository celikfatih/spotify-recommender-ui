import { Box, Button, Grid, ResponsiveContext, Text } from "grommet";
import React, { useContext, useState } from "react";
import Message from "../components/Message";
import ArtistSelectionPage from "./ArtistSelectionPage";
import GenreSelectionPage from "./GenreSelectionPage";
import TrackSelectionPage from "./TrackSelectionPage";

const SelectionSteps = ({ title, next }) => {
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
    }

    const handleClick = (input, value) => {
        setStepInfo({ ...stepInfo, [input]: (stepInfo[input].indexOf(value) === -1 ? [...stepInfo[input], value] : [...stepInfo[input]]) });
        setShowNext(true);
        console.log(stepInfo);
    }

    const currentStep = (step) => {
        switch (step) {
            case 1:
                return <ArtistSelectionPage showNext={setShowNext} handleClick={handleClick} />
            case 2:
                return <GenreSelectionPage showNext={setShowNext} handleClick={handleClick} />
            case 3:
                return <TrackSelectionPage showNext={setShowNext} handleClick={handleClick} />
            case 4:
                return <Text>{JSON.stringify(stepInfo)}</Text>
            default:
            // nothing
        }
    }

    return (
        <Box direction="row" align="center" justify="center" flex>
            <Grid
                align="center"
                justify="center"
                rows={['xsmall', 'small'].includes(size) ? ['xsmall', 'xsmall', 'xsmall'] : ['small', 'small', 'small']}
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
                    <Message message={title}></Message>
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
                    {showNext && (<Box direction="column">
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

export default SelectionSteps;