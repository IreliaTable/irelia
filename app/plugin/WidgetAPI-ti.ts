/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const WidgetAPI = t.iface([], {
  "getOptions": t.func(t.union("object", "null")),
  "setOptions": t.func("void", t.param("options", t.iface([], {
    [t.indexKey]: "any",
  }))),
  "clearOptions": t.func("void"),
  "setOption": t.func("void", t.param("key", "string"), t.param("value", "any")),
  "getOption": t.func("any", t.param("key", "string")),
});

const exportedTypeSuite: t.ITypeSuite = {
  WidgetAPI,
};
export default exportedTypeSuite;
