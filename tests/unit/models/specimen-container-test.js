import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specimen-container', 'Unit | Model | Specimen_Container', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:quantity',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});