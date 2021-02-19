import React from 'react';
import PropTypes from 'prop-types';
import './LmExpansion.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
/**
 * Primary UI component for user interaction
 */

export const LmExpansion = ({heading, backgroundColor, expanded1, TransitionComponent1, handleChange, TransitionProps1, expandIcon, className, ...props }) => {
    const mode = heading ? 'storybook-accordian--heading' : 'storybook-accordian--secondary';
    return (
        <div>
      <Accordion
        className={[''].join(' ')}
        onChange={handleChange}
        expanded={expanded1}
        TransitionComponent={TransitionComponent1}
        TransitionProps={{ unmountOnExit: true }}
    
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
         <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>General settings</Typography> 
          <Typography className={['storybook-accordian--secondary',mode].join(' ')}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
       className={[''].join(' ')}
       expanded={expanded1}
       onChange={handleChange}
       TransitionComponent={TransitionComponent1}
        TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Users</Typography>
          <Typography className={['storybook-accordian--secondary',mode].join(' ')}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion 
        expanded={expanded1} 
        onChange={handleChange}
        TransitionComponent={TransitionComponent1}
        TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Advanced settings</Typography>
          <Typography className={['storybook-accordian--secondary',mode].join(' ')}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    );
  };

  // This area goes to docummentation
LmExpansion.propTypes = {
   

    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * What setup to use for the accordion?
     */
    expanded: PropTypes.oneOf(['true', 'false']),
    /**
     
     * Optional click handler
     */
    onChange: PropTypes.func,
    /**
     * Character if Character Avatar
     */
    char1: PropTypes.string,
  
  };

  LmExpansion.defaultProps = {
    backgroundColor: null,
    expanded: true,
    char: '',
    square: true,
    onChange: undefined
  };
  