import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-security', 'Unit | Model | CapabilityStatement_Security', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:capability-statement-certificate'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});