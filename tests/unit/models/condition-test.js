import { moduleForModel, test } from 'ember-qunit';

moduleForModel('condition', 'Unit | Model | Condition', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:age',
    'model:period',
    'model:range',
    'model:condition-stage',
    'model:condition-evidence',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});