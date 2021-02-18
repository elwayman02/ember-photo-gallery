import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | on-load', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    this.onLoad = () => {};
    await render(hbs`<div {{on-load this.onLoad}}></div>`);

    assert.ok(true);
  });
});
