import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication-request', 'Unit | Model | CommunicationRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:communication-request-payload',
    'model:period',
    'model:communication-request-requester',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});