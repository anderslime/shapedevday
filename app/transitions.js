let duration = 250;

export default function() {
  this.transition(
    this.fromRoute('day.index'),
    this.toRoute('day.talk'),
    this.use('explode', {
      matchBy: 'data-developer-image-id',
      use: ['flyTo', { duration: duration }]
    }, {
      use: ['fade', { duration: duration / 2 }]
    }),
    this.reverse('explode', {
      matchBy: 'data-developer-image-id',
      use: ['flyTo', { duration: duration }]
    }, {
      use: ['fade', { duration: duration / 2 }]
    }),
    this.debug()
  );
}
