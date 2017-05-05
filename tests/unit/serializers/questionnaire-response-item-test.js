import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response-item', 'Unit | Serializer | QuestionnaireResponse_Item', {
  needs: [
    'serializer:questionnaire-response-item',
    'model:reference',
    'model:questionnaire-response-answer',
    'model:questionnaire-response-item',
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