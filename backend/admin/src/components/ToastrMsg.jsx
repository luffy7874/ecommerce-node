import { Alert, Snackbar } from "@mui/material";

function ToastrMsg({ open, handleClose, response }) {
    

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {response}
            </Alert>
        </Snackbar>
    );
}

export default ToastrMsg;