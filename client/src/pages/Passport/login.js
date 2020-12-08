import React, {useState}from "react";
import API from "../../utils/API"
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../theme'
import Typography from '@material-ui/core/Typography';
import { Button,
    CardContent, 
    Card, 
    Grid, 
    makeStyles, 
    Paper, 
    TextField 
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
}));

function Login() {
    const [password, setPassword] = useState({})
    const classes = useStyles();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPassword({...password, [name]: value})
    };

    function loadBooks() {
        API.getEntries()
          .then(res => 
            setPassword(res.data)
          )
          .catch(err => console.log(err));
      };


    function handleFormSubmit(event) {
        event.preventDefault();
        if (password.username && password.password) {
          API.saveEntry({
            header: password.username,
            entry: password.password,
            
          })
            .then(res => console.log(res))
            .then(res => loadBooks())
            
            .catch(err => console.log(err));
        }
      };
        
      return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" align="center">
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Grid item xs={8}>
                            <Card color="secondary">
                                <CardContent id="login">
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h3" component="h2">
                                                    Login
                                                    <h5>username</h5>
                                                    <TextField
                                                        controlId="loginform"
                                                        onChange={handleInputChange}
                                                        name="username"
                                                    />
                                                </Typography>
                                            </Grid>
                                            <Typography gutterBottom variant="h3" component="h2">
                                                password
                                                <br />
                                                <TextField
                                                    controlid="passwordform"
                                                    onChange={handleInputChange}
                                                    name="password"
                                                />
                                                <br />
                                            </Typography>
                                            <Button
                                                controlId="loginBtn"
                                                onClick={() => {}}
                                                variant="primary"
                                                size="large"
                                                type="submit">
                                                    Submit
                                            </Button>
                                        </Paper>
                                        <Paper className={classes.paper}>
                                            Not Registered?
                                            <Button 
                                                href={`/register`}
                                                color="primary"
                                                type="submit">
                                                    Click here!
                                            </Button>
                                        </Paper>
                                        </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}    
export default Login
