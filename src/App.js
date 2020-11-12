import React from 'react';
import './App.css';
import { Navbar, Nav, Card } from 'react-bootstrap';
import CardHeader from '@material-ui/core/CardHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import DineIn1 from './static/images/cards/DineIn1.png';
import DineIn2 from './static/images/cards/DineIn2.png';
import Pho from './static/images/cards/pho.jpg';
import canh1 from './static/images/cards/canh1.jpg';
import canh2 from './static/images/cards/canh2.jpg';
import com from './static/images/cards/com.jpg';
import { Grid } from '@material-ui/core';
import {Link} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%'
  },
  card: {
    textAlign: 'center',
    backgroundColor: 'ivory',
    padding: '20px'
  },
  media: {
    width: '250px',
    textAlign: 'center',
    borderRadius: '20px',
    height: 200,
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#343a40',
    color: 'white',
    lineHeight: '50px'
  },
  dineInPic: {
    width: '100%'
  },
  galleryContent: {
    margin: 10,
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* NAV BAR */}
      <Navbar className={classes.navbar} bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand><Link  to='main' spy={true} smooth={true}>LE's Pho</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link><Link  to="about" spy={true} smooth={true}>About</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Contain */}
      <Grid id='main' container justify='center' alignItems='center'>
        <img alt='dine in menu 1' src={DineIn1} className={classes.dineInPic}></img>
        <img alt='dine in menu 2'src={DineIn2} className={classes.dineInPic}></img>
        <h2>
          Gallery
        </h2>
        <Grid className={classes.galleryContent} direction="row" container spacing={1}>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                title="Pho"
                // subheader="September 14, 2016"
              />
              <div style={{width: '100%'}}>
              <img alt='Pho' className={classes.media} src={Pho}></img>
              </div>
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
            <CardHeader
              title="Com"
              // subheader="September 14, 2016"
            />
            <div style={{width: '100%'}}>
            <img alt='com' className={classes.media} src={com}></img>
            </div>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
            <CardHeader
              title="Canh1"
              // subheader="September 14, 2016"
            />
            <div style={{width: '100%'}}>
            <img alt='canh1' className={classes.media} src={canh1}></img>
            </div>
            </Card>
          </Grid>


          <Grid item sm={6} md={4}>
            <Card className={classes.card}>
            <CardHeader
              title="Com dac biet suon"
              // subheader="September 14, 2016"
            />
            <div style={{width: '100%'}}>
            <img alt='canh2' className={classes.media} src={canh2}></img>
            </div>
            </Card>
            
          </Grid>
        </Grid>
      </Grid>

      {/* Footer */}
      <footer id='about' className={classes.footer}>
        <div>
          <span style={{fontWeight: 'bold'}}>Address:</span> 5040 W State Rd 46 #1114, Sanford, FL 32771
        </div>
        <div>
        <span style={{fontWeight: 'bold'}}>Hours:</span> Monday - Saturday: 11AM - 9PM, Sunday: Closed
        </div>
      &copy; {new Date().getFullYear()} Copyright: <a href="/"> LePho Sanford </a>
      </footer>
    </div>
  );
}

export default App;
