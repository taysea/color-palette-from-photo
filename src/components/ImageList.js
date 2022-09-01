import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext, Spinner, Text } from 'grommet';
import Thumbnail from './Thumbnail';
import config from '../config';

const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'success',
  NONE: 'no images',
  ERROR: 'error',
};

const ImageList = ({ ...props }) => {
  const [data, setData] = useState({ photos: [] });
  const [loadingStatus, setLoadingStatus] = useState(STATUSES.LOADING);
  const query = props.history.location.search.substr(1);
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoadingStatus(STATUSES.LOADING);
        let res = {};
        if (query) {
          res = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true&query=${query}`,
          );
        } else {
          res = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=20&featured=true`,
          );
        }
        const photos = await res.json();
        if (res.ok && photos.length > 0) {
          setData(photos);
          setLoadingStatus(STATUSES.SUCCESS);
        } else if (res.ok && photos.length === 0) {
          setLoadingStatus(STATUSES.NONE);
        } else {
          setLoadingStatus(STATUSES.ERROR);
        }
      } catch (e) {
        setLoadingStatus(STATUSES.ERROR);
      }
    }
    fetchPhotos();
  }, [query, props.history.location]);

  switch (loadingStatus) {
    case STATUSES.LOADING:
      return (
        <Box justify="center" align="center">
          <Spinner size="medium" />
        </Box>
      );
    case STATUSES.NONE:
      return (
        <Box>
          <Text alignSelf="center">
            Hmmm, we couldn't find any images about that.
          </Text>
        </Box>
      );
    case STATUSES.SUCCESS:
      return (
        <Grid
          rows="medium"
          columns={size !== 'small' ? 'medium' : '100%'}
          gap="small"
        >
          {data.map(photo => (
            <Thumbnail key={photo.id} photo={photo} />
          ))}
        </Grid>
      );
    default:
      return (
        <Box justify="center" align="center">
          <Text alignSelf="center">
            Oh no! Something went wrong with loading images. Please try again in
            a little while.
          </Text>
        </Box>
      );
  }
};

export default ImageList;

ImageList.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
