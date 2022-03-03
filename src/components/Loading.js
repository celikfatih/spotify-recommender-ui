import React, { useContext } from "react";
import styled from "styled-components";
import { Favorite } from "grommet-icons";
import { Box, ResponsiveContext, Spinner, Text } from "grommet";

const FavoriteFilled = styled(Favorite)`
    path[fill='none'] {
        fill: #15E1EA;
    }`;

const Loading = () => {
    const size = useContext(ResponsiveContext);

    return (<Box direction="row" gap="medium" pad="small">
        <Spinner animation={{ type: 'pulse', duration: 650, size: 'medium' }}>
            <FavoriteFilled color="#15E1EA" size={['xsmall', 'small'].includes(size) ? 'medium' : 'large'} />
        </Spinner>
        <Text size={['xsmall', 'small'].includes(size) ? 'small' : 'medium'}
            margin={!['xsmall', 'small'].includes(size) && { horizontal: 'small', vertical: 'small' }}
        >
            Loading with Energy...
        </Text>
    </Box>)
}

export default Loading;