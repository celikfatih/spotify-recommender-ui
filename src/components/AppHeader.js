import React, { useContext } from "react";
import { Box, Button, Header, Menu, Nav, ResponsiveContext, Text } from 'grommet';
import { Spotify, Menu as MenuIcon } from "grommet-icons";
import { Link, useNavigate } from "react-router-dom";

const AppHeader = () => {
    const size = useContext(ResponsiveContext);
    const navigate = useNavigate();
    const items = [
        { label: 'About', onClick: () => navigate('/about') },
        { label: 'How It Works?', onClick: () => navigate('/how-it-works') },
    ];
    return (
        <Header fill="horizontal">
            <Link to="/">
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
            </Link>
            {size !== 'small' ? (
                <Nav direction="row">
                    {items.map(item => (
                        <Button label={item.label} key={item.label} onClick={item.onClick} />
                    ))}
                </Nav>
            ) : (
                <Menu icon={< MenuIcon />} items={items} />
            )}
        </Header >
    )
}

export default AppHeader;