import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Slider, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

const amenities = ['24-hr front desk', 'Air-conditioned', 'Pool', 'Fitness'];

const freebies = ['Free breakfast', 'Free parking', 'Free internet', 'Free cancellation', 'Free airport shuttle'];

function valuetext(value) {
  return `${value}`;
}

const FilterPanel = () => {
  return (
    <div>
      <h2>Filters</h2>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {marks.map((mark) => (
            <FormControlLabel control={<Checkbox />} label={mark.label} key={mark.value} />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Luxury Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {marks.map((mark) => (
            <FormControlLabel control={<Checkbox />} label={`${mark.label}+`} key={mark.value} />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Freebies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {freebies.map((freebie) => (
            <FormControlLabel control={<Checkbox />} label={freebie} key={freebie} />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Amenities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {amenities.map((amenity) => (
            <FormControlLabel control={<Checkbox />} label={amenity} key={amenity} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterPanel;
