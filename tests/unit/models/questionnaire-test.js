import { moduleForModel, test } from 'ember-qunit';

moduleForModel('questionnaire', 'Unit | Model | Questionnaire', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contact-detail',
    'model:coding',
    'model:questionnaire-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});