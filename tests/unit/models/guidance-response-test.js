import { moduleForModel, test } from 'ember-qunit';

moduleForModel('guidance-response', 'Unit | Model | GuidanceResponse', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:annotation',
    'model:data-requirement'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});