import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-designation-1', 'Unit | Model | ExpansionProfile_Designation1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});