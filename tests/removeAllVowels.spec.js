describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all vowels from string', function() {
    var results = $filter('removeAllVowels')('california');
    expect(results).toEqual('clfrn');
  });
});
