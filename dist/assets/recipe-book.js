'use strict';



;define("recipe-book/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "recipe-book/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"recipe-book/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("recipe-book/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("recipe-book/components/recipe-short-overview", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="recipe-overview" {{on "click" this.toggleExpanded}}>
  
        <h3>
          <span {{on "click" this.toggleFavorite}}>
            {{#if this.isFavorite}}
  
             <span class="favorite star">★</span>
              {{else}}
                  <span class="star">☆</span>
            {{/if}}
          </span>
  
          {{@title}}
          </h3>
  
        {{#if this.isExpanded}}
          <p class="recipe-detail">{{@description}}</p>
          <LinkTo @route="recipes/details" @model={{@id}}>Details</LinkTo>
        {{/if}}
  
  </div>
  */
  {
    "id": "Ha2ulw/3",
    "block": "[[[11,0],[24,0,\"recipe-overview\"],[4,[38,1],[\"click\",[30,0,[\"toggleExpanded\"]]],null],[12],[1,\"\\n\\n      \"],[10,\"h3\"],[12],[1,\"\\n        \"],[11,1],[4,[38,1],[\"click\",[30,0,[\"toggleFavorite\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"isFavorite\"]],[[[1,\"\\n           \"],[10,1],[14,0,\"favorite star\"],[12],[1,\"★\"],[13],[1,\"\\n\"]],[]],[[[1,\"                \"],[10,1],[14,0,\"star\"],[12],[1,\"☆\"],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\\n        \"],[1,[30,1]],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isExpanded\"]],[[[1,\"        \"],[10,2],[14,0,\"recipe-detail\"],[12],[1,[30,2]],[13],[1,\"\\n        \"],[8,[39,6],null,[[\"@route\",\"@model\"],[\"recipes/details\",[30,3]]],[[\"default\"],[[[[1,\"Details\"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[13]],[\"@title\",\"@description\",\"@id\"],false,[\"div\",\"on\",\"h3\",\"span\",\"if\",\"p\",\"link-to\"]]",
    "moduleName": "recipe-book/components/recipe-short-overview.hbs",
    "isStrictMode": false
  });

  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  let RecipeShortOverviewComponent = _exports.default = (_class = class RecipeShortOverviewComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "recipeData", _descriptor, this);
      _initializerDefineProperty(this, "isExpanded", _descriptor2, this);
      _initializerDefineProperty(this, "isFavorite", _descriptor3, this);
      this.isFavorite = this.checkFavorite();
    }
    // eslint-disable-next-line no-dupe-class-members
    get isFavorite() {
      return this.checkFavorite();
    }
    checkFavorite() {
      return this.recipeData.isFavorite(this.args.id);
    }
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    }
    toggleFavorite(event) {
      event.stopPropagation();
      this.isFavorite = !this.isFavorite;
      this.recipeData.toggleFavorite(this.args.id, this.isFavorite);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "recipeData", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isExpanded", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isFavorite", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleExpanded", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleExpanded"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleFavorite", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleFavorite"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, RecipeShortOverviewComponent);
});
;define("recipe-book/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("recipe-book/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("recipe-book/controllers/create-recipe", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let CreateRecipeController = _exports.default = (_class = class CreateRecipeController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "recipeData", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _defineProperty(this, "title", '');
      _defineProperty(this, "description", '');
      _defineProperty(this, "ingredients", '');
      _defineProperty(this, "instructions", '');
    }
    updateTitle(event) {
      this.title = event.target.value;
    }
    updateDescription(event) {
      this.description = event.target.value;
    }
    updateIngredients(event) {
      this.ingredients = event.target.value;
    }
    updateInstructions(event) {
      this.instructions = event.target.value;
    }
    async createRecipe(event) {
      event.preventDefault();
      let newRecipe = {
        id: this.recipeData.generateGUID(),
        title: this.title,
        description: this.description,
        ingredients: this.ingredients.split(',').map(ingredient => ingredient.trim()),
        instructions: this.instructions
      };
      console.log(newRecipe);
      this.recipeData.saveRecipe(newRecipe);
      this.router.transitionTo('recipes');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "recipeData", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateTitle", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateTitle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateDescription", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateDescription"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateIngredients", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateIngredients"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateInstructions", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateInstructions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createRecipe", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "createRecipe"), _class.prototype)), _class);
});
;define("recipe-book/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("recipe-book/helpers/app-version", ["exports", "@ember/component/helper", "recipe-book/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"recipe-book/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("recipe-book/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("recipe-book/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("recipe-book/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("recipe-book/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "recipe-book/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"recipe-book/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("recipe-book/initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("recipe-book/models/recipe", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let RecipeModel = _exports.default = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), (_class = class RecipeModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "title", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
      _initializerDefineProperty(this, "ingredients", _descriptor3, this);
      _initializerDefineProperty(this, "instructions", _descriptor4, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "ingredients", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "instructions", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
});
;define("recipe-book/router", ["exports", "@ember/routing/router", "recipe-book/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"recipe-book/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('recipes', {
      path: '/'
    });
    this.route('recipes/details', {
      path: '/:recipe_id'
    });
    this.route('create-recipe'); // localhost:4200/create-recipe (custom path route)
    this.route('favorites');
  });
});
;define("recipe-book/routes/create-recipe", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class CreateRecipeRoute extends _route.default {}
  _exports.default = CreateRecipeRoute;
});
;define("recipe-book/routes/favorites", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let FavoritesRoute = _exports.default = (_class = class FavoritesRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "recipeData", _descriptor, this);
      _initializerDefineProperty(this, "store", _descriptor2, this);
    }
    async model() {
      await this.recipeData.loadRecipes();
      let favoriteIds = this.recipeData.getFavorites();
      return favoriteIds.map(id => this.store.peekRecord('recipe', id));
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "recipeData", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("recipe-book/routes/recipes", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let RecipesRoute = _exports.default = (_class = class RecipesRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "recipeData", _descriptor2, this);
    }
    async model() {
      await this.recipeData.loadRecipes();
      return this.store.peekAll('recipe');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "recipeData", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("recipe-book/routes/recipes/details", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let RecipesDetailsRoute = _exports.default = (_class = class RecipesDetailsRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "recipeData", _descriptor2, this);
    }
    async model(params) {
      await this.recipeData.loadRecipes();
      return this.store.peekRecord('recipe', params.recipe_id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "recipeData", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("recipe-book/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("recipe-book/services/recipe-data", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let RecipeDataService = _exports.default = (_class = class RecipeDataService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async loadRecipes() {
      let response = await fetch('/api/recipes.json');
      let data = await response.json();
      let storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const addRecipeToStore = recipe => {
        let existingRecord = this.store.peekRecord('recipe', recipe.id);
        if (!existingRecord) {
          return this.store.createRecord('recipe', {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
          });
        }
      };
      storedRecipes.forEach(addRecipeToStore);
      return data.recipes.map(addRecipeToStore);
    }
    async saveRecipe(recipe) {
      let storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      storedRecipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(storedRecipes));
    }
    generateGUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
    getFavorites() {
      return JSON.parse(localStorage.getItem('favorites')) || [];
    }
    isFavorite(recipeId) {
      let favorites = this.getFavorites();
      return favorites.includes(recipeId);
    }
    toggleFavorite(recipeId, isFavorite) {
      let favorites = this.getFavorites();
      if (isFavorite) {
        if (!favorites.includes(recipeId)) {
          favorites.push(recipeId);
        }
      } else {
        favorites = favorites.filter(id => id !== recipeId);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("recipe-book/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("recipe-book/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "RecipeBook"}}
  
  <nav class="navbar">
        <LinkTo class="nav-link" @route="recipes">Home</LinkTo>
        <LinkTo class="nav-link" @route="create-recipe">Create New Recipe</LinkTo>
        <LinkTo class="nav-link" @route="favorites">Favorites</LinkTo>
  </nav>
  
  <div class="container">
  {{outlet}}
  </div>
  */
  {
    "id": "SmnMKsAw",
    "block": "[[[1,[28,[35,0],[\"RecipeBook\"],null]],[1,\"\\n\\n\"],[10,\"nav\"],[14,0,\"navbar\"],[12],[1,\"\\n      \"],[8,[39,2],[[24,0,\"nav-link\"]],[[\"@route\"],[\"recipes\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[1,\"\\n      \"],[8,[39,2],[[24,0,\"nav-link\"]],[[\"@route\"],[\"create-recipe\"]],[[\"default\"],[[[[1,\"Create New Recipe\"]],[]]]]],[1,\"\\n      \"],[8,[39,2],[[24,0,\"nav-link\"]],[[\"@route\"],[\"favorites\"]],[[\"default\"],[[[[1,\"Favorites\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"nav\",\"link-to\",\"div\",\"component\",\"-outlet\"]]",
    "moduleName": "recipe-book/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("recipe-book/templates/create-recipe", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "CreateRecipe"}}
  
  <h1>Create New Recipe</h1>
  
  <form>
        <div class="form-group">
              <label for="title">Title</label>
              <input {{on "input" this.updateTitle}} value="{{this.title}}" type="text" class="" id="title" placeholder="Enter title" />
        </div>
  
        <div class="form-group">
              <label for="description">Description</label>
              <input {{on "input" this.updateDescription}} value="{{this.description}}" type="text" id="description" placeholder="Enter description" />
        </div>
  
        <div class="form-group">
              <label for="ingredients">Ingredients (comma separated)</label>
              <input {{on "input" this.updateIngredients}} value="{{this.ingredients}}" type="text" id="ingredients" placeholder="Enter ingredients" />
        </div>
  
        <div class="form-group">
              <label for="instructions">Instructions</label>
              <textarea {{on "input" this.updateInstructions}} value="{{this.instruction}}" id="instructions" placeholder="Enter instructions"></textarea>
        </div>
  
        <div class="text-center">
              <button {{on "click" this.createRecipe}} type="submit">Create Recipe</button>
        </div>
  </form>
  */
  {
    "id": "Wa1ZRjuE",
    "block": "[[[1,[28,[35,0],[\"CreateRecipe\"],null]],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\"Create New Recipe\"],[13],[1,\"\\n\\n\"],[10,\"form\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"title\"],[12],[1,\"Title\"],[13],[1,\"\\n            \"],[11,\"input\"],[16,2,[29,[[30,0,[\"title\"]]]]],[24,0,\"\"],[24,1,\"title\"],[24,\"placeholder\",\"Enter title\"],[24,4,\"text\"],[4,[38,6],[\"input\",[30,0,[\"updateTitle\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"description\"],[12],[1,\"Description\"],[13],[1,\"\\n            \"],[11,\"input\"],[16,2,[29,[[30,0,[\"description\"]]]]],[24,1,\"description\"],[24,\"placeholder\",\"Enter description\"],[24,4,\"text\"],[4,[38,6],[\"input\",[30,0,[\"updateDescription\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"ingredients\"],[12],[1,\"Ingredients (comma separated)\"],[13],[1,\"\\n            \"],[11,\"input\"],[16,2,[29,[[30,0,[\"ingredients\"]]]]],[24,1,\"ingredients\"],[24,\"placeholder\",\"Enter ingredients\"],[24,4,\"text\"],[4,[38,6],[\"input\",[30,0,[\"updateIngredients\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,\"for\",\"instructions\"],[12],[1,\"Instructions\"],[13],[1,\"\\n            \"],[11,\"textarea\"],[16,2,[29,[[30,0,[\"instruction\"]]]]],[24,1,\"instructions\"],[24,\"placeholder\",\"Enter instructions\"],[4,[38,6],[\"input\",[30,0,[\"updateInstructions\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"text-center\"],[12],[1,\"\\n            \"],[11,\"button\"],[24,4,\"submit\"],[4,[38,6],[\"click\",[30,0,[\"createRecipe\"]]],null],[12],[1,\"Create Recipe\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"h1\",\"form\",\"div\",\"label\",\"input\",\"on\",\"textarea\",\"button\"]]",
    "moduleName": "recipe-book/templates/create-recipe.hbs",
    "isStrictMode": false
  });
});
;define("recipe-book/templates/favorites", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Favorites"}}
  
  <h1>Favorites Recipes</h1>
  {{#each @model as |recipe|}}
        <RecipeShortOverview @title="{{recipe.title}}"
        @description="{{recipe.description}}" @id="{{recipe.id}}"/>
  {{/each}}
  */
  {
    "id": "azZhVt7e",
    "block": "[[[1,[28,[35,0],[\"Favorites\"],null]],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\"Favorites Recipes\"],[13],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1]],null]],null],null,[[[1,\"      \"],[8,[39,4],null,[[\"@title\",\"@description\",\"@id\"],[[29,[[30,2,[\"title\"]]]],[29,[[30,2,[\"description\"]]]],[29,[[30,2,[\"id\"]]]]]],null],[1,\"\\n\"]],[2]],null]],[\"@model\",\"recipe\"],false,[\"page-title\",\"h1\",\"each\",\"-track-array\",\"recipe-short-overview\"]]",
    "moduleName": "recipe-book/templates/favorites.hbs",
    "isStrictMode": false
  });
});
;define("recipe-book/templates/recipes", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Recipes"}}
  
  <h1>Recipe Book</h1>
  
  {{#each @model as |recipe|}}
        <RecipeShortOverview @title="{{recipe.title}}"
        @description="{{recipe.description}}" @id="{{recipe.id}}" @deleteRecipe="{{this.deleteRecipe}}"/>
  {{/each}}
  
  */
  {
    "id": "YAkv5/JO",
    "block": "[[[1,[28,[35,0],[\"Recipes\"],null]],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\"Recipe Book\"],[13],[1,\"\\n\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1]],null]],null],null,[[[1,\"      \"],[8,[39,4],null,[[\"@title\",\"@description\",\"@id\",\"@deleteRecipe\"],[[29,[[30,2,[\"title\"]]]],[29,[[30,2,[\"description\"]]]],[29,[[30,2,[\"id\"]]]],[29,[[30,0,[\"deleteRecipe\"]]]]]],null],[1,\"\\n\"]],[2]],null]],[\"@model\",\"recipe\"],false,[\"page-title\",\"h1\",\"each\",\"-track-array\",\"recipe-short-overview\"]]",
    "moduleName": "recipe-book/templates/recipes.hbs",
    "isStrictMode": false
  });
});
;define("recipe-book/templates/recipes/details", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Details"}}
  <h1>{{@model.title}}</h1>
  <h3 class="text-center mb">{{@model.description}}</h3>
  
  <div class="recipe-info-section">
  
        <h3>Ingredients</h3>
        <ol>
        {{#each @model.ingredients as |ingredient|}}
          <li>{{ingredient}}</li>
        {{/each}}
        </ol>
  </div>
  
  <div class="recipe-info-section">
  
        <h3>Instructions</h3>
  
        <p>{{@model.instructions}}</p>
  </div>
  */
  {
    "id": "v3zhKnt7",
    "block": "[[[1,[28,[35,0],[\"Details\"],null]],[1,\"\\n\"],[10,\"h1\"],[12],[1,[30,1,[\"title\"]]],[13],[1,\"\\n\"],[10,\"h3\"],[14,0,\"text-center mb\"],[12],[1,[30,1,[\"description\"]]],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"recipe-info-section\"],[12],[1,\"\\n\\n      \"],[10,\"h3\"],[12],[1,\"Ingredients\"],[13],[1,\"\\n      \"],[10,\"ol\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,1,[\"ingredients\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"recipe-info-section\"],[12],[1,\"\\n\\n      \"],[10,\"h3\"],[12],[1,\"Instructions\"],[13],[1,\"\\n\\n      \"],[10,2],[12],[1,[30,1,[\"instructions\"]]],[13],[1,\"\\n\"],[13]],[\"@model\",\"ingredient\"],false,[\"page-title\",\"h1\",\"h3\",\"div\",\"ol\",\"each\",\"-track-array\",\"li\",\"p\"]]",
    "moduleName": "recipe-book/templates/recipes/details.hbs",
    "isStrictMode": false
  });
});
;define("recipe-book/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("recipe-book/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("recipe-book/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("recipe-book/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('recipe-book/config/environment', [], function() {
  var prefix = 'recipe-book';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("recipe-book/app")["default"].create({"name":"recipe-book","version":"0.0.0+05d27646"});
          }
        
//# sourceMappingURL=recipe-book.map
