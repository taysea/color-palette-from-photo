import React, { useContext } from 'react';
import {
  Box,
  Header as GrommetHeader,
  Image,
  Page,
  PageContent,
  ResponsiveContext,
  Text,
} from 'grommet';
import logo from '../assets/logo.png';
import { Link, SearchForm } from '.';

const Header = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Page>
      <PageContent>
        <GrommetHeader gap="medium" pad={{ top: 'large', bottom: 'medium' }}>
          <Link to="/">
            <Box
              direction={size !== 'small' ? 'row' : 'column'}
              gap="small"
              align="center"
            >
              <Box width="xxsmall" height="xxsmall">
                <Image
                  src={logo}
                  alt="Color Palette Generator Logo"
                  fit="cover"
                />
              </Box>
              {size !== 'small' && (
                <Box>
                  <Text size="xxlarge" color="text-strong" weight="bold">
                    color palette generator
                  </Text>
                  <Text size="small" color="text">
                    built using Grommet, Unsplash, and React Color Extractor
                  </Text>
                </Box>
              )}
            </Box>
          </Link>
          <SearchForm />
        </GrommetHeader>
      </PageContent>
    </Page>
  );
};

export default Header;
