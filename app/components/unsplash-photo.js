import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tryInvoke } from '@ember/utils';

export default class UnsplashPhotoComponent extends Component {
  @action
  setImageOnLoad(onLoad) {
    this.args.onLoadImage(onLoad);
  }
}
