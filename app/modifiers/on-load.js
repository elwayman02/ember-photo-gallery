import Modifier from 'ember-modifier';

export default class OnLoadModifier extends Modifier {
  didReceiveArguments() {
    this.handler = this.args.positional[0];
    this.onLoad();
  }

  onLoad() {
    let loadingPromise = new Promise((resolve, reject) => {
      this.element.addEventListener('load', () => {
        resolve();
      });
      this.element.addEventListener('error', () => {
        reject(new Error(`Failed to load`));
      });
    });

    this.handler(loadingPromise);
  }
}
