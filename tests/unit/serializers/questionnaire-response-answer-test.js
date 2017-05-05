import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response-answer', 'Unit | Serializer | QuestionnaireResponse_Answer', {
  needs: [
    'serializer:questionnaire-response-answer',
    'model:attachment',
    'model:coding',
    'model:quantity',
    'model:reference',
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