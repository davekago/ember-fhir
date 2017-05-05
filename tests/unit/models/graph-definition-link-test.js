import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-link', 'Unit | Model | GraphDefinition_Link', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:graph-definition-target'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});