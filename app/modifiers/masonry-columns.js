import Modifier from 'ember-modifier';

export default class MasonryColumnsModifier extends Modifier {
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
    let columnGap = parseFloat(this.columnGap);
    let columnWidth = parseFloat(this.columnWidth);

    if (columns === 'auto') {
      return Math.floor(
        (this.gridWidth + columnGap) / (columnWidth + columnGap)
      );
    }

    return parseFloat(columns);
  }

  get columnGap() {
    return this.args.named.columnGap;
  }

  get columnWidth() {
    return this.args.named.columnWidth;
  }

  didReceiveArguments() {
    this.organizeGridColumns();
  }

  didInstall() {
    this.resizeObserver = new ResizeObserver(() => {
      this.organizeGridColumns();
    });

    this.resizeObserver.observe(this.element);
  }

  organizeGridColumns() {
    this.element.style.gridTemplateColumns = `repeat(${this.columns}, ${this.columnWidth})`;
    this.element.style.gridColumnGap = this.columnGap;
  }
}
