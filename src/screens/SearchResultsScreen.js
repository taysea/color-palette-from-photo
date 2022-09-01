import React from 'react';
import PropTypes from 'prop-types';
import { Page, PageContent } from 'grommet';
import { Guideline, ImageList } from '../components';

const SearchResultsScreen = ({ ...props }) => (
  <Page flex="grow">
    <PageContent gap="medium">
      <Guideline
        tip={
          props.history.location.search &&
          `Showing Unsplash results for: ${props.history.location.search.substr(
            1,
          )}`
        }
      />
      <ImageList {...props} />
    </PageContent>
  </Page>
);

export default SearchResultsScreen;

SearchResultsScreen.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
