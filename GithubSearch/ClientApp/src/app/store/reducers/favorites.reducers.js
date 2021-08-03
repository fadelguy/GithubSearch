"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesReducer = exports._favoritesReducer = void 0;
var store_1 = require("@ngrx/store");
var favorites_sate_1 = require("../state/favorites.sate");
var FavoritesActions = require("../actions/favorites.actions");
exports._favoritesReducer = store_1.createReducer(favorites_sate_1.initialFavoritesState, store_1.on(FavoritesActions.addFavorite, function (state, _a) {
    var favorite = _a.favorite;
    return (__assign(__assign({}, state), { favorites: __spreadArray(__spreadArray([], state.favorites), [favorite]) }));
}), store_1.on(FavoritesActions.removeFavorite, function (state, _a) {
    var id = _a.id;
    return (__assign(__assign({}, state), { favorites: state.favorites.filter(function (x) { return x.id != id; }) }));
}), store_1.on(FavoritesActions.restoreFavorites, function (state, _a) {
    var favorites = _a.favorites;
    return (__assign(__assign({}, state), { favorites: favorites }));
}));
function favoritesReducer(state, action) {
    return exports._favoritesReducer(state, action);
}
exports.favoritesReducer = favoritesReducer;
//# sourceMappingURL=favorites.reducers.js.map