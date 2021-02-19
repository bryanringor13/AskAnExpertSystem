import React from 'react';
import Box from '@material-ui/core/Box';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import Button from '@material-ui/core/Button';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';




export const SurveySection = ({ onChange }) => {
    return (
        <div>
                <Box
                  display="flex"
                  flexWrap="nowrap"
                  // p={11}
                  m={1}
                  bgcolor="background.paper"
                  style={{  height: '120px'  }}
                >
                  <Box bgcolor="grey.300">
                      <Box 
                      mx={5} 
                      p={1} alignItems="center"/>
                    <LmTypographyGrey style={{marginLeft: '20px'}}>
                      Was this answer helpful?
                    </LmTypographyGrey>
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      m={1}
                      bgcolor="grey.300"
                      style={{ height: 30 }}
                    >
                      <Button
                        variant="contained"
                        style={{backgroundColor: 'white', width: '150px'}}
                        // className={classes.button}
                        startIcon={<ThumbUpAltOutlinedIcon />}
                      >
                        Yes
                      </Button>
                      <Box m={1} />
                      <Button
                        variant="contained"
                        style={{backgroundColor: 'white', width: '150px'}}
                        // className={classes.button}
                        startIcon={<ThumbDownOutlinedIcon />}
                      >
                        No
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </div>
        );
    }