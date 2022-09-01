import React from 'react';
import { Button, Text, Footer as GrommetFooter } from 'grommet';

import { Github } from 'grommet-icons';

const Footer = () => (
  <GrommetFooter
    direction="column"
    align="center"
    justify="end"
    gap="none"
    pad={{ vertical: 'medium' }}
  >
    <Text color="text-weak">made by Taylor Seamans</Text>
    <Button
      icon={<Github color="text-weak" />}
      href="https://github.com/taysea"
      target="_blank"
      rel="noopener noreferrer"
    />
  </GrommetFooter>
);

export default Footer;
