import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Slider, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";

const FilterPanel = () => {
  const { t } = useTranslation();

  const marks = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  const amenities = [
    t("filterPanel.twentyFourHrFrontDesk"),
    t("filterPanel.airConditioned"),
    t("filterPanel.pool"),
    t("filterPanel.fitness"),
  ];

  const freebies = [
    t("filterPanel.freeBreakfast"),
    t("filterPanel.freeParking"),
    t("filterPanel.freeInternet"),
    t("filterPanel.freeCancellation"),
    t("filterPanel.freeAirportShuttle"),
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div>
      <h2>{t("filterPanel.filters")}</h2>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t("filterPanel.price")}</Typography>
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
          <Typography>{t("filterPanel.rating")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {marks.map((mark) => (
            <FormControlLabel
              control={<Checkbox />}
              label={mark.label}
              key={mark.value}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t("filterPanel.luxuryRating")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {marks.map((mark) => (
            <FormControlLabel
              control={<Checkbox />}
              label={`${mark.label}+`}
              key={mark.value}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t("filterPanel.freebies")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {freebies.map((freebie) => (
            <FormControlLabel
              control={<Checkbox />}
              label={freebie}
              key={freebie}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{t("filterPanel.amenities")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {amenities.map((amenity) => (
            <FormControlLabel
              control={<Checkbox />}
              label={amenity}
              key={amenity}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterPanel;
