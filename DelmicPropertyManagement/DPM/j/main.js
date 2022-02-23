(() => {
    var e, t = {
            2438: (e, t, o) => {
                var a = {
                    "./company.js": 9430,
                    "./contacts.js": 4495,
                    "./homepage.js": 3895,
                    "./impressum.js": 5204,
                    "./interior.js": 8416,
                    "./project_detail.js": 7163,
                    "./projects.js": 6001,
                    "./stdloading.js": 2955,
                    "./tech.js": 4971
                };

                function r(e) {
                    var t = l(e);
                    return o(t)
                }

                function l(e) {
                    if (!o.o(a, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return a[e]
                }
                r.keys = function () {
                    return Object.keys(a)
                }, r.resolve = l, e.exports = r, r.id = 2438
            },
            4189: (e, t, o) => {
                "use strict";
                o.d(t, {
                    Z: () => r
                });
                var a = o(1462);
                const r = function () {
                    gsap.set(a.I.content.querySelectorAll(".anim-circle.left_"), {
                        x: "-50vw"
                    }), gsap.set(a.I.content.querySelectorAll(".anim-circle.right_"), {
                        x: "50vw"
                    }), gsap.set(a.I.content.querySelectorAll(".anim-circle circle"), {
                        drawSVG: "0% 0%",
                        transformOrigin: "50% 50%"
                    }), gsap.set(a.I.content.querySelectorAll(".anim-circle-img-left-circle,.anim-circle-img-right-circle"), {
                        x: "-50%",
                        y: "-50%"
                    });
                    var e = gsap.timeline().to(a.I.content.querySelectorAll(".anim-circle circle"), .9, {
                            drawSVG: "0% 100%"
                        }, .1).fromTo(a.I.content.querySelectorAll(".anim-circle.left_ circle"), 1, {
                            scale: 0,
                            rotation: -540
                        }, {
                            scale: 1,
                            rotation: -90
                        }, 0).fromTo(a.I.content.querySelectorAll(".anim-circle.right_ circle"), 1, {
                            scale: 0,
                            rotation: 630
                        }, {
                            scale: 1,
                            rotation: -90
                        }, 0).to(a.I.content.querySelectorAll(".anim-circle"), 2, {
                            x: "0vw"
                        }, 0).fromTo(a.I.content.querySelectorAll(".anim-circle"), 1, {
                            y: "-60%"
                        }, {
                            y: "-50%"
                        }, 0).fromTo(a.I.content.querySelectorAll(".anim-circle-text"), .5, {
                            x: "-12rem"
                        }, {
                            x: "0rem"
                        }, .1).fromTo(a.I.content.querySelectorAll(".anim-circle-text div"), .4, {
                            x: "80%"
                        }, {
                            x: "0%"
                        }, .1).fromTo(a.I.content.querySelectorAll(".anim-circle-text div"), 1, {
                            scale: .1
                        }, {
                            scale: 1
                        }, .1).fromTo(a.I.content.querySelector(".anim-circle-img-left-circle"), 1.115, {
                            x: "0%",
                            y: "-50%"
                        }, {
                            x: "-50%",
                            y: "-50%"
                        }, .885).fromTo(a.I.content.querySelector(".anim-circle-img-left-circle img"), 1.115, {
                            x: "0rem",
                            scale: .2
                        }, {
                            x: "15.625rem",
                            scale: .7
                        }, .885).fromTo(a.I.content.querySelector(".anim-circle-img-right-circle"), 1.115, {
                            x: "0%",
                            y: "-50%"
                        }, {
                            x: "50%",
                            y: "-50%"
                        }, .885).fromTo(a.I.content.querySelector(".anim-circle-img-right-circle img"), 1.115, {
                            x: "0rem",
                            scale: .2
                        }, {
                            x: "-15.625rem",
                            scale: .7
                        }, .885).to(a.I.content.querySelector(".anim-circle-img-left-circle"), 1.5, {
                            width: "102rem",
                            height: "104rem",
                            ease: "power2.inOut"
                        }, 2).to(a.I.content.querySelector(".anim-circle-img-right-circle"), 1.5, {
                            width: "102rem",
                            height: "104rem",
                            ease: "power2.inOut"
                        }, 2).to(a.I.content.querySelector(".anim-circle-img-left-circle img"), 1.5, {
                            x: "51rem",
                            scale: 1.04,
                            ease: "power2.inOut"
                        }, 2).to(a.I.content.querySelector(".anim-circle-img-right-circle img"), 1.5, {
                            x: "-51rem",
                            scale: 1.04,
                            ease: "power2.inOut"
                        }, 2).set(a.I.content.querySelectorAll(".anim-circle"), {
                            opacity: 0
                        }, 2).to(a.I.content.querySelectorAll(".anim-circle-img-right-circle,.anim-circle-img-left-circle"), .4, {
                            borderRadius: 0
                        }, 2.9).set({}, {}, 4.5),
                        t = a.I.content.querySelector(".anim-circle-img-left-text"),
                        o = a.I.content.querySelector(".anim-circle-img-right-text");
                    t && o && (e.to(t, 1, {
                        x: "-50.3%",
                        ease: "power2.out"
                    }, 1), e.to(o, 1, {
                        x: "50.3%",
                        ease: "power2.out"
                    }, 1), e.to(t, 1, {
                        opacity: 0
                    }, 2.5), e.to(o, 1, {
                        opacity: 0
                    }, 2.5)), ScrollTrigger.create({
                        animation: e,
                        trigger: ".anim-circles-container",
                        endTrigger: ".anim-circles-spacer",
                        scroller: "[data-scroll-container]",
                        start: "top 40%",
                        end: "bottom 40%",
                        scrub: !0
                    }), ScrollTrigger.refresh()
                }
            },
            1736: (e, t, o) => {
                "use strict";
                o.d(t, {
                    Z: () => r
                });
                var a = o(1462);
                const r = function () {
                    return new Promise((function (e) {
                        var t = gsap.timeline({
                                paused: !0,
                                onComplete: e
                            }).fromTo(a.I.content.querySelectorAll(".prj-header div div"), 2, {
                                y: "120%",
                                rotationX: 20,
                                scale: .9
                            }, {
                                y: "0%",
                                z: "0px",
                                rotationX: 0,
                                scale: 1,
                                stagger: .1,
                                ease: "power4.out"
                            }).fromTo(a.I.content.querySelector(".prj-header-line .line"), 1.2, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                ease: "power2.inOut"
                            }, 0).add((function () {
                                a.I.content.querySelector(".page-intro-image") && a.I.content.querySelector(".page-intro-image").classList.add("is-inview")
                            }), .6).add((function () {
                                [].forEach.call(a.I.content.querySelectorAll(".page-submenu .anim-from-black-overlay"), (function (e, t) {
                                    gsap.delayedCall(.1 * t, (function () {
                                        e.classList.add("active")
                                    }))
                                }))
                            }), .3),
                            o = a.I.content.querySelector(".bt-scroll-down");
                        o && (t.fromTo(o.querySelector("circle:nth-child(1)"), 1, {
                            drawSVG: "0% 0%"
                        }, {
                            drawSVG: "0% 100%",
                            ease: "power4.out"
                        }, .5), t.fromTo(o.querySelector("circle:nth-child(2)"), 1, {
                            drawSVG: "0% 0%"
                        }, {
                            drawSVG: "0% 100%",
                            ease: "power4.out"
                        }, .6), t.fromTo(o.querySelector("circle:nth-child(3)"), 1, {
                            drawSVG: "0% 0%"
                        }, {
                            drawSVG: "0% 100%",
                            ease: "power4.out"
                        }, .7), t.fromTo(o.querySelector("svg"), 1, {
                            scale: .1
                        }, {
                            scale: 1,
                            ease: "back.out"
                        }, .5), t.fromTo(o.querySelector("i"), 1, {
                            y: "-100%",
                            scale: .1
                        }, {
                            y: "0%",
                            scale: 1,
                            ease: "back.out"
                        }, .8), t.fromTo(o.querySelector("span > span"), 1.2, {
                            y: "120%",
                            rotationX: 20,
                            scale: .9
                        }, {
                            y: "0%",
                            rotationX: 0,
                            scale: 1,
                            ease: "power4.out"
                        }, .8), gsap.set(o.querySelector("svg"), {
                            opacity: 1
                        })), t.play()
                    }))
                }
            },
            1462: (e, t, o) => {
                "use strict";
                o.d(t, {
                    I: () => v,
                    l: () => w
                });
                var a = o(1489);

                function r(e) {
                    return function (e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, o = new Array(e.length); t < e.length; t++) o[t] = e[t];
                            return o
                        }
                    }(e) || function (e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function l(e, t) {
                    this.form = e, this.action = t, void 0 !== this.form && this.form && (this.inputGroups = this.form.querySelectorAll(".form__group_required"), this.inputGroupsArr = r(this.inputGroups), this.inputs = this.form.querySelectorAll(".form__input[required]"), this.inputsArr = r(this.inputs), this.checkboxes = this.form.querySelectorAll(".form__checkbox"), this.submitBtn = this.form.querySelector(".form__submit"), this.telMasks = [], this.telMaskInputs = [], this.response = document.querySelector('[data-modal="' + this.form.dataset.response + '"]'), this.listenToInputs(), this.listenToCheckboxes(), this.unleashSubmit())
                }
                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), l.prototype.phoneMasksArr = ["+7 (###) ###-##-##", "+7 (9##) ###-##-##", "+7 (6##) ###-##-##", "+7 (7##) ###-##-##", "+1 (###) ###-####", "+1 (242) ###-####", "+1 (246) ###-####", "+1 (264) ###-####", "+1 (268) ###-####", "+1 (284) ###-####", "+1 (340) ###-####", "+1 (345) ###-####", "+1 (441) ###-####", "+1 (473) ###-####", "+1 (649) ###-####", "+1 (664) ###-####", "+1 (670) ###-####", "+1 (671) ###-####", "+1 (684) ###-####", "+1 (721) ###-####", "+1 (758) ###-####", "+1 (767) ###-####", "+1 (784) ###-####", "+1 (809) ###-####", "+1 (829) ###-####", "+1 (849) ###-####", "+1 (868) ###-####", "+1 (869) ###-####", "+1 (876) ###-####", "+20 (###) ###-####", "+211-##-###-####", "+212-##-####-###", "+213-##-###-####", "+216-##-###-###", "+218-##-###-###", "+218-21-###-####", "+220 (###) ##-##", "+221-##-###-####", "+222-##-##-####", "+223-##-##-####", "+224-##-###-###", "+225-##-###-###", "+226-##-##-####", "+227-##-##-####", "+228-##-###-###", "+229-##-##-####", "+230-###-####", "+231-##-###-###", "+232-##-######", "+233 (###) ###-###", "+234-##-###-##", "+234-##-###-###", "+234 (###) ###-####", "+235-##-##-##-##", "+236-##-##-####", "+237-####-####", "+238 (###) ##-##", "+239-##-#####", "+240-##-###-####", "+241-#-##-##-##", "+242-##-###-####", "+243 (###) ###-###", "+244 (###) ###-###", "+245-#-######", "+246-###-####", "+247-####", "+248-#-###-###", "+249-##-###-####", "+250 (###) ###-###", "+251-##-###-####", "+252-#-###-###", "+252-##-###-###", "+253-##-##-##-##", "+254-###-######", "+255-##-###-####", "+256 (###) ###-###", "+257-##-##-####", "+258-##-###-###", "+260-##-###-####", "+261-##-##-#####", "+262-#####-####", "+263-#-######", "+264-##-###-####", "+265-#-####-####", "+265-1-###-###", "+266-#-###-####", "+267-##-###-###", "+268-##-##-####", "+269-##-#####", "+27-##-###-####", "+290-####", "+291-#-###-###", "+297-###-####", "+298-###-###", "+299-##-##-##", "+30 (###) ###-####", "+31-##-###-####", "+32 (###) ###-###", "+33 (###) ###-###", "+34 (###) ###-###", "+350-###-#####", "+351-##-###-####", "+352 (###) ###-###", "+353 (###) ###-###", "+354-###-####", "+355 (###) ###-###", "+356-####-####", "+357-##-###-###", "+358 (###) ###-##-##", "+359 (###) ###-###", "+36 (###) ###-###", "+370 (###) ##-###", "+371-##-###-###", "+372-###-####", "+372-####-####", "+373-####-####", "+374-##-###-###", "+375 (##) ###-##-##", "+376-###-###", "+377-##-###-###", "+377 (###) ###-###", "+378-####-######", "+380 (##) ###-##-##", "+381-##-###-####", "+382-##-###-###", "+385-##-###-###", "+386-##-###-###", "+387-##-####", "+387-##-#####", "+389-##-###-###", "+39 (###) ####-###", "+39-6-698-#####", "+40-##-###-####", "+41-##-###-####", "+420 (###) ###-###", "+421 (###) ###-###", "+423 (###) ###-####", "+43 (###) ###-####", "+44-##-####-####", "+45-##-##-##-##", "+46-##-###-####", "+47 (###) ##-###", "+48 (###) ###-###", "+49-###-###", "+49 (###) ##-##", "+49 (###) ##-###", "+49 (###) ##-####", "+49 (###) ###-####", "+49 (####) ###-####", "+500-#####", "+501-###-####", "+502-#-###-####", "+503-##-##-####", "+504-####-####", "+505-####-####", "+506-####-####", "+507-###-####", "+508-##-####", "+509-##-##-####", "+51 (###) ###-###", "+52-##-##-####", "+52 (###) ###-####", "+53-#-###-####", "+54 (###) ###-####", "+55 (##) ####-####", "+55 (##) 7###-####", "+55 (##) 9####-####", "+56-#-####-####", "+57 (###) ###-####", "+58 (###) ###-####", "+590 (###) ###-###", "+591-#-###-####", "+592-###-####", "+593-#-###-####", "+593-##-###-####", "+594-#####-####", "+595 (###) ###-###", "+596 (###) ##-##-##", "+597-###-###", "+597-###-####", "+598-#-###-##-##", "+599-###-####", "+599-9###-####", "+60-#-###-###", "+60-##-###-###", "+60-##-###-####", "+60 (###) ###-###", "+61-#-####-####", "+62 (8##) ###-###", "+62 (8##) ###-####", "+62 (8##) ###-##-###", "+62-##-###-##", "+62-##-###-###", "+62-##-###-####", "+63 (###) ###-####", "+64-##-###-###", "+64 (###) ###-###", "+64 (###) ###-####", "+65-####-####", "+66-##-###-###", "+66-##-###-####", "+670-###-####", "+670-77#-#####", "+670-78#-#####", "+672-1##-###", "+672-3##-###", "+673-###-####", "+674-###-####", "+675 (###) ##-###", "+676-#####", "+677-#####", "+677-###-####", "+678-#####", "+678-##-#####", "+679-##-#####", "+680-###-####", "+681-##-####", "+682-##-###", "+683-####", "+685-##-####", "+686-##-###", "+687-##-####", "+688-2####", "+688-90####", "+689-##-##-##", "+690-####", "+691-###-####", "+692-###-####", "+81 (###) ###-###", "+81-##-####-####", "+82-##-###-####", "+84-##-####-###", "+84 (###) ####-###", "+850-###-###", "+850-####-####", "+850-##-###-###", "+850-###-####-###", "+850-####-#############", "+850-191-###-####", "+852-####-####", "+853-####-####", "+855-##-###-###", "+856-##-###-###", "+856(20##)###-###", "+86 (###) ####-###", "+86 (###) ####-####", "+86-##-#####-#####", "+880-##-###-###", "+886-####-####", "+886-#-####-####", "+90 (###) ###-####", "+91 (####) ###-###", "+92 (###) ###-####", "+93-##-###-####", "+94-##-###-####", "+95-###-###", "+95-#-###-###", "+95-##-###-###", "+960-###-####", "+961-#-###-###", "+961-##-###-###", "+962-#-####-####", "+963-##-####-###", "+964 (###) ###-####", "+965-####-####", "+966-#-###-####", "+966-5-####-####", "+967-#-###-###", "+967-##-###-###", "+967-###-###-###", "+968-##-###-###", "+970-##-###-####", "+971-#-###-####", "+971-5#-###-####", "+972-#-###-####", "+972-5#-###-####", "+973-####-####", "+974-####-####", "+975-#-###-###", "+975-17-###-###", "+976-##-##-####", "+977-##-###-###", "+98 (###) ###-####", "+992-##-###-####", "+993-#-###-####", "+994-##-###-##-##", "+995(###)###-###", "+996 (###) ###-###", "+998-##-###-####"], l.prototype.emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, l.prototype.checkEvery = function (e, t) {
                    var o = e.getAttribute("type");
                    return !!e.parentNode.parentNode.classList.contains("form__group_required") || ("email" === o ? null !== e.value.match(this.emailRegExp) : "text" === o || "tel" === o ? "" !== e.value : void 0)
                }, l.prototype.checkGroup = function (e) {
                    return e
                }, l.prototype.checkGroups = function () {
                    var e = [],
                        t = this;

                    function o(e) {
                        var o = e.getAttribute("type");
                        return "email" === o ? (null !== e.value.match(t.emailRegExp) ? e.parentNode.classList.add("form__group_approved") : e.parentNode.classList.remove("form__group_approved"), null !== e.value.match(t.emailRegExp)) : "text" === o || "tel" === o ? ("" !== e.value ? e.parentNode.classList.add("form__group_approved") : e.parentNode.classList.remove("form__group_approved"), "" !== e.value) : void 0
                    }
                    return this.inputGroups.forEach((function (t) {
                        var a = r(t.querySelectorAll(".form__input"));
                        e.push(a.some(o))
                    })), e.every(this.checkGroup)
                }, l.prototype.checkInput = function (e, t, o, a) {
                    var r = !1;
                    void 0 === o && (o = !0), o ? (t.classList.remove("form__field_pending"), t.classList.add("form__field_approved")) : (t.classList.remove("form__field_approved"), t.classList.add("form__field_pending"), void 0 !== a && "blur" === a && t.classList.add("form__field_warning")), this.inputsArr.every(this.checkEvery, this) && this.checkGroups() && null === this.form.querySelector(".form__label_warning") && (r = !0), r ? this.submitBtn.classList.remove("form__submit_disabled") : this.submitBtn.classList.add("form__submit_disabled")
                }, l.prototype.checkPhoneUniversal = function (e, t) {
                    e.value = e.value.replace(/[^0-9\- \+]/g, ""), e.value = e.value.replace(/(?!^)\+/g, "");
                    var o = e.value.match(/(^\+)?[0-9]([\- ]*[0-9]){10}/);
                    null !== o ? (e.value = o[0], t.classList.remove("form__field_pending"), t.classList.add("form__field_approved")) : (t.classList.remove("form__field_approved"), t.classList.add("form__field_pending"))
                }, l.prototype.listenToInputs = function () {
                    var e = this;
                    this.inputs.forEach((function (t, o) {
                        if (t.hasAttribute("required")) {
                            var a = t.parentNode,
                                r = t.getAttribute("type");
                            t.addEventListener("focus", (function () {
                                a.classList.remove("form__field_warning")
                            })), "tel" === r ? (t.addEventListener("keyup", (function () {
                                t.value = t.value.replace(/[^0-9 ]/, ""), e.checkInput(t, a, "" !== t.value)
                            })), t.addEventListener("blur", (function (o) {
                                e.checkInput(t, a, "" !== t.value, o.type)
                            }))) : "email" === r ? (t.addEventListener("keyup", (function () {
                                e.checkInput(t, a, null !== t.value.match(e.emailRegExp))
                            })), t.addEventListener("blur", (function (o) {
                                e.checkInput(t, a, null !== t.value.match(e.emailRegExp), o.type)
                            }))) : "text" === r && (t.addEventListener("keyup", (function () {
                                e.checkInput(t, a, "" !== t.value)
                            })), t.addEventListener("blur", (function (o) {
                                e.checkInput(t, a, "" !== t.value, o.type)
                            })))
                        }
                    }))
                }, l.prototype.listenToCheckboxes = function () {
                    var e = this;
                    this.checkboxes.length && this.checkboxes.forEach((function (t) {
                        var o = t.nextElementSibling.querySelector("svg"),
                            a = t.parentNode;
                        if (null !== o) {
                            o.querySelectorAll("path");
                            var r = new TimelineLite({
                                paused: !0
                            });
                            t.addEventListener("change", (function () {
                                t.checked ? (r.reverse(), t.hasAttribute("required") && a.classList.remove("form__label_warning")) : (r.play(), t.hasAttribute("required") && a.classList.add("form__label_warning")), e.inputsArr.every(e.checkEvery, e) && e.checkGroups() && null === e.form.querySelector(".form__label_warning") ? e.submitBtn.classList.remove("form__submit_disabled") : e.submitBtn.classList.add("form__submit_disabled")
                            }))
                        } else t.addEventListener("change", (function () {
                            t.hasAttribute("required") && (t.checked ? a.classList.remove("form__label_warning") : a.classList.add("form__label_warning")), e.inputsArr.every(e.checkEvery, e) && e.checkGroups() && null === e.form.querySelector(".form__label_warning") ? e.submitBtn.classList.remove("form__submit_disabled") : e.submitBtn.classList.add("form__submit_disabled")
                        }))
                    }))
                }, l.prototype.validateAll = function () {
                    var e = this;
                    this.inputs.forEach((function (t, o) {
                        var a = t.parentNode,
                            r = t.getAttribute("type");
                        "email" === r ? e.checkInput(t, a, null !== t.value.match(e.emailRegExp), "blur") : "text" !== r && "tel" !== r || e.checkInput(t, a, "" !== t.value, "blur")
                    })), this.checkboxes.forEach((function (e, t) {
                        e.hasAttribute("required") && (e.checked || e.parentNode.classList.add("form__label_warning"))
                    }));
                    var t = this.inputsArr.filter((function (e) {
                            return !e.parentNode.parentNode.classList.contains("form__group_required")
                        })),
                        o = !1,
                        a = !1;
                    if (t.length && t.some((function (e) {
                            return e.parentNode.classList.contains("form__field_warning")
                        })) || (o = !0), this.inputGroupsArr.every((function (e) {
                            return e.classList.contains("form__group_approved")
                        })) && (a = !0), o && a && null === this.form.querySelector(".form__label_warning")) {
                        var r = {
                                name: "",
                                email: "",
                                tel: "",
                                message: ""
                            },
                            l = this.response;
                        null !== this.form.querySelector('[name$="__name"]') && (r.name = this.form.querySelector('[name$="__name"]').value), null !== this.form.querySelector('[name$="__email"]') && (r.email = this.form.querySelector('[name$="__email"]').value), null !== this.form.querySelector('[name$="__tel"]') && (r.tel = this.form.querySelector('[name$="__tel"]').value), null !== this.form.querySelector('[name$="__message"]') && (r.message = this.form.querySelector('[name$="__message"]').value), null !== this.form.querySelector('[name$="__project"]') && (r.project = this.form.querySelector('[name$="__project"]').value), $.post(this.action, r, (function (e) {
                            "OK" == e && (null !== document.querySelector(".modal_active") && document.querySelector(".modal_active").classList.remove("modal_active"), null !== l && l.classList.add("modal_active"))
                        })).fail((function () {}))
                    } else {
                        var i = this.form.querySelector(".form__field_warning");
                        i && i.querySelector(".form__input").focus()
                    }
                }, l.prototype.unleashSubmit = function () {
                    var e = this;
                    null !== this.submitBtn && this.submitBtn.addEventListener("click", (function (t) {
                        t.preventDefault(), e.validateAll()
                    }))
                };
                const i = l;
                var s = {
                    preloader_hide_tries: 0,
                    preloader_init: !1,
                    preloaderTl: {},
                    complete: !1,
                    hide_preloader: !1,
                    initPreloader: function () {
                        return s.complete = !1, s.preloader_init ? Promise.resolve() : (s.preloader_init = !0, s.preloader = document.getElementsByClassName("preloader")[0], s.preloader_logo = document.getElementsByClassName("preloader-logo")[0], s.complete = !0, new Promise((function (e) {
                            gsap.timeline({
                                delay: 2.7
                            })
                            // .fromTo(s.preloader_logo.querySelectorAll(".logo_prel_grp1"), 1, {
                            //     y: "0%",
                            //     scale: 1
                            // },
                            // {
                            //     y: "-110%",
                            //     scale: .5,
                            //     ease: "power2.inOut"
                            // }, 0).fromTo(s.preloader_logo.querySelector("#logo_prel_e1"), .5, {
                            //     width: 13.4,
                            //     x: 0
                            // }, {
                            //     width: 0,
                            //     x: 13.4,
                            //     ease: "power2.inOut"
                            // }, 0).fromTo(s.preloader_logo.querySelector("#logo_prel_e2"), .5, {
                            //     width: 13.4
                            // }, {
                            //     width: 0,
                            //     ease: "power2.inOut"
                            // }, 0).fromTo(s.preloader_logo.querySelector("#logo_prel_e3"), .5, {
                            //     width: 13.4,
                            //     x: 0
                            // }, {
                            //     width: 0,
                            //     x: 13.4,
                            //     ease: "power2.inOut"
                            // }, 0).fromTo(s.preloader_logo.querySelectorAll(".logo_prel_grp2"), 1, {
                            //     y: "0%",
                            //     scale: 1
                            // }, 
                            // {
                            //     y: "110%",
                            //     scale: .5,
                            //     ease: "power2.inOut"
                            // }, .1)
                            .fromTo(s.preloader.querySelector(".preloader-line:nth-child(1) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.out"
                            }, .2).fromTo(s.preloader.querySelector(".preloader-line:nth-child(2) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.out"
                            }, .3).fromTo(s.preloader.querySelector(".preloader-line:nth-child(3) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.out"
                            }, .4).set(s.preloader, {
                                zIndex: -1,
                                autoAlpha: 0
                            }).add(e, .6)
                        })))
                    },
                    show: function () {
                        return s.playShowTimeline()
                    },
                    hide: function () {
                        return s.playHideTimeline()
                    },
                    playShowTimeline: function () {
                        return new Promise((function (e) {
                            void 0 === s.preloaderTL ? (s.preloaderTl = gsap.timeline({
                                delay: .1,
                                onComplete: function () {
                                    e()
                                }
                            }), s.preloaderTl.set(s.preloader, {
                                zIndex: 1e3,
                                autoAlpha: 1,
                                y: "0%"
                            }).fromTo(s.preloader.querySelector(".preloader-line:nth-child(1) div"), .6, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                ease: "power2.inOut"
                            }, 0).fromTo(s.preloader.querySelector(".preloader-line:nth-child(2) div"), .6, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                ease: "power2.inOut"
                            }, .1).fromTo(s.preloader.querySelector(".preloader-line:nth-child(3) div"), .6, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                ease: "power2.inOut"
                            }, .2)) : s.preloaderTl.restart()
                        }))
                    },
                    playHideTimeline: function () {
                        return new Promise((function (e) {
                            void 0 === s.preloaderTL ? s.preloaderTlback = gsap.timeline().fromTo(s.preloader.querySelector(".preloader-line:nth-child(1) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.inOut"
                            }, 0).fromTo(s.preloader.querySelector(".preloader-line:nth-child(2) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.inOut"
                            }, .1).fromTo(s.preloader.querySelector(".preloader-line:nth-child(3) div"), .8, {
                                x: "0%"
                            }, {
                                x: "100%",
                                ease: "power2.inOut"
                            }, .2).set(s.preloader, {
                                zIndex: -1,
                                autoAlpha: 0
                            }).add(e, .6) : s.preloaderTlback.restart()
                        }))
                    }
                };
                const n = s;
                var c = o(9926),
                    p = {
                        logo_container: null,
                        page_header_path: null,
                        page_header_path_content: null,
                        page_header_property: null,
                        initHeader: function () {
                            p.page_header_path = document.getElementsByClassName("page-header-path")[0], p.page_header_path_content = document.getElementById("page-header-path-content"), p.page_header_property = document.getElementsByClassName("page-header-projects")[0], p.page_header_apart = document.getElementsByClassName("page-header-apartments")[0];
                            var e = document.getElementsByClassName("page-header-line-logo")[0],
                                t = document.getElementsByClassName("page-header-line-phone")[0],
                                o = document.getElementsByClassName("page-header-line-h")[0],
                                a = document.getElementsByClassName("page-header-bg")[0];
                            document.getElementsByClassName("page-header")[0];
                            p.tl_header = gsap.timeline({
                                paused: !0
                            }).to(o, .4, {
                                left: "50rem",
                                right: "50rem"
                            }, .1).to(e, .2, {
                                top: "6.25rem"
                            }, 0).to(t, .2, {
                                top: "6.25rem"
                            }, 0).fromTo(a, .5, {
                                y: "-100%"
                            }, {
                                y: "0%",
                                ease: "power2.out"
                            }, .1), p.tl_header_back = gsap.timeline({
                                paused: !0
                            }).fromTo(a, .3, {
                                y: "0%"
                            }, {
                                y: "-100%",
                                ease: "power2.out"
                            }, 0).fromTo(o, .4, {
                                left: "50rem",
                                right: "50rem"
                            }, {
                                left: "2.8125rem",
                                right: "2.8125rem",
                                ease: "power2.out"
                            }, .1).fromTo(e, .2, {
                                top: "6.25rem"
                            }, {
                                top: "1.625rem"
                            }, .3).fromTo(t, .2, {
                                top: "6.25rem"
                            }, {
                                top: "1.625rem"
                            }, .3), document.body.classList.contains("inner") ? (gsap.set(e, {
                                top: "6.25rem"
                            }), gsap.set(t, {
                                top: "6.25rem"
                            }), gsap.set(o, {
                                left: "50rem",
                                right: "50rem"
                            }), gsap.set(a, {
                                y: "0%"
                            })) : (gsap.set(e, {
                                top: "1.625rem"
                            }), gsap.set(t, {
                                top: "1.625rem"
                            }), gsap.set(o, {
                                left: "2.8125rem",
                                right: "2.8125rem"
                            }), gsap.set(a, {
                                y: "-100%"
                            })), w.scroll_listeners.header = function (e) {
                                v.content && (100 * e.scroll.y / (e.limit.y - e.scroll.y) > 2 ? document.body.classList.contains("scrolled_") || -1 !== v.content.getAttribute("data-barba-namespace").indexOf("inner") || p.setWhiteHeader() : document.body.classList.contains("scrolled_") && -1 === v.content.getAttribute("data-barba-namespace").indexOf("inner") && p.setTransparentHeader())
                            }, p.initLogo()
                        },
                        setWhiteHeader: function () {
                            v.header.classList.contains("white_") || (p.tl_header.restart(), document.body.classList.add("scrolled_"), v.header.classList.add("white_"), p.hideWhiteLogo(), setTimeout(p.showBlackLogo, 100))
                        },
                        setTransparentHeader: function () {
                            p.tl_header_back.restart(), document.body.classList.remove("scrolled_"), v.header.classList.remove("white_"), p.hideBlackLogo(), setTimeout(p.showWhiteLogo, 100)
                        },
                        initLogo: function () {
                            p.logo_container = document.querySelector(".page-header-logo"), p.tl_show_white_logo = gsap.timeline({
                                paused: !0
                            })
                            .fromTo(p.logo_container.querySelectorAll(".logo_white_grp1"), .6, {
                                y: "110%",
                                scale: .5
                            }, {
                                y: "0%",
                                scale: 1,
                                stagger: .02,
                                ease: "power2.out"
                            }, 0).fromTo(p.logo_container.querySelector("#logo_white_e1"), .3, {
                                width: 0
                            }, {
                                width: 13.4
                            }, .3).fromTo(p.logo_container.querySelector("#logo_white_e2"), .3, {
                                width: 0,
                                x: 13.4
                            }, {
                                width: 13.4,
                                x: 0
                            }, .3).fromTo(p.logo_container.querySelector("#logo_white_e3"), .3, {
                                width: 0
                            }, {
                                width: 13.4
                            }, .3).fromTo(p.logo_container.querySelectorAll(".logo_white_grp2"), .6, {
                                y: "-110%",
                                scale: .5
                            }, {
                                y: "0%",
                                scale: 1,
                                stagger: .02,
                                ease: "power2.out"
                            }, .1), p.tl_hide_white_logo = gsap.timeline({
                                paused: !0
                            }).fromTo(p.logo_container.querySelectorAll(".logo_white_grp1"), .6, {
                                y: "0%",
                                scale: 1
                            }, {
                                y: "110%",
                                scale: .5,
                                ease: "power2.out"
                            }, 0).fromTo(p.logo_container.querySelector("#logo_white_e1"), .3, {
                                width: 13.4
                            }, {
                                width: 0
                            }, 0).fromTo(p.logo_container.querySelector("#logo_white_e2"), .3, {
                                width: 13.4,
                                x: 0
                            }, {
                                width: 0,
                                x: 13.4
                            }, 0).fromTo(p.logo_container.querySelector("#logo_white_e3"), .3, {
                                width: 13.4
                            }, {
                                width: 0
                            }, 0).fromTo(p.logo_container.querySelectorAll(".logo_white_grp2"), .6, {
                                y: "0%",
                                scale: 1
                            }, {
                                y: "-110%",
                                scale: .5,
                                ease: "power2.out"
                            }, 0), p.tl_show_black_logo = gsap.timeline({
                                paused: !0
                            }).fromTo(p.logo_container.querySelectorAll(".logo_black_grp1"), .6, {
                                y: "-110%",
                                scale: .5
                            }, {
                                y: "0%",
                                scale: 1,
                                stagger: .02,
                                ease: "power2.out"
                            }, 0).fromTo(p.logo_container.querySelector("#logo_black_e1"), .3, {
                                width: 0,
                                x: 13.4
                            }, {
                                width: 13.4,
                                x: 0
                            }, .3).fromTo(p.logo_container.querySelector("#logo_black_e2"), .3, {
                                width: 0
                            }, {
                                width: 13.4
                            }, .3).fromTo(p.logo_container.querySelector("#logo_black_e3"), .3, {
                                width: 0,
                                x: 13.4
                            }, {
                                width: 13.4,
                                x: 0
                            }, .3).fromTo(p.logo_container.querySelectorAll(".logo_black_grp2"), .6, {
                                y: "120%",
                                scale: .5
                            }, {
                                y: "0%",
                                scale: 1,
                                stagger: .02,
                                ease: "power2.out"
                            }, .1), p.tl_hide_black_logo = gsap.timeline({
                                paused: !0
                            }).fromTo(p.logo_container.querySelectorAll(".logo_black_grp1"), .6, {
                                y: "0%",
                                scale: 1
                            }, {
                                y: "-110%",
                                scale: .5,
                                ease: "power2.out"
                            }, 0).fromTo(p.logo_container.querySelector("#logo_black_e1"), .3, {
                                width: 13.4,
                                x: 0
                            }, {
                                width: 0,
                                x: 13.4
                            }, 0).fromTo(p.logo_container.querySelector("#logo_black_e2"), .3, {
                                width: 13.4
                            }, {
                                width: 0
                            }, 0).fromTo(p.logo_container.querySelector("#logo_black_e3"), .3, {
                                width: 13.4,
                                x: 0
                            }, {
                                width: 0,
                                x: 13.4
                            }, 0).fromTo(p.logo_container.querySelectorAll(".logo_black_grp2"), .6, {
                                y: "0%",
                                scale: 1
                            }, {
                                y: "120%",
                                scale: .5,
                                ease: "power2.out"
                            }, 0), gsap.set(p.logo_container.querySelectorAll(".logo_white_grp1"), {
                                y: "100%",
                                transformOrigin: "50% 50%"
                            }), gsap.set(p.logo_container.querySelectorAll(".logo_white_grp2"), {
                                y: "-100%",
                                transformOrigin: "50% 50%"
                            }), gsap.set(p.logo_container.querySelectorAll(".logo_black_grp2"), {
                                y: "120%",
                                transformOrigin: "50% 50%"
                            }), gsap.set(p.logo_container.querySelectorAll("#logo_white_e1,#logo_white_e2,#logo_white_e3,#logo_black_e1,#logo_black_e2,#logo_black_e3"), {
                                width: 0
                            }), gsap.set(p.logo_container, {
                                opacity: 1
                            })
                        },
                        showWhiteLogo: function () {
                            p.logo_container.classList.contains("white_") || (p.logo_container.classList.add("white_"), p.tl_show_white_logo.restart())
                        },
                        hideWhiteLogo: function () {
                            p.logo_container.classList.remove("white_"), p.tl_hide_white_logo.restart()
                        },
                        showBlackLogo: function () {
                            p.logo_container.classList.contains("black_") || (p.logo_container.classList.add("black_"), p.tl_show_black_logo.restart())
                        },
                        hideBlackLogo: function () {
                            p.logo_container.classList.remove("black_"), p.tl_hide_black_logo.restart()
                        },
                        showSubSection: function () {
                            p.page_header_path.classList.contains("shown_") || (p.page_header_path.classList.add("shown_"), gsap.set(p.page_header_path, {
                                visibility: "visible"
                            }), gsap.to(p.page_header_path.querySelector("span"), .6, {
                                x: "0%"
                            }), gsap.fromTo(p.page_header_path.querySelector("i i"), .6, {
                                y: "-100%"
                            }, {
                                y: "0%"
                            }))
                        },
                        hideSubSection: function () {
                            p.page_header_path.classList.contains("shown_") && (p.page_header_path.classList.remove("shown_"), gsap.to(p.page_header_path.querySelector("i i"), .6, {
                                y: "-100%"
                            }), gsap.to(p.page_header_path.querySelector("span"), .6, {
                                x: "-100%",
                                onComplete: function () {
                                    gsap.set(p.page_header_path, {
                                        visibility: "hidden"
                                    })
                                }
                            }))
                        },
                        showSubSectionContent: function () {
                            gsap.to(p.page_header_path.querySelector("span"), .6, {
                                x: "0%"
                            })
                        },
                        hideSubSectionContent: function () {
                            gsap.to(p.page_header_path.querySelector("span"), .6, {
                                x: "-100%",
                                onComplete: function () {
                                    p.setPathText()
                                }
                            })
                        },
                        setPathText: function () {
                            if (v.content) {
                                var e = v.content.querySelector("[data-page-title]");
                                e && (p.page_header_path_content.textContent = e.dataset.pageTitle)
                            }
                        },
                        showPropertyLink: function () {
                            gsap.to(p.page_header_property, .3, {
                                opacity: 1,
                                display: "block"
                            })
                        },
                        hidePropertyLink: function () {
                            gsap.to(p.page_header_property, .3, {
                                opacity: 0,
                                display: "none"
                            })
                        },
                        showApartLink: function () {
                            gsap.to(p.page_header_apart, .3, {
                                opacity: 1,
                                display: "block"
                            })
                        },
                        hideApartLink: function () {
                            gsap.to(p.page_header_apart, .3, {
                                opacity: 0,
                                display: "none"
                            })
                        },
                        updateHeaderLeave: function (e) {
                            "/" === e || "/en/" === e ? p.hideSubSection() : p.setWhiteHeader(), e.match(/\/projects\/$/) && p.hidePropertyLink()
                        },
                        updateHeaderEnter: function (e) {
                            p.setPathText(), "/" !== e && "/en/" !== e || (p.setTransparentHeader(), p.showPropertyLink()), "/" !== e && "/en/" !== e && (p.setWhiteHeader(), p.showSubSection()), e.match(/\/projects\/$/) || e.match(/\/projects\/\w+\//) ? p.hidePropertyLink() : p.showPropertyLink(), e.match(/\/projects\/\w+\//) ? p.showApartLink() : p.hideApartLink()
                        },
                        updateHeaderOnce: function (e) {
                            p.setPathText(), "/" !== e && "/en/" !== e || (p.setTransparentHeader(), p.hideSubSection()), "/" !== e && "/en/" !== e && (p.setWhiteHeader(), p.showSubSection()), e.match(/\/projects\/$/) || e.match(/\/projects\/\w+\//) ? p.hidePropertyLink() : p.showPropertyLink(), e.match(/\/projects\/\w+\//) ? p.showApartLink() : p.hideApartLink()
                        }
                    };
                const d = p;
                var u = o(2825),
                    f = o.n(u);
                const m = function () {
                    var e = document.querySelectorAll('.js-jump:not([data-listener="1"]');
                    [].forEach.call(e, (function (e) {
                        var t = e.getAttribute("href");
                        t && (e.dataset.listener = "1", e.addEventListener("click", (function (e) {
                            e.preventDefault(), w.scroll.scrollTo(t, -v.header.offsetHeight, 600)
                        })))
                    }))
                };
                const h = {
                    leave: function (e) {
                        var t, o = document.getElementsByClassName("page-transition-overlay");
                        return t = e.closest(".projects-list-item"), new Promise((function (e) {
                            var a = t.getElementsByClassName("projects-list-img-inner");
                            [].forEach.call(a, (function (t, a) {
                                var r = parseInt(t.dataset.bigHeight, 10) / parseInt(t.dataset.bigWidth, 10);
                                Flip.fit(o[a], t, {
                                    scale: !1
                                }), o[a].innerHTML = '<img class="d_b pos_a" data-k="' + r + '" src="' + t.dataset.bigImage + '">', o[a].style.zIndex = "1000", o[a].style.opacity = "1", o[a].style.visibility = "visible";
                                var l = o[a].querySelector("img"),
                                    i = Flip.getState(o[a]);
                                gsap.set(o[a], {
                                    x: 0,
                                    y: 0,
                                    width: "100%",
                                    height: "100%"
                                }), Flip.from(i, {
                                    duration: 1,
                                    ease: "expo.out",
                                    scale: !1,
                                    onUpdate: function () {
                                        var e, t, i = o[a].getBoundingClientRect();
                                        i.height / i.width > r ? e = (t = i.height) / r : t = (e = i.width) * r, l.style.left = (i.width - e) / 2 + "px", l.style.top = (i.height - t) / 2 + "px", l.style.width = e + "px", l.style.height = t + "px"
                                    },
                                    onComplete: function () {
                                        return e()
                                    }
                                })
                            }))
                        }))
                    },
                    enter: function (e) {
                        return new Promise((function (t) {
                            setTimeout((function () {
                                var o = e.getElementsByClassName("prj-detail-intro")[0],
                                    a = o.getElementsByClassName("prj-detail-intro-img")[0],
                                    r = document.getElementsByClassName("page-transition-overlay")[0],
                                    l = r.querySelector("img"),
                                    i = (parseFloat(l.dataset.k), Flip.getState(r)),
                                    s = !1;
                                Flip.fit(r, o, {
                                    scale: !1
                                }), Flip.from(i, {
                                    duration: 1.4,
                                    ease: "power4.inOut",
                                    scale: !1,
                                    onUpdate: function () {
                                        var e = r.getBoundingClientRect();
                                        e.height, e.width;
                                        l.style.transition || (l.style.transition = "transform 1.35s cubic-bezier(0.84, 0, 0.16, 1)", l.style.transform = a.style.transform), e.top > .5 * window.innerHeight && !s && (t(), s = !0)
                                    },
                                    onComplete: function () {
                                        gsap.to(r, .2, {
                                            autoAlpha: 0,
                                            onComplete: function () {
                                                r.style.zIndex = "-1", r.innerHTML = ""
                                            }
                                        })
                                    }
                                }), gsap.to(l, 1.4, {
                                    width: a.offsetWidth,
                                    height: a.offsetHeight,
                                    left: 0,
                                    top: 0,
                                    ease: "power4.inOut"
                                })
                            }), 500)
                        }))
                    }
                };
                var _ = o(8561);
                HTMLElement.prototype.scrollTo || (HTMLElement.prototype.scrollTo = function (e, t) {
                    this.scrollTop = t, this.scrollLeft = e
                });
                var y = [],
                    g = [],
                    v = {
                        content: document.getElementsByClassName("page-content")[0],
                        header: document.getElementsByClassName("page-header")[0],
                        preloader: document.getElementsByClassName("preloader")[0],
                        burger: document.getElementsByClassName("page-header-burger")[0],
                        menu: document.getElementsByClassName("page-menu")[0],
                        cursor: document.getElementById("cursor2"),
                        cursor_content: document.getElementsByClassName("cursor-content2"),
                        mouse: {
                            x: 0,
                            y: 0
                        }
                    },
                    w = {
                        width: null,
                        height: null,
                        is_mobile: !1,
                        is_tabconst: !1,
                        current_page: [],
                        session: {},
                        path: [],
                        history: [],
                        timeline_preload: null,
                        first_run: !0,
                        first_init: !0,
                        custom_loading: null,
                        slow_mode: !0,
                        styles_loaded_int: null,
                        styles_loaded: !1,
                        styles_loaded_callbacks: [],
                        preloader_hidden_callbacks: [],
                        scroll_listeners: {},
                        scroll: !1,
                        isFirefox: navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                    };
                w.f = {
                    init: function () {
                        void 0 !== window.gsap ? (w.first_init && (w.is_mobile = document.documentElement.classList.contains("mobile"), w.is_tabconst = document.documentElement.classList.contains("tabconst"), "scrollRestoration" in history && (history.scrollRestoration = "manual"), "function" == typeof w.f.beforeFirstLoad && w.f.beforeFirstLoad(), w.first_init = !1), w.loading = !1, f().init({
                            debug: "development" === _.mode,
                            transitions: [{
                                name: "default-transition",
                                priority: 1,
                                once: function (e) {
                                    w.f.parseReq(e.next.container), w.f.onload(e.next.container), w.styles_loaded ? n.initPreloader().then(w.f.runHidePreloaderCallbacks) : w.styles_loaded_callbacks.push((function () {
                                        n.initPreloader().then(w.f.runHidePreloaderCallbacks)
                                    }))
                                },
                                afterOnce: function () {
                                    w.f.aftershow()
                                },
                                leave: function (e) {
                                    var t = this.async();
                                    n.show().then((function () {
                                        t()
                                    })), w.f.collapseMenu(), w.f.unloadComponents(e.current.namespace), w.f.hideCustomCursor(), d.updateHeaderLeave(e.next.url.path)
                                },
                                afterLeave: function (e) {
                                    e.current.container.style.height = "0px", e.current.container.style.overflow = "hidden", w.scroll.update(), w.scroll.scrollTo("top", 0, 0), v.content = e.next.container
                                },
                                enter: function (e) {
                                    d.updateHeaderEnter(e.next.url.path), w.f.onload(e.next.container), w.f.parseReq(e.next.container), n.hide().then((function () {
                                        w.f.runHidePreloaderCallbacks()
                                    }))
                                },
                                after: function () {
                                    w.scroll.start(), w.f.aftershow()
                                }
                            }, {
                                name: "project-detail",
                                priority: 2,
                                from: {
                                    namespace: ["inner-projects-projects_list", "inner-en-projects-projects_list"],
                                    custom: function (e) {
                                        var t = e.trigger;
                                        return void 0 !== t.classList && t.classList.contains("projects-list-link")
                                    }
                                },
                                enter: function (e) {
                                    h.enter(e.next.container).then((function () {
                                        w.f.runHidePreloaderCallbacks()
                                    })), d.updateHeaderEnter(e.next.url.path), w.f.onload(e.next.container), w.f.parseReq(e.next.container)
                                },
                                leave: function (e) {
                                    var t = this.async();
                                    h.leave(e.trigger).then((function () {
                                        t()
                                    })), w.f.collapseMenu(), w.f.unloadComponents(e.current.namespace), w.f.hideCustomCursor(), d.updateHeaderLeave(e.next.url.path)
                                },
                                afterLeave: function (e) {
                                    e.current.container.style.height = "0px", e.current.container.style.overflow = "hidden", w.scroll.update(), w.scroll.scrollTo("top", 0, 0), v.content = e.next.container
                                },
                                after: function () {
                                    w.scroll.start(), w.f.aftershow()
                                }
                            }]
                        }), f().hooks.after((function () {
                            "undefined" != typeof ga && (ga("set", "page", window.location.pathname), ga("send", "pageview"))
                        }))) : setTimeout(w.f.init, 50)
                    },
                    runHidePreloaderCallbacks: function () {
                        w.preloader_hidden_callbacks.forEach((function (e) {
                            "function" == typeof e && e()
                        })), w.preloader_hidden_callbacks = []
                    },
                    beforeFirstLoad: function () {
                        d.initHeader(), d.initLogo(), d.updateHeaderOnce(window.location.href.replace(host, "")), w.f.initMenu(), w.f.initCursor(), w.f.initScroll();
                        for (var e = document.querySelectorAll("a[href]"), t = function (e) {
                                e.currentTarget.href === window.location.href && (e.preventDefault(), e.stopPropagation())
                            }, o = 0; o < e.length; o++) e[o].addEventListener("click", t);
                        w.styles_loaded_int = setInterval((function () {
                            "visible" === window.getComputedStyle(v.content, null).getPropertyValue("visibility") && (clearInterval(w.styles_loaded_int), w.styles_loaded = !0, w.styles_loaded_callbacks.forEach((function (e) {
                                "function" == typeof e && e()
                            })), w.styles_loaded_callbacks = [])
                        }), 100)
                    },
                    initScroll: function () {
                        var e = document.querySelector("[data-scroll-container]");
                        w.scroll = new a.ZP({
                            el: e,
                            smooth: true,
                            mobile: {
                                breakpoint: 0,
                                smooth: true,
                                getDirection: true,
                            },
                            tablet: {
                                breakpoint: 0,
                                smooth: true,
                                getDirection: true,
                            },
                            // smooth: !w.is_mobile,
                            multiplier: w.isFirefox ? .6 : .5,
                            lerp: .1,
                            firefoxMultiplier: 100
                        }), w.scroll.on("scroll", w.f.globalScroll), ScrollTrigger.scrollerProxy(e, {
                            scrollTop: function (e) {
                                return arguments.length ? w.scroll.scrollTo(e, 0, 0) : w.scroll.scroll.instance.scroll.y
                            },
                            getBoundingClientRect: function () {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }
                            },
                            pinType: e.style.transform ? "transform" : "fixed"
                        }), ScrollTrigger.addEventListener("refresh", (function () {
                            return w.scroll.update()
                        })), w.styles_loaded_callbacks.push((function () {
                            ScrollTrigger.refresh()
                        })), e.addEventListener("mousewheel", (function (e) {}))
                    },
                    onload: function (e) {
                        for (var t = e.querySelectorAll("a[href]"), o = function (e) {
                                e.currentTarget.href === window.location.href && (e.preventDefault(), e.stopPropagation())
                            }, a = 0; a < t.length; a++) t[a].addEventListener("click", o);
                        w.f.stickyButton(), w.f.initPageCursor(), m(), setTimeout((function () {
                            w.scroll.update()
                        }), 100)
                    },
                    aftershow: function () {
                        w.first_run && (w.fbValidator = new i(document.querySelector(".form_fb"), "/ajax/forms/callorder.php"), w.first_run = !1), document.body.classList.add("loaded"), w.f.unleashModals(), w.f.bgLazyLoad()
                    },
                    globalScroll: function (e) {
                        var t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                        for (var o in e.limit.y < t && w.is_mobile && (e.limit.y = t), ScrollTrigger.update(), w.scroll_listeners) w.scroll_listeners.hasOwnProperty(o) && w.scroll_listeners[o](e)
                    },
                    clearScrollHooks: function () {
                        w.scroll_listeners = {}
                    },
                    unleashModals: function () {
                        w.modals_callback = null;
                        var e = document.querySelectorAll('.modal:not([data-listener="1"])'),
                            t = document.querySelectorAll('.modal__link:not([data-listener="1"])');
                        t.length && t.forEach((function (e) {
                            var t = e.dataset.target,
                                o = document.querySelector('[data-modal="' + t + '"]');
                            o && !1 !== t && "" !== t && (o.classList.contains("modal_lazybg") ? o.querySelector(".lazybg_modal").dataset.lazybg : o.classList.contains("modal_lazyvideo") && o.querySelector(".lazyvideo_modal").dataset.lazyvideo, e.setAttribute("data-listener", "1"), e.addEventListener("click", (function (e) {
                                e.preventDefault(), w.f.showModal(t)
                            })))
                        })), e.length && e.forEach((function (e) {
                            e.classList.contains("modal_lazybg"), e.classList.contains("modal_lazyvideo");
                            e.querySelectorAll('.js-modal-close:not([data-listener="1"]),.modal__screen:not([data-listener="1"])').forEach((function (e) {
                                null !== e && (e.setAttribute("data-listener", "1"), e.addEventListener("click", (function () {
                                    w.f.hideModals()
                                })))
                            }))
                        }))
                    },
                    hideModals: function () {
                        document.querySelectorAll(".modal.modal_active").forEach((function (e) {
                            var t = e.classList.contains("modal_lazybg"),
                                o = e.classList.contains("modal_lazyvideo"),
                                a = t ? e.querySelector(".lazybg_modal") : null,
                                r = o ? e.querySelector(".lazyvideo_modal") : null;
                            e.classList.remove("modal_active"), null !== a ? a.style.backgroundImage = "none" : r && (r.src = ""), setTimeout((function () {
                                "function" == typeof w.modals_callback && w.modals_callback(), w.modals_callback = null
                            }), 200)
                        }))
                    },
                    showModal: function (e, t, o) {
                        var a, r, l = document.querySelector('[data-modal="' + e + '"]');
                        l && !1 !== e && "" !== e && (l.classList.contains("modal_lazybg") ? r = (a = l.querySelector(".lazybg_modal")).dataset.lazybg : l.classList.contains("modal_lazyvideo") && (r = (a = l.querySelector(".lazyvideo_modal")).dataset.lazyvideo), void 0 !== t && $.each(t, (function (e) {
                            if (-1 === e.indexOf("bt")) {
                                var t = l.querySelector('[data-field="' + e + '"]');
                                t && (t.innerHTML = this)
                            }
                        })), w.modals_callback = null, void 0 !== o && (w.modals_callback = o), l.classList.add("modal_active"), l.classList.contains("modal_lazybg") ? a.style.backgroundImage = "url(" + r + ")" : l.classList.contains("modal_lazyvideo") && (a.src = r))
                    },
                    bgLazyLoad: function () {},
                    parseReq: function (e) {
                        if (y = [], e.getAttribute("data-barba-namespace"))
                            for (var t = e.dataset.barbaNamespace.replace("--", "-").split("-"), a = 0; a < t.length; a++)
                                if (!(t[a].length < 2) && !0 !== y[t[a]]) try {
                                    var r = o(2438)("./" + t[a] + ".js");
                                    void 0 !== r.default.init && (y[t[a]] = !0, r.default.init())
                                } catch (e) {}
                    },
                    unloadComponents: function (e) {
                        var t = e.split("-");
                        if (t.length)
                            for (var a = 0; a < t.length; a++) {
                                var r = t[a].replace(/-/g, "_");
                                if (!(r.length < 2) && !0 !== g[r]) try {
                                    var l = o(2438)("./" + r + ".js");
                                    void 0 !== l.default.unload && (g[r] = !0, l.default.unload())
                                } catch (e) {}
                            }
                        g = []
                    },
                    initMenu: function () {
                        c.Z.splitToChars(".menu-split"), w.menu_tl = new gsap.timeline({
                            paused: !0,
                            onComplete: function () {
                                v.menu.classList.add("open_")
                            }
                        }).set(v.menu, {
                            visibility: "visible",
                            zIndex: 30
                        }).set(v.menu.querySelectorAll(".splited-chars > span"), {
                            y: "-80%",
                            scale: .5
                        }).set(v.menu.querySelectorAll(".page-menu-item > i"), {
                            width: "0%",
                            left: "0%"
                        }).set(v.menu.querySelectorAll(".page-menu-right"), {
                            width: 0,
                            left: "50%"
                        }).set(v.menu.querySelectorAll(".page-menu-img"), {
                            scale: 1.2,
                            opacity: 0
                        }).fromTo(v.menu.querySelector(".preloader-line:nth-child(1) div"), .6, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: "power2.inOut"
                        }, 0).fromTo(v.menu.querySelector(".preloader-line:nth-child(2) div"), .6, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: "power2.inOut"
                        }, .05).fromTo(v.menu.querySelector(".preloader-line:nth-child(3) div"), .6, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: "power2.inOut"
                        }, .1).fromTo(v.menu.querySelectorAll(".page-menu-left"), .8, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: "power4.out"
                        }, 0).to(v.menu.querySelectorAll(".page-menu-item > i"), .6, {
                            width: "100%",
                            stagger: .1
                        }, .2).to(v.menu.querySelectorAll(".page-menu-item.i1 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .2).to(v.menu.querySelectorAll(".page-menu-item.i2 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .22).to(v.menu.querySelectorAll(".page-menu-item.i3 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .24).to(v.menu.querySelectorAll(".page-menu-item.i4 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .26).to(v.menu.querySelectorAll(".page-menu-item.i5 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .28).to(v.menu.querySelectorAll(".page-menu-item.i6 .splited-chars > span"), .8, {
                            y: "0%",
                            scale: 1,
                            stagger: .01
                        }, .3).to(v.menu.querySelectorAll(".page-menu-img"), .8, {
                            scale: "1",
                            opacity: 1,
                            ease: "power2.out"
                        }, .4).to(v.menu.querySelectorAll(".page-menu-right"), .5, {
                            width: "50%",
                            ease: "power2.out"
                        }, .4).fromTo(".page-header-burger i:first-child", .6, {
                            rotation: 0,
                            top: "35%"
                        }, {
                            rotation: -315,
                            top: "50%"
                        }, 0).fromTo(".page-header-burger i:last-child", .6, {
                            rotate: 0,
                            bottom: "35%"
                        }, {
                            rotation: -225,
                            bottom: "50%"
                        }, 0).to(v.menu.querySelectorAll(".page-menu-contacts > *"), .6, {
                            y: "0%",
                            ease: "power2.out",
                            stagger: .01
                        }, .4), w.menu_tl_back = new gsap.timeline({
                            paused: !0,
                            onComplete: function () {
                                v.menu.classList.remove("open_")
                            }
                        }).fromTo(v.menu.querySelectorAll(".page-menu-img"), .6, {
                            scale: "1",
                            opacity: 1
                        }, {
                            scale: "1.2",
                            opacity: 0
                        }, 0).to(v.menu.querySelectorAll(".page-menu-left"), .8, {
                            x: "100%",
                            ease: "power4.inOut"
                        }, 0).to(v.menu.querySelector(".preloader-line:nth-child(1) div"), .8, {
                            x: "100%",
                            ease: "power2.out"
                        }, 0).to(v.menu.querySelector(".preloader-line:nth-child(2) div"), .8, {
                            x: "100%",
                            ease: "power2.out"
                        }, .1).to(v.menu.querySelector(".preloader-line:nth-child(3) div"), .8, {
                            x: "100%",
                            ease: "power2.out"
                        }, .2).to(v.menu.querySelectorAll(".page-menu-right"), .4, {
                            width: "0%",
                            left: "100%",
                            ease: "power4.inOut"
                        }, 0).to(v.menu.querySelectorAll(".page-menu-item > i"), .4, {
                            width: "0%",
                            left: "100%"
                        }, 0).to(v.menu.querySelectorAll(".splited-chars > span"), .5, {
                            y: "100%",
                            scale: .5
                        }, 0).to(v.menu.querySelectorAll(".page-menu-contacts > *"), .4, {
                            y: "150%",
                            ease: "power2.out",
                            stagger: -.01
                        }, 0).set(v.menu, {
                            visibility: "hidden",
                            zIndex: -1
                        }).to(".page-header-burger i:first-child", .6, {
                            rotation: -540,
                            top: "35%"
                        }, 0).to(".page-header-burger i:last-child", .6, {
                            rotation: -540,
                            bottom: "35%"
                        }, 0).add((function () {
                            v.burger.classList.remove("expanded_")
                        })), gsap.set(v.menu.querySelector(".preloader-line:nth-child(1) div"), {
                            x: "-100%"
                        }), gsap.set(v.menu.querySelector(".preloader-line:nth-child(2) div"), {
                            x: "-100%"
                        }), gsap.set(v.menu.querySelector(".preloader-line:nth-child(3) div"), {
                            x: "-100%"
                        }), v.burger.addEventListener("click", (function (e) {
                            e.preventDefault(), this.classList.contains("expanded_") ? w.f.collapseMenu() : w.f.expandMenu()
                        }))
                    },
                    isMenuPlaying: function () {
                        return !!(void 0 !== w.menu_tl && w.menu_tl.isActive() || void 0 !== w.menu_tl_back && w.menu_tl_back.isActive())
                    },
                    expandMenu: function () {
                        v.burger.classList.contains("expanded_") || (v.burger.classList.add("expanded_"), void 0 !== w.menu_tl_back && w.menu_tl_back.pause(), w.menu_tl.restart())
                    },
                    collapseMenu: function () {
                        !v.burger.classList.contains("expanded_") || void 0 !== w.menu_tl_back && w.menu_tl_back.isActive() || (void 0 !== w.menu_tl && w.menu_tl.pause(), w.menu_tl_back.restart())
                    },
                    initCursor: function () {
                        var e = gsap.quickSetter(v.cursor, "left", "px"),
                            t = gsap.quickSetter(v.cursor, "top", "px"),
                            o = {
                                x: window.innerWidth / 2,
                                y: window.innerHeight / 2
                            };
                        document.addEventListener("mousemove", (function (e) {
                            v.mouse.x = e.clientX, v.mouse.y = e.clientY
                        })), gsap.ticker.add((function () {
                            var a = 1 - Math.pow(.7, gsap.ticker.deltaRatio());
                            o.x += (v.mouse.x - o.x) * a, o.y += (v.mouse.y - o.y) * a, e(o.x), t(o.y)
                        }))
                    },
                    initPageCursor: function () {
                        [].forEach.call(document.querySelectorAll(".custom-cursor"), (function (e) {
                            e.addEventListener("mouseover", (function () {
                                e.classList.contains("custom-cursor-no") ? w.f.hideCustomCursor() : w.f.showCustomCursor(e)
                            })), e.addEventListener("mouseout", w.f.hideCustomCursor)
                        })), w.cursor_tl = gsap.timeline({
                            paused: !0
                        }).fromTo(v.cursor.querySelector(".cursor2-bg"), .5, {
                            scale: 0
                        }, {
                            scale: 1,
                            ease: "back.out"
                        }, 0).fromTo(v.cursor.querySelector(".cursor2-c1"), .3, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 0
                        }, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 1,
                            ease: "back.out"
                        }, 0).fromTo(v.cursor.querySelector(".cursor2-c2"), .3, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 0
                        }, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 1,
                            ease: "back.out"
                        }, .05).fromTo(v.cursor.querySelector(".cursor2-c3"), .3, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 0
                        }, {
                            xPercent: -50,
                            yPercent: -50,
                            scale: 1,
                            ease: "back.out"
                        }, .1).fromTo(v.cursor.querySelector(".cursor2-c1 div"), .3, {
                            scale: 1.2,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            ease: "power4.out"
                        }, .1).fromTo(v.cursor.querySelector(".cursor2-c2 div"), .3, {
                            scale: 1.2,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            ease: "power4.out"
                        }, .2).fromTo(v.cursor.querySelector(".cursor2-c3 div"), .3, {
                            scale: 1.2,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            ease: "power4.out"
                        }, .3).set(v.cursor.querySelector(".cursor2-c1"), {
                            opacity: 0
                        }, .4).set(v.cursor.querySelector(".cursor2-c2"), {
                            opacity: 0
                        }, .4)
                    },
                    showCustomCursor: function (e) {
                        [].forEach.call(v.cursor_content, (function (t) {
                            t.innerHTML = e.dataset.cursorText ? e.dataset.cursorText : ""
                        })), w.cursor_tl.play(), document.body.style.cursor = "none", v.cursor.classList.add("active")
                    },
                    hideCustomCursor: function () {
                        w.cursor_tl.reverse(), v.cursor.classList.remove("active"), document.body.style.cursor = ""
                    },
                    stickyButton: function () {
                        var e = document.querySelectorAll(".bt-round-next");
                        gsap.ticker.add((function () {
                            [].forEach.call(e, (function (e) {
                                var t = e.getBoundingClientRect();
                                if (!(t.y > window.innerHeight)) {
                                    var o = e.querySelector("svg"),
                                        a = e.querySelector("i"),
                                        r = e.classList.contains("bottom_"),
                                        l = parseFloat(o.style.left) || 0,
                                        i = parseFloat(o.style.top) || 0,
                                        s = t.width / 2 + 30,
                                        n = t.height / 2 - (v.mouse.y - t.y),
                                        c = t.width / 2 - (v.mouse.x - t.x),
                                        p = Math.sqrt(Math.pow(n, 2) + Math.pow(c, 2));
                                    if (p < s) {
                                        var d = (s - p) / s,
                                            u = 1 - Math.pow(1 - .2 * d, gsap.ticker.deltaRatio()),
                                            f = l + (v.mouse.x - t.x - t.width / 2 - l) * u,
                                            m = i + (v.mouse.y - t.y - t.height / 2 - i) * u;
                                        o.style.left = f + "px", o.style.top = m + "px", a.style.transform = "translate(" + f + "px," + m + "px)" + (r ? " rotate(90deg)" : ""), e.classList.add("hover_")
                                    } else if (0 !== l || 0 !== i) {
                                        var h = 1 - Math.pow(.8, gsap.ticker.deltaRatio()),
                                            _ = l + (0 - l) * h,
                                            y = i + (0 - i) * h;
                                        o.style.left = _ + "px", o.style.top = y + "px", a.style.transform = "translate(" + _ + "px," + y + "px)" + (r ? " rotate(90deg)" : ""), e.classList.remove("hover_")
                                    }
                                }
                            }))
                        }))
                    }
                }, w.f.init()
            },
            571: (e, t, o) => {
                "use strict";
                o.d(t, {
                    Z: () => l
                });
                var a = o(1462),
                    r = {
                        init: function () {
                            var e = a.I.content.querySelectorAll(".split-words"),
                                t = new SplitText(e, {
                                    type: "words"
                                });
                            gsap.set(t.words, {
                                y: "120%"
                            }), gsap.set(e, {
                                visibility: "visible"
                            }), a.l.scroll.on("call", (function (e) {
                                Array.isArray(e) && void 0 !== r[e[0]] ? r[e[0]](e[1]) : void 0 !== r[e] && r[e](0)
                            })), new SplitText(document.querySelectorAll(".split-black-boxes"), {
                                type: "chars"
                            })
                        },
                        play_splitted_words: function (e) {
                            gsap.fromTo(a.I.content.querySelectorAll('.split-words[data-scroll-call="play_splitted_words, ' + e + '"] div div'), 2, {
                                y: "120%",
                                rotationX: 20,
                                scale: .9
                            }, {
                                y: "0%",
                                z: "0px",
                                rotationX: 0,
                                scale: 1,
                                stagger: .1,
                                ease: "power4.out"
                            })
                        },
                        play_drawing: function () {
                            gsap.fromTo(document.querySelector(".hm-bg-projects"), 2, {
                                opacity: 0
                            }, {
                                opacity: .6
                            })
                        },
                        play_space: function (e) {
                            var t = a.I.content.querySelector(".dpm-space-container#space-" + e);
                            if (t) {
                                var o = t.querySelectorAll("img").length,
                                    r = 0;
                                gsap.set(t.querySelectorAll(".dpm-space-planet"), {
                                    opacity: 1
                                }), gsap.timeline().fromTo(t.querySelectorAll(".dpm-space-circle"), .8, {
                                    scale: function (e, t, o) {
                                        return .6 * (o.length - e) / o.length
                                    },
                                    opacity: 0,
                                    rotationX: -10,
                                    rotationZ: function (e, t, o) {
                                        return 90 * (e + 2) / o.length
                                    }
                                }, {
                                    scale: 1,
                                    opacity: 1,
                                    rotationX: 0,
                                    rotationZ: 0,
                                    ease: "back.out",
                                    stagger: -.06
                                }).fromTo(t.querySelectorAll(".dpm-space-orbit"), 1.1, {
                                    scale: 1,
                                    opacity: 0
                                }, {
                                    scale: 1,
                                    opacity: 1,
                                    ease: "back.out"
                                }, .8).fromTo(t.querySelectorAll(".dpm-space-planet"), 1.1, {
                                    scale: 0
                                }, {
                                    scale: .98,
                                    ease: "back.out"
                                }, .8).fromTo(t.querySelectorAll(".dpm-space-orbit-circle"), 1.1, {
                                    scale: 0,
                                    opacity: 0
                                }, {
                                    scale: 1,
                                    opacity: 1,
                                    ease: "power2.out"
                                }, .2), gsap.timeline({
                                    repeat: -1
                                }).fromTo(t.querySelectorAll(".dpm-space-orbit"), 10, {
                                    rotation: function (e, t, o) {
                                        return 150 + 180 * e
                                    }
                                }, {
                                    rotation: function (e, t, o) {
                                        return 510 + 180 * e
                                    },
                                    transformOrigin: "left",
                                    ease: "none"
                                }).fromTo(t.querySelectorAll(".dpm-space-planet"), 10, {
                                    rotation: function (e, t, o) {
                                        return -150 - 180 * e
                                    }
                                }, {
                                    rotation: function (e, t, o) {
                                        return -510 - 180 * e
                                    },
                                    ease: "none"
                                }, 0).fromTo(t.querySelectorAll(".dpm-space-orbit-circle svg"), 10, {
                                    rotation: 150
                                }, {
                                    rotation: 510,
                                    ease: "none"
                                }, 0).add(l, 3.33).add(l, 6.66).add(l, 9)
                            }

                            function l() {
                                var e = r;
                                ++r > o - 1 && (r = 0), gsap.timeline().to(t.querySelector(".dpm-space-planet-img:nth-child(" + (e + 1) + ")"), 1.2, {
                                    scale: .5,
                                    opacity: 0,
                                    x: "50%",
                                    rotationY: 70,
                                    ease: "power2.inOut"
                                }).fromTo(t.querySelector(".dpm-space-planet-img:nth-child(" + (r + 1) + ")"), 1.2, {
                                    scale: .5,
                                    opacity: 0,
                                    x: "-50%",
                                    rotationY: -70
                                }, {
                                    scale: 1,
                                    opacity: 1,
                                    rotationY: 0,
                                    x: "0%",
                                    ease: "power2.inOut"
                                }, .1)
                            }
                        }
                    };
                const l = r
            },
            9926: (e, t, o) => {
                "use strict";
                o.d(t, {
                    Z: () => l
                });
                var a = o(3653),
                    r = o.n(a);
                const l = {
                    removeFromArray: function (e, t, o) {
                        if (!$.isArray(e) || !e.length) return e;
                        var a = e.slice((o || t) + 1 || e.length);
                        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, a)
                    },
                    camelize: function (e) {
                        return e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (function (e, t) {
                            return 0 == +e ? "" : 0 == t ? e.toLowerCase() : e.toUpperCase()
                        }))
                    },
                    pad: function (e, t) {
                        var o = "000000000" + e;
                        return o.substr(o.length - t)
                    },
                    getRandomInt: function (e, t) {
                        return Math.floor(Math.random() * (t - e + 1)) + e
                    },
                    changeEnding: function (e, t) {
                        var o, a = String(t),
                            r = parseInt(a[a.length - 1]);
                        return (o = "ru" == langId ? {
                            flat: ["квартира", "квартиры", "квартир"],
                            window: ["окно", "окна", "окон"],
                            bedroom: ["спальня", "спальни", "спален"],
                            penthouse: ["пентхаус", "пентхауса", "пентхаусов"],
                            offer: ["предложение", "предложения", "предложений"],
                            apartment: ["апартамент", "апартамента", "апартаментов"],
                            meter: ["метр", "метра", "метров"]
                        } : {
                            flat: ["flat", "flats", "flats"],
                            window: ["window", "windows", "windows"],
                            bedroom: ["bedroom", "bedrooms", "bedrooms"],
                            offer: ["offer", "offers", "offers"],
                            apartment: ["apartment", "apartments", "apartments"],
                            meter: ["meter", "meters", "meters"]
                        })[e] ? t < 20 && t > 9 ? o[e][2] : 1 == r ? o[e][0] : r && r < 5 ? o[e][1] : o[e][2] : ""
                    },
                    validateEmail: function (e) {
                        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
                    },
                    validateDomain: function (e) {
                        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(e)
                    },
                    validateURL: function (e) {
                        var t = document.createElement("a");
                        return t.href = e, t.host && t.host != window.location.host
                    },
                    validatePhone: function (e) {
                        return /^\+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/.test(e)
                    },
                    splitToChars: function (e) {
                        if (e) {
                            var t = document.querySelectorAll(e);
                            t && [].forEach.call(t, (function (e) {
                                for (var t = e.innerHTML.replace(/<br>/g, "~").replace(/&amp;/g, "&").split(""), o = 0; o < t.length; o++) "~" === t[o] ? t[o] = "<br>" : "&" === t[o] ? t[o] = '<span class="splited-chars"><span>&amp;</span></span>' : (" " === t[o] && (t[o] = "&nbsp;"), t[o] = '<span class="splited-chars"><span>' + t[o] + "</span></span>");
                                e.innerHTML = t.join("")
                            }))
                        }
                    },
                    formatThousands: function (e, t) {
                        return e.toString().split("").reverse().join("").match(/\d{1,3}/g).join(t).split("").reverse().join("")
                    },
                    formatMoney: function (e, t, o, a) {
                        t = isNaN(t = Math.abs(t)) ? 2 : t, o = null == o ? "." : o, a = null == a ? "," : a;
                        var r = e < 0 ? "-" : "",
                            l = parseInt(e = Math.abs(+e || 0).toFixed(t)) + "",
                            i = (i = l.length) > 3 ? i % 3 : 0;
                        return r + (i ? l.substr(0, i) + a : "") + l.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + a) + (t ? o + Math.abs(e - l).toFixed(t).slice(2) : "")
                    },
                    initExpandables: function () {
                        $(".expanded-list-h").click((function (e) {
                            e.preventDefault();
                            var t = $(this),
                                o = t.toggleClass("active").next().toggleClass("active"),
                                a = 0,
                                r = o.find(".expanded-list-content-inner");
                            t.hasClass("active") ? (a = r.outerHeight(!0), TweenMax.to(o, .2, {
                                height: a
                            })) : TweenMax.to(o, .2, {
                                height: 0
                            })
                        }))
                    },
                    getChildNumber: function (e) {
                        return Array.prototype.indexOf.call(e.parentNode.childNodes, e)
                    },
                    separateNumberIntoUnits: function (e) {
                        if (0 == e) return [0];
                        for (var t = []; e > 0;) t.unshift(e % 10), e = Math.floor(e / 10);
                        return t
                    },
                    convertToRome: function (e) {
                        return {
                            1: "I",
                            2: "II",
                            3: "III",
                            4: "IV",
                            5: "V",
                            6: "VI"
                        } [e]
                    },
                    SVGSprites: function (e) {
                        if (void 0 === window.sprites && (window.sprites = []), -1 === window.sprites.indexOf(e)) {
                            window.sprites.push(e);
                            var t = document.getElementById("sprites-container");
                            if (!t) {
                                var o = document.createElement("div");
                                o.id = "sprites-container", o.style = "width:0;height:0;overflow:hidden", t = document.body.appendChild(o)
                            }
                            r().get(e).then((function (e) {
                                e.data && (t.innerHTML = e.data)
                            }))
                        }
                    }
                }
            },
            9430: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => n
                });
                var a = o(1736),
                    r = o(1462),
                    l = o(571),
                    i = o(4189);
                const s = function () {
                        var e = r.I.content.getElementsByClassName("expandable-item");
                        if (e.length)
                            for (var t = function (t) {
                                    var o = e[t].getElementsByClassName("expandable-header")[0],
                                        a = e[t].getElementsByClassName("expandable-content-wrapper")[0],
                                        l = a.getElementsByClassName("expandable-content")[0];
                                    o.addEventListener("click", (function () {
                                        e[t].classList.contains("expandable-item-active") ? (e[t].classList.remove("expandable-item-active"), gsap.to(a, .5, {
                                            height: 0,
                                            ease: "sine.inout",
                                            onComplete: function () {
                                                r.l.scroll.update()
                                            }
                                        })) : (e[t].classList.add("expandable-item-active"), gsap.to(a, .5, {
                                            height: l.offsetHeight,
                                            ease: "sine.inout",
                                            onComplete: function () {
                                                gsap.set(a, {
                                                    height: "auto"
                                                }), r.l.scroll.update()
                                            }
                                        }))
                                    }))
                                }, o = 0; o < e.length; o++) t(o)
                    },
                    n = {
                        init: function () {
                            l.Z.init(), r.l.preloader_hidden_callbacks.push(a.Z), r.l.preloader_hidden_callbacks.push(i.Z), s()
                        }
                    }
            },
            4495: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => r
                });
                o(1462);
                var a = {
                    map_loaded: !1,
                    map: {
                        map: null,
                        infra_coords: [],
                        map_loaded: !1,
                        filter: {
                            typeid: []
                        }
                    },
                    interval: !1,
                    init: function () {
                        this.initMap()
                    },
                    initMap: function () {
                        if ("undefined" == typeof google) {
                            var e = document.createElement("script");
                            e.type = "text/javascript", e.defer = !0, e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZNMuk_gqTf3DWMKTNBvPFo1o_MOY5Ss0&language=d" + window.langId, document.body.appendChild(e)
                        }
                        a.interval = setInterval((function () {
                            "undefined" != typeof google && (clearInterval(a.interval), a.loadMap())
                        }), 50)
                    },
                    loadMap: function () {
                        a.center = new google.maps.LatLng(47.555, 7.784147252038262);
                        a.mapOptions = {
                            center: a.center,
                            zoom: 15,
                            mapTypeId: "roadmap",
                            mapTypeControlOptions: {
                                position: google.maps.ControlPosition.LEFT_BOTTOM
                            },
                            styles: [{
                                featureType: "administrative",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "administrative",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#444444"
                                }, {
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "landscape",
                                elementType: "all",
                                stylers: [{
                                    color: "#f2f2f2"
                                }]
                            }, {
                                featureType: "landscape",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#f5f3f2"
                                }]
                            }, {
                                featureType: "landscape.man_made",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "poi",
                                elementType: "all",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#c3ecb2"
                                }, {
                                    visibility: "on"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "on"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#6fb169"
                                }]
                            }, {
                                featureType: "poi.park",
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "road",
                                elementType: "all",
                                stylers: [{
                                    saturation: -100
                                }, {
                                    lightness: 45
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "all",
                                stylers: [{
                                    visibility: "simplified"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "geometry.fill",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#ffffff"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "geometry.stroke",
                                stylers: [{
                                    visibility: "off"
                                }, {
                                    color: "#f2eeeb"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#bd3e3e"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    color: "#727171"
                                }, {
                                    visibility: "on"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#ffffff"
                                }]
                            }, {
                                featureType: "road.highway",
                                elementType: "labels.icon",
                                stylers: [{
                                    saturation: "4"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "geometry.fill",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#ffffff"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "geometry.stroke",
                                stylers: [{
                                    color: "#eae1e1"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#595353"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "labels.text.fill",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#9d9898"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "labels.text.stroke",
                                stylers: [{
                                    visibility: "on"
                                }, {
                                    color: "#ffffff"
                                }]
                            }, {
                                featureType: "road.arterial",
                                elementType: "labels.icon",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "transit",
                                elementType: "all",
                                stylers: [{
                                    visibility: "off"
                                }]
                            }, {
                                featureType: "transit.station.rail",
                                elementType: "all",
                                stylers: [{
                                    visibility: "on"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "all",
                                stylers: [{
                                    color: "#46bcec"
                                }, {
                                    visibility: "on"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "geometry.fill",
                                stylers: [{
                                    color: "#b3ddff"
                                }]
                            }, {
                                featureType: "water",
                                elementType: "labels.text",
                                stylers: [{
                                    visibility: "on"
                                }]
                            }],
                            scrollwheel: !1
                        }, a.map.map = new google.maps.Map(document.querySelector(".contacts-map"), a.mapOptions);
                        new google.maps.Marker({
                            position: new google.maps.LatLng(47.559321338802334, 7.784147252038262),
                            map: a.map.map,
                            icon: new google.maps.MarkerImage("/DPM/i/contacts/pointer2.png", new google.maps.Size(66, 66), new google.maps.Point(0, 0), new google.maps.Point(33, 33)),
                            zIndex: 600
                        })
                    }
                };
                const r = a
            },
            3895: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => i
                });
                var a = o(1462),
                    r = o(571),
                    l = {
                        init: function () {
                            a.l.loading = !1, -1 === a.I.content.dataset.barbaNamespace.indexOf("p404") && (a.l.preloader_hidden_callbacks.push(l.intro), gsap.set(document.querySelector(".hm-bg-projects"), {
                                opacity: 0
                            }))
                        },
                        intro: function () {
                            r.Z.init(), gsap.timeline().fromTo(a.I.content.querySelectorAll(".hm-intro-head div div"), 2, {
                                y: "120%",
                                rotationX: 20,
                                scale: .9
                            }, {
                                y: "0%",
                                z: "0px",
                                rotationX: 0,
                                scale: 1,
                                stagger: .1,
                                ease: "power4.out"
                            }).fromTo(".hm-intro-text", 2, {
                                opacity: 0,
                                y: "30%",
                                scale: .98
                            }, {
                                opacity: 1,
                                y: "0%",
                                scale: 1,
                                ease: "power4.out"
                            }, .4).to(".bld-slider-container-line", 1, {
                                y: "0%"
                            }, .4).to(".bld-slider", 1, {
                                y: "0%",
                                ease: "power4.out"
                            }, .8).to(".bld-slider-text", 1, {
                                y: "0rem",
                                opacity: 1,
                                ease: "power4.out"
                            }, 1).fromTo(".hm-projects-link rect", 1, {
                                drawSVG: "50% 50%"
                            }, {
                                drawSVG: "0% 100%",
                                ease: "power4.out"
                            }, 1).fromTo(".hm-projects-link-text", 1.1, {
                                opacity: 0,
                                y: "-100%",
                                scale: .98
                            }, {
                                opacity: 1,
                                y: "0%",
                                scale: 1,
                                ease: "power4.out"
                            }, 1.3).fromTo(".bld-slider-pagination", .6, {
                                opacity: 0
                            }, {
                                opacity: 1
                            }, 2).set(".bld-slider-container", {
                                overflow: "visible"
                            }, 2), document.querySelector(".hm-intro .bt-round-next").classList.add("is-inview"), new Swiper(".bld-slider", {
                                speed: 600,
                                effect: "fade",
                                autoplay: {
                                    delay: 3500
                                },
                                pagination: {
                                    el: ".bld-slider-pagination",
                                    clickable: !0
                                }
                            })
                        },
                        unload: function () {}
                    };
                const i = l
            },
            5204: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => i
                });
                var a = o(1736),
                    r = o(1462),
                    l = o(571);
                const i = {
                    init: function () {
                        l.Z.init(), r.l.preloader_hidden_callbacks.push(a.Z)
                    }
                }
            },
            8416: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => s
                });
                var a = o(1736),
                    r = o(4189),
                    l = o(1462),
                    i = o(571);
                const s = {
                    init: function () {
                        i.Z.init(), l.l.preloader_hidden_callbacks.push(a.Z), l.l.preloader_hidden_callbacks.push(r.Z), l.l.scroll_listeners.image_pointer = function (e) {
                            var t = l.I.content.querySelector(".pointer-at-image.left_ i"),
                                o = l.I.content.querySelector(".pointer-at-image-target").getBoundingClientRect();
                            if (o.top <= window.innerHeight && o.top + o.height > 0) {
                                var a = o.height + window.innerHeight,
                                    r = (o.top >= 0 ? window.innerHeight - o.top : window.innerHeight + Math.abs(o.top)) / a;
                                gsap.set(t, {
                                    rotationZ: 25 - 6.2 * r * o.height / 100,
                                    scaleX: 1.2 + .03 * r * o.height / 100
                                })
                            }
                        }
                    },
                    unload: function () {
                        delete l.l.scroll_listeners.image_pointer
                    }
                }
            },
            7163: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => Z
                });
                var a = o(1462),
                    r = o(9926),
                    l = o(5416),
                    i = function () {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("div", {
                            staticClass: "pos_r",
                            class: {
                                "flats-loading": e.loading
                            }
                        }, [o("div", {
                            staticClass: "flex_jsb pl_19 pr_19 pt_10"
                        }, [o("div", {
                            staticClass: "fz50"
                        }, [e._v(e._s(e.$ml.get("apartments_list")))]), e._v(" "), o("div", {
                            staticClass: "flex_ae nowrap"
                        }, [o("div", {
                            staticClass: "flex_ac mr_4"
                        }, [o("div", {
                            staticClass: "mr_2"
                        }, [e._v(e._s(e.$ml.get("select_type")) + ":")]), e._v(" "), o("custom_select", {
                            ref: "typeSelect",
                            staticClass: "flats-list-filter-floor-select",
                            attrs: {
                                items: e.types,
                                single_select: !1,
                                default_display: e.$ml.get("all")
                            },
                            on: {
                                "update-value": function (t) {
                                    return e.selectRadioswitch(t, "type")
                                }
                            }
                        })], 1), e._v(" "), o("div", {
                            staticClass: "flex_ac mr_6"
                        }, [o("div", {
                            staticClass: "mr_2"
                        }, [e._v(e._s(e.$ml.get("select_floor")) + ":")]), e._v(" "), o("custom_select", {
                            ref: "floorSelect",
                            staticClass: "flats-list-filter-floor-select",
                            attrs: {
                                items: e.floors,
                                single_select: !1,
                                default_display: e.$ml.get("all")
                            },
                            on: {
                                "update-value": function (t) {
                                    return e.selectRadioswitch(t, "floor")
                                }
                            }
                        })], 1), e._v(" "), o("button", {
                            staticClass: "bt bt-bordered-black bt-clear-filter fz16",
                            class: {
                                filtered_: e.is_filtered
                            },
                            on: {
                                click: e.clearFilters
                            }
                        }, [e._v(e._s(e.$ml.get("clear_filter")))])])]), e._v(" "), o("div", {
                            staticClass: "flex pl_19 pr_19 pt_10 pb_10"
                        }, [o("div", {
                            staticClass: "w_50 flex pr_4"
                        }, [o("div", {
                            staticClass: "fz_12 mr_4 nowrap pt_1"
                        }, [e._v(e._s(e.$ml.get("area")) + " (m"), o("sup", [e._v("2")]), e._v(")")]), e._v(" "), o("div", {
                            staticClass: "w_100"
                        }, [o("div", {
                            staticClass: "flex_ac flex_jsb mb_2"
                        }, [o("div", {
                            staticClass: "filter-input-container"
                        }, [o("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.slider_values.sq[0],
                                expression: "slider_values.sq[0]"
                            }],
                            staticClass: "ta_l",
                            domProps: {
                                value: e.slider_values.sq[0]
                            },
                            on: {
                                change: function (t) {
                                    return e.onUpdateSliderInput("sq")
                                },
                                input: function (t) {
                                    t.target.composing || e.$set(e.slider_values.sq, 0, t.target.value)
                                }
                            }
                        })]), e._v(" "), o("div", {
                            staticClass: "filter-input-container"
                        }, [o("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.slider_values.sq[1],
                                expression: "slider_values.sq[1]"
                            }],
                            staticClass: "ta_r",
                            domProps: {
                                value: e.slider_values.sq[1]
                            },
                            on: {
                                change: function (t) {
                                    return e.onUpdateSliderInput("sq")
                                },
                                input: function (t) {
                                    t.target.composing || e.$set(e.slider_values.sq, 1, t.target.value)
                                }
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "offers-filter-slider filter-sq"
                        })])]), e._v(" "), o("div", {
                            staticClass: "w_50 flex pl_4"
                        }, [o("div", {
                            staticClass: "fz_12 mr_4 nowrap pt_1"
                        }, [e._v("\n                " + e._s(e.$ml.get("price")) + " (€)\n            ")]), e._v(" "), o("div", {
                            staticClass: "w_100"
                        }, [o("div", {
                            staticClass: "flex_ac flex_jsb mb_2"
                        }, [o("div", {
                            staticClass: "filter-input-container"
                        }, [o("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.slider_values.price[0],
                                expression: "slider_values.price[0]"
                            }],
                            staticClass: "ta_l",
                            domProps: {
                                value: e.slider_values.price[0]
                            },
                            on: {
                                change: function (t) {
                                    return e.onUpdateSliderInput("price")
                                },
                                input: function (t) {
                                    t.target.composing || e.$set(e.slider_values.price, 0, t.target.value)
                                }
                            }
                        })]), e._v(" "), o("div", {
                            staticClass: "filter-input-container"
                        }, [o("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.slider_values.price[1],
                                expression: "slider_values.price[1]"
                            }],
                            staticClass: "ta_r",
                            domProps: {
                                value: e.slider_values.price[1]
                            },
                            on: {
                                change: function (t) {
                                    return e.onUpdateSliderInput("price")
                                },
                                input: function (t) {
                                    t.target.composing || e.$set(e.slider_values.price, 1, t.target.value)
                                }
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "offers-filter-slider filter-price"
                        })])])]), e._v(" "), o("div", {
                            staticClass: "table"
                        }, [o("div", {
                            staticClass: "table-head pl_19 pr_19 pt_4 pb_4"
                        }, [o("div", {
                            staticClass: "table-head-cell w-cell-plan"
                        }, [e._v(e._s(this.$ml.get("layout")))]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-num sortable_",
                            on: {
                                click: function (t) {
                                    return e.sortData("num", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("number")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-floor sortable_",
                            on: {
                                click: function (t) {
                                    return e.sortData("floor", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("floor")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-rooms sortable_",
                            on: {
                                click: function (t) {
                                    return e.sortData("rooms", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("rooms")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-type sortable_",
                            on: {
                                click: function (t) {
                                    return e.sortData("type", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("type")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-sq sortable_",
                            attrs: {
                                "data-sort-dir": "asc"
                            },
                            on: {
                                click: function (t) {
                                    return e.sortData("sq", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("area")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])]), e._v(" "), o("div", {
                            staticClass: "table-head-cell w-cell-price sortable_",
                            on: {
                                click: function (t) {
                                    return e.sortData("price", t)
                                }
                            }
                        }, [e._v(e._s(this.$ml.get("price")) + " "), o("svg", {
                            staticClass: "sz_14"
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#arrow"
                            }
                        })])])]), e._v(" "), o("div", {
                            staticClass: "line bgc_b ml_19 mr_19"
                        }), e._v(" "), o("div", {
                            staticClass: "table-body"
                        }, [e._l(e.offers, (function (e) {
                            return o("flats_list_row", {
                                key: e.id,
                                attrs: {
                                    flat: e
                                }
                            })
                        })), e._v(" "), e.loading || e.offers.length ? e._e() : o("div", {
                            staticClass: "flats-empty-result ta_c mt_6"
                        }, [e._v("All apartments of this kind are sold or booked. "), o("br"), e._v(" Please change your search parameters or contact the sales office for more information.")])], 2)]), e._v(" "), e.total_items - e.offers.length > 0 ? o("div", {
                            staticClass: "pl_19 pr_19 pb_10"
                        }, [o("button", {
                            staticClass: "bt bordered_ bgc_b c_w w_100",
                            on: {
                                click: e.showMoreOffers
                            }
                        }, [e._v("\n            " + e._s(e.$ml.get("show_more")) + " (" + e._s(e.total_items - e.offers.length) + ")\n        ")])]) : e._e()])
                    };
                i._withStripped = !0;
                var s = function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "table-row-content",
                        class: {
                            opened_: e.flat.opened, selected: e.flat.selected
                        }
                    }, [o("div", {
                        staticClass: "table-row pl_19 pr_19 flex_ac pt_2 pb_2 ta_c fz24",
                        class: {
                            no_pe: "Y" === e.flat.sold || "Y" === e.flat.reserved
                        },
                        on: {
                            click: function (t) {
                                return e.openFlatDetails(e.flat, t)
                            }
                        }
                    }, [o("div", {
                        staticClass: "w-cell-plan ta_c flex_jc"
                    }, [o("div", {
                        staticClass: "bgc_w pl_2 pr_2 pb_1 pt_1"
                    }, [e.flat.layout ? o("img", {
                        staticClass: "flat-preview",
                        attrs: {
                            src: e.flat.layout,
                            alt: ""
                        }
                    }) : e._e()])]), e._v(" "), o("div", {
                        staticClass: "w-cell-num ta_c"
                    }, [o("span", {
                        staticClass: "fz16"
                    }, [e._v("№")]), e._v(" "), o("span", {
                        staticClass: "ml_1"
                    }, [e._v(e._s(e.flat.num))])]), e._v(" "), o("div", {
                        staticClass: "w-cell-floor ta_c fz24"
                    }, [e._v(e._s(e.flat.floor))]), e._v(" "), o("div", {
                        staticClass: "w-cell-rooms ta_c fz24"
                    }, [e._v("\n                " + e._s(e.flat.rooms) + "\n            ")]), e._v(" "), o("div", {
                        staticClass: "w-cell-type"
                    }, [e._v("\n                " + e._s(e.flat.type) + "\n            ")]), e._v(" "), o("div", {
                        staticClass: "w-cell-sq"
                    }, [o("span", {
                        staticClass: "fz24"
                    }, [e._v(e._s(e.flat.sq))]), e._v(" "), e._m(0)]), e._v(" "), e.flat.price ? o("div", {
                        staticClass: "w-cell-price ta_c"
                    }, ["Y" === e.flat.sold ? o("span", {
                        staticClass: "fz24"
                    }, [e._v(e._s(e.$ml.get("sold")))]) : "Y" === e.flat.reserved ? o("span", {
                        staticClass: "fz24"
                    }, [e._v(e._s(e.$ml.get("reserved")))]) : [o("span", {
                        staticClass: "fz24"
                    }, [e._v(e._s(e.$tools.formatThousands(e.flat.price, " ")))]), e._v(" "), o("span", {
                        staticClass: "fz16"
                    }, [e._v("€")])]], 2) : o("div", {
                        staticClass: "w-cell-price ta_c"
                    }, [e._v("\n                " + e._s(e.$ml.get("on_request")) + "\n            ")]), e._v(" "), "Y" !== e.flat.sold && "Y" !== e.flat.reserved ? o("i", {
                        staticClass: "arrow-simple"
                    }) : e._e()]), e._v(" "), o("transition", {
                        attrs: {
                            css: !1
                        },
                        on: {
                            enter: e.onEnter,
                            leave: e.onLeave
                        }
                    }, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.flat.opened,
                            expression: "flat.opened"
                        }],
                        staticClass: "table-row-body"
                    }, [o("div", {
                        staticClass: "table-row-body-inner pl_19 pr_19 pt_4 pb_4"
                    }, [o("div", {
                        staticClass: "scheme-slider"
                    }, [o("div", {
                        staticClass: "w_100 h_100 bgs_con",
                        style: "background-image: url(" + (e.flat.layout ? e.flat.layout : "/DPM/i/flats/flat.svg?2") + ");"
                    })]), e._v(" "), o("div", {
                        staticClass: "table-row-detail-controls flex_jsb flex_ac mt_8 pt_4"
                    }, [o("div", {
                        staticClass: "scheme-slider-pagination block-menu"
                    }), e._v(" "), o("div", {
                        staticClass: "flex_je"
                    }, [e.flat.pdf ? o("a", {
                        staticClass: "td_uh flex_ac mr_4",
                        attrs: {
                            href: e.flat.pdf_lang[e.$window.langId],
                            target: "_blank"
                        }
                    }, [o("i", {
                        staticClass: "arrow-long mr_2"
                    }), e._v(" " + e._s(e.$ml.get("download_layout")))]) : e._e(), e._v(" "), o("div", {
                        staticClass: "bt bt-hover-black large_ bordered_",
                        on: {
                            click: e.showFeedback
                        }
                    }, [e._v(e._s(e.$ml.get("send_request")))])])])])])]), e._v(" "), o("transition", {
                        attrs: {
                            css: !1
                        },
                        on: {
                            "before-enter": e.beforeZoomEnter,
                            enter: e.enterZoom,
                            leave: e.leaveZoom
                        }
                    }, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.zoomed_plan_url,
                            expression: "zoomed_plan_url"
                        }],
                        staticClass: "scheme-zoomed",
                        class: {
                            modal_active: e.zoomed_plan_url
                        }
                    }, [o("div", {
                        staticClass: "panzoom"
                    }, [o("img", {
                        staticStyle: {
                            width: "1600px"
                        },
                        attrs: {
                            src: e.zoomed_plan_url
                        }
                    })]), e._v(" "), o("div", {
                        staticClass: "modal__closer bgc_grey",
                        on: {
                            click: e.closeSchemeZoomed
                        }
                    })])])], 1)
                };
                s._withStripped = !0;
                var n = function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "floor-flats-list-sq"
                    }, [e._v("\n    " + e._s(e.sq) + "\n    "), o("span", [e._v(e._s(e.$ml.get("m"))), o("sup", [e._v("2")])])])
                };
                n._withStripped = !0;
                const c = {
                    name: "list_item_sq",
                    props: {
                        sq: {}
                    }
                };
                o(131);
                var p = o(9792),
                    d = (0, p.Z)(c, n, [], !1, null, "4d8b3d53", null);
                d.options.__file = "DPM/j/_/vue/components/list_item_sq.vue";
                const u = d.exports;
                var f = o(9293),
                    m = o.n(f);
                const h = {
                    name: "flats_list_row",
                    props: {
                        flat: {}
                    },
                    data: function () {
                        return {
                            zoomed_plan_url: ""
                        }
                    },
                    components: {
                        list_item_sq: u
                    },
                    methods: {
                        openFlatDetails: function (e, t) {
                            var o = this;
                            e.opened = !e.opened, setTimeout((function () {
                                $(t.target).closest(".table-row-content").find(".scheme-slider.swiper-container").each((function () {
                                    if (void 0 !== this.swiper) this.swiper.update();
                                    else {
                                        var e = $(this).find(".swiper-slide");
                                        new Swiper(this, {
                                            loop: !1,
                                            effect: "fade",
                                            allowTouchMove: !1,
                                            pagination: {
                                                el: o.$el.querySelector(".scheme-slider-pagination"),
                                                renderBullet: function (t, o) {
                                                    return '<div class="' + o + '">' + e.eq(t).attr("data-name") + "</div>"
                                                },
                                                clickable: !0
                                            },
                                            navigation: {
                                                elNext: this.querySelector(".swiper-button-next"),
                                                elPrev: this.querySelector(".swiper-button-prev")
                                            }
                                        })
                                    }
                                }))
                            }), 50)
                        },
                        onEnter: function (e, t) {
                            gsap.fromTo(e, .6, {
                                height: 0
                            }, {
                                height: e.querySelector(".table-row-body-inner").offsetHeight,
                                ease: "power2.inOut",
                                onComplete: function () {
                                    setTimeout((function () {
                                        a.l.scroll.update()
                                    }), 50), t()
                                }
                            })
                        },
                        onLeave: function (e, t) {
                            gsap.to(e, .6, {
                                height: 0,
                                ease: "power2.inOut",
                                onComplete: function () {
                                    setTimeout((function () {
                                        a.l.scroll.update()
                                    }), 50), t()
                                }
                            })
                        },
                        showFeedback: function () {
                            document.querySelector('[name="fb__message"]').value = this.$ml.get("interest_flat") + " " + this.$ml.get("number_sign") + " " + this.flat.num + " " + this.$ml.get("with_square") + " " + this.flat.sq + " " + this.$ml.get("sqm"), document.querySelector('[name="fb__project"]').value = this.flat.project, document.getElementById("modal_feedback").classList.add("modal_active")
                        },
                        showSchemeZoomed: function (e) {
                            this.zoomed_plan_url = e
                        },
                        closeSchemeZoomed: function () {
                            this.zoomed_plan_url = ""
                        },
                        beforeZoomEnter: function (e) {
                            e.style.opacity = 0, e.style.visibility = "hidden"
                        },
                        enterZoom: function (e, t) {
                            var o = e.querySelector(".panzoom");
                            m()(o), gsap.fromTo(e, .3, {
                                opacity: 0,
                                y: "10%",
                                visibility: "visible"
                            }, {
                                opacity: 1,
                                y: "0%",
                                onComplete: t
                            })
                        },
                        leaveZoom: function (e, t) {
                            gsap.fromTo(e, .4, {
                                opacity: 1,
                                y: "0%"
                            }, {
                                opacity: 0,
                                y: "10%",
                                visibility: "hidden",
                                onComplete: function () {
                                    m()(e.querySelector(".panzoom")).dispose(), t()
                                }
                            })
                        }
                    }
                };
                var _ = (0, p.Z)(h, s, [function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("span", {
                        staticClass: "fz16"
                    }, [e._v("m"), o("sup", [e._v("2")])])
                }], !1, null, null, null);
                _.options.__file = "DPM/j/_/vue/components/flats_list_row.vue";
                const y = _.exports;
                var g = function () {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "cmp_radioswitch"
                    }, e._l(e.items, (function (t) {
                        return o("div", {
                            class: {
                                selected: t.active
                            },
                            style: void 0 !== t.style ? t.style : {},
                            attrs: {
                                "data-value": t.value
                            },
                            on: {
                                click: function (o) {
                                    return e.updateItem(t)
                                }
                            }
                        }, [e._v("\n        " + e._s(t.name) + "\n    ")])
                    })), 0)
                };

                function v() {
                    return {
                        selected: []
                    }
                }
                g._withStripped = !0;
                const w = {
                    name: "radioSwitch",
                    mixins: [{
                        props: {
                            items: Array
                        },
                        data: v,
                        methods: {
                            setDisplay: function (e) {
                                this.display = e
                            },
                            updateItem: function (e) {
                                if ("All" === e.value) this.resetComponent();
                                else {
                                    e.active = !e.active, this.selected = [];
                                    for (var t = 0; t < this.items.length; t++) this.items[t].active && this.selected.push(this.items[t]), "All" === this.items[t].value && (this.items[t].active = !1);
                                    this.selected.length || this.resetComponent()
                                }
                                this.$emit("update-value", this.selected)
                            },
                            resetComponent: function () {
                                if (Object.assign(this.$data, {
                                        selected: []
                                    }), void 0 !== this.items)
                                    for (var e = 0; e < this.items.length; e++) this.items[e].active = "All" === this.items[e].value
                            }
                        }
                    }]
                };
                var b = (0, p.Z)(w, g, [], !1, null, null, null);
                b.options.__file = "DPM/j/_/vue/components/radioswitch.vue";
                const x = b.exports;
                var S = o(3653),
                    T = o.n(S),
                    q = o(4782),
                    k = o.n(q),
                    L = o(4130),
                    C = o.n(L),
                    A = function () {
                        var e = this,
                            t = e.$createElement,
                            o = e._self._c || t;
                        return o("div", {
                            staticClass: "custom-select",
                            class: {
                                opened_: e.opened
                            }
                        }, [o("div", {
                            staticClass: "custom-select-display",
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), e.opened = !e.opened
                                }
                            }
                        }, [e._v("\n        " + e._s(e.display) + "\n        "), o("i", {
                            staticClass: "arrow-simple"
                        })]), e._v(" "), o("transition", {
                            attrs: {
                                name: "list-open-fade"
                            }
                        }, [e.opened ? o("div", {
                            staticClass: "custom-select-list",
                            attrs: {
                                "data-cnt": e.items.length
                            }
                        }, e._l(e.items, (function (t) {
                            return o("div", {
                                staticClass: "custom-select-list-item",
                                class: {
                                    active: t.active
                                },
                                attrs: {
                                    "data-value": t.value
                                },
                                on: {
                                    click: function (o) {
                                        return e.updateItem(t)
                                    }
                                }
                            }, [o("i"), e._v(" " + e._s(t.name) + "\n            ")])
                        })), 0) : e._e()])], 1)
                    };

                function E() {
                    return {
                        opened: !1,
                        selected: [],
                        display: ""
                    }
                }
                A._withStripped = !0;
                const j = {
                    name: "customSelect",
                    props: {
                        default_display: {
                            default: "Все"
                        },
                        items: Array,
                        comp_reset: Boolean,
                        single_select: !1
                    },
                    data: E,
                    mounted: function () {
                        var e = this;
                        this.display = this.default_display, document.body.addEventListener("click", (function () {
                            e.opened = !1
                        }))
                    },
                    methods: {
                        setDisplay: function (e) {
                            this.display = e
                        },
                        updateItem: function (e) {
                            if (e.active = !e.active, this.single_select) {
                                e.active ? this.selected = [e] : this.selected = [];
                                for (var t = 0; t < this.items.length; t++) e.value !== this.items[t].value && (this.items[t].active = !1)
                            } else {
                                this.selected = [];
                                for (var o = 0; o < this.items.length; o++) this.items[o].active && this.selected.push(this.items[o])
                            }
                            1 === this.selected.length ? this.display = this.selected[0].name : this.selected.length > 0 ? this.display = "Items: " + this.selected.length : this.display = this.default_display, this.$emit("update-value", this.selected)
                        },
                        resetComponent: function () {
                            if (Object.assign(this.$data, {
                                    opened: !1,
                                    selected: [],
                                    display: ""
                                }), void 0 !== this.items)
                                for (var e = 0; e < this.items.length; e++) this.items[e].active = !1;
                            this.display = this.default_display
                        }
                    }
                };
                var I = (0, p.Z)(j, A, [], !1, null, null, null);
                I.options.__file = "DPM/j/_/vue/components/custom_select.vue";
                const M = {
                    name: "project_flats",
                    components: {
                        flats_list_row: y,
                        radioswitch: x,
                        custom_select: I.exports
                    },
                    data: function () {
                        return {
                            bottom: !1,
                            page: 1,
                            loading: !1,
                            all_loaded: !1,
                            first_load: !0,
                            reset_offers: !1,
                            offers: [],
                            $offers_el: null,
                            $switch_items: null,
                            $filter_custom_select: null,
                            $filter_projects: null,
                            $filter_ready: null,
                            slider_price: null,
                            slider_sq: null,
                            $filter_rooms: null,
                            not_update_filters: !1,
                            total_items: 0,
                            total_items_sep: [],
                            rooms: [{
                                name: this.$ml.get("all"),
                                value: "All",
                                active: !0
                            }, {
                                name: "1",
                                value: "1",
                                active: !1
                            }, {
                                name: "2",
                                value: "2",
                                active: !1
                            }, {
                                name: "3",
                                value: "3",
                                active: !1
                            }],
                            floor: [{
                                name: this.$ml.get("all"),
                                value: "All",
                                active: !0
                            }, {
                                name: "1",
                                value: "1",
                                active: !1
                            }, {
                                name: "2",
                                value: "2",
                                active: !1
                            }],
                            types: [{
                                name: this.$ml.get("all"),
                                value: "All",
                                active: !0
                            }],
                            floors: [{
                                name: this.$ml.get("all"),
                                value: "All",
                                active: !0
                            }],
                            advantages: [],
                            zoomed_plan_url: "",
                            components_reset: {
                                rooms: !1
                            },
                            stages: [],
                            stages_projects: [],
                            is_filtered: !1,
                            slider_values: {
                                price: [0, 0],
                                sq: [0, 0]
                            },
                            filter: {
                                price: [0, 0],
                                sq: [0, 0],
                                lang: langId
                            },
                            $sort_headers: null,
                            sort: {
                                sq: 1
                            },
                            selected_offers: [],
                            minmax: window.minmax,
                            filter_change_initiator: "",
                            visual_choose_hover: !1
                        }
                    },
                    beforeMount: function () {
                        this.$ml.change(window.langId)
                    },
                    mounted: function () {
                        this.filter = this.initFilterValues(), this.$offers_el = $(".offers-content"), this.$switch_items = $(".tabmenu-item"), this.$filter_custom_select = $(".custom-select"), this.$filter_rooms = $(".filter-rooms"), this.$sort_headers = $(".table-head-cell.sortable_"), this.updateFilters = C()(this.updateFilters, 300), this.minmax = this.$minmax, this.rooms = [{
                            name: "All",
                            value: "All",
                            active: !0
                        }];
                        for (var e = this.minmax.rooms[0]; e <= this.minmax.rooms[1]; e++) this.rooms.push({
                            name: e,
                            value: e,
                            active: !1
                        });
                        this.types = this.minmax.types, this.floors = this.minmax.floors_avail, this.addData(), this.initFilters()
                    },
                    methods: {
                        addData: function () {
                            var e = this;
                            this.loading || this.all_loaded || (this.loading = !0, T().get("/ajax/flats/", {
                                params: {
                                    filter: this.filter,
                                    sort: this.sort,
                                    page: this.page,
                                    cnt: 5
                                }
                            }).then((function (e) {
                                return e.data
                            })).then((function (t) {
                                t.data.length || (e.all_loaded = !0), e.total_items = t.minmax.count;
                                e.first_load && (e.advantages = []);
                                var o = t.data.map((function (t) {
                                    return t.opened = !1, t.selected = -1 !== e.selected_offers.indexOf(t.id), void 0 !== t.plans && t.plans.length || (t.plans = !1), t
                                }));
                                if (e.reset_offers ? e.offers = o : e.offers = e.offers.concat(o), e.reset_offers = !1, e.first_load) {
                                    e.minmax = t.minmax, e.setFiltersRange(), e.advantages = e.minmax.adv_avail, e.rooms = [{
                                        name: "All",
                                        value: "All",
                                        active: !0
                                    }];
                                    for (var r = e.minmax.rooms[0]; r <= e.minmax.rooms[1]; r++) e.rooms.push({
                                        name: r,
                                        value: r,
                                        active: !1
                                    })
                                } else {
                                    for (var l = 0; l < e.advantages.length; l++) e.advantages[l].present = -1 !== t.minmax.adv_avail_codes.indexOf(e.advantages[l].code);
                                    switch (e.filter_change_initiator) {
                                        case "price":
                                            e.updateSlidersMinmax(["sq"], t.minmax);
                                            break;
                                        case "sq":
                                            e.updateSlidersMinmax(["price"], t.minmax);
                                            break;
                                        case "rooms":
                                        case "advantages":
                                            e.updateSlidersMinmax(["price", "sq"], t.minmax)
                                    }
                                }
                                e.is_filtered = e.minmax.count > t.minmax.count, e.loading = !1, e.first_load = !1, e.page++, setTimeout((function () {
                                    a.l.scroll.update()
                                }), 100)
                            })))
                        },
                        showMoreOffers: function () {
                            this.addData()
                        },
                        initFilterValues: function () {
                            var e = this.filter;
                            return e.price = [0, 0], e.sq = [0, 0], e.project = [], e.stage = [], e.type = [], e.rooms = [], e.floor = [], e.ids = [], e.advantages = [], e.lang = langId, e.project_section_id = window.project_section_id, e
                        },
                        clearOffers: function () {
                            var e = this;
                            this.offers = [], this.page = 1, this.first_load = !0, this.all_loaded = !1, this.filter = this.initFilterValues(), Object.keys(this.filter).forEach((function (t) {
                                void 0 !== e.$refs[t + "Select"] && "function" == typeof e.$refs[t + "Select"].resetComponent && e.$refs[t + "Select"].resetComponent()
                            }))
                        },
                        clearFilters: function () {
                            var e = this;
                            this.reset_offers = !0, this.page = 1, this.first_load = !0, this.all_loaded = !1, this.filter = this.initFilterValues(), Object.keys(this.filter).forEach((function (t) {
                                void 0 !== e.$refs[t + "Select"] && "function" == typeof e.$refs[t + "Select"].resetComponent && e.$refs[t + "Select"].resetComponent()
                            })), this.addData()
                        },
                        initFilters: function () {
                            var e = this;
                            this.slider_price = k().create(this.$el.querySelector(".filter-price"), {
                                start: [0, 10],
                                connect: !0,
                                range: {
                                    min: 0,
                                    max: 10
                                }
                            }), this.slider_price.on("update", (function (t, o) {
                                e.slider_values.price = [e.$tools.formatMoney(t[0], 0, ".", " "), e.$tools.formatMoney(t[1], 0, ".", " ")]
                            })), this.slider_price.on("change", (function (t, o) {
                                e.slider_values.price = [e.$tools.formatMoney(t[0], 0, ".", " "), e.$tools.formatMoney(t[1], 0, ".", " ")], e.filter.price = t, e.filter.sq = [], e.updateFilters(), e.filter_change_initiator = "price"
                            })), this.slider_sq = k().create(this.$el.querySelector(".filter-sq"), {
                                start: [0, 10],
                                connect: !0,
                                range: {
                                    min: 0,
                                    max: 10
                                }
                            }), this.slider_sq.on("change", (function (t, o) {
                                e.slider_values.sq = [Math.floor(t[0]), Math.ceil(t[1])], e.filter.sq = t, e.filter.price = [], e.updateFilters(), e.filter_change_initiator = "sq"
                            })), this.slider_sq.on("update", (function (t, o) {
                                e.slider_values.sq = [Math.floor(t[0]), Math.ceil(t[1])]
                            }))
                        },
                        setFiltersRange: function () {
                            this.slider_price.updateOptions({
                                start: [1e4 * Math.floor(this.minmax.price[0] / 1e4), 1e4 * Math.ceil(this.minmax.price[1] / 1e4)],
                                range: {
                                    min: 1e4 * Math.floor(this.minmax.price[0] / 1e4),
                                    max: 1e4 * Math.ceil(this.minmax.price[1] / 1e4)
                                }
                            }), this.slider_sq.updateOptions({
                                start: [Math.floor(this.minmax.sq[0]), Math.ceil(this.minmax.sq[1])],
                                range: {
                                    min: Math.floor(this.minmax.sq[0]),
                                    max: Math.ceil(this.minmax.sq[1])
                                }
                            })
                        },
                        updateSlidersMinmax: function (e, t) {
                            var o = this;
                            e.forEach((function (e) {
                                o.not_update_filters = !0, o["slider_" + e].set(t[e])
                            }))
                        },
                        onUpdateSliderInput: function (e) {
                            this["slider_" + e].set(this.slider_values[e]), this.filter[e] = this.slider_values[e], this.filter_change_initiator = e, this.updateFilters()
                        },
                        updateFilters: function () {
                            this.reset_offers = !0, this.page = 1, this.all_loaded = !1, this.addData()
                        },
                        selectRadioswitch: function (e, t) {
                            this.filter[t] = [];
                            for (var o = 0; o < e.length; o++) this.filter[t].push(e[o].value);
                            this.filter_change_initiator = t, this.updateFilters()
                        },
                        sortData: function (e, t) {
                            var o = "asc" === t.target.dataset.sortDir ? 1 : 2;
                            o = 1 === o ? 2 : 1, this.$sort_headers.attr("data-sort-dir", ""), this.sort = {}, this.sort[e] = o, t.target.dataset.sortDir = 1 === o ? "asc" : "desc", this.updateFilters()
                        },
                        selectOffer: function (e, t) {
                            if (t.stopPropagation(), e.selected = !e.selected, e.selected) this.selected_offers.push(e.id);
                            else {
                                var o = this.selected_offers.indexOf(e.id); - 1 !== o && this.$tools.removeFromArray(this.selected_offers, o)
                            }
                        },
                        clearSelectedOffers: function () {
                            for (var e = 0; e < this.offers.length; e++) this.offers[e].selected = !1;
                            this.selected_offers = [], this.filter.ids.length && (this.filter.ids = [], this.updateFilters())
                        },
                        showSelectedOffers: function () {
                            this.filter.ids = this.selected_offers, this.updateFilters()
                        },
                        showSchemeZoomed: function (e) {
                            this.zoomed_plan_url = e
                        },
                        closeSchemeZoomed: function () {
                            this.zoomed_plan_url = ""
                        },
                        beforeZoomEnter: function (e) {
                            e.style.opacity = 0
                        },
                        enterZoom: function (e, t) {
                            var o = e.querySelector(".panzoom");
                            panzoom(o), TweenMax.fromTo(e, .3, {
                                opacity: 0,
                                y: "10%"
                            }, {
                                opacity: 1,
                                y: "0%",
                                onComplete: t
                            })
                        },
                        leaveZoom: function (e, t) {
                            TweenMax.fromTo(e, .4, {
                                opacity: 1,
                                y: "0%"
                            }, {
                                opacity: 0,
                                y: "10%",
                                onComplete: function () {
                                    panzoom(e.querySelector(".panzoom")).dispose(), t()
                                }
                            })
                        }
                    },
                    computed: {
                        floors_from: function () {
                            var e = [];
                            void 0 === this.minmax.floor && (this.minmax.floor = [5, 33]);
                            for (var t = this.minmax.floor[0]; t <= this.minmax.floor[1]; t++) e.push({
                                value: t,
                                name: t,
                                selected: !1,
                                active: !1
                            });
                            return e
                        },
                        floors_to: function () {
                            var e = [];
                            void 0 === this.minmax.floor && (this.minmax.floor = [5, 33]);
                            for (var t = this.minmax.floor[0]; t <= this.minmax.floor[1]; t++) e.push({
                                value: t,
                                name: t,
                                selected: !1
                            });
                            return e
                        },
                        total_sep: function () {
                            var e = this.$tools.separateNumberIntoUnits(this.total_items);
                            return this.total_items < 10 ? e.splice(0, 0, 0, 0) : this.total_items < 100 && e.splice(0, 0, 0), e
                        }
                    },
                    watch: {
                        "$global_filter.type": function (e) {
                            this.filter.type = e, e ? this.$refs.typeSelect.setDisplay(e) : this.$refs.typeSelect.resetComponent(), this.updateFilters()
                        }
                    }
                };
                var O = (0, p.Z)(M, i, [], !1, null, null, null);
                O.options.__file = "DPM/j/_/vue/layouts/project_flats.vue";
                const z = O.exports;
                var P = o(5631),
                    N = o(1537);
                l.default.use(N.Cu);
                new N.Ay({
                    initial: "de",
                    save: !0,
                    languages: [new N.t9("de").create({
                        apartments_list: "Wohnungsliste",
                        all: "Alle",
                        layout: "Grundriss",
                        number: "Nummer",
                        floor: "Stockwerk",
                        rooms: "Zimmer",
                        type: "Typ",
                        area: "Fläche",
                        price: "Preis",
                        show_more: "MEHR ANGEBOTE ANZEIGEN",
                        clear_filter: "Filter entfernen",
                        select_floor: "Stockwerk auswählen",
                        select_type: "Wohnungstyp auswählen",
                        send_request: "Eine Anfrage senden",
                        download_layout: "Laden Sie das Layout herunter",
                        reserved: "Reserviert",
                        sold: "Verkauft",
                        with_square: "mit einer Fläche von",
                        number_sign: "Nr.",
                        interest_flat: "Ich interessiere mich für Wohnung ",
                        sqm: "qm"
                    }), new N.t9("en").create({
                        apartments_list: "Apartments list",
                        all: "All",
                        layout: "Layout",
                        number: "Number",
                        floor: "Floor",
                        rooms: "Rooms",
                        type: "Type",
                        area: "Area",
                        price: "Price",
                        show_more: "SHOW MORE OFFERS",
                        clear_filter: "Clear filter",
                        select_floor: "Select floor",
                        select_type: "Select type",
                        send_request: "Send a request",
                        download_layout: "Download the layout",
                        reserved: "Reserved",
                        sold: "Sold",
                        with_square: "with an area of",
                        number_sign: "No.",
                        interest_flat: "I am interested in apartment ",
                        sqm: "sqm"
                    })]
                });
                var F = o(571);
                const H = function () {
                    return new Promise((function (e) {
                        gsap.timeline({
                            onComplete: e
                        }).fromTo(a.I.content.querySelectorAll(".prj-header div div"), 2, {
                            y: "120%",
                            rotationX: 20,
                            scale: .9
                        }, {
                            y: "0%",
                            z: "0px",
                            rotationX: 0,
                            scale: 1,
                            stagger: .1,
                            ease: "power4.out"
                        }).fromTo(".prj-header-location div div", 2, {
                            y: "120%",
                            rotationX: 20,
                            scale: .9
                        }, {
                            y: "0%",
                            z: "0px",
                            rotationX: 0,
                            scale: 1,
                            stagger: .1,
                            ease: "power4.out"
                        }, .2).fromTo(a.I.content.querySelector(".prj-header-line .line"), 1, {
                            x: "-100%"
                        }, {
                            x: "0%",
                            ease: "power4.out"
                        }, 0).fromTo(a.I.content.querySelectorAll(".prj-header-line-v"), 1, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            ease: "power4.out",
                            stagger: .1
                        }, .1), [].forEach.call(a.I.content.querySelectorAll(".anim-from-black-overlay"), (function (e, t) {
                            gsap.delayedCall(.4 + .1 * t, (function () {
                                e.classList.add("active")
                            }))
                        }))
                    }))
                };
                var B = {
                    center: {},
                    map_loaded: !1,
                    map: {},
                    markerCluster: null,
                    flats_vue: null,
                    init: function () {
                        B.map = {
                            map: null,
                            infra_coords: [],
                            filter: {
                                typeid: []
                            }
                        };
                        var e = a.I.content.querySelector("#project_infra_data");
                        if (e) {
                            if ("undefined" == typeof prj_coord || !prj_coord) {
                                var t = document.createElement("script");
                                t.type = "text/javascript", t.innerHTML = e.innerHTML, a.I.content.appendChild(t)
                            }
                            if ("undefined" == typeof google) {
                                var o = document.createElement("script");
                                o.type = "text/javascript", o.defer = !0, o.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZNMuk_gqTf3DWMKTNBvPFo1o_MOY5Ss0&language=" + window.langId, document.body.appendChild(o)
                            }
                            B.interval = setInterval((function () {
                                "undefined" != typeof google && "undefined" != typeof prj_coord && prj_coord && "undefined" != typeof infra && infra && (clearInterval(B.interval), B.loadMap())
                            }), 50)
                        }
                        B.initFlats();
                        var r = a.I.content.querySelector(".project-galleries"),
                            l = a.I.content.querySelectorAll(".project-galleries-menu a");
                        if (r) {
                            var i = new Swiper(r, {
                                allowTouchMove: !1,
                                speed: 800
                            });
                            [].forEach.call(a.I.content.querySelectorAll(".project-gallery"), (function (e) {
                                new Swiper(e, {
                                    nested: !0,
                                    speed: 800,
                                    loop: !0,
                                    parallax: !0,
                                    pagination: {
                                        el: e.querySelector(".project-gallery-counter"),
                                        type: "fraction"
                                    },
                                    navigation: {
                                        nextEl: e.querySelector(".project-gallery-arrow-right"),
                                        prevEl: e.querySelector(".project-gallery-arrow-left")
                                    }
                                })
                            })), [].forEach.call(l, (function (e, t) {
                                e.addEventListener("click", (function (o) {
                                    o.preventDefault(), [].forEach.call(l, (function (e) {
                                        e.classList.remove("active")
                                    })), e.classList.add("active"), i.slideTo(t)
                                }))
                            }))
                        }
                        var s = a.I.content.querySelectorAll(".types-menu a"),
                            n = a.I.content.querySelector(".types-slider");
                        if (n) {
                            var c = new Swiper(n, {
                                allowTouchMove: !1,
                                speed: 800,
                                effect: "fade"
                            });
                            [].forEach.call(s, (function (e, t) {
                                e.addEventListener("click", (function (o) {
                                    o.preventDefault(), [].forEach.call(s, (function (e) {
                                        e.classList.remove("active")
                                    })), e.classList.add("active"), c.slideTo(t)
                                }))
                            })), [].forEach.call(a.I.content.querySelectorAll(".types-slider-images"), (function (e) {
                                e.querySelectorAll(".swiper-slide").length > 1 && new Swiper(e, {
                                    nested: !0,
                                    speed: 800,
                                    loop: !0,
                                    parallax: !0,
                                    navigation: {
                                        nextEl: e.querySelector(".project-gallery-arrow-right"),
                                        prevEl: e.querySelector(".project-gallery-arrow-left")
                                    }
                                })
                            }))
                        }
                        F.Z.init(), a.l.preloader_hidden_callbacks.push(H)
                    },
                    loadMap: function () {
                        B.center = new google.maps.LatLng(prj_coord[0], prj_coord[1]), B.mapOptions = {
                            center: B.center,
                            zoom: 15,
                            mapTypeId: "roadmap",
                            mapTypeControlOptions: {
                                position: google.maps.ControlPosition.LEFT_BOTTOM
                            },
                            scrollwheel: !1
                        }, B.map.map = new google.maps.Map(a.I.content.querySelector(".project-map"), B.mapOptions);
                        var e = new google.maps.Marker({
                                position: B.center,
                                map: B.map.map,
                                icon: new google.maps.MarkerImage("/DPM/i/projects/pointers/project2.png?2", new google.maps.Size(66, 66), new google.maps.Point(0, 0), new google.maps.Point(33, 33)),
                                zIndex: 800
                            }),
                            t = new google.maps.InfoWindow({
                                content: '<div class="prj-pointer-container"><a href="#" class="prj-pointer-close"></a><div class="prj-pointer-img bgs_cov mb_2" style="background-image: url(' + prj_data.IMG + ');"></div><div class="flex_jsb flex_ac pb_2 pr_2 pl_2"><div class="pr_2"><h4 class="fz24">' + prj_data.NAME + "</h4><div>" + prj_data.LOCATION + "</div></div></div></div>"
                            });
                        google.maps.event.addListener(e, "click", (function () {
                            [].forEach.call(a.I.content.querySelectorAll(".prj-pointer-container"), (function (e) {
                                e.querySelector(".prj-pointer-close").click(), e.classList.add("closing_")
                            })), B.map.opened_wnd = [], t.open(B.map.map, e), B.map.opened_wnd.push(t), setTimeout((function () {
                                var e = a.I.content.querySelector(".prj-pointer-container:not(.closing_)");
                                gsap.fromTo(e, .3, {
                                    y: "100%"
                                }, {
                                    y: "0%"
                                }), e.querySelector(".prj-pointer-close").addEventListener("click", (function () {
                                    gsap.to(e, .3, {
                                        y: "100%",
                                        onComplete: function () {
                                            t.setMap(null), e.classList.remove("closing_")
                                        }
                                    })
                                }))
                            }), 50)
                        })), B.initInfra()
                    },
                    initInfra: function () {
                        var e = a.I.content.getElementsByClassName("map-category"),
                            t = [];
                        [].forEach.call(e, (function (o) {
                            var a = parseInt(o.getAttribute("href").replace("#", ""));
                            o.addEventListener("click", (function (l) {
                                if (l.preventDefault(), "#all" === o.getAttribute("href")) B.map.filter.typeid = t.slice(), [].forEach.call(e, (function (e) {
                                    e.classList.add("on"), e.classList.remove("off")
                                }));
                                else if (o.classList.contains("on"))
                                    if (B.map.filter.typeid.length === t.length)[].forEach.call(e, (function (e) {
                                        e.getAttribute("href") !== o.getAttribute("href") && (e.classList.add("off"), e.classList.remove("on"))
                                    })), B.map.filter.typeid = [a], !1;
                                    else {
                                        o.classList.remove("on"), o.classList.add("off");
                                        var i = $.inArray(a, B.map.filter.typeid); - 1 !== i && r.Z.removeFromArray(B.map.filter.typeid, i)
                                    }
                                else o.classList.add("on"), o.classList.remove("off"), -1 === $.inArray(a, B.map.filter.typeid) && B.map.filter.typeid.push(a);
                                B.map.filter.typeid.length === t.length ? (e.item(0).classList.add("on"), e.item(0).classList.remove("off")) : (e.item(0).classList.add("off"), e.item(0).classList.remove("on")), B.showObjects()
                            })), a && t.push(a)
                        })), B.map.filter.typeid = t.slice(), setTimeout(B.showObjects, 200), B.map.opened_wnd = [];
                        for (var o = 0; o < infra.length; o++) {
                            var l = new google.maps.Marker({
                                    position: new google.maps.LatLng(infra[o].coord[0], infra[o].coord[1]),
                                    icon: new google.maps.MarkerImage("/DPM/i/projects/pointers/" + infra[o].sec_code + ".png", new google.maps.Size(66, 66), new google.maps.Point(0, 0), new google.maps.Point(33, 33))
                                }),
                                i = new google.maps.InfoWindow({
                                    content: '<div class="prj-pointer-container pt_4 pb_2 pr_2 pl_2"><a href="#" class="prj-pointer-close"></a><h4 class="fz18">' + infra[o].name + "</h4>" + infra[o].text + "</div>"
                                });
                            B.map.infra_coords.push([infra[o].sec_id, l, i]),
                                function (e) {
                                    google.maps.event.addListener(B.map.infra_coords[e][1], "click", (function () {
                                        [].forEach.call(a.I.content.querySelectorAll(".prj-pointer-container"), (function (e) {
                                            e.querySelector(".prj-pointer-close").click(), e.classList.add("closing_")
                                        })), B.map.opened_wnd = [], B.map.infra_coords[e][2].open(B.map.map, B.map.infra_coords[e][1]), B.map.opened_wnd.push(B.map.infra_coords[e][2]), setTimeout((function () {
                                            var t = a.I.content.querySelector(".prj-pointer-container:not(.closing_)");
                                            t && (gsap.fromTo(t, .3, {
                                                y: "100%"
                                            }, {
                                                y: "0%"
                                            }), t.querySelector(".prj-pointer-close").addEventListener("click", (function () {
                                                gsap.to(t, .3, {
                                                    y: "100%",
                                                    onComplete: function () {
                                                        B.map.infra_coords[e][2].setMap(null), t.classList.remove("closing_")
                                                    }
                                                })
                                            })))
                                        }), 50)
                                    }))
                                }(o)
                        }
                        google.maps.event.addListener(B.map.map, "click", (function () {
                            [].forEach.call(a.I.content.querySelectorAll(".prj-pointer-close"), (function (e) {
                                e.click()
                            })), B.map.opened_wnd = []
                        }))
                    },
                    showObjects: function () {
                        var e, t, o, a = [];
                        for (B.markerCluster && B.markerCluster.clearMarkers(), o = 0; o < B.map.infra_coords.length; o++) {
                            for (e = !1, t = 0; t < B.map.filter.typeid.length; t++)
                                if (+B.map.filter.typeid[t] == +B.map.infra_coords[o][0]) {
                                    e = !0;
                                    break
                                } e ? (B.map.infra_coords[o][1].setMap(B.map.map), a.push(B.map.infra_coords[o][1])) : B.map.infra_coords[o][1].setMap(null)
                        }
                        B.markerCluster = new P.Z(B.map.map, a, {
                            styles: [{
                                width: 66,
                                height: 66,
                                url: "/DPM/i/projects/pointers/m1.png?2",
                                textSize: 18,
                                textColor: "#fff",
                                fontFamily: "dax"
                            }]
                        })
                    },
                    hideObjects: function () {
                        var e;
                        for (e = 0; e < B.map.infra_coords.length; e++) B.map.infra_coords[e][1].setMap(null)
                    },
                    initFlats: function () {
                        if (document.getElementById("app")) {
                            var e = a.I.content.querySelector("#project_flats_data");
                            e && eval.call(window, e.innerHTML), [].forEach.call(a.I.content.querySelectorAll(".js-filter-type"), (function (e) {
                                e.addEventListener("click", (function () {
                                    var t = e.dataset.type;
                                    t && B.flats_vue && (l.default.set(l.default.prototype, "$global_filter", {
                                        type: ""
                                    }), setTimeout((function () {
                                        l.default.set(l.default.prototype, "$global_filter", {
                                            type: t
                                        })
                                    }), 10)), a.l.scroll.scrollTo("#ap_list", -a.I.header.offsetHeight, 600)
                                }))
                            })), setTimeout((function () {
                                if (l.default.prototype.$tools = r.Z, l.default.prototype.$minmax = minmax, l.default.prototype.$window = window, void 0 === l.default.prototype.$global_filter) {
                                    var e = l.default.observable({
                                        filter: {}
                                    });
                                    Object.defineProperty(l.default.prototype, "$global_filter", {
                                        get: function () {
                                            return e.filter
                                        },
                                        set: function (t) {
                                            e.filter = t
                                        }
                                    })
                                }
                                B.flats_vue = new l.default({
                                    el: "#app",
                                    render: function (e) {
                                        return e(z)
                                    }
                                })
                            }), 10)
                        }
                    },
                    unload: function () {
                        "undefined" != typeof prj_coord && prj_coord && (prj_coord = null), "undefined" != typeof infra && infra && (infra = null), B.map_loaded = !1, clearInterval(B.interval), B.flats_vue && (B.flats_vue.$destroy(), B.flats_vue = null)
                    }
                };
                const Z = B
            },
            6001: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => i
                });
                var a = o(9926),
                    r = o(1462),
                    l = {
                        interval: null,
                        map_el: null,
                        map_container: null,
                        center: {},
                        map_loaded: !1,
                        map: {
                            map: null,
                            infra_coords: [],
                            map_loaded: !1,
                            filter: {
                                typeid: []
                            }
                        },
                        tags: [],
                        init: function () {
                            a.Z.SVGSprites("/DPM/i/projects/sprite.svg"), r.l.loading = !1, l.map_el = document.querySelector(".projects-map"), l.map_container = document.querySelector(".projects-map-container"), l.map_el && this.initMap(), l.initFilter();
                            var e = r.I.content.querySelectorAll(".projects-list-item");
                            if (e.length) {
                                var t = document.getElementsByClassName("page-transition-overlay")[0];
                                [].forEach.call(e, (function (e) {
                                    e.addEventListener("mouseover", (function () {
                                        t.innerHTML = '<img class="d_b w_100 is-inview" src="' + e.querySelector(".projects-list-img-inner").dataset.bigImage + '">'
                                    }))
                                }))
                            }
                        },
                        initMap: function () {
                            if ("undefined" == typeof google) {
                                var e = document.createElement("script");
                                e.type = "text/javascript", e.defer = !0, e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCutMOge5j5CXPQEwonyswbSZoP44K1CE0&language=" + window.langId, document.body.appendChild(e)
                            }
                            if ("undefined" == typeof project_coord) {
                                var t = document.createElement("script");
                                t.type = "text/javascript", t.innerHTML = document.getElementById("projectsCoord").innerHTML, document.body.appendChild(t)
                            }
                            l.interval = setInterval((function () {
                                "undefined" == typeof google && "undefined" != typeof project_coord || (clearInterval(l.interval), r.l.loading = !1, l.loadMap())
                            }), 50), l.map_container.addEventListener("click", (function () {
                                l.map_container.classList.contains("expanded_") || l.expandMap()
                            })), r.I.content.querySelector(".projects-map-close").addEventListener("click", (function (e) {
                                e.stopPropagation(), e.preventDefault(), l.map_container.classList.contains("expanded_") && (l.map_container.classList.remove("expanded_"), l.map_container.classList.remove("custom-cursor-no"), gsap.to(l.map_container, .6, {
                                    height: "45vh",
                                    ease: "power4.out"
                                }), gsap.to(l.map_container.querySelector(".projects-map-overlay"), .6, {
                                    opacity: 1,
                                    display: "flex",
                                    ease: "power4.out"
                                }), gsap.to(r.I.content.querySelector(".projects-map-close"), .3, {
                                    y: "-140%"
                                }), setTimeout((function () {
                                    r.l.scroll.update()
                                }), 800))
                            }))
                        },
                        expandMap: function () {
                            l.map_container.classList.add("expanded_"), l.map_container.classList.add("custom-cursor-no"), gsap.to(l.map_container, .8, {
                                height: "90vh",
                                ease: "power4.out"
                            }), gsap.to(l.map_container.querySelector(".projects-map-overlay"), .8, {
                                opacity: 0,
                                display: "none",
                                ease: "power4.out"
                            }), gsap.to(window, .8, {
                                scrollTo: 0
                            }), gsap.to(r.I.content.querySelector(".projects-map-close"), .3, {
                                y: "0%"
                            }), r.l.f.hideCustomCursor(), setTimeout((function () {
                                r.l.scroll.update()
                            }), 800)
                        },
                        loadMap: function () {
                            l.center = new google.maps.LatLng(47.593947, 7.710255);
                            l.mapOptions = {
                                center: l.center,
                                zoom: 12,
                                mapTypeId: "roadmap",
                                mapTypeControlOptions: {
                                    position: google.maps.ControlPosition.LEFT_BOTTOM
                                },
                                styles: [{
                                    featureType: "landscape",
                                    elementType: "all",
                                    stylers: [{
                                        color: "#f2f2f2"
                                    }]
                                }, {
                                    featureType: "landscape",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        color: "#f5f3f2"
                                    }]
                                }, {
                                    featureType: "landscape.man_made",
                                    elementType: "labels.text",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "poi",
                                    elementType: "all",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "poi.park",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        color: "#c3ecb2"
                                    }, {
                                        visibility: "on"
                                    }]
                                }, {
                                    featureType: "poi.park",
                                    elementType: "labels.text",
                                    stylers: [{
                                        visibility: "on"
                                    }]
                                }, {
                                    featureType: "poi.park",
                                    elementType: "labels.text.fill",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#6fb169"
                                    }]
                                }, {
                                    featureType: "poi.park",
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "road",
                                    elementType: "all",
                                    stylers: [{
                                        saturation: -100
                                    }, {
                                        lightness: 45
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "all",
                                    stylers: [{
                                        visibility: "simplified"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#ffffff"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "geometry.stroke",
                                    stylers: [{
                                        visibility: "off"
                                    }, {
                                        color: "#f2eeeb"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "labels.text",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#bd3e3e"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "labels.text.fill",
                                    stylers: [{
                                        color: "#727171"
                                    }, {
                                        visibility: "on"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#ffffff"
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "labels.icon",
                                    stylers: [{
                                        saturation: "4"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#ffffff"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "geometry.stroke",
                                    stylers: [{
                                        color: "#eae1e1"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "labels.text",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#595353"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "labels.text.fill",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#9d9898"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        color: "#ffffff"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "labels.icon",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "transit",
                                    elementType: "all",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "transit.station.rail",
                                    elementType: "all",
                                    stylers: [{
                                        visibility: "on"
                                    }]
                                }, {
                                    featureType: "water",
                                    elementType: "all",
                                    stylers: [{
                                        color: "#46bcec"
                                    }, {
                                        visibility: "on"
                                    }]
                                }, {
                                    featureType: "water",
                                    elementType: "geometry.fill",
                                    stylers: [{
                                        color: "#b3ddff"
                                    }]
                                }, {
                                    featureType: "water",
                                    elementType: "labels.text",
                                    stylers: [{
                                        visibility: "on"
                                    }]
                                }],
                                scrollwheel: !1
                            }, l.map.map = new google.maps.Map(l.map_el, l.mapOptions), l.map.opened_wnd = [], "undefined" != typeof project_coord && (project_coord.forEach((function (e) {
                                var t = e.COORDINATES.split(","),
                                    o = new google.maps.Marker({
                                        position: new google.maps.LatLng(parseFloat(t[0]), parseFloat(t[1])),
                                        map: l.map.map,
                                        icon: new google.maps.MarkerImage("/DPM/i/projects/pointers/project2.png?2", new google.maps.Size(66, 66), new google.maps.Point(0, 0), new google.maps.Point(33, 33)),
                                        zIndex: 600
                                    }),
                                    a = new google.maps.InfoWindow({
                                        content: '<div class="prj-pointer-container"><a href="#" class="prj-pointer-close"></a><div class="prj-pointer-img bgs_cov mb_2" style="background-image: url(' + e.IMG + ');"></div><a class="flex_jsb flex_ac pb_2 pr_2 pl_2" href="' + e.LINK + '"><div class="pr_2"><h4 class="fz24">' + e.NAME + "</h4><div>" + e.LOCATION + '</div></div><div class="prj-pointer-arrow"></div></a></div>'
                                    });
                                google.maps.event.addListener(o, "click", (function () {
                                    [].forEach.call(r.I.content.querySelectorAll(".prj-pointer-container"), (function (e) {
                                        e.querySelector(".prj-pointer-close").click(), e.classList.add("closing_")
                                    })), l.map.opened_wnd = [], a.open(l.map.map, o), l.map.opened_wnd.push(a), setTimeout((function () {
                                        var e = r.I.content.querySelector(".prj-pointer-container:not(.closing_)");
                                        gsap.fromTo(e, .3, {
                                            y: "100%"
                                        }, {
                                            y: "0%"
                                        }), e.querySelector(".prj-pointer-close").addEventListener("click", (function () {
                                            gsap.to(e, .3, {
                                                y: "100%",
                                                onComplete: function () {
                                                    a.setMap(null), e.classList.remove("closing_")
                                                }
                                            })
                                        }))
                                    }), 50)
                                }))
                            })), google.maps.event.addListener(l.map.map, "click", (function () {
                                [].forEach.call(r.I.content.querySelectorAll(".prj-pointer-close"), (function (e) {
                                    e.click()
                                })), l.map.opened_wnd = []
                            })))
                        },
                        initFilter: function () {
                            l.$tags = r.I.content.querySelectorAll(".tag-menu-item"), l.$news_all = r.I.content.querySelectorAll(".projects-list-item"), [].forEach.call(l.$tags, (function (e) {
                                e.addEventListener("click", (function (t) {
                                    t.preventDefault(), [].forEach.call(l.$tags, (function (e) {
                                        e.classList.remove("active")
                                    })), e.classList.add("active"), l.filterTags()
                                }))
                            }))
                        },
                        filterTags: function () {
                            var e = Flip.getState(l.$news_all);
                            l.tags = [], [].forEach.call(l.$tags, (function (e) {
                                e.classList.contains("active") && l.tags.push(e.dataset.statusId)
                            }));
                            l.$news_all.length;
                            1 === l.tags.length && "all" === l.tags[0] ? [].forEach.call(l.$news_all, (function (e) {
                                e.style.display = "block"
                            })) : (0, [].forEach.call(l.$news_all, (function (e) {
                                e.dataset.status !== l.tags[0] ? e.style.display = "none" : (e.style.display = "block")
                            }))), Flip.from(e, {
                                duration: .7,
                                scale: !0,
                                simple: !0,
                                ease: "power2.inOut",
                                stagger: .08,
                                absolute: !0,
                                onEnter: function (e) {
                                    var t = gsap.timeline();
                                    return [].forEach.call(e, (function (e) {
                                        t.add(gsap.fromTo(e.querySelectorAll(".projects-list-img-inner"), {
                                            opacity: 0
                                        }, {
                                            opacity: 1,
                                            duration: .5
                                        }), 0), t.add(gsap.fromTo(e.querySelectorAll(".projects-list-param"), {
                                            y: "100%"
                                        }, {
                                            y: "0%",
                                            duration: .3,
                                            stagger: .05
                                        }), .2), t.add(gsap.fromTo(e.querySelectorAll(".line"), {
                                            width: "0%"
                                        }, {
                                            width: "100%",
                                            duration: .3,
                                            stagger: .05
                                        }), .3);
                                        var o = e.querySelectorAll(".projects-list-flats-container");
                                        o.length && t.add(gsap.fromTo(o, {
                                            opacity: 0,
                                            scale: 0
                                        }, {
                                            opacity: 1,
                                            scale: 1,
                                            duration: .3
                                        }), .2)
                                    })), t.add((function () {
                                        r.l.scroll.update(), setTimeout((function () {
                                            r.l.scroll.update()
                                        }), .5)
                                    }), 1), t
                                },
                                onLeave: function (e) {
                                    var t = gsap.timeline();
                                    return [].forEach.call(e, (function (e) {
                                        var o = e.querySelectorAll(".projects-list-flats-container");
                                        o.length && t.add(gsap.to(o, {
                                            opacity: 0,
                                            scale: 0,
                                            duration: .3
                                        }), 0), t.add(gsap.to(e.querySelectorAll(".projects-list-param"), {
                                            y: "100%",
                                            duration: .2,
                                            stagger: .05
                                        }), 0), t.add(gsap.to(e.querySelectorAll(".line"), {
                                            width: "0%",
                                            duration: .3,
                                            stagger: .05
                                        }), .2), t.add(gsap.to(e.querySelectorAll(".projects-list-img-inner"), {
                                            opacity: 0,
                                            duration: .5
                                        }), 0)
                                    })), t.add((function () {
                                        r.l.scroll.update(), setTimeout((function () {
                                            r.l.scroll.update()
                                        }), .5)
                                    }), 1), t
                                }
                            })
                        },
                        unload: function () {
                            l.interval && clearInterval(l.interval)
                        }
                    };
                const i = l
            },
            2955: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => r
                });
                var a = o(1462);
                const r = {
                    init: function () {
                        a.l.loading = !1
                    }
                }
            },
            4971: (e, t, o) => {
                "use strict";
                o.r(t), o.d(t, {
                    default: () => i
                });
                var a = o(1736),
                    r = o(1462),
                    l = o(571);
                const i = {
                    init: function () {
                        l.Z.init(), r.l.preloader_hidden_callbacks.push(a.Z)
                    }
                }
            },
            8561: e => {
                e.exports = {
                    mode: "production"
                }
            },
            8791: (e, t, o) => {
                (t = o(361)(!1)).push([e.id, ".floor-flats-list-sq[data-v-4d8b3d53] {\n  position: relative;\n  border: 1px solid #000;\n  padding: 0.2rem 0.8em 0.2rem 0.5rem;\n}\n.floor-flats-list-sq span[data-v-4d8b3d53] {\n  line-height: 1.2;\n  background: #000;\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translate(-50%, -60%);\n}\n.floor-flats-list-sq span sup[data-v-4d8b3d53] {\n  top: -0.4em;\n}\n", ""]), e.exports = t
            },
            131: (e, t, o) => {
                var a = o(8791);
                "string" == typeof a && (a = [
                    [e.id, a, ""]
                ]), a.locals && (e.exports = a.locals);
                (0, o(8159).Z)("4aa862a4", a, !1, {})
            }
        },
        o = {};

    function a(e) {
        var r = o[e];
        if (void 0 !== r) return r.exports;
        var l = o[e] = {
            id: e,
            exports: {}
        };
        return t[e].call(l.exports, l, l.exports, a), l.exports
    }
    a.m = t, e = [], a.O = (t, o, r, l) => {
        if (!o) {
            var i = 1 / 0;
            for (p = 0; p < e.length; p++) {
                for (var [o, r, l] = e[p], s = !0, n = 0; n < o.length; n++)(!1 & l || i >= l) && Object.keys(a.O).every((e => a.O[e](o[n]))) ? o.splice(n--, 1) : (s = !1, l < i && (i = l));
                if (s) {
                    e.splice(p--, 1);
                    var c = r();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        l = l || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > l; p--) e[p] = e[p - 1];
        e[p] = [o, r, l]
    }, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }), t
    }, a.d = (e, t) => {
        for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, a.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            179: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, o) => {
                var r, l, [i, s, n] = o,
                    c = 0;
                for (r in s) a.o(s, r) && (a.m[r] = s[r]);
                if (n) var p = n(a);
                for (t && t(o); c < i.length; c++) l = i[c], a.o(e, l) && e[l] && e[l][0](), e[i[c]] = 0;
                return a.O(p)
            },
            o = self.webpackChunk = self.webpackChunk || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    })();
    var r = a.O(void 0, [216], (() => a(1462)));
    r = a.O(r)
})();


