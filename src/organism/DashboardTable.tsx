import {
  Avatar,
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
import Male from '../Images/Avater-male.svg';
import Chips from '../components/Chip/Chip';
import Other from '../Images/Avatar-others.svg';
import Female from '../Images/Avatar-female.svg';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import moment from 'moment';

const rows = [
  {
    _id: 1,
    image:<Avatar alt='profile-pic' src={Male} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status: <Chips label='Done' />
  },
  {
    _id: 2,
    image:<Avatar alt='profile-pic' src={Female} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status: <Chips label='Pending' />,
  },
  {
    _id: 3,
    image:<Avatar alt='profile-pic' src={Female} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Pending' />,
  },
  {
    _id: 4,
    image:<Avatar alt='profile-pic' src={Male} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Pending' />,
  },
  {
    _id: 5,
    image:<Avatar alt='profile-pic' src={Other} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Pending' />,
  },
  {
    _id: 6,
    image:<Avatar alt='profile-pic' src={Other} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Done' />,
  },
  {
    _id: 7,
    image:<Avatar alt='profile-pic' src={Female} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Non-Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status: <Chips label='Done' />,
  },
  {
    _id: 8,
    image:<Avatar alt='profile-pic' src={Other} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Non-Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Done' />,
  },
  {
    _id: 9,
    image:<Avatar alt='profile-pic' src={Female} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Non-Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Done' />,
  },
  {
    _id: 10,
    image:<Avatar alt='profile-pic' src={Female} />,
    name: 'Mrs Adeniyi Felicia',
    type: 'Non-Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Done' />,
  },
  {
    _id: 11,
    image:<Avatar alt='profile-pic' src={Other} />,
    name: 'Mrs Adeniyi Feliciaaa',
    type: 'Non-Emergency',
    date: '2023-02-05T22:14:00.486+00:00',
    status:<Chips label='Done' />,
  },
]

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
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
                  {/* <Avatar alt='profile-pic' src={Female} /> */}
                  <div className='mt-3'>{row.image}</div>
                  <div className='mt-3'>{row.name}</div>
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  {row.type}
                </TableCell>
                <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  {moment(row.date).format('D MMMM YYYY')}
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
                rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
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
