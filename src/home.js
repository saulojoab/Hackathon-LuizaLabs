import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Search} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        border: "1px solid",
        width: 700,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderBottom: "1px solid"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: "blue",
      width: 500,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

export default function Home() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    return (
        <div className={classes.container}>
            <FormControl>
                <TextField
                    id="standard-uncontrolled"
                    label="Nome do Produto"
                    placeholder="Ex: Porta"
                    className={classes.textField}
                    margin="normal"
                    onChange={() => {
                        setLoading(true)
                    }}
                    
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <Search />
                            </InputAdornment>
                        )
                    }}
                    />
            </FormControl>

            <div className={classes.tableContainer}>
                <div className={classes.itemContainer}>
                    <b>IMAGEM</b>
                    <b>DESCRICAO</b>
                    <b>BOTAO</b>
                </div>
                <div className={classes.itemContainer}>
                    <b>IMAGEM</b>
                    <b>DESCRICAO</b>
                    <b>BOTAO</b>
                </div>
                <div className={classes.itemContainer}>
                    <b>IMAGEM</b>
                    <b>DESCRICAO</b>
                    <b>BOTAO</b>
                </div>
                <div className={classes.itemContainer}>
                    <b>IMAGEM</b>
                    <b>DESCRICAO</b>
                    <b>BOTAO</b>
                </div>

            </div>

            {loading ? <CircularProgress className={classes.progress} /> : ''}
        </div>
    )
}