import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition', 'Unit | Serializer | Composition', {
  needs: [
    'serializer:composition',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:composition-attester',
    'model:composition-relates-to',
    'model:composition-event',
    'model:composition-section',
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