(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6208: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kd: function () {
          return r;
        },
        U9: function () {
          return a;
        },
        qk: function () {
          return i;
        },
        Vs: function () {
          return o;
        },
        N$: function () {
          return s;
        },
        MS: function () {
          return l;
        },
        PN: function () {
          return c;
        },
      });
      var r = "https://github.com/taltoken",
        a = "https://www.stacks.co/",
        i = "",
        o = "https://discord.gg/",
        s = "https://twitter.com/",
        l = "",
        c = "taraldefi@gmail.com";
    },
    7027: function (e, t, n) {
      "use strict";
      var r = n(5893);
      t.Z = function (e) {
        var t = e.title,
          n = e.children;
        return (0, r.jsxs)("div", {
          className: "mt-8",
          children: [
            (0, r.jsx)("h4", { className: "text-2xl", children: t }),
            (0, r.jsx)("p", {
              className: "mt-6 text-lg leading-6 text-gray-600",
              children: n,
            }),
          ],
        });
      };
    },
    2434: function (e, t, n) {
      "use strict";
      n.d(t, {
        RQ: function () {
          return r;
        },
        Fg: function () {
          return o;
        },
        OD: function () {
          return s;
        },
      });
      var r,
        a = n(5893),
        i = n(1664);
      !(function (e) {
        (e.HeaderLink =
          "font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl"),
          (e.FooterLink =
            "text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500"),
          (e.PageLink = "font-semibold text-blue-500 hover:text-cool-blue-600");
      })(r || (r = {}));
      var o = function (e) {
          var t = e.type,
            n = e.href,
            r = e.children,
            i = e.external,
            o = void 0 !== i && i;
          return (0, a.jsxs)(l, {
            href: n,
            external: o,
            tailwindStyles: t,
            children: [" ", r, " "],
          });
        },
        s = function (e) {
          var t = e.email,
            n = e.children;
          return (0, a.jsxs)("a", {
            className: r.PageLink,
            target: "_blank",
            href: "mailto:".concat(t),
            onClick: function (e) {
              (window.location = "mailto:".concat(t)), e.preventDefault();
            },
            rel: "noopener noreferrer",
            children: [" ", n, " "],
          });
        },
        l = function (e) {
          var t = e.children,
            n = e.href,
            r = e.tailwindStyles,
            o = e.external;
          return void 0 !== o && o
            ? (0, a.jsx)("a", {
                className: r,
                target: "_blank",
                href: n,
                rel: "noopener noreferrer",
                children: t,
              })
            : (0, a.jsx)(i.default, {
                href: n,
                children: (0, a.jsx)("a", { className: r, children: t }),
              });
        };
    },
    790: function (e, t, n) {
      "use strict";
      var r = n(5893);
      t.Z = function (e) {
        var t = e.title,
          n = e.children,
          a = e.maxwidth,
          i = void 0 === a ? "md:max-w-5xl" : a;
        return (0, r.jsx)("div", {
          className: "mx-8 mt-16 font-thin md:flex md:justify-center",
          children: (0, r.jsxs)("div", {
            className: i,
            children: [
              (0, r.jsx)("h3", {
                className: "flex justify-center text-3xl",
                children: t,
              }),
              (0, r.jsx)("div", { children: n }),
            ],
          }),
        });
      };
    },
    6071: function (e, t, n) {
      "use strict";
      var r = n(3038),
        a = n(862);
      t.default = void 0;
      var i = a(n(7294)),
        o = n(1689),
        s = n(2441),
        l = n(5749),
        c = {};
      function u(e, t, n, r) {
        if (e && (0, o.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var a =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          c[t + "%" + n + (a ? "%" + a : "")] = !0;
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          a = (n && n.pathname) || "/",
          f = i.default.useMemo(
            function () {
              var t = (0, o.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                i = n[0],
                s = n[1];
              return {
                href: i,
                as: e.as ? (0, o.resolveHref)(a, e.as) : s || i,
              };
            },
            [a, e.href, e.as]
          ),
          d = f.href,
          h = f.as,
          m = e.children,
          x = e.replace,
          p = e.shallow,
          v = e.scroll,
          g = e.locale;
        "string" === typeof m && (m = i.default.createElement("a", null, m));
        var y = i.Children.only(m),
          w = y && "object" === typeof y && y.ref,
          j = (0, l.useIntersection)({ rootMargin: "200px" }),
          k = r(j, 2),
          b = k[0],
          N = k[1],
          L = i.default.useCallback(
            function (e) {
              b(e),
                w &&
                  ("function" === typeof w
                    ? w(e)
                    : "object" === typeof w && (w.current = e));
            },
            [w, b]
          );
        (0, i.useEffect)(
          function () {
            var e = N && t && (0, o.isLocalURL)(d),
              r = "undefined" !== typeof g ? g : n && n.locale,
              a = c[d + "%" + h + (r ? "%" + r : "")];
            e && !a && u(n, d, h, { locale: r });
          },
          [h, d, N, g, t, n]
        );
        var _ = {
          ref: L,
          onClick: function (e) {
            y.props &&
              "function" === typeof y.props.onClick &&
              y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, i, s, l) {
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
                      (0, o.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[a ? "replace" : "push"](n, r, {
                      shallow: i,
                      locale: l,
                      scroll: s,
                    }));
                })(e, n, d, h, x, p, v, g);
          },
          onMouseEnter: function (e) {
            (0, o.isLocalURL)(d) &&
              (y.props &&
                "function" === typeof y.props.onMouseEnter &&
                y.props.onMouseEnter(e),
              u(n, d, h, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === y.type && !("href" in y.props))) {
          var E = "undefined" !== typeof g ? g : n && n.locale,
            R =
              n &&
              n.isLocaleDomain &&
              (0, o.getDomainLocale)(
                h,
                E,
                n && n.locales,
                n && n.domainLocales
              );
          _.href =
            R ||
            (0, o.addBasePath)((0, o.addLocale)(h, E, n && n.defaultLocale));
        }
        return i.default.cloneElement(y, _);
      };
      t.default = f;
    },
    5749: function (e, t, n) {
      "use strict";
      var r = n(3038);
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !o,
            l = (0, a.useRef)(),
            c = (0, a.useState)(!1),
            u = r(c, 2),
            f = u[0],
            d = u[1],
            h = (0, a.useCallback)(
              function (e) {
                l.current && (l.current(), (l.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (l.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = s.get(t);
                            if (n) return n;
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              s.set(
                                t,
                                (n = { id: t, observer: a, elements: r })
                              ),
                              n
                            );
                          })(n),
                          a = r.id,
                          i = r.observer,
                          o = r.elements;
                        return (
                          o.set(e, t),
                          i.observe(e),
                          function () {
                            o.delete(e),
                              i.unobserve(e),
                              0 === o.size && (i.disconnect(), s.delete(a));
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
              [n, t, f]
            );
          return (
            (0, a.useEffect)(
              function () {
                if (!o && !f) {
                  var e = (0, i.requestIdleCallback)(function () {
                    return d(!0);
                  });
                  return function () {
                    return (0, i.cancelIdleCallback)(e);
                  };
                }
              },
              [f]
            ),
            [h, f]
          );
        });
      var a = n(7294),
        i = n(8391),
        o = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    5722: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5893),
        a = n(790),
        i = n(2434),
        o = n(6208),
        s = n(7027);
      t.default = function () {
        return (0, r.jsxs)("main", {
          children: [(0, r.jsx)(c, {}), (0, r.jsx)(l, {})],
        });
      };
      var l = function () {
          return (0, r.jsxs)(a.Z, {
            title: "Frequently asked questions",
            maxwidth: "sm:max-w-3xl",
            children: [
              (0, r.jsx)(s.Z, {
                title: "How can I help the Taral project?",
                children:
                  "G;ad you asked. Taral project is developed by open source developers. Please contact us on Discord or Telegram if you want to help the project.",
              }),
              (0, r.jsxs)(s.Z, {
                title: "Is there a token?",
                children: [
                  "A token is being currently developed, the ticker is ",
                  " ",
                  (0, r.jsx)(i.Fg, {
                    type: i.RQ.PageLink,
                    href: "#",
                    children: "TAL.",
                  }),
                ],
              }),
              (0, r.jsxs)(s.Z, {
                title: "What's the underlying tech?",
                children: [
                  "This is developed on the ",
                  " ",
                  (0, r.jsx)(i.Fg, {
                    type: i.RQ.PageLink,
                    href: o.U9,
                    children:
                      "Stacks blockchain enabling us to use the full power of smart contracts and security on top of Bitcoin.",
                  }),
                ],
              }),
              (0, r.jsx)(s.Z, {
                title: "When will this get released?",
                children:
                  "We are actively developing Taral, we will update the website once we have a clear timeline.",
              }),
            ],
          });
        },
        c = function () {
          return (0, r.jsx)("div", {
            className: "flex sm:flex-row sm:justify-center",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col mx-6 mt-16 font-thin text-gray-700 sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-5xl",
              children: [
                (0, r.jsxs)("div", {
                  className: "sm:w-1/2",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl",
                      children: "What is Is TALAR?",
                    }),
                    (0, r.jsx)("p", {
                      className: "mt-6 text-lg leading-6",
                      children:
                        "Talar is an upcoming Stacks blockchain based platform aiming to reduce the friction, costs and time normally associated with trade finance.",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-16 sm:w-1/2 sm:mt-0",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl",
                      children: "What are we trying to solve?",
                    }),
                    (0, r.jsxs)("p", {
                      className: "mt-6 text-lg leading-6",
                      children: [
                        "Traditionally, ",
                        " ",
                        (0, r.jsx)(i.Fg, {
                          type: i.RQ.PageLink,
                          href: "#",
                          children: "trade finance offered by banks",
                        }),
                        "can take weeks, requests are often rejected and is expensive.",
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-16 sm:w-1/2 sm:mt-0",
                  children: [
                    (0, r.jsx)("h2", {
                      className: "text-3xl",
                      children: "How does it work?",
                    }),
                    (0, r.jsxs)("p", {
                      className: "mt-6 text-lg leading-6",
                      children: [
                        "By moving trade finance transactions on-chain, we unlock DeFi for",
                        (0, r.jsx)(i.Fg, {
                          type: i.RQ.PageLink,
                          href: "#",
                          children: "real-world international trade",
                        }),
                        ", a $15tn global market. Companies that don't know each other can now",
                        (0, r.jsx)(i.Fg, {
                          type: i.RQ.PageLink,
                          href: "#",
                          children:
                            "trade internationally and access liquidity, with full trust",
                        }),
                        ", thanks to the security of smart contracts built with Stacks on top of Bitcoin.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    5301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5722);
        },
      ]);
    },
    1664: function (e, t, n) {
      e.exports = n(6071);
    },
  },
  function (e) {
    e.O(0, [774, 351], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
