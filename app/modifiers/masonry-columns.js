import Modifier from 'ember-modifier';

export default class MasonryColumnsModifier extends Modifier {
  resizeObserver;

  get gridWidth() {
    let gridStyle = getComputedStyle(this.element);
    let paddingLeft = parseFloat(gridStyle.getPropertyValue('padding-left'));
    let paddingRight = parseFloat(gridStyle.getPropertyValue('padding-right'));
    return (
      parseFloat(gridStyle.getPropertyValue('width')) -
      (paddingLeft + paddingRight)
    );
  }

  get columns() {
    let { columns } = this.args.named;
    let columnGap = parseFloat(this.args.named.columnGap);
    let columnWidth = parseFloat(this.args.named.columnWidth);

    if (columns === 'auto') {
      return Math.floor(
        (this.gridWidth + columnGap) / (columnWidth + columnGap)
      );
    }

    return parseFloat(columns);
  }

  constructor() {
    super(...arguments);

    this.resizeObserver = new ResizeObserver(() => {
      this.organizeGridColumns();
    });
  }

  didReceiveArguments() {
    this.organizeGridColumns();
  }

  didInstall() {
    this.resizeObserver.observe(this.element);
  }

  willDestroy() {
    this.resizeObserver.disconnect();
  }

  organizeGridColumns() {
    this.element.style.gridTemplateColumns = `repeat(${this.columns}, ${this.args.named.columnWidth})`;
    this.element.style.gridColumnGap = this.args.named.columnGap;
  }
}
