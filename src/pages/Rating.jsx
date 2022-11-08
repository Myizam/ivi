import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [like, setlike] = React.useState(76);
  const [dislike, setdislike] = React.useState(76);


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}

      />
      <div>
        <span style={{width: '300px', fontSize: '40px'}} onClick={() => setlike(like + 1)}>👍</span>
        <span>{like}</span>
        <span style={{width: '300px', fontSize: '40px'}} onClick={() => setdislike(dislike - 1)}>👎🏿</span>
        <span>{dislike}</span>
        </div>
    </Box>
  );
}
