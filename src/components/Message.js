import { ResponsiveContext, Text } from "grommet";
import React, { useContext } from "react";

const Message = ({ message }) => {
    const size = useContext(ResponsiveContext);
    return <Text truncate="tip" alignSelf="center" textAlign="center" margin="auto" size={['xsmall', 'small'].includes(size) ? 'medium' : 'xxlarge'}>{message}</Text>
}

export default Message;