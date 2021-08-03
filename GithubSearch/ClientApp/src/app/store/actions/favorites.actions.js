"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreFavorites = exports.removeFavorite = exports.addFavorite = exports.EFavoritesActions = void 0;
var store_1 = require("@ngrx/store");
var EFavoritesActions;
(function (EFavoritesActions) {
    EFavoritesActions["RestoreFavorites"] = "[Favorites] Restore Favorites";
    EFavoritesActions["AddFavorite"] = "[Favorites] Add Favorite";
    EFavoritesActions["RemoveFavorite"] = "[Favorites] Remove Favorite";
})(EFavoritesActions = exports.EFavoritesActions || (exports.EFavoritesActions = {}));
exports.addFavorite = store_1.createAction(EFavoritesActions.AddFavorite, store_1.props());
exports.removeFavorite = store_1.createAction(EFavoritesActions.RemoveFavorite, store_1.props());
exports.restoreFavorites = store_1.createAction(EFavoritesActions.RestoreFavorites, store_1.props());
//# sourceMappingURL=favorites.actions.js.map