import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
    CardContent, 
    CardActionArea,
    Card, 
    CardMedia, 
    CssBaseline, 
    Grid, 
    Paper, 
    TextField, 
    ThemeProvider 
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    typography: {
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function JournalEntry() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Grid item xs={12}>
                                    <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1517570544249-a47a3b5d8a8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=shrink&w=1200&q=50"
                                    title="Uplifting quote in book"
                                    />
                                    </CardActionArea>
                                </Grid>
                            </CardContent>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                        Today's Journal
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper}>
                                            <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
                                                My Daily Intention
                                            </Typography>
                                            <TextField
                                                id="outlined-secondary"
                                                label="Energy Flows Where Intention Goes"
                                                variant="outlined"
                                                color="primary"
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                            <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
                                                To Nurture Myself
                                            </Typography>
                                            <TextField
                                                id="outlined-secondary"
                                                label="Today I Will..."
                                                variant="outlined"
                                                color="primary"
                                            />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                3 Things I Love About Myself
                                            </Typography>
                                            <TextField
                                                id="outlined-secondary"
                                                label="1"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />                    
                                            <TextField
                                                id="outlined-secondary"
                                                label="2"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />
                                            <TextField
                                                id="outlined-secondary"
                                                label="3"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                What Went Well Today?
                                            </Typography>
                                            <TextField
                                                id="outlined-secondary"
                                                label="1"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />                    
                                            <TextField
                                                id="outlined-secondary"
                                                label="2"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />
                                            <TextField
                                                id="outlined-secondary"
                                                label="3"
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <br />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                    What Didn't and How Can We Adjust?
                                                </Typography>
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Let Me Tell You"
                                                    variant="outlined"
                                                    color="primary"
                                                />
                                                <br />                    
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                    Let's Vent!
                                                </Typography>
                                                <TextField 
                                                    id="outlined-secondary"
                                                    label="Here's the tea"
                                                    variant="outlined"
                                                    color="primary"
                                                />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                            <Button
                                                onClick={() => {}}
                                                variant="primary"
                                                type="submit">
                                                    Submit
                                            </Button>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>  
        </ThemeProvider>
    )
}