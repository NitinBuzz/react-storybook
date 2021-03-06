import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

const req = require.context("../src", true, /.stories.js$/);

// setAddon(JSXAddon);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach((file) => req(file));
}

configure(loadStories, module);
