import { moduleForModel, test } from 'ember-qunit';

moduleForModel('implementation-guide-dependency', 'Unit | Serializer | ImplementationGuide_Dependency', {
  needs: [
    'serializer:implementation-guide-dependency',
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