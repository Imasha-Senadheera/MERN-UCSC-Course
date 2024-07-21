// import React from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

// export default function MyButton() {
//   return (
//     <div>
//       <Stack spacing={2} direction="row">
//         <Button variant="text">Text</Button>
//         <Button variant="contained">Contained</Button>
//         <Button variant="outlined">Outlined</Button>
//       </Stack>
//     </div>
//   );
// }

import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function MyButton() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          sx={{
            color: "purple",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }} // Text color for the text variant
        >
          Text
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "purple", // Background color for the contained variant
            color: "white",
            "&:hover": {
              backgroundColor: "black", // Darker shade on hover
            },
          }}
        >
          Contained
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "purple", // Border color for the outlined variant
            color: "purple",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Outlined
        </Button>
      </Stack>
      <br></br>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}
