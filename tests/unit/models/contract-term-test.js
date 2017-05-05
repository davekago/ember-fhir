import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-term', 'Unit | Model | Contract_Term', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:codeable-concept',
    'model:reference',
    'model:coding',
    'model:contract-agent-1',
    'model:contract-valued-item-1',
    'model:contract-term'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});