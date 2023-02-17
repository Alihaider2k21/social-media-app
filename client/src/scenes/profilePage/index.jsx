import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "scenes/navBar";
import FriendList from "scenes/widgets/FriendList";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import axios from "axios";
import AdvertWidget from "scenes/widgets/AdvertWidget";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await axios.get(`http://localhost:3001/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="2rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box margin="2rem 0" />
        </Box>
        {/* <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        ></Box> */}
        <Box display="flex" flexDirection="column">
          <MyPostWidget picturePath={user.picturePath} />
          <Box margin="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendList />
          </Box>
        )}
      </Box>
    </Box>
  );
}
