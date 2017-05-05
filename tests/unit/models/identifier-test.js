import { moduleForModel, test } from 'ember-qunit';

moduleForModel('identifier', 'Unit | Model | Identifier', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});