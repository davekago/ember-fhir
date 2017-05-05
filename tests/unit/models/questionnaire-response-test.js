import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire-response', 'Unit | Model | QuestionnaireResponse', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:questionnaire-response-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});