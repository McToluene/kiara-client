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
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Arrow from '../Images/arrow-down.svg';
import Image from '../Images/Avatar-others.svg';
import Chips from '../components/Chip/Chip';
import Other from '../Images/Avatar-others.svg';
import Female from '../Images/Avatar-female.svg';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getAllAppointment } from '../server/appointment';


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

  const { data: rows } = useQuery('get-All-Appointment', () => getAllAppointment());

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(Number(+event.target.value));
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
            {rows?.data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row: { _id: string; doctorName: string; appointmentType: string, createdOn: string, status: string }) => (
                <TableRow key={row._id}>
                  <TableCell
                    style={{ borderColor: '#f5f5f5', display: 'flex', gap: 20 }}
                    component="th"
                    scope="row"
                  >
                    <Avatar alt='profile-pic' src={Image} />
                    {/* <div className="mt-3">{row.image}</div> */}
                    <div className="mt-3">{row.doctorName}</div>
                  </TableCell>
                  <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                    {row.appointmentType}
                  </TableCell>
                  <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                    {moment(row.createdOn).format('D MMMM YYYY')}
                  </TableCell>
                  <TableCell style={{ width: 160, borderColor: '#f5f5f5' }}>
                  <Chips label={row.status} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows?.data?.length}
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
