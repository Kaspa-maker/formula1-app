import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import About from '../src/components/about';
import { storiesOf } from '@storybook/react';
import Drivers from '../src/components/drivers';
import InfoNews from '../src/components/infonews';
import MainPage from '../src/components/mainPage';
import Tracks from '../src/components/tracks';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};

storiesOf("F1-app/About",module).add("default",()=><About/>)
storiesOf("F1-app/Drivers",module).add("default",()=><Drivers/>)
storiesOf("F1-app/InfoNews",module).add("default",()=><InfoNews/>)
storiesOf("F1-app/Main Page",module).add("default",()=><MainPage/>)
storiesOf("F1-app/Tracks",module).add("default",()=><Tracks/>)