import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-request-payload', 'Unit | Model | CommunicationRequest_Payload', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});