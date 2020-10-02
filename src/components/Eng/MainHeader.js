import React from 'react';
import {Donate} from './Donate';
import {
    Grid
} from '@material-ui/core';
// import {Link} from 'react-router-dom';
import Typical from 'react-typical'
import {
    makeStyles
} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import paypal from '../../images/paypal.png';
import visa from '../../images/images.png';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));

const MainHeader = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style = {{ display : 'flex', flexDirection : 'row'}} className = 'container' id = 'mainHeaderE'>
            <Grid 
                container
            >
                <Grid
                    item
                    className = 'branch1'
                    xs = {12}
                    xl = {8}
                    lg = {8}
                    md = {8}
                >
                    <p id = 'introHeaderME'>Together, let's do more</p><br/>
                    <h2>
                        Welcome to <span> Dahlia Asbl </span>.
                        The non-profit organization that gives each
                        woman and child chances
                        to succeed in their future.
                    </h2><br />
                    <p id = 'typicalE'>
                        <Typical 
                            steps={[' Bring help and hope to children', 1000, '   ', 100]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>
                    <button
                        type = 'button'
                        className = 'donateBtn'
                        onClick = {handleOpen}
                    >
                        <a className = 'donBtns' href ='#top'>Donate now</a>
                    </button>
                </Grid>
                <Grid
                    item 
                    xs = {12}
                    lg = {4}
                    xl = {4}
                    md = {4}
                >
                    <Donate />
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                  <div style = {{paddingTop : 40, paddingBottom : 40}} className={classes.paper}>
                    <div id = 'headerDonE'><p style= {{textAlign : 'center'}}>Make a donation now</p></div> 
                    <p style = {{textAlign : 'center', margin : 20}}>Amount</p>
                    <div id = 'amountContainer'>
                        USD 10
                    </div>
                    <p style = {{textAlign : 'center'}}>Which payment method do you prefeer ?</p>
                    <div id = 'btnActions 'style = {{display : 'flex', flexDirection : 'row'}}>
                        <img src =  {paypal} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}} />
                        <img src = {visa} alt = '' style = {{height : 55, width : 150, borderColor : '#abcdef', borderWidth : 1, borderRadius : 2, borderStyle : 'solid', margin : 10}}/>
                    </div>

                </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default MainHeader