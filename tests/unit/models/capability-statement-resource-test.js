import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-resource', 'Unit | Model | CapabilityStatement_Resource', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:capability-statement-interaction',
    'model:capability-statement-search-param'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});