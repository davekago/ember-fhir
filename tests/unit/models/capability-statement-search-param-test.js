import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-search-param', 'Unit | Model | CapabilityStatement_SearchParam', {
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