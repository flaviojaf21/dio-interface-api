import { Backdrop, CircularProgress } from "@mui/material";

export function Loading(loading: boolean) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress size={10} color="inherit" />
    </Backdrop>
  );
}
