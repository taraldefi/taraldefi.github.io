(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [563],
  {
    6208: function (e, t, r) {
      "use strict";
      r.d(t, {
        Kd: function () {
          return n;
        },
        U9: function () {
          return o;
        },
        qk: function () {
          return a;
        },
        Vs: function () {
          return i;
        },
        N$: function () {
          return c;
        },
        MS: function () {
          return l;
        },
        PN: function () {
          return s;
        },
      });
      var n = "https://github.com/taltoken",
        o = "https://www.stacks.co/",
        a = "",
        i = "https://discord.gg/",
        c = "https://twitter.com/",
        l = "",
        s = "taraldefi@gmail.com";
    },
    7027: function (e, t, r) {
      "use strict";
      var n = r(5893);
      t.Z = function (e) {
        var t = e.title,
          r = e.children;
        return (0, n.jsxs)("div", {
          className: "mt-8",
          children: [
            (0, n.jsx)("h4", { className: "text-2xl", children: t }),
            (0, n.jsx)("p", {
              className: "mt-6 text-lg leading-6 text-gray-600",
              children: r,
            }),
          ],
        });
      };
    },
    2434: function (e, t, r) {
      "use strict";
      r.d(t, {
        RQ: function () {
          return n;
        },
        Fg: function () {
          return i;
        },
        OD: function () {
          return c;
        },
      });
      var n,
        o = r(5893),
        a = r(1664);
      !(function (e) {
        (e.HeaderLink =
          "font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl"),
          (e.FooterLink =
            "text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500"),
          (e.PageLink = "font-semibold text-blue-500 hover:text-cool-blue-600");
      })(n || (n = {}));
      var i = function (e) {
          var t = e.type,
            r = e.href,
            n = e.children,
            a = e.external,
            i = void 0 !== a && a;
          return (0, o.jsxs)(l, {
            href: r,
            external: i,
            tailwindStyles: t,
            children: [" ", n, " "],
          });
        },
        c = function (e) {
          var t = e.email,
            r = e.children;
          return (0, o.jsxs)("a", {
            className: n.PageLink,
            target: "_blank",
            href: "mailto:".concat(t),
            onClick: function (e) {
              (window.location = "mailto:".concat(t)), e.preventDefault();
            },
            rel: "noopener noreferrer",
            children: [" ", r, " "],
          });
        },
        l = function (e) {
          var t = e.children,
            r = e.href,
            n = e.tailwindStyles,
            i = e.external;
          return void 0 !== i && i
            ? (0, o.jsx)("a", {
                className: n,
                target: "_blank",
                href: r,
                rel: "noopener noreferrer",
                children: t,
              })
            : (0, o.jsx)(a.default, {
                href: r,
                children: (0, o.jsx)("a", { className: n, children: t }),
              });
        };
    },
    790: function (e, t, r) {
      "use strict";
      var n = r(5893);
      t.Z = function (e) {
        var t = e.title,
          r = e.children,
          o = e.maxwidth,
          a = void 0 === o ? "md:max-w-5xl" : o;
        return (0, n.jsx)("div", {
          className: "mx-8 mt-16 font-thin md:flex md:justify-center",
          children: (0, n.jsxs)("div", {
            className: a,
            children: [
              (0, n.jsx)("h3", {
                className: "flex justify-center text-3xl",
                children: t,
              }),
              (0, n.jsx)("div", { children: r }),
            ],
          }),
        });
      };
    },
    6071: function (e, t, r) {
      "use strict";
      var n = r(3038),
        o = r(862);
      t.default = void 0;
      var a = o(r(7294)),
        i = r(1689),
        c = r(2441),
        l = r(5749),
        s = {};
      function u(e, t, r, n) {
        if (e && (0, i.isLocalURL)(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          s[t + "%" + r + (o ? "%" + o : "")] = !0;
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          r = (0, c.useRouter)(),
          o = (r && r.pathname) || "/",
          f = a.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(o, e.href, !0),
                r = n(t, 2),
                a = r[0],
                c = r[1];
              return {
                href: a,
                as: e.as ? (0, i.resolveHref)(o, e.as) : c || a,
              };
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          h = f.as,
          v = e.children,
          p = e.replace,
          x = e.shallow,
          m = e.scroll,
          y = e.locale;
        "string" === typeof v && (v = a.default.createElement("a", null, v));
        var g = a.Children.only(v),
          w = g && "object" === typeof g && g.ref,
          j = (0, l.useIntersection)({ rootMargin: "200px" }),
          b = n(j, 2),
          k = b[0],
          N = b[1],
          L = a.default.useCallback(
            function (e) {
              k(e),
                w &&
                  ("function" === typeof w
                    ? w(e)
                    : "object" === typeof w && (w.current = e));
            },
            [w, k]
          );
        (0, a.useEffect)(
          function () {
            var e = N && t && (0, i.isLocalURL)(d),
              n = "undefined" !== typeof y ? y : r && r.locale,
              o = s[d + "%" + h + (n ? "%" + n : "")];
            e && !o && u(r, d, h, { locale: n });
          },
          [h, d, N, y, t, r]
        );
        var _ = {
          ref: L,
          onClick: function (e) {
            g.props &&
              "function" === typeof g.props.onClick &&
              g.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, a, c, l) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, i.isLocalURL)(r))) &&
                    (e.preventDefault(),
                    null == c && (c = n.indexOf("#") < 0),
                    t[o ? "replace" : "push"](r, n, {
                      shallow: a,
                      locale: l,
                      scroll: c,
                    }));
                })(e, r, d, h, p, x, m, y);
          },
          onMouseEnter: function (e) {
            (0, i.isLocalURL)(d) &&
              (g.props &&
                "function" === typeof g.props.onMouseEnter &&
                g.props.onMouseEnter(e),
              u(r, d, h, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === g.type && !("href" in g.props))) {
          var E = "undefined" !== typeof y ? y : r && r.locale,
            M =
              r &&
              r.isLocaleDomain &&
              (0, i.getDomainLocale)(
                h,
                E,
                r && r.locales,
                r && r.domainLocales
              );
          _.href =
            M ||
            (0, i.addBasePath)((0, i.addLocale)(h, E, r && r.defaultLocale));
        }
        return a.default.cloneElement(g, _);
      };
      t.default = f;
    },
    5749: function (e, t, r) {
      "use strict";
      var n = r(3038);
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !i,
            l = (0, o.useRef)(),
            s = (0, o.useState)(!1),
            u = n(s, 2),
            f = u[0],
            d = u[1],
            h = (0, o.useCallback)(
              function (e) {
                l.current && (l.current(), (l.current = void 0)),
                  r ||
                    f ||
                    (e &&
                      e.tagName &&
                      (l.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t = e.rootMargin || "",
                              r = c.get(t);
                            if (r) return r;
                            var n = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              c.set(
                                t,
                                (r = { id: t, observer: o, elements: n })
                              ),
                              r
                            );
                          })(r),
                          o = n.id,
                          a = n.observer,
                          i = n.elements;
                        return (
                          i.set(e, t),
                          a.observe(e),
                          function () {
                            i.delete(e),
                              a.unobserve(e),
                              0 === i.size && (a.disconnect(), c.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [r, t, f]
            );
          return (
            (0, o.useEffect)(
              function () {
                if (!i && !f) {
                  var e = (0, a.requestIdleCallback)(function () {
                    return d(!0);
                  });
                  return function () {
                    return (0, a.cancelIdleCallback)(e);
                  };
                }
              },
              [f]
            ),
            [h, f]
          );
        });
      var o = r(7294),
        a = r(8391),
        i = "undefined" !== typeof IntersectionObserver;
      var c = new Map();
    },
    9053: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var n = r(5893),
        o = r(790),
        a = r(2434),
        i = r(7027),
        c = function () {
          return (0, n.jsx)("div", {
            className: "mx-8 mt-16 font-thin md:flex md:justify-center",
            children: (0, n.jsx)("div", {
              className: "md:max-w-5xl",
              children: (0, n.jsxs)("div", {
                role: "alert",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "bg-red-500 text-white font-bold rounded-t px-4 py-2",
                    children: "Never share your private key",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700",
                    children: (0, n.jsx)("p", {
                      children:
                        "Never give your private key or wallet seed words to anyone. Taral support team does not ask them. If you share your private key or seed words you will lose everything in your wallet.",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        l = r(6208),
        s = function () {
          return (0, n.jsxs)("main", {
            children: [(0, n.jsx)(c, {}), (0, n.jsx)(u, {})],
          });
        },
        u = function () {
          return (0, n.jsxs)(o.Z, {
            title: "Taral support",
            maxwidth: "sm:max-w-3xl",
            children: [
              (0, n.jsxs)(i.Z, {
                title: "I am a software developer",
                children: [
                  "You are welcome to join in our",
                  " ",
                  (0, n.jsx)(a.Fg, {
                    type: a.RQ.PageLink,
                    external: !0,
                    href: l.Vs,
                    children: "Discord",
                  }),
                  ". Also you can ask open questions on",
                  " ",
                  (0, n.jsx)(a.Fg, {
                    type: a.RQ.PageLink,
                    external: !0,
                    href: l.MS,
                    children: "our Telegram group",
                  }),
                ],
              }),
              (0, n.jsxs)(i.Z, {
                title: "How can I reach you by email?",
                children: [
                  "We can be reached",
                  (0, n.jsx)(a.OD, { email: l.PN, children: "here." }),
                ],
              }),
            ],
          });
        };
    },
    2849: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/support",
        function () {
          return r(9053);
        },
      ]);
    },
    1664: function (e, t, r) {
      e.exports = r(6071);
    },
  },
  function (e) {
    e.O(0, [774, 351], function () {
      return (t = 2849), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
