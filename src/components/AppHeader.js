import React, { useContext } from "react";
import { Box, Button, Header, Menu, Nav, ResponsiveContext, Text } from 'grommet';
import { Spotify, Menu as MenuIcon } from "grommet-icons";

const items = [
    { label: 'About' },
    { label: 'How It Works?' },
];

const AppHeader = (props) => {
    const size = useContext(ResponsiveContext);
    return (
        <Header fill="horizontal">
            <Button>
                <Box direction="row" align="start" gap="medium" pad={{ vertical: 'small' }}
                    responsive={false}>
                    <Spotify color="brand"></Spotify>
                    <Box direction="row" gap="xsmall" wrap>
                        <Text color="text-strong" weight="bold">
                            ELO
                        </Text>
                    </Box>
                </Box>
            </Button>
            {size !== 'small' ? (
                <Nav direction="row">
                    {items.map(item => (
                        <Button label={item.label} key={item.label} />
                    ))}
                </Nav>
            ) : (
                <Menu icon={<MenuIcon />} items={items} />
            )}
        </Header >
    )
}

export default AppHeader;