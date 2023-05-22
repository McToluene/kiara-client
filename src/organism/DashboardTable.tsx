import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { useState } from 'react';

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}
const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
  createData('Oreo', 437, 18.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F7F8F9',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function DashboardTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box width={'100%'} marginTop={{ xs: '2.5em', md: '0' }}>
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontWeight: 500,
        }}
      >
        Appointment history
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        style={{ border: '1px solid #ededed', borderRadius: '8px' }}
      >
        <Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Doctor Name</StyledTableCell>
              <StyledTableCell align='right'>Type</StyledTableCell>
              <StyledTableCell align='right'>Date</StyledTableCell>
              <StyledTableCell align='right'>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{ borderColor: '#f5f5f5' }} component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }} align='right'>
                  {row.calories}
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }} align='right'>
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[8, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
