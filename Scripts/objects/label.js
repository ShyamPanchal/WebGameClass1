var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// module = namespace
var m_objects;
(function (m_objects) {
    // export = public
    var c_Label = /** @class */ (function (_super) {
        __extends(c_Label, _super);
        // variables
        // constructor
        function c_Label(__labelString, __fontSize, __fontFamily, __fontColour, __x, __y, __isCentered) {
            if (__x === void 0) { __x = 0; }
            if (__y === void 0) { __y = 0; }
            if (__isCentered === void 0) { __isCentered = false; }
            var _this = 
            // creates a default text object
            _super.call(this, __labelString, __fontSize + " " + __fontFamily, __fontColour) || this;
            if (__isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = __x;
            _this.y = __y;
            return _this;
        }
        return c_Label;
    }(createjs.Text));
    m_objects.c_Label = c_Label;
})(m_objects || (m_objects = {}));
//# sourceMappingURL=label.js.map