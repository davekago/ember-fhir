import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-destination', 'Unit | Model | TestScript_Destination', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});