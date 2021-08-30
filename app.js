define("apps/numbers/app", ["require", "jquery", "monster"], function (e) {
    var t = e("jquery"),
        n = e("monster");
    return {
        name: "numbers",
        css: ["app"],
        i18n: { "en-US": { customCss: !1 }, "fr-FR": { customCss: !1 }, "ru-RU": { customCss: !1 } },
        requests: {},
        subscribe: {},
        load: function (e) {
            var t = this;
            t.initApp(function () {
                e && e(t);
            });
        },
        initApp: function (e) {
            var t = this;
            n.pub("auth.initApp", { app: t, callback: e });
        },
        render: function (e) {
            var s = this,
                e = e || t("#monster_content"),
                r = t(s.getTemplate({ name: "app" }));
            n.pub("common.numbers.render", {
                container: r,
                callbackAfterRender: function (t) {
                    e.empty().append(t);
                },
            });
        },
    };
}),
    (this.monster = this.monster || {}),
    (this.monster.cache = this.monster.cache || {}),
    (this.monster.cache.templates = this.monster.cache.templates || {}),
    (this.monster.cache.templates.numbers = this.monster.cache.templates.numbers || {}),
    (this.monster.cache.templates.numbers._main = this.monster.cache.templates.numbers._main || {}),
    (this.monster.cache.templates.numbers._main.app = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, n, s, r) {
            return '<div id="number_manager">\n\n</div>\n';
        },
        useData: !0,
    }));
