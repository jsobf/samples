(_ = (F, X, V, B, Q, c, U, z, h, E, S) => {
    const A = F => Q(F),
        M = F => c(F),
        R = (F, X, V) => {
            try {
                return k(F, X)
            } catch (F) {
                return V
            }
        },
        N = (F, X, V) => F[X] = V,
        e = (F, X) => F[X],
        w = (F, X) => new F(X),
        t = F => F(),
        k = (F, X) => F(X),
        d = (F, X, V) => F[X](V),
        x = (F, X) => F(X()),
        r = F => typeof F,
        a = (F, X) => F == X,
        I = F => !!F,
        D = F => t(w(U, F)),
        g = F => z(F),
        l = F => h(F);
    F.JSOBF = {
        EXECUTE: D,
        STRING: X
    };
    const o = D('return (function u(t){if(null!=this.JSOBF&&12==this.JSOBF.EXECUTE.toString().length){t=atob(t);for(var r=0,h=u.toString(),o=0;o<h.length;o++){if(32!=(n=h.charCodeAt(o)))r+=a=24^n}var i="";for(o=0;o<t.length;o++){var n,a=(n=t.charCodeAt(o))^r%132;i+=this.JSOBF.STRING.fromCharCode(a)}return this.JSOBF.EXECUTE(i)}})(`AQUbBhEaWhwHHh5PTwYaGwFcOCE9MDRUVFoGGhsBXDghPTA0TwkPW14XBBMeXAYdIQYAGxwVWltcHhccFQYaWwkREwEXUkFFSAYaGwFcOCE9MDRcNzw1Ozw3T1AhIjs2NyA/PTw5NytQSRAAFxMZSRETARdSQUFIBhobAVw4IT0wNFw3PDU7PDdPUCRKUjc8NTs8N1BJEAAXExlJFhcUEwceBkgUHQBaSUlbSQ8AFwYHABxSCQARSEtFQF4DHEhFS14DH0hGQEZeFhBIUD8/MzA+UF4HC0hQWF1YXlBeGR5IQUFDXgAcSEBDQF4HGkhLRkReBRxIQEZDXhYeSEdLRUpKREReGQVIR0VDXhMUSEFCQkRBXgcYSFBXQ0pXQ0NXQ0NQXgMXSENBS0BHXgUISEFAXhkISFBXMUBXM0tXMUBXMzFXMUBXM0pXMUBXM0tXMUBXMzNQXh8cSENKRV4DGEhQVzc0VzA3V0tAVzc0VzA3VzNFUF4GA0hDR0JeABNIQEFFXhYKSFBXQzFQXgcKSFBXMUFXMDFXMUFXMEtXMUFXMEJXMUFXMEFQXh8TSEVASl4LHEhQVzFAVzM2VzFAVzNEVzFAVzMwUF4HG0hARkteBQFIUFVaW1BeHxpIS0NEXgYfSFAZGxxQXgQFSFBXMUBXMEVQXgsfSFBXMUBXMDdXMUBXM0JXMUBXMDFQXh8QSENHREdDXgAVSEBHR14HE0hHQUdeGRtIQ0NLQ0NEREpDQl4GHUhFQUteFgFIREpDXgMESFBXMUFXSkpXMUFXSjFQXgAQSEtBQF4ABkhQVzc0VzA0VzNDVzc0VzA0VzNCVzc0VzA0VzNAUF4EEUhDRUVeBhNIUFc3NFcwNFdLQ1c3NFcwNFdLSlc3NFcwNFdLQ1c3NFcwNFdLR1BeChtISkNKXhMWSFBHUF4DHUhFSkJKRV4TH0hQVzFAVzAxVzFAVzBHVzFAVzBHUF4TFUhBR0BeBhhIRUtDXgQfSEBHRF4WB0hDS0peBwFIQENCXgUfSEpBRF4KE0hQQU1XQTFDRlBeAANIQ0RHXgcUSERLRF4EGEhQFAAdHzEaEwAxHRYXUF4AF0hQVzFAVzNDVzFAVzA2VzFAVzNBVzFAVzNAVzFAV0ozUF4GGkhQV0NLV0JHV0MwV0MzV0BAUF4GF0hQV0JEV0JAV0JAV0JCUF4GAkhQVzc0VzA0V0tHVzc0VzA0V0tLVzc0VzA0V0tAVzc0VzA0V0szUF4FB0hDREZeBRZISktLXhMGSEZBRV4HHEhHR0VeBxFIQEZHXgcESFAVBh5XMUBXSzZXMUFXSzdXMUBXSkZXMUBXS0VXMUBXSkpXMUFXSzNXMUBXSzFXMUBXSjZXMUBXSzBXMUBXS0ZXMUFXS0dXMUBXS0NXMUBXSkRXMUBXSzdXMUBXS0FQXgcDSFBXRzA1JyZXREJQXgoWSEtFRl4GFkhLS0deAwFIQUNLXhYfSFBXQ0pXQ0BdW1tQXh8USEFARktLXhYZSEBCR14KBEhERUFeAxRIUFcxQFczMFBeHwNIUFdDQSZXRzdXQ0IzMzYtMFdHMTIeUF4GB0hHQ0peBRdIUFcxQFcwRVcxQFcwSlcxQFcwS1BeCh5IQENKXhkRSEFFQEpeEwtIREtBXhkUSEZHXgYVSENEQF4GCEhHREZeAAVIUFcxQVcwM1cxQVczSlcxQVcwRlcxQVcwRVcxQVdKQ1BeAwNIUFcxQVdKQVcxQVdKQ1cxQVdKNFcxQVdKQ1cxQVdKQVcxQVdKQ1cxQVdLM1cxQVdKQVcxQVdLNFBeBBlIUBgdGxxQXh8KSEtKRl4FBkhQVzFAVzNHVzFAVzBLVzFAVzNFVzFAVzNEVzFAV0tEUF4DCkhLQUJeBAZIUFdEQhoeAx0dVzFAV0sxUF4WGkhQRF5CQVdCR1BeGQdIRkdAR0ReEwdIUE1XQTFCQkVQXgoGSFA1AgBQXgQCSEBCQkNER0NBQl4DC0hDQ0FeAx5IUFcxQFdKRVBeFgJIRUBFXgoVSEpERV4HHUhQBggLV0U2UF4GCkhQV0JGV0MzV0JEV0JDRVBeHwFIRUdEXhkESEFDRF4HAkhAQkpeAwdIUFcxQVczSlcxQVczMFcxQVczR1cxQVczQlcxQVczQVBeHx5IQ0teGRxIUFcxQVczS1cxQVczQFcxQVczQlBeChxIUFcxQVdKQ1BeBBRIQ0ZAXh8RSFACDAdXRTECUF4EAUhGSkFEQV4DEUhQVzFAVzA0UF4GG0hQVzFAVzBCVzFAVzBCVzFAVzBDUF4ZA0hDQ0BeCgpIUD9QXgcISFBBXT8+ClBeBAdISkBBXgcWSERAQl4WG0hFQ14FEEhARUFeBBZIREpFXgMaSEdDRV4EC0hQVzFBVzNCVzFBVzNLVzFBVzNLUF4TGEhESkZeHxhIUElQXgQdSFBXNzRXMDRXSjNXNzRXMDdXSjRXNzRXMDdXSkVXNzRXMDRXSkVXNzRXMDdXSjBXNzRXMDdXS0JXNzRXMDdXMEVQXgQbSENGSl4WBkhQV0NHV0I3UF4HGUhQV0cxV0cxLSFQXhYDSEBESl4fBkhDS0FeFhZIS0VLXgAeSFBXMUFXSjRXMUFXSjdXMUFXSkBXMUFXSkVQXhwCSFBQXhkKSFBXQjZXQ0NXQjBQXgUaSEpFQV4KAkhERkReBhFIUFc3NFcwNFcwRFc3NFcwNFcwRVc3NFcwNFczRFc3NFcwNFczMVc3NFcwNFczM1c3NFcwNFcwQFc3NFcwMVdLN1c3NFcwMVdLM1c3NFcwNldLNlc3NFcwMVdLRVc3NFcwMVdLSlc3NFcwMVdLMFc3NFcwMVdLR1c3NFcwMVdLM1BeBApIUFcxQFczQVcxQFczRVcxQFczRVcxQFcwSlcxQFcwRVBeFhdIQUVCXgMTSEZDRl4FBEhQVzFBVzMzVzFBVzBKVzFBVzNGVzFBVzNFVzFBV0tDUF4fBEhQVzc0VzA3VzA0Vzc0VzA3VzBHVzc0VzA3VzBFVzc0VzA3VzNGVzc0VzA3VzBKVzc0VzA3VzAzVzc0VzA3VzBFUF4LGUhHSkpeBx5IRktBXgsESEFDR14WCEhEQ0pBXgodSFBXMUBXMEVXMUBXMEZXMUBXMENXMUBXMEdXMUBXMDBQXhMaSFBXMUFXSjFQXh8ZSFA/NDZQXgMASEBHQUpHXgoISFBXQzNQXgAKSFBXMUFXSkNXMUFXSzZXMUFXSkFXMUFXSkBXMUFXMzNQXhMeSFBXMUBXSkpXMUBXS0tXMUBXSkVXMUBXSkpQXgAbSFBXQ0JXQ0FXQ0ZXQ0ZQXgoDSERLQ14GGUhHQEFeGRBIUFc3NFcwNldKNlBeBRRIUDAlV0cwV0cxUF4KGkhQVzFAVzBCUF4EHEhQERoTADEdFhczBlBeBgZIUFdCRldCRldCRFdCQ1BeExBIS0BAXhMTSFBXQEJXMUBXS0NXMUBXS0NXMUFXSzZXMUBXSzBXMUBXS0dXMUBXS0FXMUBXS0VXMUBXS0RXMUBXSkBXMUBXM0ZQXgoHSEBDR14TCkhQNzw1Ozw3UF4AGEhARkReBB5ISkJCXhkYSEZHSl4fB0hQQV1DUF4TAEhEQEpHRF4AC0hKQUNeEwJIRkpDXhMdSEZDRV4fAkhQVzFAV0pEUF4ZF0hDSkteCgBISkNBXh8WSEFLQF4EGkhCXgoRSENKRl4KC0hAQkdDRV4DAkhQVzFAV0pBUF4FFUhQVzFAV0pKVzFAV0owVzFAV0owUF4DG0hQVzFAV0s3VzFAV0tEVzFAV0s2VzFAV0tAVzFAV0tEUF4LGkhQSgMLR1dEQgIVB1dFNFdFNldHN1BeGRZIUDQoLVdHNiZQXgMVSFAXUF4TBUhLRURAR14fBUhBQEJeBgtIUFc3NFcwN1czS1c3NFcwN1cwR1c3NFcwN1czMFc3NFcwN1czM1c3NFcwN1dLQFBeBABIR0VGXgUCSEVDRV4FC0hKREFeGQBIQENLXhYESEVGQ14GEEhQVzFBV0tDVzFBV0szVzFBV0tKUF4GHEhQVzFBVzA3VzFBVzNGVzFBVzBKVzFBVzAwVzFBV0o2UF4GBUhQHxYXUF4FGEhAQEteAABIREJFXhkaSFA3AQMcAAYLUF4HB0hFQkpeBANIS0tDRF4KBUhQOjI2KzU1NlBeAwhIR0tHXgcVSFAfGRsEGB4TUF4ECEhQICgiUF4LCkhAREpGRUZBRUNeAxlIUFcxQVdKSlcxQVdKQVcxQVdLNlcxQVdLNlBeBh5IUDgwMC03NzhQXhYVSENHQV4fF0hDS0pLRUVBRl4AB0hBQkpeGQJIUFcxQFdKQ1cxQFdKQVcxQFdKMFcxQFdKR1cxQFdKQVBeAAJIQ0VHXgcfSEtAS14EFUhQABcEFwABF1BeABlIQEBBXhMBSFBXQkFXQkJXQjBXQkBXQkdQXgoBSFBXMUBXMDFXMUBXMzZXMUBXMDBXMUBXMEZQXgQESENFRF4WBUhQVVBeAAFIUERHRFc3NFcwNFdKN1BeAxZIUFc3NFcwNFcwQ1BeExFIR0RKQkteHxtIQ0BKXhMDSEtBRl4AFEhQIAIeHStQXgUDSEBHRl4TG0hQVzFAVzMzVzFAVzNEVzFAVzNFVzFAVzBBVzFAVzNFUF4ZFUhKRUJeBxdIS0VCXgcASEpKRF4WC0hQVzFBVzBAUF4FAEhAQ0VeBRtIUFc3NFcwNldKRVc3NFcwNldKQVc3NFcwNldKSlc3NFcwNldKQFBeHAFIUAECHhsGUF4KF0hLRkNBRV4ZC0hHRkJeBgBIR0ZEXhkfSFBXMUBXSkNXMUFXSkRXMUFXMEJXMUBXMDdXMUFXMEpXMUFXMDRXMUFXMEdXMUFXMDRXMUFXMzBXMUFXMDdXMUFXMENXMUFXMDRXMUFXS0NQXhYcSFBXQjdXQkBXQkZXQkRQXhMZSEFLQV4fAEhQVzFAVzBAVzFAVzA3VzFAVzBCUF4ZHUhERkRBQl4KGEhKQ0ReAwVIRERDR0BeCxNISkpBXh8ISFBXNzRXMDZXS0FQXhMISERARl4FE0hAQUFeBQpIQENEXgofSEVHS0tGXhYYSEZLRF4WAEhGRUpeBRFIR0ZDXh8LSENAQ0RLXgYUSERDQF4LGEhFQkBeBBNIRkVCQEteAwZIQUpLXhkGSEtGRkRAXgMQSEpFQ14fHUhQVzc0VzA0VzNCVzc0VzA0VzNEVzc0VzA0VzNCVzc0VzA0VzNKVzc0VzA0VzNDUF4AH0hDR0VeBxBIUElCSVBeABpIQ0FHXhYRSFBXMUFXSktQXhkTSFBXNzRXMDRXM0BXNzRXMDRXMzFXNzRXMDRXM0JQXgAWSFBXMUBXM0JXMUBXM0ZXMUBXM0NXMUBXMDZQXgUZSEBBRF4HBUhQVVdAQlZXQEJQXgUeSFBXQ0VXQjBXQ0NXQ0JWUF4WFEhHRkteExdIUFcxQFdLRVcxQFdLRVcxQFdKQVBeAB1IQUpBXgQXSEdER14FBUhDS0JeChlIS0BHXh8fSENBQF4ZGUhKQUVeBBBIUFc3NFcwNFdKQlc3NFcwNFczQFc3NFcwNFcwN1BeEwRIRkFEXgYBSEZCXh8VSFBXMUFXSzZXMUFXS0RXMUFXSzRXMUFXSzZXMUFXS0VQXgoQSENKQV4ABEhAQ0FeCxVIUFc3NFcwN1dKQ1c3NFcwN1dKM1c3NFcwN1dKSlBeExxIUB0XFQYaGBVQXgUdSEFDRV4GBEhKQEZeAAhIRUBHXhkBSENLQEdGXgoUSENDRF4tFh1IUFc3NFcwN1czSlc3NFcwN1czNlc3NFcwN1czNFc3NFcwN1czMFc3NFcwN1cwRVc3NFcwN1czSlc3NFcwN1cwM1BeCwNIR0dFQUteFhNIUB5QXgcGSFBXMUBXMEBXMUFXS0JXMUFXSjFXMUFXSjRXMUFXMEtQD0k`)');
    if (!o)
        for (;;);
    with(o) {
        const V = (F, V) => {
                let B = E(F)[ns](np)[vg]();
                for (let F = vh; F < B.length; F++) B[F] = X[vj](B[F][vn](vh) ^ (V + F - vv) % vm);
                return B[vk](np)
            },
            B = X => F[X],
            Q = F => 226 ^ F,
            c = (F, X) => F & X,
            U = (F, X) => F ^ X,
            z = (F, X) => F | X,
            h = (F, X) => F >>> X,
            S = (F, X) => F >> X,
            A = (F, X) => F << X,
            M = (F, X) => F ** X,
            R = (F, X) => F % X,
            N = (F, X) => F / X,
            e = (F, X) => F * X,
            w = (F, X) => F - X,
            t = (F, X) => F + X;
        let k, d, x, r, a, I, D, g = va;
        for (; g != vq;) switch (g) {
        case w(V(vx, vr), V(vw, vu)):
            B(V(vt, vd))[V(vy, ve)](t(V(vo, vi), t(d, t(V(vz, vl), t(k, t(V(vb, vf), t(x, V(np, vc)))))))), g <<= vs, g -= vp;
            break;
        case w(V(mg, mh), V(mj, mn)):
            B(V(mv, mm))[V(mk, ma)](t(V(mq, mx), t(d, t(V(mr, mw), t(k, t(V(mu, mt), t(I, V(np, md)))))))), g <<= my, g -= me;
            break;
        case w(V(mo, mi), V(mz, ml)):
            I = N(d, k), g >>= mb, g += mf;
            break;
        case w(V(mc, ms), V(mp, kg)):
            B(V(kh, kj))[V(kn, kv)](t(V(km, kk), t(d, t(V(ka, kq), t(k, t(V(kx, kr), t(r, V(np, kw)))))))), g >>= ku, g += kt;
            break;
        case w(V(kd, ky), V(np, ke)):
            r = w(d, k), g <<= ko, g -= ki;
            break;
        case w(V(kz, kl), V(kb, kf)):
            a = e(d, k), g >>= kc, g += ks;
            break;
        case w(V(kp, ag), V(ah, aj)):
            B(V(an, av))[V(am, ak)](t(V(aa, aq), this.JSOBF[ax])), g >>= ar, g += aw;
            break;
        case w(V(au, at), V(ad, ay)):
            D = [V(ae, ao), V(ai, az), V(al, ab)], g >>= af, g += ac;
            break;
        case w(V(as, ap), V(qg, qh)):
            d = w(w(e(V(qj, qn), V(qv, qm)), w(V(qk, qa), V(vw, vu))), V(qq, qx)), g >>= qr, g += qw;
            break;
        case w(V(qu, qt), V(qd, qy)):
            x = t(d, k), g >>= qe, g += qo;
            break;
        case w(V(qi, qz), V(ql, qb)):
            for (let F = w(w(e(V(qf, kl), V(qc, qs)), w(V(qp, xg), V(xh, xj))), V(xn, xv)); F < D.length; F++) {
                let X = xm;
                for (; X != xk;) switch (X) {
                case w(V(xa, xq), V(xx, xr)):
                    B(V(xw, xu))[V(xt, xd)](D[F]), X >>= xy, X += xe;
                    break;
                case w(V(xo, xi), V(xz, xl)):
                    let c = Q(xb) == Q(xf) || Q(xc) == Q(xc) && D[F] == V(xs, xp) || Q(rg) == Q(rh);
                    if (c) try {
                        let F = Q(rj) == Q(rn) || Q(rv) == Q(rm) && Q(rk) == Q(rk) && Q(ra) == Q(ra) && Q(rj) == Q(rj) || Q(rq) == Q(vv);
                        if (F) throw new(B(V(rx, rr)));
                        throw new(B(V(rw, ru)))(V(rt, mi))
                    } catch (F) {
                        switch (F.message) {
                        case V(rd, ry):
                            throw new(B(V(re, ro)))(V(ri, rz));
                        case V(rl, rb):
                            throw new(B(V(rf, rc)))(V(rs, rp));
                        case V(wg, wh):
                            let F = Q(mt) == Q(mt) && Q(wj) == Q(rv) || Q(wn) == Q(xl);
                            if (F) throw new(B(V(wv, wm)));
                            try {
                                let F = Q(wk) == Q(rv) && Q(wa) == Q(wa) || Q(wq) == Q(wx) || Q(wr) == Q(ww) || Q(kr) == Q(wu);
                                if (F) throw new(B(V(wt, wd)));
                                throw new(B(V(rx, wy)))(V(we, wo))
                            } catch (F) {
                                switch (F.message) {
                                case V(wi, wz):
                                    throw new(B(V(wl, wb)))(V(wf, wc));
                                case V(ws, wp):
                                    B(V(ug, uh))[V(uj, un)](V(uv, um));
                                    break;
                                case V(uk, ua):
                                    throw new(B(V(uq, rv)))(V(ux, ur));
                                case V(uw, uu):
                                    throw new(B(V(ut, ud)))(V(uy, ue))
                                }
                            }
                            break;
                        case V(uo, ui):
                            throw new(B(V(uz, ul)))(V(ub, uf))
                        }
                    } else try {
                        let F = Q(uc) == Q(us) || Q(up) == Q(tg) || Q(ui) == Q(ui) && Q(xl) == Q(xl) && Q(wa) == Q(rp);
                        if (F) throw new(B(V(th, tj)));
                        throw new(B(V(tn, tv)))(V(tm, tk))
                    } catch (F) {
                        switch (F.message) {
                        case V(ta, tq):
                            throw new(B(V(tx, tr)))(V(tw, tu));
                        case V(tt, td):
                            throw new(B(V(ty, rh)))(V(te, to));
                        case V(ti, tz):
                            try {
                                B(V(tl, wr))[V(tb, tf)](V(tc, ts))
                            } catch (F) {
                                throw new(B(V(ty, rh)))
                            }
                            break;
                        case V(tp, dg):
                            throw new(B(V(dh, dj)))(V(dn, dv))
                        }
                    }
                    X = xk
                }
            }
            g = vq;
            break;
        case w(V(dm, dk), V(da, dq)):
            k = w(w(e(V(dx, dr), V(dw, du)), w(V(dt, dd), V(dy, de))), V(_do, di)), g <<= dz, g -= dl;
            break;
        case w(V(db, df), V(dc, ds)):
            B(V(xw, dp))[V(yg, vi)](t(V(yh, yj), t(d, t(V(yn, yv), t(k, t(V(ym, yk), t(a, V(np, ya)))))))), g <<= yq, g += yx
        }
    }
})(this, String, Array, Math, parseFloat, parseInt, Function, atob, btoa, decodeURI, this.__defineGetter__.__proto__.length);