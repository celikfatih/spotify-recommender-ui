import React, { useContext } from "react";
import { Twitter, Linkedin, Mail, Github, Spotify } from "grommet-icons";
import { Anchor, Box, Footer, ResponsiveContext, Text } from 'grommet';

const footerItems = [
    { key: 1, anchor: <Anchor a11yTitle="Share feedback on Github" href="https://github.com/celikfatih" icon={<Github />} /> },
    { key: 2, anchor: <Anchor a11yTitle="Follow me on Twitter" href="https://twitter.com/celikfatii" icon={<Twitter />} /> },
    { key: 3, anchor: <Anchor a11yTitle="Connect to Linkedin" href="https://linkedin.com/in/cefatihcelik" icon={<Linkedin />} /> },
    { key: 4, anchor: <Anchor a11yTitle="Ask any question on Mail" href="mailto:celikfatih@protonmail.com" icon={<Mail />} /> },
    { key: 5, anchor: <Anchor a11yTitle="Listen to my playlists on Spotify" href="https://spotify.com" icon={<Spotify />} /> }
]

const year = new Date().getFullYear();

const AppFooter = () => {
    const size = useContext(ResponsiveContext);
    return (
        <Footer
            direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
            align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        >
            <Box
                direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
                align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
                gap="xsmall"
            >
                <Text size="small">
                    &copy; {year} fati
                </Text>
            </Box>
            <Box
                direction="row"
                align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
                gap="xsmall"
                wrap
            >
                {footerItems.map((item) => (
                    <Box key={item.key}>
                        {item.anchor}
                    </Box>
                ))}
            </Box>
        </Footer>
    )
}

export default AppFooter;