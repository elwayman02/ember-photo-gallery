import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Promise } from 'rsvp';

export default class MasonryItemComponent extends Component {
  @tracked onLoad;

  @tracked resolveLoad;

  constructor() {
    super(...arguments);

    if (this.args.async) {
      this.onLoad = new Promise((resolve) => {
        this.resolveLoad = resolve;
      });
    }
  }

  @action
  setLoadingPromise(onLoad) {
    onLoad.then((item) => {
      if (this.resolveLoad) {
        this.resolveLoad(item);
      }
    });
  }
}
