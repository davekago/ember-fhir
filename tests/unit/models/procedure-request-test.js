import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure-request', 'Unit | Model | ProcedureRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:procedure-request-requester',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});