import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-response-process-note', 'Unit | Model | ProcessResponse_ProcessNote', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});