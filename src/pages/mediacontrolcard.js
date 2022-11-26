import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
  const theme = useTheme();

  // function imageClick(){
  //   //refs.layer.style.display = "block";
  // };

  return (
    <Box>
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 800 }}
        //image="/static/images/cards/live-from-space.jpg"
        image={require("../images/topleft1.png")}
        alt="Live from space album cover"
      />
    </Card>
    </Box>
  );
}
