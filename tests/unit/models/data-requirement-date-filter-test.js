import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement-date-filter', 'Unit | Model | DataRequirement_DateFilter', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period',
    'model:duration'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});