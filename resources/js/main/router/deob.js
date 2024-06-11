const checkLogFog = (_0x51769d, _0xb60c02, _0x4a4a5d) => {
    var _0x1bd052 = window.config.app_type == 'non-saas' ? 'admin' : 'superadmin'
    const _0x2b00aa = _0x51769d.name.split('.')
    if (_0x2b00aa.length > 0 && _0x2b00aa[0] == 'superadmin') {
        if (
            _0x51769d.meta.requireAuth &&
            store.getters['auth/isLoggedIn'] &&
            store.state.auth.user &&
            !store.state.auth.user.is_superadmin
        ) {
            store.dispatch('auth/logout')
            _0x4a4a5d({ name: 'admin.login' })
        } else {
            if (
                _0x51769d.meta.requireAuth &&
                isSuperAdminCompanySetupCorrect() == false &&
                _0x2b00aa[1] != 'setup_app'
            ) {
                _0x4a4a5d({ name: 'superadmin.setup_app.index' })
            } else {
                if (_0x51769d.meta.requireAuth && !store.getters['auth/isLoggedIn']) {
                    _0x4a4a5d({ name: 'admin.login' })
                } else {
                    _0x51769d.meta.requireUnauth && store.getters['auth/isLoggedIn']
                        ? _0x4a4a5d({ name: 'superadmin.dashboard.index' })
                        : _0x4a4a5d()
                }
            }
        }
    } else {
        if (
            _0x2b00aa.length > 0 &&
            _0x2b00aa[0] == 'admin' &&
            store.state.auth &&
            store.state.auth.user &&
            store.state.auth.user.is_superadmin
        ) {
            _0x4a4a5d({ name: 'superadmin.dashboard.index' })
        } else {
            if (_0x2b00aa.length > 0 && _0x2b00aa[0] == 'admin') {
                if (_0x51769d.meta.requireAuth && !store.getters['auth/isLoggedIn']) {
                    store.dispatch('auth/logout')
                    _0x4a4a5d({ name: 'admin.login' })
                } else {
                    if (
                        _0x51769d.meta.requireAuth &&
                        isAdminCompanySetupCorrect() == false &&
                        _0x2b00aa[1] != 'setup_app'
                    ) {
                        _0x4a4a5d({ name: 'admin.setup_app.index' })
                    } else {
                        if (
                            _0x51769d.meta.requireUnauth &&
                            store.getters['auth/isLoggedIn']
                        ) {
                            _0x4a4a5d({ name: 'admin.dashboard.index' })
                        } else {
                            if (_0x51769d.name == _0x1bd052 + '.settings.modules.index') {
                                store.commit('auth/updateAppChecking', false)
                                _0x4a4a5d()
                            } else {
                                var _0x4dab42 = _0x51769d.meta.permission
                                _0x2b00aa[1] == 'stock' &&
                                (_0x4dab42 = replace(
                                    _0x51769d.meta.permission(_0x51769d),
                                    '-',
                                    '_'
                                ))
                                !_0x51769d.meta.permission ||
                                checkUserPermission(_0x4dab42, store.state.auth.user)
                                    ? _0x4a4a5d()
                                    : _0x4a4a5d({ name: 'admin.dashboard.index' })
                            }
                        }
                    }
                }
            } else {
                _0x2b00aa.length > 0 && _0x2b00aa[0] == 'front'
                    ? _0x51769d.meta.requireAuth && !store.getters['front/isLoggedIn']
                        ? (store.dispatch('front/logout'),
                            _0x4a4a5d({ name: 'front.homepage' }))
                        : _0x4a4a5d()
                    : _0x4a4a5d()
            }
        }
    }
}
var mAry = ['e', 'L', 'a', 'r', 'd', 'P', 'o'],
    mainProductName =
        '' + mAry[1] + mAry[0] + mAry[2] + mAry[4] + mAry[5] + mAry[3] + mAry[6]
window.config.app_type == 'saas' && (mainProductName += 'Saas')
var modArray = [
    {
        verified_name: mainProductName,
        value: false,
    },
]
allActiveModules.forEach((_0x3c59f3) => {
    modArray.push({
        verified_name: _0x3c59f3,
        value: false,
    })
})
const isAnyModuleNotVerified = () => {
        return find(modArray, ['value', false])
    },
    isCheckUrlValid = (_0x12986c, _0xe0ee80, _0x49932b) => {
        if (
            _0x12986c.length != 5 ||
            _0xe0ee80.length != 8 ||
            _0x49932b.length != 6
        ) {
            return false
        } else {
            if (
                _0x12986c.charAt(3) != 'c' ||
                _0x12986c.charAt(4) != 'k' ||
                _0x12986c.charAt(0) != 'c' ||
                _0x12986c.charAt(1) != 'h' ||
                _0x12986c.charAt(2) != 'e'
            ) {
                return false
            } else {
                if (
                    _0xe0ee80.charAt(2) != 'd' ||
                    _0xe0ee80.charAt(3) != 'e' ||
                    _0xe0ee80.charAt(4) != 'i' ||
                    _0xe0ee80.charAt(0) != 'c' ||
                    _0xe0ee80.charAt(1) != 'o' ||
                    _0xe0ee80.charAt(5) != 'f' ||
                    _0xe0ee80.charAt(6) != 'l' ||
                    _0xe0ee80.charAt(7) != 'y'
                ) {
                    return false
                } else {
                    return _0x49932b.charAt(2) != 'v' ||
                    _0x49932b.charAt(3) != 'a' ||
                    _0x49932b.charAt(0) != 'e' ||
                    _0x49932b.charAt(1) != 'n' ||
                    _0x49932b.charAt(4) != 't' ||
                    _0x49932b.charAt(5) != 'o'
                        ? false
                        : true
                }
            }
        }
    },
    isAxiosResponseUrlValid = (_0xc16485) => {
        return _0xc16485.charAt(19) != 'i' ||
        _0xc16485.charAt(13) != 'o' ||
        _0xc16485.charAt(9) != 'n' ||
        _0xc16485.charAt(16) != 'o' ||
        _0xc16485.charAt(22) != 'y' ||
        _0xc16485.charAt(11) != 'a' ||
        _0xc16485.charAt(18) != 'e' ||
        _0xc16485.charAt(21) != 'l' ||
        _0xc16485.charAt(10) != 'v' ||
        _0xc16485.charAt(20) != 'f' ||
        _0xc16485.charAt(12) != 't' ||
        _0xc16485.charAt(17) != 'd' ||
        _0xc16485.charAt(8) != 'e' ||
        _0xc16485.charAt(15) != 'c' ||
        _0xc16485.charAt(26) != 'm' ||
        _0xc16485.charAt(24) != 'c' ||
        _0xc16485.charAt(25) != 'o'
            ? false
            : true
    }
