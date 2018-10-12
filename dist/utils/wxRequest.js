'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var API_SECRET_KEY = 'yun.jeecg.org';
var TIMESTAMP = _util2.default.getCurrentTime();
var MAIN_ID = 'ff****************************d6';
var SIGN = _md2.default.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

var wxRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var data, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = params.query || {};
            //data.sign = SIGN;
            //data.time = TIMESTAMP;

            data.mainId = MAIN_ID;
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'GET',
              data: data,
              header: { 'Content-Type': 'application/json' }
            });

          case 4:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUElfU0VDUkVUX0tFWSIsIlRJTUVTVEFNUCIsInV0aWwiLCJnZXRDdXJyZW50VGltZSIsIk1BSU5fSUQiLCJTSUdOIiwibWQ1IiwiaGV4X21kNSIsInRvTG93ZXJDYXNlIiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwiZGF0YSIsInF1ZXJ5IiwibWFpbklkIiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixlQUF2QjtBQUNBLElBQU1DLFlBQVlDLGVBQUtDLGNBQUwsRUFBbEI7QUFDQSxJQUFNQyxVQUFVLGtDQUFoQjtBQUNBLElBQU1DLE9BQU9DLGFBQUlDLE9BQUosQ0FBWSxDQUFDTixZQUFZRCxjQUFiLEVBQTZCUSxXQUE3QixFQUFaLENBQWI7O0FBRUEsSUFBTUM7QUFBQSxxRUFBWTtBQUFBLFFBQU1DLE1BQU4sdUVBQWUsRUFBZjtBQUFBLFFBQW1CQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMsZ0JBRFksR0FDTEYsT0FBT0csS0FBUCxJQUFnQixFQURYO0FBRWhCO0FBQ0E7O0FBQ0FELGlCQUFLRSxNQUFMLEdBQWNWLE9BQWQ7QUFKZ0I7QUFBQSxtQkFLQVcsZUFBS0MsT0FBTCxDQUFhO0FBQzNCTCxtQkFBS0EsR0FEc0I7QUFFM0JNLHNCQUFRUCxPQUFPTyxNQUFQLElBQWlCLEtBRkU7QUFHM0JMLG9CQUFNQSxJQUhxQjtBQUkzQk0sc0JBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCO0FBSm1CLGFBQWIsQ0FMQTs7QUFBQTtBQUtaQyxlQUxZO0FBQUEsNkNBV1RBLEdBWFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWNBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZaO0FBRGUsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNSc7XG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJztcblxuY29uc3QgQVBJX1NFQ1JFVF9LRVkgPSAneXVuLmplZWNnLm9yZydcbmNvbnN0IFRJTUVTVEFNUCA9IHV0aWwuZ2V0Q3VycmVudFRpbWUoKVxuY29uc3QgTUFJTl9JRCA9ICdmZjgwODA4MTY2MWU3NGJiMDE2NjFmMTJkZTVlMDNkNidcbmNvbnN0IFNJR04gPSBtZDUuaGV4X21kNSgoVElNRVNUQU1QICsgQVBJX1NFQ1JFVF9LRVkpLnRvTG93ZXJDYXNlKCkpXG5cbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge307XG4gIC8vZGF0YS5zaWduID0gU0lHTjtcbiAgLy9kYXRhLnRpbWUgPSBUSU1FU1RBTVA7XG4gIGRhdGEubWFpbklkID0gTUFJTl9JRDtcbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG4gIHJldHVybiByZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd3hSZXF1ZXN0XG59XG4iXX0=