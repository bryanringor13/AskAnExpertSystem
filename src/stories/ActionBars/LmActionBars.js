import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import ViewStreamSharpIcon from "@material-ui/icons/ViewStreamSharp";
import ViewModuleSharpIcon from "@material-ui/icons/ViewModuleSharp";
import ViewQuiltSharpIcon from "@material-ui/icons/ViewQuiltSharp";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Radio from "@material-ui/core/Radio";
import CloseIcon from "@material-ui/icons/Close";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import { IconButton } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./style.css";
import { LmSearchView } from "../SearchView/LmSearchView";
import { LmDeleteCardModal } from "../DialogBox/LmDeleteCard";
import { LmMoveCardsModal } from "../DialogBox/LmMoveCardsModal";

export const LmActionBars = ({
  handleDelete,
  selectedCards = [],
  allCards = [],
  msg,
  del,
}) => {
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMoveCards = () => {
    console.log("Move cards with modal");
  };
  return (
    <div>
      {selectedCards.length > 0 ? (
        <div className="jss2">
          <span>
            <IconButton>
              {/* <input className="jss12" type="checkbox" value=""/> */}
              <IndeterminateCheckBoxOutlinedIcon type="checkbox" />
            </IconButton>
          </span>

          <p className="jss13 jss24 jss38 jss5">
            <span className="jss3">{selectedCards.length}</span> cards selected
          </p>

          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <div className="jss6">
                <Button
                  size="small"
                  className="jss40 "
                  color="primary"
                  onClick={handleMoveCards}
                >
                  <LmMoveCardsModal moveItems={allCards} msg={(x) => msg(x)}>
                    Move cards
                    <ArrowRightAltIcon />
                  </LmMoveCardsModal>
                </Button>

                <Button
                  size="small"
                  className="jss40"
                  color="primary"
                  // onClick={handleDelete}
                  // onClick={handleDeleteMo}
                >
                  <LmDeleteCardModal Items={allCards} del={(x) => del(x)}>
                    Delete cards
                  </LmDeleteCardModal>
                  <CloseIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
          {/* <div className="jss7"></div>
            <div className="jss263 jss228">
            <LmSearchView />
            </div> */}
          {/* <Grid container justify="space-between">
                <Grid>
                    <div className="jss7"></div>
                </Grid>
                <Grid>
                    <div className="jss263 jss228">
                        <LmSearchView />
                    </div>
                </Grid>
        </Grid> */}
        </div>
      ) : null}
    </div>
  );
};
