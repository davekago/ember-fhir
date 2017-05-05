import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition', 'Unit | Model | ActivityDefinition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:timing',
    'model:range',
    'model:activity-definition-participant',
    'model:quantity',
    'model:dosage',
    'model:activity-definition-dynamic-value'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});