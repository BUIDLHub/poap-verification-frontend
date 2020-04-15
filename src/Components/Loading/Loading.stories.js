import React from 'react';
import {storiesOf} from '@storybook/react';

import Loading from '.';

storiesOf('Loaders/Loading', module).add('Default', () => <Loading loading={true} />);
