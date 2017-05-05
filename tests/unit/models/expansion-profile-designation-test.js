import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-designation', 'Unit | Model | ExpansionProfile_Designation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:expansion-profile-include',
    'model:expansion-profile-exclude'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});