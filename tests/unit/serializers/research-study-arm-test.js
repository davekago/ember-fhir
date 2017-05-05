import { moduleForModel, test } from 'ember-qunit';

moduleForModel('research-study-arm', 'Unit | Serializer | ResearchStudy_Arm', {
  needs: [
    'serializer:research-study-arm',
    'model:codeable-concept',
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