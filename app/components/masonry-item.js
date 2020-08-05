import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MasonryItemComponent extends Component {
  @tracked onLoad;

  @action
  setLoadingPromise(onLoad) {
    this.onLoad = onLoad;
  }
}
