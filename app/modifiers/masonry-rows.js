import Modifier from 'ember-modifier';

export default class MasonryRowsModifier extends Modifier {
  get rowGap() {
    return parseFloat(this.args.named.rowGap);
  }

  get onLoad() {
    return this.args.named.onLoad;
  }

  didReceiveArguments() {
    if (this.onLoad) {
      this.onLoad.then(() => {
        this.calculateRowSpan();
      });
    } else {
      this.calculateRowSpan();
    }
  }

  calculateRowSpan() {
    let numRows = this.element.scrollHeight + this.rowGap;

    this.element.style.gridRowEnd = `span ${numRows}`;
  }
}
