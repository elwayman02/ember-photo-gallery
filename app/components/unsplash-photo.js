import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UnsplashPhotoComponent extends Component {
  @action
  setImageOnLoad(onLoad) {
    if (this.args.onLoadImage) {
      this.args.onLoadImage(onLoad);
    }
  }
}
