import { __assign } from "tslib";
import React from "react";
import TextWidget from "../TextWidget";
var PasswordWidget = function (props) {
    var uiProps = props.options["props"] || {};
    var options = __assign(__assign({}, props.options), { props: __assign({ type: "password" }, uiProps) });
    return (React.createElement(TextWidget, __assign({}, props, { options: options, value: props.value, onChange: props.onChange }, uiProps)));
};
export default PasswordWidget;
//# sourceMappingURL=PasswordWidget.js.map