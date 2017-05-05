import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement', 'Unit | Model | DataRequirement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:data-requirement-code-filter',
    'model:data-requirement-date-filter'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});