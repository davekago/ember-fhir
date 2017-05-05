import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-option', 'Unit | Serializer | Questionnaire_Option', {
  needs: [
    'serializer:questionnaire-option',
    'model:coding',
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