import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from './Button';

storiesOf('Button', module)
    .add('with background', withInfo(`description of the component`)
    (() => <Button bg="palegoldenrod">Hello world</Button>))