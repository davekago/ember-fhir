import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-collection', 'Unit | Model | Specimen_Collection', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:period',
    'model:quantity',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});