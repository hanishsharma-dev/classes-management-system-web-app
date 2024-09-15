import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CommonLoader: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', width:'100vw',height:'100vh', justifyContent:'center', alignItems:'center', position:'absolute' }}>
            <CircularProgress />
        </Box>
    );
}

export default CommonLoader;
