import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-response', 'Unit | Model | ProcessResponse', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:process-response-process-note'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});