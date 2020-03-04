import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Image from 'material-ui-image'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts';
import React, { useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import messages_en from './en.json'
import messages_de from './de.json'
import messages_bs from './bs.json'
import messages_es from './es.json'
import messages_ru from './ru.json'
import parseLanguages, { formatMessage } from '../../rmw-shell/utils/localeTools'
import { Link, Container } from '@material-ui/core'

const messageSources = {
  de: messages_de,
  bs: messages_bs,
  es: messages_es,
  en: messages_en,
  ru: messages_ru,
}

const styles = theme => ({
  body: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    color: "#4d4b4b",
    lineHeight: "1.6"
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    color: "#4d4b4b",
    lineHeight: "1.6"
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    // height: '100%',
    // overflow: 'hidden'
  },
  hero: {
    height: '100%',
    // minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem',
    },
    whiteSpace: 'nowrap',
  },
  h5: {
    paddingLeft: theme.spacing(1) * 4,
    paddingRight: theme.spacing(1) * 4,
    marginTop: theme.spacing(1),
    maxWidth: 600,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: 18,
    },
  },
  content: {
    height: '100%',
    // paddingTop: theme.spacing(1) * 8,
    // [theme.breakpoints.up('sm')]: {
    //   paddingTop: theme.spacing(1),
    // },
  },
  button: {
    marginTop: theme.spacing(1) * 3,
  },
  logo: {
    color: 'red',
    margin: `0px 0 ${theme.spacing(1) * 4}px`,
    width: '100%',
    height: '40vw',
    maxHeight: 350,
  },
  steps: {
    maxWidth: theme.spacing(1) * 130,
    margin: 'auto',
  },
  step: {
    padding: `${theme.spacing(1) * 3}px ${theme.spacing(1) * 2}px`,
  },
  stepIcon: {
    marginBottom: theme.spacing(1),
  },
  markdownElement: {},
  cardsContent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 15,
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
      paddingTop: 15,
    },
  },
  card: {
    minWidth: 275,
    marginTop: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7,
    },
  },
  serviceCard: {
    minWidth: 550,
    maxWidth: 600,
    margin: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  featureBox: {
    border: "2px solid #f3f3f3",
    borderRadius: '0',
    boxShadow: 'none',
    elevation: '0',
    background: "#f6f6f6",
    minHeight: "160px"
  },
  icon: {
    height: "60px",
    left: "-2px",
    top: "-2px",
    width: "60px",
    backgroundColor: "#255aa8",
    justifyContent: "center",
    display: "flex",
    color: 'white'
  },
  centerInside: {
    alignSelf: "center",
    justifyContent: "center",
    display: "flex",
  },
  featureTitle: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    color: "#255aa8",
    paddingBottom: "10px",
    margin: "10px 0",
    fontSize: "18px",
    fontWeight: "bold",
    display: "inline-table"
  },
  description: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "14px",
    color: "#4d4b4b",
    lineHeight: "1.6",
  },
  linkArrow: {
    display: 'inline-block',
    fontWeight: "bold",
    fontSize: "14px",
    color: "#de3130",
    marginTop: '10px',
    textTransform: 'capitalize'
  },
  featureCard: {
    display: 'flex',
    flexFlow: 'column',
    flex: '1',
    paddingLeft: '15px'
  },
  mainCard: {
    display: 'flex', padding: 0, justifyContent: 'spaceBetween'
  },
  planTitle: {
    fontSize: "30px",
    color: "#255aa8",
    transition: ".3s",
  },
  prisingHead: {
    margin: "15px 0 15px 0",
    display: "flex",
    justifyContent: "center"
  },
  redR: {

  },
  priceValue: {
    background: "#255aa8 none repeat scroll 0 0",
    color: "#fff",
    fontSize: "37px",
    transform: "rotate(0deg)",
    transition: ".3s",
    lineHeight: "85px",
    display: "flex",
    justifyContent: "center"
  },
  duration: {
    verticalAlign: "baseline",
    borrom: 0,
  },
  prisingFooter: {
    display: "flex",
    flex: "1",
    justifyContent: "center"
  },
  pricingBtn: {
    borderColor: "#255aa8",
    transition: ".3s",
  }
})

const LinkArrowHover = styled.a`
display: inline-block;
fontweight: bold;
font-size: 14px;
color: #de3130;
margin-top: 10px;
text-transform: capitalize;
&:hover{
  color:#255aa8;
  cursor:pointer;
}
:after{
  color: inherit;
  content: "navigate_next";
  font-family: "Material Icons"; 
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  margin-left: 0px;
  position: relative;
  left: 0;
  top: 0px;
  vertical-align: middle;
}
&:hover:after{
  left: 5px;
  -webkit-transition: all 0.6s ease 0s;
}
`;

