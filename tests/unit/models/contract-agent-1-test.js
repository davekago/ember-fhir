import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-agent-1', 'Unit | Model | Contract_Agent1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});