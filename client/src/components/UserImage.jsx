import { Box } from "@mui/material";
import Ali from "../Assets/ali.jpeg";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={Ali}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default UserImage;
