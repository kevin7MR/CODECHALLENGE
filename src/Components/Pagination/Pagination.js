import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';

const pageSize=3;

export  function PaginationMui() {
  return (
   <Box 
   justifyContent={'center'}
   alignItems={'center'}
   display={'flex'}
   >
     <Pagination count={10}   size="large"/>
   </Box>
  )
}