let draw = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000,
    endDelay: 500 });
    draw.add({
        targets: '.line-ic',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 500,
    }) 
    .add({
        targets: '.line-ic',
        // loop: true,
        // direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: (el, i) => { return i * 500 }
    })
let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500 });
  
tl.add({
    targets: '.ic-img path',
    scale: [0,1],
    easing: 'easeInOutCubic',
    duration: 1500
})
.add({
    targets: '.big-text-ic path',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 500,
},'-=1000')
    .add({
    targets: '.big-text-ic path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
},'-=1000')

.add({
    targets: '.big-text-ic path',
    fillOpacity: [0, 1],
    easing: 'easeInOutCubic',
    duration: 800
},'-=1000')

.add({
    targets: '.big-text-ic path',
    strokeOpacity: [1, 0],
    easing: 'easeInOutCubic',
    duration: 800
},'-=1000')
.add({
    targets: '.text-ic path',
    opacity: [0, 1],
    translateX: [-25, 0],
    // rotateY: ['-18deg', 0],
    delay: anime.stagger(30) 
},'-=2000')
.add({
    targets: '.line-ic',
    opacity: [1,0],
    easing: 'easeInOutCubic',
    duration: 1000
},'-=1000')

if ($(window).width() < 1000) {
    if ( $(document).scrollTop() >= 200 ) {
        $('.page-header').addClass('white_')
    }
    
}
