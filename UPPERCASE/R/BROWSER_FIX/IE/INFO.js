OVERRIDE(INFO,function(n){"use strict";global.INFO=OBJECT({preset:function(){return n},init:function(n,t,e){var r,o,i;void 0===navigator.language&&(e.getLang=r=function(){var n=UPPERCASE.STORE("__INFO").get("lang");return void 0===n&&(n=navigator.userLanguage,n.length>2&&(n=n.substring(0,2)),n=n.toLowerCase()),n}),e.checkIsDisplayTouchable=o=function(){return void 0!==window.navigator.msPointerEnabled},IE.version<=8&&(e.checkIsSlowBrowser=i=function(){return!0})}})});