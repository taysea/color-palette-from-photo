import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { TextInput, Box, Form, FormField, Button } from 'grommet';
import { Search } from 'grommet-icons';
import PropTypes from 'prop-types';

const SearchForm = ({ props }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleInputChange = event => {
    setSearchTerm(event.target.value.trim());
  };

  const onSubmit = event => {
    event.preventDefault();
    if (searchTerm.length) {
      setSearchTerm('');
      history.push({
        pathname: '/search/',
        search: `${searchTerm}`,
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Box align="center" direction="row" gap="small">
        <FormField htmlFor="search" name="search">
          <TextInput
            type="text"
            id="search"
            name="search"
            value={searchTerm}
            placeholder="Search Unsplash"
            onChange={handleInputChange}
          />
        </FormField>
        <Button type="submit">
          <Search />
        </Button>
      </Box>
    </Form>
  );
};

export default withRouter(SearchForm);

SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
