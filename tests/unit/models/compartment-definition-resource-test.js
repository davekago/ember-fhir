import { moduleForModel, test } from 'ember-qunit';

moduleForModel('compartment-definition-resource', 'Unit | Model | CompartmentDefinition_Resource', {
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