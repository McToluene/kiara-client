import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type colors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

interface ColorChipsProps {
  spacing?: number;
  alignItems?: string;
  label: string;
}

const ColorChips: React.FC<ColorChipsProps> = ({
  label,
  spacing = 1,
  alignItems = 'center',
}) => {
  // Function to determine the color based on the label
  const getColorByLabel = (label: string): colors => {
    if (label === 'Done') {
      return 'success';
    } else if (label === 'Pending' || label === 'Cancel') {
      return 'warning';
    } else {
      // You can set a default color here if needed
      return 'primary';
    }
  };

  // Get the color based on the label
  const color = getColorByLabel(label);

  return (
    <Stack spacing={spacing} alignItems={alignItems}>
      <Chip label={label} color={color} />
    </Stack>
  );
};

export default ColorChips;
