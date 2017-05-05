import { moduleForModel, test } from 'ember-qunit';

moduleForModel('adverse-event-suspect-entity', 'Unit | Model | AdverseEvent_SuspectEntity', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});