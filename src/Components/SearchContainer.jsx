import React, { useState, useEffect } from "react";
import { Grid, Paper, Backdrop, CircularProgress } from "@mui/material";
import Header from './Header.jsx';
import SearchForm from './SearchForm.jsx';
import ImageGallery from './ImageGallery.jsx';
import api from "../api";


const SearchContainer = () => {
  const [listValues, setListValues] = React.useState(defaultImageList);
  const [formValues, setFormValues] = React.useState(defaultFormValues);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getUrlData = async () => {
      setIsLoading(true);
      try {
        const response = await api.getUrls();
        const urlList = response.map(elem => (
          {
            img: elem.url,
            title: elem.title
          }
        ));
        setListValues({ ...listValues, ['list']: urlList, });
        setIsLoading(false);

      } catch (e) {
        console.error(e);
      }
    };

    getUrlData();
  }, []);


  const formSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    const data = new FormData(event.currentTarget);
    console.log({
      kat1: data.get('kat1'),
      kat2: data.get('kat2'),
      text: data.get('text'),
    });
  };

  const searchImg = (image) => {
    console.log(image);
  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop>

      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={3} component={Paper} elevation={6} square>
        <SearchForm setValues={setFormValues} formVal={formValues} handleSubmit={formSubmit} />
      </Grid>
      <Grid item
        xs={12}
        md={9}
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <ImageGallery itemData={listValues} searchImage={searchImg} />
      </Grid>

    </Grid>
  );
};

export default SearchContainer;

const defaultFormValues = {
  kat1val: ["ett", "två", "tre"],
  kat1: "",
  kat2val: ["fyra", "fem", "sex", "sju"],
  kat2: "",
  text: "",
};

const defaultImageList = {
  list: []
};
