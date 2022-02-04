import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/products/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Search from './components/hooks/Search';
import GadgetStore from './components/gadgets/GadgetStore';
import ViewCart from './components/gadgets/ViewCart';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HooksDemo from './components/hooks/HooksDemo';
import Logout from './components/auth/Logout';
import { useContext } from 'react';
import { AppTheme } from './context/AppTheme';
import ThemeSwitchButton from './context/ThemeSwitchButton';
import FaultyComponent from './components/errors/FaultyComponent';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { routes } from './router/routes';
import { useHistory } from 'react-router-dom';

const drawerWidth = 280;

function NavigationList(props) {

    const history = useHistory();

    function navigate(item){
        history.push(item.path);
        props.onSelect(false);
    }

    return (
        <List>
            {routes.map((item, index) => {
                return (
                    <ListItem>
                        <ListItemButton onClick={() => navigate(item)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <DraftsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.name.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )

}



function MuiApp() {

    const [drawerState, setDrawerState] = useState(false);

    return (
        <Router>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setDrawerState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                React
                            </Typography>
                            <Button size='large' variant='contained' color="secondary">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="temporary"
                        anchor="left"
                        open={drawerState}
                        onClose={() => setDrawerState(false)}

                    >
                        <NavigationList onSelect={setDrawerState}/>

                    </Drawer>
                </Grid>
                <Grid item xs={12}>
                    <Switch>
                        <Route path="/home" render={() => <Hello message="React" />} />
                        <Route path="/counter" render={() => <Counter title="Counter" />} />

                        <Route path="/search" component={Search} />
                        <ProtectedRoute path="/gadgets" component={GadgetStore} />
                        <ProtectedRoute path="/products" component={ListProducts} />
                        <Route path="/cart" component={ViewCart} />
                        <Route path="/hooks" component={HooksDemo} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/faulty" component={FaultyComponent} />

                    </Switch>
                </Grid>

            </Grid>
        </Router>
    )
}

export default MuiApp;