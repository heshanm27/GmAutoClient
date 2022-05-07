import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
  CardActions,
  Button,
  Box,
  Divider,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

import Header from "../../component/Menu/Header";

const userStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = (props) => {
  const classes = userStyle();

  return (
    <>
      <Header />
    </>
  );
};
//using props
export default Home;
