describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter favorite food correctly', function () {
    var mockList = [
    {
      name: 'Callie',
      favoriteFood: 'Sushi'
    },
    {
      name: 'Ethan',
      favoriteFood: 'Pizza'
    },
    {
      name: 'Ashley'
      favoriteFood: 'Tacos'
    }];

    var results = $filter('favoriteFood')(mockList, 'Sushi');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Callie');
  });	
});
