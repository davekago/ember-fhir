import { moduleForModel, test } from 'ember-qunit';

moduleForModel('location-position', 'Unit | Model | Location_Position', {
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