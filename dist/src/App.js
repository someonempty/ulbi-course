var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
var App = function () {
    return (_jsxs("div", __assign({ className: 'app' }, { children: [_jsx(Link, __assign({ to: '/' }, { children: "Main" })), _jsx(Link, __assign({ to: '/about' }, { children: "About site" })), _jsxs(Routes, { children: [_jsx(Route, { path: '/about', element: _jsx(AboutPage, {}) }), _jsx(Route, { path: '/', element: _jsx(MainPage, {}) })] })] })));
};
export default App;
