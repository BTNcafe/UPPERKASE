require('../UPPERCASE/BOOT.js');

var
// origin BOOT
_BOOT = BOOT,

// kaffeine
kaffeine = new (require('./kaffeine.js'))();

global.BOOT = function(params) {

	params.MULTI_LANG_SUPPORT = {
		k : function(source, path) {
			return kaffeine.compile(source, 'beautify');
		}
	};

	return _BOOT(params);
};
