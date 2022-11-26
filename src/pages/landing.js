import React, { Component }  from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import liz from "../images/whatmatters.png";
import zIndex from '@material-ui/core/styles/zIndex';
import "./landing.css";

const useStyles = makeStyles(theme => ({
  // marginAutoContainer: {
  //   width: "100%",
  //   height: "auto",
  //   display: 'flex',
  // },
  //marginAutoItem: {
  //  margin: 'auto'
  //},
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
}))

function Landing(){
  const classes = useStyles();
    return(
        <>
        <Box>
    <Navbar/>
    <Box>
    
        <Box>
            <video src="/video2.mp4" width="100%"  autoPlay loop muted playsInline></video>
        </Box>

        <Box className="overlay">   
            <Typography margin="auto" variant="h4" color="white" textAlign={"center"}>Do what matters</Typography>
        </Box>
    </Box>
    <div style={{width:"100%", margin:"auto",}}>
<Box sx={{
          display: 'flex',
          alignItems: 'center',   
          p: 1,
          //m: 4,
          marginTop:0,
          marginLeft:28,
          marginRight: "auto",
          marginBottom:4,
          bgcolor: 'background.paper',
          height: 100,
          borderRadius: 1,
          position: "absolute",
          zIndex:20,
        }}>
        <Box>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={require("../images/whatmatters.png")}
        alt="what matters"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          ABOUT
        </Typography>
        <Typography variant="body1" color="text.secondary">
          What matters to Avanade
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
        </Box>
        <Box sx={{marginLeft:1}}>
            <Card sx={{ maxWidth: 345,}}>
      <CardMedia
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={require("../images/whatmattersclients.png")}
        alt="what matters to clients"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          CLIENT STORIES
        </Typography>
        <Typography variant="body3" color="text.secondary">
          What matters to our clients
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">READ MORE</Button>
      </CardActions>
    </Card>
        </Box>
        
        <Box sx={{marginLeft:1}}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={require("../images/whatmatterspeople.png")}
        alt="what matters people"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          CAREERS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          What matters to our people
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">READ MORE</Button>
      </CardActions>
    </Card>
        </Box>
    </Box>
    </div>
    <Box>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
    <Box marginTop={40}>
  <Typography variant='h4' textAlign="center">What matters to you?</Typography>
  <Typography variant='body1'>We can solve your business transformation challenges through the power of people and Microsoft.</Typography>
  </Box>
  </Grid>   
   
</Grid>
</Box>
<Box>
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>
  <Grid item xs={3}>
    <Box>
  
  </Box>
  </Grid>   
   
</Grid>
</Box> 
    <Box position="relative">
      <Grid container spacing={2} position="absolute" marginTop={60}>
        <Grid item xs={8}>
        <Box>
        {/* <Card sx={{ maxWidth: 345 }}> */}
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{objectFit:"cover"}}
        //image="/static/images/cards/live-from-space.jpg"
        
        image={require("../images/topleft1.png")}
        alt="Live from space album cover"
      />
    </Card>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ objectFit:"cover" }}
        //image="/static/images/cards/live-from-space.jpg"
        image={require("../images/topright2.png")}
        alt="Live from space album cover"
      />
    </Card>
        </Box>
        </Grid>
        <Grid item xs={4}>
        <Box>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{objectFit:"cover"}}
        //image="/static/images/cards/live-from-space.jpg"
        image={require("../images/bottomleft3.png")}
        alt="Live from space album cover"
      />
    </Card>
        </Box>
        </Grid>
        <Grid item xs={8}>
        <Box>
        <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ objectFit:"cover" }}
        //image="/static/images/cards/live-from-space.jpg"
        image={require("../images/bottomright4.png")}
        alt="Live from space album cover"
      />
    </Card>
        </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>  
    </>
    );
}

export default Landing;