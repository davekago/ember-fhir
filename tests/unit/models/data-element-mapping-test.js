import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-element-mapping', 'Unit | Model | DataElement_Mapping', {
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