import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Icon, Paper, Popover } from '@material-ui/core';
import './style.css'
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CheckBox, CheckBoxOutlineBlankRounded } from '@material-ui/icons';
import { LmAvatar } from '../../../stories/Avatar/LmAvatar';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import { LmTypographyGrey } from '../../../stories/TypographyGrey/LmTypographyGrey';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const RequestsCard = ({ checked, handleChange}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = ({checked, handleChange,}) => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // const checkOnHover = () => {
    //   console.log('mouse');
    // }
    return (
      <Paper variant="outlined" square={false}>
        <div className="jss108">
          {/* <div className="? jss120 : visibility:'true'" onMouseEnter={checkOnHover()}> */}
          <div>
              <span className="MuiButtonBase-root MuiIconButton-root jss124 MuiCheckbox-root MuiCheckbox-colorPrimary jss125 Mui-checked MuiIconButton-colorPrimary">
                <span className="MuiIconButton-label">
                    <Icon color="primary">
                    <input className="jss127" type="checkbox" data-indeterminate="false" value="" />
                    <CheckBox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    style={{marginBottom: '5px'}}
                  />
                    </Icon>
                </span>
            </span>
            <span className="MuiTouchRipple-root"></span>
          </div>
          <div className="jss128 jss132 jss111 jss153">
            Lorem upsum dolor sit amet, consect tuernsectdf adipisc dolor sit
            amet, consect? dolor sit amet dolor sit amet
          </div>
          <div>
            <div>
              <Button
                className="jss119"
                type="button"
                aria-label="more"
                aria-controls="card-menu"
              >
                <Icon className="jss239">
                  <MoreVertIcon onClick={handleClick} />
                </Icon>
              </Button>
            </div>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <ul
                class="MuiList-root MuiMenu-list MuiList-padding"
                role="menu"
                tabindex="-1"
              >
                <li
                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabindex="0"
                  role="menuitem"
                  aria-disabled="false"
                >
                  Move<span class="MuiTouchRipple-root"></span>
                </li>
                <li
                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabindex="-1"
                  role="menuitem"
                  aria-disabled="false"
                >
                  Edit<span class="MuiTouchRipple-root"></span>
                </li>
                <li
                  class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabindex="-1"
                  role="menuitem"
                  aria-disabled="false"
                >
                  Delete<span class="MuiTouchRipple-root"></span>
                </li>
              </ul>
            </Popover>
          </div>
        </div>
       
        <div className="jss109">
        <Divider className="jss112" />
          <div className="jss120">checkbox</div>
          <div className="jss128 jss137 jss153">
            Acceptance criteria is formed using the business logic created
            during the product design process. Engineering, QA and UX will take
            the agreed product logic and ensure blah blah blah (should be cut
            off at ens)
          </div>
        </div>
       

        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162"/>
              </div>
            </div>
            <div className="jss157">
              <div>
                <span className="jss128 jss138 jss158 jss153" chars1="Billy Bo">
                  Bilbo Baggins
                </span>
                <span className="jss128 jss147 jss164 jss153">now</span>
              </div>
              <div>
                <span
                  className="jss128 jss139 jss159 jss153"
                >Adventurer</span>
              </div>
            </div>
           
          
          </div>
          <div className="jss114">
         
            <div className="jss118" title="Views">
                <VisibilityOutlinedIcon className="jss117"/>
                <span className="jss128 jss147 jss164 jss153">55.5K</span>
            </div>
            <div className="jss118" title="Open requests">
              <RoomServiceOutlinedIcon className="jss117"/>
            <span className="jss128 jss147 jss164 jss153">2</span>
          </div>
          <div className="jss118" title="Search Relevancy">
              <VerifiedUserOutlinedIcon className="jss117"/>
            <span className="jss128 jss147 jss164 jss153">99</span>
            </div>
          </div>
          
          <div className="jss171">
                <div className="jss115">
                    <div className="jss167" data-automation-key="ui-topic-subtopic-topic" data-automation-value="customer-ops">Customer Ops</div>
                    <span className="jss172">&gt;</span><div className="jss169" data-automation-key="ui-topic-subtopic-subtopic" 
                    data-automation-value="pre-sales">
                        Pre Sales
                    </div>
                </div>
          </div>
          
        </div>
      </Paper>
    );
}

export default RequestsCard;