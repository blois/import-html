// Allows mixing in Polymer to existing objects.
// Note that this does not include the Polymer declaration portion of Polymer,
// so a number of parts of Polymer will not work.
if (!Object.mixin) {
  Object.mixin = function(to, from) {
    Object.getOwnPropertyNames(from).forEach(function(name) {
      Object.defineProperty(to, name,
          Object.getOwnPropertyDescriptor(from, name));
    });
    return to;
  }
}

export var PolymerMixin = Object.mixin({}, Polymer.api.instance.base);
Object.mixin(PolymerMixin, Polymer.api.instance.attributes);
Object.mixin(PolymerMixin, Polymer.api.instance.properties);
Object.mixin(PolymerMixin, Polymer.api.instance.events);
Object.mixin(PolymerMixin, Polymer.api.instance.mdv);
