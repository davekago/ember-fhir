import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group-action', 'Unit | Model | RequestGroup_Action', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:related-artifact',
    'model:request-group-condition',
    'model:request-group-related-action',
    'model:period',
    'model:duration',
    'model:range',
    'model:timing',
    'model:reference',
    'model:coding',
    'model:request-group-action'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});