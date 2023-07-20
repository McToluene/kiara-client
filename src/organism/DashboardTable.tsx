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
import { useState } from 'react';
import Arrow from '../Images/arrow-down.svg';
import User from '../Images/Avatar-female.svg';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

function createData(name: string, type: number, date: string, status: any) {
  return { name, type, date, status };
}
const rows = [
  createData('Cupcake', 305, '5 February 2022', 'Done'),
  createData('Donut', 452, '5 February 2022', 'Done'),
  createData('Eclair', 262, '5 February 2022', 'Done'),
  createData('Frozen yoghurt', 159, '5 February 2022', 'Done'),
  createData('Gingerbread', 356, '5 February 2022', 'Done'),
  createData('Honeycomb', 408, '5 February 2022', 'Done'),
  createData('Ice cream sandwich', 237, '5 February 2022', 'Done'),
  createData('Jelly Bean', 375, '5 February 2022', 'Done'),
  createData('KitKat', 518, '5 February 2022', 'Done'),
  createData('Lollipop', 392, '5 February 2022', 'Done'),
  createData('Marshmallow', 318, '5 February 2022', 'Done'),
  createData('Nougat', 360, '5 February 2022', 'Done'),
  createData('Oreo', 437, '5 February 2022', 'Done'),
  createData('Oreo', 437, '5 February 2022', 'Done'),
  createData('Oreo', 437, '5 February 2022', 'Done'),
].sort((a, b) => (a.type < b.type ? -1 : 1));

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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
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
        variant="h6"
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
        style={{ border: '1px solid #ededed', borderRadius: '1rem' }}
        className="mt-10"
      >
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ color: '#74828E', display: 'flex' }}>
                {' '}
                Doctor Name <img src={Arrow} alt="arrow" />
              </StyledTableCell>
              <StyledTableCell style={{ color: '#74828E' }}>
                Type
              </StyledTableCell>
              <StyledTableCell style={{ color: '#74828E' }}>
                Date
              </StyledTableCell>
              <StyledTableCell style={{ color: '#74828E' }}>
                Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  style={{ borderColor: '#f5f5f5', display: 'flex', gap: 10 }}
                  component="th"
                  scope="row"
                >
                  <img src={User} alt="name" />
                  <div className='mt-3'>{row.name}</div>
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  {row.type}
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  {row.date}
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  {row.status}
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
