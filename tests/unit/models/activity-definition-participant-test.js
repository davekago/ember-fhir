import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition-participant', 'Unit | Model | ActivityDefinition_Participant', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});