import React from "react";
import NavBar from "scenes/navBar";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import PostsWidget from "scenes/widgets/PostsWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendList from "scenes/widgets/FriendList";
import UserWidget from "scenes/widgets/UserWidget";
import FlexBetween from "components/FlexBetween";

export default function HomePage() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box
          flexBasis={isNonMobileScreen ? "26%" : undefined}
          marginBottom={!isNonMobileScreen ? "2rem" : undefined}
        >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        {/* <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        ></Box> */}
        <Box display="flex" flexDirection="column">
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
