import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-link', 'Unit | Model | TestScript_Link', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});