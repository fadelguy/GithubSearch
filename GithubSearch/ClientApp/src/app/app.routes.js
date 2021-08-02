"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var login_component_1 = require("./components/login/login.component");
var search_component_1 = require("./components/search/search.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./services/auth.guard");
exports.appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: login_component_1.LoginComponent, },
    { path: 'search', component: search_component_1.SearchComponent, },
    { path: 'home', component: home_component_1.HomeComponent, },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent, canActivate: [auth_guard_1.AuthGuard] },
];
//# sourceMappingURL=app.routes.js.map