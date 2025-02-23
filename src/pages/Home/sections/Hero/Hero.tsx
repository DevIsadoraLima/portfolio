import React from "react";
import { colors, Container, Grid, styled, Typography, Box, Paper, Button} from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import { blue, blueGrey } from "@mui/material/colors";
import ArticleIcon from '@mui/icons-material/Article';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import theme from "../../../../theme";
import { Padding } from "@mui/icons-material";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: '#193549',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop:"100px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop:"80px",
        }
    }))

    const StyledImg = styled("img")(({theme})=> ({
        width: "80%",
        borderRadius: "50%",
        border: '1px solid ${theme.palette.primary.contrastText}',
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary" variant="h1" textAlign={"center"} pb={2}>Isadora Lima </Typography>
                        <Typography color="primary" variant="h2" textAlign={"center"}>Developer </Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={0} paddingTop={3}>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <Button color="secondary" variant="outlined" onClick={() => console.log("dowload") }>
                                    <ArticleIcon/>
                                    Download CV</Button>
                            </Grid>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <Button color="secondary" variant="outlined" onClick={() => console.log("contact")}>
                                    <ForwardToInboxIcon/>
                                    Contact me</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>
        </>
    );
}
  
export default Hero;
  