import React from 'react';
import Container from '@mui/material/Container';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Landing from './pages/landing';
import MediaControlCard from './pages/mediacontrolcard';

// import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// const theme = createMuiTheme({

// });



const App = () => {
  return (
    
      <Router>
        

        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/media" element={<MediaControlCard/>} />
          {/* <Route exact path="/about" component={<About/>} />
          <Route exact path="/blog" component={<Blog/>} />
          <Route exact path="/contact" component={<Contact/>} /> */}
        </Routes>
      </Router>
      )
}


export default App;
