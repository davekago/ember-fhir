import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response', 'Unit | Serializer | QuestionnaireResponse', {
  needs: [
    'serializer:questionnaire-response',
    'model:identifier',
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