const match = parseLanguages(['en', 'es', 'bs', 'ru', 'de'], 'en')

// eslint-disable-next-line react/prop-types
const LandingPage = ({ classes, history, theme }) => {
  const messages = messageSources[match]

  const isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised
    } catch (ex) {
      return false
    }
  }

  useEffect(() => {
    if (isAuthorised()) {
      history.push('/signin')
    }
  })

  return (
    <div className={classes.main}>
      <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={theme.palette.primary.main}
        />
        <meta
          name="msapplication-navbutton-color"
          content={theme.palette.primary.main}
        />
        <title>{formatMessage(messages, 'main.title')}</title>
      </Helmet>

      <AppBar position="static" style={{ color: 'black', backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <div style={{ flex: 1 }} />
          <Link>
            <Typography id="tooltip-icon2" title="GitHub repository" style={{ padding: '5px' }}>
              Internet
          </Typography>
          </Link>
          <Link>
            <Typography id="tooltip-icon2" title="GitHub repository" style={{ padding: '5px' }}>
              Web Services
            </Typography>
          </Link>
          <Link>
            <Typography id="tooltip-icon2" title="GitHub repository" style={{ padding: '5px' }}>
              Graphic Design
          </Typography>
          </Link>
          <Link>
            <Typography id="tooltip-icon2" title="GitHub repository" style={{ padding: '5px' }}>
              About us
          </Typography>
          </Link>
          <Link>
            <Typography id="tooltip-icon2" title="GitHub repository" style={{ padding: '5px' }}>
              Contact us
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <div className={classes.hero}>
          <main id="main" className={classes.content}>
            <section id="banner">
              <img
                src="/4g-winter.jpg"
                alt="Material-UI Logo"
                className={classes.logo}
              />
            </section>
            <Container fixed>
              <section id="services" className={classes.cardsContent}>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <Card className={`${classes.featureBox}`}>
                      <CardContent className={classes.mainCard}>
                        <span className={classes.icon}>
                          <LockIcon className={classes.centerInside} />
                        </span>
                        <div className={classes.featureCard}>
                          <Typography component="h4" variant="subtitle1" className={classes.featureTitle}>
                            Home Internet
                        </Typography>
                          <Typography component="p" variant="body2" className={classes.description}>
                            IDM Fiber is the latest and fastest Internet access
                            solution that IDM is introducing to the market.
                            The service is now available in Achrafieh, Hamra and Ras Beirut.
                        </Typography>
                          <LinkArrowHover>Read more</LinkArrowHover>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Card className={classes.featureBox}>
                      <CardContent className={classes.mainCard}>
                        <span className={classes.icon}>
                          <LockIcon className={classes.centerInside} />
                        </span>
                        <div className={classes.featureCard}>
                          <Typography component="h4" variant="subtitle1" className={classes.featureTitle}>
                            Home Internet
                        </Typography>
                          <Typography component="p" variant="body2" className={classes.description}>
                            IDM Fiber is the latest and fastest Internet access
                            solution that IDM is introducing to the market.
                            The service is now available in Achrafieh, Hamra and Ras Beirut.
                        </Typography>
                          <LinkArrowHover>Read more</LinkArrowHover>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Card className={classes.featureBox}>
                      <CardContent className={classes.mainCard}>
                        <span className={classes.icon}>
                          <LockIcon className={classes.centerInside} />
                        </span>
                        <div className={classes.featureCard}>
                          <Typography component="h4" variant="subtitle1" className={classes.featureTitle}>
                            Home Internet
                        </Typography>
                          <Typography component="p" variant="body2" className={classes.description}>
                            IDM Fiber is the latest and fastest Internet access
                            solution that IDM is introducing to the market.
                            The service is now available in Achrafieh, Hamra and Ras Beirut.
                        </Typography>
                          <LinkArrowHover>Read more</LinkArrowHover>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Card className={classes.featureBox}>
                      <CardContent className={classes.mainCard}>
                        <span className={classes.icon}>
                          <LockIcon className={classes.centerInside} />
                        </span>
                        <div className={classes.featureCard}>
                          <Typography component="h4" variant="subtitle1" className={classes.featureTitle}>
                            Home Internet
                        </Typography>
                          <Typography component="p" variant="body2" className={classes.description}>
                            IDM Fiber is the latest and fastest Internet access
                            solution that IDM is introducing to the market.
                            The service is now available in Achrafieh, Hamra and Ras Beirut.
                        </Typography>
                          <LinkArrowHover>Read more</LinkArrowHover>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </section>
            </Container>
            <section class="sectionContent section-padding section-no-margin" id="packages">
              <div class="section-header">
                <Typography component="h2" variant="h2" class="section-title">Our Packages</Typography>
              </div>
              <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                  <Card className={classes.card}>
                    <CardContent style={{ paddingBottom: "0" }}>
                      <div class="single-price-table b-shadow text-center">
                        <div className={classes.prisingHead}>
                          <h4 className={classes.planTitle}>4M / <span className={classes.redR}> 30GB</span></h4>
                        </div>
                        <div class="prising-content">
                          <div class="price-tage-wrap-three">
                            <Typography component="h4" variant="h4" className={classes.priceValue}>
                              18,000 LBP<sub className={classes.duration}> /m</sub>
                            </Typography>
                          </div>
                          <List component="ul" style={{}} aria-label="main mailbox folders">
                            <ListItem>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary="4 MB Speed" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="30 GB of Download/Upload" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="18,000 LBP/Monthly Fees" />
                            </ListItem>
                            <Divider />
                          </List>
                        </div>
                      </div>
                    </CardContent>
                    <CardActions>
                      <div className={classes.prisingFooter}>
                        <Button href="adsl.html#plans" variant="outlined"
                          className={classes.pricingBtn} disableElevation>Read More</Button>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Card className={classes.card}>
                    <CardContent style={{ paddingBottom: "0" }}>
                      <div class="single-price-table b-shadow text-center">
                        <div className={classes.prisingHead}>
                          <h4 className={classes.planTitle}>4M / <span className={classes.redR}> 30GB</span></h4>
                        </div>
                        <div class="prising-content">
                          <div class="price-tage-wrap-three">
                            <Typography component="h4" variant="h4" className={classes.priceValue}>
                              18,000 LBP<sub className={classes.duration}> /m</sub>
                            </Typography>
                          </div>
                          <List component="ul" style={{}} aria-label="main mailbox folders">
                            <ListItem>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary="4 MB Speed" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="30 GB of Download/Upload" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="18,000 LBP/Monthly Fees" />
                            </ListItem>
                            <Divider />
                          </List>
                        </div>
                      </div>
                    </CardContent>
                    <CardActions>
                      <div className={classes.prisingFooter}>
                        <Button href="adsl.html#plans" variant="outlined"
                          className={classes.pricingBtn} disableElevation>Read More</Button>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Card className={classes.card}>
                    <CardContent style={{ paddingBottom: "0" }}>
                      <div class="single-price-table b-shadow text-center">
                        <div className={classes.prisingHead}>
                          <h4 className={classes.planTitle}>4M / <span className={classes.redR}> 30GB</span></h4>
                        </div>
                        <div class="prising-content">
                          <div class="price-tage-wrap-three">
                            <Typography component="h4" variant="h4" className={classes.priceValue}>
                              18,000 LBP<sub className={classes.duration}> /m</sub>
                            </Typography>
                          </div>
                          <List component="ul" style={{}} aria-label="main mailbox folders">
                            <ListItem>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary="4 MB Speed" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="30 GB of Download/Upload" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary="18,000 LBP/Monthly Fees" />
                            </ListItem>
                            <Divider />
                          </List>
                        </div>
                      </div>
                    </CardContent>
                    <CardActions>
                      <div className={classes.prisingFooter}>
                        <Button href="adsl.html#plans" variant="outlined"
                          className={classes.pricingBtn} disableElevation>Read More</Button>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </section>
            <section class="sectionContent section-padding section-no-margin" id="web-design">
              <div class="section-header">
                <Typography component="h2" variant="h2" class="sectionTitle">Web & Graphic Design</Typography>
              </div>
              <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                  <Box component="div" display="block" class="portfolio-item" >
                    <Box class="overlay"></Box>
                    <Box class="info">
                      <Typography component="h4" variant="h4" className="title">Société Tabbara</Typography>
                      <Link href="https://stci-lb.com/" button>check website</Link>
                    </Box>
                    <Box class="media-wrapper">
                      <img src="./work11.jpg" alt="Société Tabbara" imageStyle={{ height: 'auto', }} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Box component="div" display="block" class="portfolio-item">
                    <Box class="overlay"></Box>
                    <Box class="info">
                      <Typography component="h4" variant="h4" className="title">Société Tabbara</Typography>
                      <Link href="https://stci-lb.com/" button>check website</Link>
                    </Box>
                    <Box class="media-wrapper">
                      <img src="./work11.jpg" alt="Société Tabbara" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Box component="div" display="block" class="portfolio-item">
                    <Box class="overlay"></Box>
                    <Box class="info">
                      <Typography component="h4" variant="h4" className="title">Société Tabbara</Typography>
                      <Link href="https://stci-lb.com/" button>check website</Link>
                    </Box>
                    <Box class="media-wrapper">
                      <img src="./work11.jpg" alt="Société Tabbara" imageStyle={{ height: 'auto' }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </section>
          </main>
          <footer>

          </footer>
        </div>
      </div >
    </div >
  )
}

export default withRouter(withStyles(styles, { withTheme: true })(LandingPage))
