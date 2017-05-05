import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-rest', 'Unit | Model | CapabilityStatement_Rest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:capability-statement-security',
    'model:capability-statement-resource',
    'model:capability-statement-interaction-1',
    'model:capability-statement-search-param',
    'model:capability-statement-operation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});