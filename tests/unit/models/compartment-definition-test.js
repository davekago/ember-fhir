import { moduleForModel, test } from 'ember-qunit';

moduleForModel('compartment-definition', 'Unit | Model | CompartmentDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:compartment-definition-resource'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});