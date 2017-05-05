import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-role-not-available', 'Unit | Model | PractitionerRole_NotAvailable', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});