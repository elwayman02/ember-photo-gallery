import Modifier from 'ember-modifier';

export default class MasonryRowsModifier extends Modifier {
  didReceiveArguments() {
    if (this.args.named.onLoad) {
      this.args.named.onLoad.then(() => {
        this.calculateRowSpan();
      });
    } else {
      this.calculateRowSpan();
    }
  }

  calculateRowSpan() {
    let numRows =
      this.element.scrollHeight + parseFloat(this.args.named.rowGap);

    this.element.style.gridRowEnd = `span ${numRows}`;
  }
}
