import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-capability', 'Unit | Model | TestScript_Capability', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});