router.beforeEach((_0x35c99f, _0x3f0d3f, _0x422a9f) => {
    var _0x3a3ac8 = 'envato',
        _0x57e4a0 = 'codeifly',
        _0x40fce5 = 'check',
        _0x186231 = { modules: window.config.modules }
    _0x35c99f.meta &&
    _0x35c99f.meta.appModule &&
    ((_0x186231.module = _0x35c99f.meta.appModule),
    !includes(allActiveModules, _0x35c99f.meta.appModule) &&
    _0x422a9f({ name: 'admin.login' }))
    if (!isCheckUrlValid(_0x40fce5, _0x57e4a0, _0x3a3ac8)) {
        Modal.error({
            title: 'Error!',
            content:
                "Don't try to null it... otherwise it may cause error on your server.",
        })
    } else {
        var _0x795d5 = window.config.app_type == 'non-saas' ? 'admin' : 'superadmin'
        if (
            isAnyModuleNotVerified() !== undefined &&
            _0x35c99f.name &&
            _0x35c99f.name != 'verify.main' &&
            _0x35c99f.name != _0x795d5 + '.settings.modules.index'
        ) {
            var _0x55c6f2 =
                'https://' + _0x3a3ac8 + '.' + _0x57e4a0 + '.com/' + _0x40fce5
            axios({
                method: 'post',
                url: _0x55c6f2,
                data: {
                    verified_name: mainProductName,
                    ..._0x186231,
                    domain: window.location.host,
                },
                timeout: 4000,
            })
                .then((res) => {
                    if (!isAxiosResponseUrlValid(res.config.url)) {
                        Modal.error({
                            title: 'Error!',
                            content:
                                "Don't try to null it... otherwise it may cause error on your server.",
                        })
                    } else {
                        store.commit('auth/updateAppChecking', false)
                        const _0x597c96 = res.data
                        _0x597c96.main_product_registered &&
                        (modArray.forEach((_0x1ef9f0) => {
                            _0x1ef9f0.verified_name == mainProductName &&
                            (_0x1ef9f0.value = true)
                        }),
                            modArray.forEach((_0x14a2a7) => {
                                if (
                                    includes(
                                        _0x597c96.modules_not_registered,
                                        _0x14a2a7.verified_name
                                    ) ||
                                    includes(
                                        _0x597c96.multiple_registration_modules,
                                        _0x14a2a7.verified_name
                                    )
                                ) {
                                    if (_0x14a2a7.verified_name != mainProductName) {
                                        var _0x230d00 = [...window.config.modules],
                                            _0x46f0c8 = remove(_0x230d00, function (_0x66ae97) {
                                                return _0x66ae97 != _0x14a2a7.verified_name
                                            })
                                        store.commit('auth/updateActiveModules', _0x46f0c8)
                                        window.config.modules = _0x46f0c8
                                    }
                                    _0x14a2a7.value = false
                                } else {
                                    _0x14a2a7.value = true
                                }
                            }))
                        if (!_0x597c96.is_main_product_valid) {
                        } else {
                            if (
                                !_0x597c96.main_product_registered ||
                                _0x597c96.multiple_registration
                            ) {
                                _0x422a9f({ name: 'verify.main' })
                            } else {
                                if (
                                    _0x35c99f.meta &&
                                    _0x35c99f.meta.appModule &&
                                    find(modArray, {
                                        verified_name: _0x35c99f.meta.appModule,
                                        value: false,
                                    }) !== undefined
                                ) {
                                    notification.error({
                                        placement: 'bottomRight',
                                        message: 'Error',
                                        description: 'Modules Not Verified',
                                    })
                                    const _0x96b764 = appType == 'saas' ? 'superadmin' : 'admin'
                                    _0x422a9f({ name: _0x96b764 + '.settings.modules.index' })
                                } else {
                                    checkLogFog(_0x35c99f, _0x3f0d3f, _0x422a9f)
                                }
                            }
                        }
                    }
                })
                .catch((_0x5275d9) => {
                    !isAxiosResponseUrlValid(_0x5275d9.toJSON().config.url)
                        ? Modal.error({
                            title: 'Error!',
                            content:
                                "Don't try to null it... otherwise it may cause error on your server.",
                        })
                        : (modArray.forEach((_0x4c6d15) => {
                            _0x4c6d15.value = true
                        }),
                            store.commit('auth/updateAppChecking', false),
                            _0x422a9f())
                })
        } else {
            checkLogFog(_0x35c99f, _0x3f0d3f, _0x422a9f)
        }
    }
})
