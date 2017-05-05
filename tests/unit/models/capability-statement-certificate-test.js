import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-certificate', 'Unit | Model | CapabilityStatement_Certificate', {
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