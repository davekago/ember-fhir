import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-target', 'Unit | Model | GraphDefinition_Target', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:graph-definition-compartment',
    'model:graph-definition-link'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});