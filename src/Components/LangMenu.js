import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from "@material-ui/icons/Language";
import './LangMenu.css';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.secondary.light,
            '& .MuiListItemIcon-root, & .MuiListItemText- ': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function LangMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                className='langButton'
                style={{backgroundColor: "white", margin: 10,}}
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="transparent"
                onClick={handleClick}
            >
                <LanguageIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary="English" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Español" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Français" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}