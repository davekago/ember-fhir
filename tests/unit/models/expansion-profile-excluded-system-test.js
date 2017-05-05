import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-excluded-system', 'Unit | Model | ExpansionProfile_ExcludedSystem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});