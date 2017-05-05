import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-compartment', 'Unit | Model | GraphDefinition_Compartment', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});