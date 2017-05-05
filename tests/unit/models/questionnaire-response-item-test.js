import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response-item', 'Unit | Model | QuestionnaireResponse_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:questionnaire-response-answer',
    'model:questionnaire-response-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});