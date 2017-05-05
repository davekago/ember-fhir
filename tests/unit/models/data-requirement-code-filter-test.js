import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement-code-filter', 'Unit | Model | DataRequirement_CodeFilter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:coding',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});