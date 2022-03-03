import { Box, Grid, Main } from "grommet";
import React from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const AppLayout = ({ children }) => {
    return (
        <Grid rows={['xxsmall', 'flex', 'xxsmall']}
            columns={['auto']}
            areas={[
                ['header'],
                ['main'],
                ['footer'],
            ]}
            fill
        >
            <Box
                gridArea="header"
                justify="center"
                pad="small"
            >
                <AppHeader />
            </Box>
            <Box
                gridArea="main"
                pad="small"
            >
                <Main pad={{ horizontal: "medium", vertical: "small" }} fill={false} flex>
                    {children}
                </Main>
            </Box>
            <Box
                gridArea="footer"
                justify="center"
                pad="small"
            >
                <AppFooter />
            </Box>
        </Grid>
    )
}

export default AppLayout;