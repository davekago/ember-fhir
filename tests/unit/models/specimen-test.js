import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen', 'Unit | Model | Specimen', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:specimen-collection',
    'model:specimen-processing',
    'model:specimen-container',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});