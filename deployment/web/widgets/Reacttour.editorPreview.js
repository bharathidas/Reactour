'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".widget-reacttour-clickable {\n    cursor: pointer;\n}\n\n.widget-reacttour {\n    display: inline-block;\n}\n\n.widget-reacttour.badge:empty {\n    display: initial;\n    /* Fix padding to stay round */\n    padding: 3px 10px;\n}\n\n.widget-reacttour.label:empty {\n    display: initial;\n    /* Fix padding to stay square */\n    padding: .2em .8em .3em;\n}\n\n.widget-reacttour.badge {\n    min-width: 18px;\n    min-height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0dG91ci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiUmVhY3R0b3VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtcmVhY3R0b3VyLWNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LXJlYWN0dG91ciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ud2lkZ2V0LXJlYWN0dG91ci5iYWRnZTplbXB0eSB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAvKiBGaXggcGFkZGluZyB0byBzdGF5IHJvdW5kICovXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG5cbi53aWRnZXQtcmVhY3R0b3VyLmxhYmVsOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIC8qIEZpeCBwYWRkaW5nIHRvIHN0YXkgc3F1YXJlICovXG4gICAgcGFkZGluZzogLjJlbSAuOGVtIC4zZW07XG59XG5cbi53aWRnZXQtcmVhY3R0b3VyLmJhZGdlIHtcbiAgICBtaW4td2lkdGg6IDE4cHg7XG4gICAgbWluLWhlaWdodDogMThweDtcbn1cbiJdfQ== */";
var stylesheet=".widget-reacttour-clickable {\n    cursor: pointer;\n}\n\n.widget-reacttour {\n    display: inline-block;\n}\n\n.widget-reacttour.badge:empty {\n    display: initial;\n    /* Fix padding to stay round */\n    padding: 3px 10px;\n}\n\n.widget-reacttour.label:empty {\n    display: initial;\n    /* Fix padding to stay square */\n    padding: .2em .8em .3em;\n}\n\n.widget-reacttour.badge {\n    min-width: 18px;\n    min-height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0dG91ci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiUmVhY3R0b3VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtcmVhY3R0b3VyLWNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LXJlYWN0dG91ciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ud2lkZ2V0LXJlYWN0dG91ci5iYWRnZTplbXB0eSB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAvKiBGaXggcGFkZGluZyB0byBzdGF5IHJvdW5kICovXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG5cbi53aWRnZXQtcmVhY3R0b3VyLmxhYmVsOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIC8qIEZpeCBwYWRkaW5nIHRvIHN0YXkgc3F1YXJlICovXG4gICAgcGFkZGluZzogLjJlbSAuOGVtIC4zZW07XG59XG5cbi53aWRnZXQtcmVhY3R0b3VyLmJhZGdlIHtcbiAgICBtaW4td2lkdGg6IDE4cHg7XG4gICAgbWluLWhlaWdodDogMThweDtcbn1cbiJdfQ== */";
styleInject(css_248z);

var Reacttour = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(Reacttour);

class preview extends react.Component {
    render() {
        return (react.createElement("div", null));
    }
}
function getPreviewCss() {
    return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3R0b3VyLmVkaXRvclByZXZpZXcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi9zcmMvUmVhY3R0b3VyLmVkaXRvclByZXZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3R0b3VyUHJldmlld1Byb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvUmVhY3R0b3VyUHJvcHNcIjtcblxuZXhwb3J0IGNsYXNzIHByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQ8UmVhY3R0b3VyUHJldmlld1Byb3BzPiB7XG4gICAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2ID5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvUmVhY3R0b3VyLmNzc1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEtBQUE7QUFDRixHQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEdBQUE7RUFFQSxJQUFJQSxLQUFLLENBQUNNLFVBQVUsRUFBRTtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFVLENBQUNDLE9BQU8sR0FBR2IsR0FBRyxDQUFBO0FBQ2hDLEdBQUMsTUFBTTtJQUNMTSxLQUFLLENBQUNLLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDVyxjQUFjLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakQsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3RCTSxNQUFPLE9BQVEsU0FBUWUsZUFBZ0MsQ0FBQTtJQUN6RCxNQUFNLEdBQUE7UUFDRixRQUNJUixtQkFFTSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsRUFDUjtLQUNMO0FBR0osQ0FBQTtTQUVlLGFBQWEsR0FBQTtBQUN6QixJQUFBLE9BQU8sVUFBNkIsQ0FBQztBQUN6Qzs7Ozs7In0=
