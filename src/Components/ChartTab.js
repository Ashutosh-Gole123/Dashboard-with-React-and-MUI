import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';
import StateWise from './Charts/StateWise';
import SectorWise from './Charts/SectorWise';
import YearWise from './Charts/YearWise';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ChartTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    
      
    <Box sx={{ width: '100%',  flexGrow: 1,
    margin: theme.spacing(5),marginTop:theme.spacing(15)
   }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<BarChartIcon />} label="State-Wise Graph" {...a11yProps(0)} />
          <Tab icon={<ShowChartIcon />} label="Sector-Wise Graph" {...a11yProps(1)} />
          <Tab icon={<PieChartOutlineIcon />} label="Year-Wise Graph" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StateWise/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SectorWise/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <YearWise/>
      </CustomTabPanel>
    </Box>
  );
}