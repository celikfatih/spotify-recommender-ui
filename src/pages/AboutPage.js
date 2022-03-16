import { Avatar, Box } from "grommet";
import React from "react";
import FilledParagraph from "../components/FilledParagraph";

const AboutPage = ({ paragraph }) => {
    const src = `https://avatars.githubusercontent.com/u/28659421?s=96&v=4`;
    return <Box direction="column" pad="medium" gap="small" align="center" justify="center" flex>
        <Avatar size="3xl" src={src}></Avatar>
        <FilledParagraph paragraph={paragraph} />
    </Box>
}

export default AboutPage;