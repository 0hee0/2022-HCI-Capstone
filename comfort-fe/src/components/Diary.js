import React from 'react';
import { Typography, IconButton, TextField, Stack,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { dateToString } from '../utils/format';


function Diary({ open, onClose, handleSubmit, handleChange, draft }) {
    const today = new Date();

    return (
        <Dialog open={open} PaperProps={{ style: { borderRadius: "1rem" }}}>
            <div style={{ width: "36rem" }}>
                <DialogTitle sx={{ m: 0, px: 3, pt: 3 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography>{dateToString(today)} 기록</Typography>
                        <IconButton
                            aria-label="close"
                            onClick={onClose}
                            sx={{ margin: 0, padding: 0 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </DialogTitle>
                <hr style={{ margin: "0 1.5rem 0.25rem 1.5rem", border: "1px solid #dddddd" }} />
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <TextField
                                variant="standard"
                                size="small"
                                fullWidth
                                multiline
                                minRows={18}
                                maxRows={18}
                                onChange={handleChange}
                                value={draft}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", pb: 3, mx: 2 }}>
                    <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ borderRadius: "0.75rem", py: 1 }}>
                        <Typography fontWeight="500">저장</Typography>
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    )
}

export default Diary
