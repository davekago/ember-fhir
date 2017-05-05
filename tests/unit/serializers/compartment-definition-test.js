import { moduleForModel, test } from 'ember-qunit';

moduleForModel('compartment-definition', 'Unit | Serializer | CompartmentDefinition', {
  needs: [
    'serializer:compartment-definition',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:compartment-definition-resource',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});