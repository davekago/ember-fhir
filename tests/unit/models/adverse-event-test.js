import { moduleForModel, test } from 'ember-qunit';

moduleForModel('adverse-event', 'Unit | Model | AdverseEvent', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:adverse-event-suspect-entity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});