import { Paragraph } from "grommet";
import React from "react";

const FilledParagraph = ({ paragraph }) => {
    return <Paragraph fill>
        {paragraph}
    </Paragraph>
}

export default FilledParagraph;