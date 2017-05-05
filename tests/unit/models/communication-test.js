import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication', 'Unit | Model | Communication', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:communication-payload',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});