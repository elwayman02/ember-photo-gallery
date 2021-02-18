import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('unsplash') unsplash;

  model() {
    return this.unsplash.randomPhotos({ query: 'ember' });
  }
}
