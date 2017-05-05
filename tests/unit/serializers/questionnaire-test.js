import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire', 'Unit | Serializer | Questionnaire', {
  needs: [
    'serializer:questionnaire',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contact-detail',
    'model:coding',
    'model:questionnaire-item',
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