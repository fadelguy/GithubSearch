"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var favorite_component_1 = require("./components/favorite/favorite.component");
var login_component_1 = require("./components/login/login.component");
var search_component_1 = require("./components/search/search.component");
var auth_guard_1 = require("./services/auth.guard");
exports.appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    { path: 'login', component: login_component_1.LoginComponent, },
    { path: 'search', component: search_component_1.SearchComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'Favorites', component: favorite_component_1.FavoriteComponent, canActivate: [auth_guard_1.AuthGuard] },
];
//# sourceMappingURL=app.routes.js.map