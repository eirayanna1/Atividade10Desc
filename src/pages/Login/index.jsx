import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@mui/material';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
     <Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login}
          onChange={e => { setLogin(e.target.value) }} />
          <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
        </FormControl>
      </Grid>
    );
}




export default Login
