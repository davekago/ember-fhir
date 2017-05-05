import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance', 'Unit | Model | Substance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:substance-instance',
    'model:substance-ingredient'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});