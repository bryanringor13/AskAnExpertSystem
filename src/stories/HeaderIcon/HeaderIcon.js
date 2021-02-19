import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import Grid from "@material-ui/core/Grid";

export const HeaderIcon = ({
  onChange,
  create,
  share,
  file,
  more,
  editClicked,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {create ? (
        <Grid p={1} m={0} id="icon-create">
          <IconButton onClick={() => editClicked("btnCreate")}>
            <CreateOutlinedIcon />
          </IconButton>
        </Grid>
      ) : null}
      {share ? (
        <Grid p={1} m={0} id="icon-share">
          <IconButton>
            <ShareOutlinedIcon />
          </IconButton>
        </Grid>
      ) : null}
      {file ? (
        <Grid p={1} m={0} id="icon-file">
          <IconButton>
            <FileCopyOutlinedIcon />
          </IconButton>
        </Grid>
      ) : null}
      {more ? (
        <Grid p={1} m={0} id="icon-more">
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </Grid>
      ) : null}
    </div>
  );
};
