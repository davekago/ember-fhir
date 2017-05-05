import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-definition', 'Unit | Serializer | StructureDefinition', {
  needs: [
    'serializer:structure-definition',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:coding',
    'model:structure-definition-mapping',
    'model:structure-definition-snapshot',
    'model:structure-definition-differential',
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