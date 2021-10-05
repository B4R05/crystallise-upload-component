import React, { useState } from 'react';
import { Slider } from 'react-semantic-ui-range';
import 'semantic-ui-css/semantic.min.css';
import { Label, Grid } from 'semantic-ui-react';

// NOTE: This NPM package is quite old and unmaintained, i would look for alternatives in prod

const CompressionSlider = () => {
  const [value, setValue] = useState(5);

  const settings = {
    start: 2,
    min: 0,
    max: 10,
    step: 1,
    onChange: (value: number) => {
      setValue(value);
    }
  };

  const handleValueChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    let value = parseInt(e.target.value);
    if (!value) {
      value = 0;
    }
    setValue(value);
  };

  return (
    <Grid.Column width={16}>
      <div><Label color="blue">Compression value: {value}</Label></div>
      <Slider value={value} color="blue" settings={settings} onChange={handleValueChange}/>
    </Grid.Column>
  );
};

export default CompressionSlider;