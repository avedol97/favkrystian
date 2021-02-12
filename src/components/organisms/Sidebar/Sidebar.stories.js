
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Siedebar';

storiesOf('Oranisms/Sidebar',module)
  .addDecorator(StoryRouter())
.add("Normal",() =><Sidebar/>)
