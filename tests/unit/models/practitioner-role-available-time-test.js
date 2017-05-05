import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role-available-time', 'Unit | Model | PractitionerRole_AvailableTime', {
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