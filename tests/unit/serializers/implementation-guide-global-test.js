import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-global', 'Unit | Serializer | ImplementationGuide_Global', {
  needs: [
    'serializer:implementation-guide-global',
    'model:reference',
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