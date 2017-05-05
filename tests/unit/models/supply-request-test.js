import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request', 'Unit | Model | SupplyRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:supply-request-ordered-item',
    'model:period',
    'model:timing',
    'model:supply-request-requester',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});