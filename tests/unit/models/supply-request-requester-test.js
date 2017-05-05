import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request-requester', 'Unit | Model | SupplyRequest_Requester', {
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