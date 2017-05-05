import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition-allowed-response', 'Unit | Model | MessageDefinition_AllowedResponse', {
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