import React, { useState } from 'react';
import './LmRTE.css'
import { Container, Grid, IconButton, Paper } from '@material-ui/core';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import Divider from '@material-ui/core/Divider';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedOutlinedIcon from '@material-ui/icons/FormatUnderlinedOutlined';
import FormatStrikethroughOutlinedIcon from '@material-ui/icons/FormatStrikethroughOutlined';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import BorderAllRoundedIcon from '@material-ui/icons/BorderAllRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

const options = [
    'Heading 1',
    'Heading 2',
    'Heading 3',
    'Normal Text',
  ];
  const ITEM_HEIGHT = 48;
export const LmRTE = ({ onChange, children }) => {
    const [selected, setSelected] = React.useState(false);
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="jss41">
        <div className="jss45">
          <span className="jss44">
            <span>
              {" "}
              <IconButton onClick={handleClick}>
                <FormatSizeIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                // PaperProps={{
                //   style: {
                //     maxHeight: ITEM_HEIGHT * 4.5,
                //     width: '20ch',
                //   },
                // }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </span>

            <Divider orientation="vertical" flexItem />
          </span>

          <span className="jss44">
            <span>
              {" "}
              <IconButton>
                <FormatBoldIcon />
              </IconButton>{" "}
            </span>
            <span>
              <IconButton>
                <FormatItalicIcon />
              </IconButton>
            </span>
            <span>
              {" "}
              <IconButton>
                <FormatUnderlinedOutlinedIcon />
              </IconButton>{" "}
            </span>
            <span>
              {" "}
              <IconButton>
                <FormatStrikethroughOutlinedIcon />
              </IconButton>{" "}
            </span>

            <Divider orientation="vertical" flexItem />
          </span>

          <span className="jss44">
            <span>
              {" "}
              <IconButton>
                <FormatQuoteIcon />
              </IconButton>{" "}
            </span>
            <span>
              {" "}
              <IconButton>
                <FormatListBulletedOutlinedIcon />
              </IconButton>{" "}
            </span>
            <span>
              {" "}
              <IconButton>
                <FormatListNumberedOutlinedIcon />
              </IconButton>{" "}
            </span>
            <Divider orientation="vertical" flexItem />
          </span>
          <span className="jss44">
            <span>
              {" "}
              <IconButton>
                <LinkOutlinedIcon />
              </IconButton>{" "}
            </span>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <span>
                {" "}
                <IconButton aria-label="upload picture" component="span">
                  <InsertPhotoIcon />
                </IconButton>{" "}
              </span>
            </label>
            <span>
              {" "}
              <IconButton>
                <BorderAllRoundedIcon />
              </IconButton>{" "}
            </span>
            
            
          </span>
          <span className="jss44"> </span>
        </div>

        <div>
          <div contentEditable="true" className="ProseMirror">
            <p>
              {children}
            </p>
          </div>
        </div>
      </div>
    );
    }
    