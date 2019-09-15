import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fade from '@material-ui/core/Fade';
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
        border: "1px solid #6489e1",
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
        borderBottom: "1px solid #6489e1"
    },
    description: {
        flex: 2,
    },
    item: {
        flex: 0.6
    },
    image: {
        flex: 0.4,
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
    const [text, setText] = useState('');

    return (
        <div className={classes.container}>
            <FormControl>
                <TextField
                    id="standard-uncontrolled"
                    label="Nome do Produto"
                    placeholder="Ex: Porta"
                    className={classes.textField}
                    margin="normal"
                    onChange={(evt) => {
                        setText(evt.target.value)
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

            <Fade in={text != ''}>
                <div className={classes.tableContainer}>
                <div className={classes.itemContainer}>
                    <div className={classes.image}>
                        <div>
                            IMAGEM
                        </div>
                    </div>
                    <div className={classes.description}>
                        Esse produto faz tal coisa, ele possui coisas que fazem coisas e são coisas. As coisas são coisas.
                    </div>
                    <div className={classes.item}>
                    BOTAO
                    </div>
                </div>
                <div className={classes.itemContainer}>
                    <div className={classes.image}>
                        <div>
                            IMAGEM
                        </div>
                    </div>
                    <div className={classes.description}>
                        Esse produto faz tal coisa, ele possui coisas que fazem coisas e são coisas. As coisas são coisas.
                    </div>
                    <div className={classes.item}>
                    BOTAO
                    </div>
                </div>
                <div className={classes.itemContainer}>
                    <div className={classes.image}>
                        <div>
                            IMAGEM
                        </div>
                    </div>
                    <div className={classes.description}>
                        Esse produto faz tal coisa, ele possui coisas que fazem coisas e são coisas. As coisas são coisas.
                    </div>
                    <div className={classes.item}>
                    BOTAO
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}