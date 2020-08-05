import Application from 'ember-photo-gallery/app';
import config from 'ember-photo-gallery/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
