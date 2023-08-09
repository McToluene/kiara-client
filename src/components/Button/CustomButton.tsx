import styled from '@emotion/styled';
import { Button } from '@mui/material';

type StyledButtonProps = {
  isLoading?: boolean;
  // onClick?: () => void;
  children?: React.ReactNode;
};

const StyledButton = styled(Button)<StyledButtonProps>(({ isLoading }) => ({
  backgroundColor: isLoading ? '#ccc' : '#2D699D',
  color: '#fff',
  '&:hover': {
    backgroundColor: isLoading ? '#ccc' : '#2D619D',
  },
}));

export default StyledButton;
