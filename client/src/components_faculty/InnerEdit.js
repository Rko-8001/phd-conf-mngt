import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function LimitTags() {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={(params) => (
        <TextField {...params} label="Add your Area of Specialization" placeholder="Favorites" />
      )}
      sx={{ width: '500px' }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'WebDev', year: 1994 },
  { title: 'Front-End', year: 1972 },
  { title: 'Back-End', year: 1974 },
  { title: 'Full-Stack', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
  { title: "Git", year: 1993 },
  { title: 'Github', year: 1994 },
  {
    title: 'Python',
    year: 2003,
  },
  { title: 'C', year: 1966 },
  { title: 'C++', year: 1999 },
  {
    title: 'Java',
    year: 2001,
  },
  {
    title: 'React-js',
    year: 1980,
  },
  { title: 'Node-js', year: 1994 },
  { title: 'Django', year: 2010 },
  {
    title: 'HTML',
    year: 2002,
  },
  { title: "CSS", year: 1975 },
  { title: 'SQL', year: 1990 },
  { title: 'Networking', year: 1999 },
  { title: 'DBMS', year: 1954 },
  
];