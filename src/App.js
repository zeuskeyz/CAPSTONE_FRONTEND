import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import Dashboard  from './components/Dashboard';
import { useContext } from 'react';
import AuthContext from './components/Authenticator';
import AddKPIForm from './components/AddKPIForm';
import AddScoresForm from './components/AddScoresForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

axios.defaults.withCredentials = true;

export default function App() {
    const {user} = useContext(AuthContext)

    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/sign-up' element={<SignupPage/>}/>
            {user && <Route path='/dashboard/:id' element={<Dashboard/>}/> }      
            {user && <Route path='/add-target/:id' element={<AddKPIForm/>}/> }
            {user && <Route path='/add-score/:id/:target/:kpi' element={<AddScoresForm/>}/> } 
        </Routes>
        </ThemeProvider>
    );
}

