import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const BasicCard = () => {
  const theme = useTheme();

  return (
    <Stack sx={{ p: 1 }}>
      <Button color="primary">ASD</Button>
      <span>ASD</span>
    </Stack>
  );
};

export default BasicCard;
