import { Box, Markdown, ResponsiveContext } from "grommet";
import React, { useContext, useRef } from "react";

const content = `
# How It Works?
First of all, this project was made for entertainment purposes and does not have any commercial purpose.

The application consists of three steps in total. In each step, there are three shapes with different colors and geometry.
Each shape and color has its own characteristics. You must choose at least one of these shapes at each step.
When you make a selection, the shape you have selected will turn black and a button will be active under the shapes.

<img alt="shapes" src="https://i.ibb.co/WsvgWgp/how-it-works-shapes.gif" width="430px"/>

If you want to cancel your selection, simply tap on it again. When you click/tap the active button, a
You will have passed to the next stage. At this stage, you will repeat what was done in the previous step, and after the last step
You will reach the page where there are three song suggestions prepared based on the colors and geometric shapes you have chosen.

<img alt="shapes" src="https://i.ibb.co/WsvgWgp/how-it-works-recommendation.gif" width="430px"/>

We hope we have recommended tracks that you will like. Enjoyable listening. 🎼🎧

For your problems, comments and suggestions you can reach us from the links at the bottom right of the page.
`;

const HowItWorksPage = () => {
    const ref = useRef();
    const size = useContext(ResponsiveContext);
    return <Box align={!['xsmall', 'small'].includes(size) && "center"} pad="small">
        <Markdown ref={ref}>{content}</Markdown>
    </Box >
}

export default HowItWorksPage;