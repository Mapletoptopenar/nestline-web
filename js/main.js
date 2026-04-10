var LOGO = "https://nestline.cz/wp-content/uploads/2024/12/Logo-For-Web.svg";
var canadaFlag = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px"><rect width="5" height="14" fill="#FF0000"/><rect x="5" width="10" height="14" fill="#FFF"/><rect x="15" width="5" height="14" fill="#FF0000"/><path d="M10 3L10.5 5H12L10.75 6L11.25 8L10 7L8.75 8L9.25 6L8 5H9.5Z" fill="#FF0000"/></svg>';
var czFlag = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px"><rect width="20" height="7" fill="#fff"/><rect y="7" width="20" height="7" fill="#D7141A"/><polygon points="0,0 10,7 0,14" fill="#11457E"/></svg>';

var dict = {
cs: {
"nav.services":"Slu\u017Eby","nav.references":"Reference","nav.about":"O n\u00E1s","nav.contact":"Kontakt","nav.cta":"Rezervovat hovor","nav.langLabel":"EN",
"hero.headline":"Vyd\u011Bl\u00E1vejte na sv\u00E9m byt\u011B v Praze,",
"hero.accent":"ani\u017E byste museli zvednout telefon.",
"hero.sub":"P\u0159enechte n\u00E1m spr\u00E1vu. Z\u00EDskejte \u010Das, klid a garantovan\u00FD v\u00FDnos \u2014 bez starost\u00ED, bez kompromis\u016F.",
"hero.cta":"Zji\u0161\u0165te v\u00EDce","hero.cta2":"Jak to funguje",
"hero.stat1":"98%","hero.stat1l":"Obsazenost","hero.stat2":"2h","hero.stat2l":"Doba reakce","hero.stat3":"\u20AC0","hero.stat3l":"Skryt\u00E9 poplatky",
"val.badge":"PRO\u010C NESTLINE","val.title":"T\u0159i pil\u00ED\u0159e, na kter\u00FDch stoj\u00ED v\u00E1\u0161 klid",
"val.p1t":"Garantovan\u00E1 bezpe\u010Dnost","val.p1d":"Poji\u0161t\u011Bn\u00ED, prov\u011B\u0159en\u00ED n\u00E1jemn\u00EDk\u016F a pr\u00E1vn\u00ED ochrana v jednom bal\u00ED\u010Dku. V\u00E1\u0161 majetek je chr\u00E1n\u011Bn 24/7.",
"val.p2t":"Nulov\u00E1 n\u00E1maha","val.p2d":"Od hled\u00E1n\u00ED n\u00E1jemn\u00EDka po no\u010Dn\u00ED hav\u00E1rii \u2014 \u0159e\u0161\u00EDme v\u0161e. Vy nezvednete telefon.",
"val.p3t":"Maxim\u00E1ln\u00ED v\u00FDnos","val.p3d":"Optimalizujeme cenu, minimalizujeme prostoje. Pr\u016Fm\u011Brn\u011B o 23 % vy\u0161\u0161\u00ED v\u00FDnos ne\u017E u self-managementu.",
"proc.badge":"JAK TO FUNGUJE","proc.title":"Od podpisu ke klidu za 72 hodin",
"proc.s1t":"Bezplatn\u00E1 konzultace","proc.s1d":"Zhodnot\u00EDme v\u00E1\u0161 byt, navrhneme strategii a nastav\u00EDme o\u010Dek\u00E1v\u00E1n\u00ED.",
"proc.s2t":"Onboarding a audit","proc.s2d":"47-bodov\u00FD audit nemovitosti, profesion\u00E1ln\u00ED fotky, pr\u00E1vn\u00ED p\u0159\u00EDprava.",
"proc.s3t":"Aktivn\u00ED spr\u00E1va","proc.s3d":"Hled\u00E1me n\u00E1jemn\u00EDky, \u0159e\u0161\u00EDme v\u0161e operativn\u00ED. Vy dost\u00E1v\u00E1te m\u011Bs\u00ED\u010Dn\u00ED report.",
"proc.s4t":"Vy \u017Eijete","proc.s4d":"Cestujete, pracujete, odpo\u010D\u00EDv\u00E1te. V\u00E1\u0161 byt vyd\u011Bl\u00E1v\u00E1 na autopilotu.",
"test.badge":"V\u00DDSLEDKY","test.title":"Co \u0159\u00EDkaj\u00ED na\u0161i klienti",
"cta.title":"P\u0159ipraveni p\u0159estat b\u00FDt spr\u00E1vcem a za\u010D\u00EDt b\u00FDt investorem?",
"cta.sub":"Zarezervujte si 30minutov\u00FD strategick\u00FD hovor. Zdarma, bez z\u00E1vazk\u016F.",
"cta.btn":"Rezervovat hovor","cta.note":"Odpov\u00EDd\u00E1me do 2 hodin.",
"svc.heroTitle":"The NestLine 360\u00B0","svc.heroAccent":"Guardian System",
"svc.heroSub":"Nekupujete si spr\u00E1vce. Kupujete si syst\u00E9m, kter\u00FD chr\u00E1n\u00ED v\u00E1\u0161 majetek, maximalizuje v\u00FDnos a vrac\u00ED v\u00E1m \u010Das.",
"svc.auditBadge":"47-BODOV\u00DD AUDIT","svc.auditTitle":"Ka\u017Ed\u00FD detail pod kontrolou",
"svc.auditSub":"Ne\u017E p\u0159evezmeme spr\u00E1vu, provedeme kompletn\u00ED audit va\u0161\u00ED nemovitosti. 47 kontroln\u00EDch bod\u016F.",
"svc.cat1":"Technick\u00FD stav","svc.cat1n":"12","svc.cat1i":"Elektroinstalace|Vodovodn\u00ED rozvody|Topn\u00FD syst\u00E9m|Okna a izolace",
"svc.cat2":"Pr\u00E1vn\u00ED ochrana","svc.cat2n":"10","svc.cat2i":"N\u00E1jemn\u00ED smlouva|Poji\u0161t\u011Bn\u00ED|GDPR compliance|Da\u0148ov\u00E1 optimalizace",
"svc.cat3":"Prezentace","svc.cat3n":"8","svc.cat3i":"Profesion\u00E1ln\u00ED focen\u00ED|Virtu\u00E1ln\u00ED prohl\u00EDdka|Listing optimalizace|Cenov\u00E1 anal\u00FDza",
"svc.cat4":"Operativa","svc.cat4n":"9","svc.cat4i":"Kl\u00ED\u010Dov\u00FD management|Havarijní plán|Dodavatelsk\u00E1 s\u00ED\u0165|Komunika\u010Dn\u00ED syst\u00E9m",
"svc.cat5":"Finance","svc.cat5n":"8","svc.cat5i":"V\u00FDnosov\u00E1 projekce|Cash-flow pl\u00E1n|M\u011Bs\u00ED\u010Dn\u00ED reporting|Da\u0148ov\u00E9 podklady",
"svc.pointsLabel":"bod\u016F","svc.totalLabel":"kontroln\u00EDch bod\u016F celkem",
"svc.outBadge":"V\u00DDSLEDKY, NE FUNKCE",
"svc.o1p":"F\u00E1ze 1: Akvizice n\u00E1jemn\u00EDka","svc.o1t":"Byt obsazen kvalitn\u00EDm n\u00E1jemn\u00EDkem do 14 dn\u00ED","svc.o1d":"Prov\u011B\u0159en\u00ED bonity, reference od p\u0159edchoz\u00EDch pronaj\u00EDmatel\u016F, osobn\u00ED pohovor.",
"svc.o2p":"F\u00E1ze 2: Aktivn\u00ED spr\u00E1va","svc.o2t":"Nulov\u00FD kontakt s n\u00E1jemn\u00EDkem z va\u0161\u00ED strany","svc.o2d":"24/7 havarijní linka, koordinace oprav, pravideln\u00E9 inspekce. V\u0161e \u0159e\u0161\u00EDme my.",
"svc.o3p":"F\u00E1ze 3: Pr\u00E1vn\u00ED a da\u0148ov\u00E1 ochrana","svc.o3t":"100 % pr\u00E1vn\u00ED compliance bez va\u0161\u00ED \u00FA\u010Dasti","svc.o3d":"Da\u0148ov\u00E1 p\u0159izn\u00E1n\u00ED, zm\u011Bny legislativy, \u0159e\u0161en\u00ED spor\u016F. V\u00E1\u0161 pr\u00E1vn\u00ED \u0161t\u00EDt.",
"ref.heroTitle":"Skute\u010Dn\u00E9 v\u00FDsledky,","ref.heroAccent":"skute\u010Dn\u00ED klienti","ref.heroSub":"Re\u00E1ln\u00E1 \u010D\u00EDsla, re\u00E1ln\u00ED lid\u00E9, re\u00E1ln\u00E9 v\u00FDsledky.",
"ref.probLabel":"PROBL\u00C9M","ref.solLabel":"\u0158E\u0160EN\u00CD","ref.resLabel":"V\u00DDSLEDEK",
"ref.c1t":"Byt 2+kk, Praha 2 \u2014 Vinohrady","ref.c1p":"Majitel tr\u00E1vil 15+ hodin m\u011Bs\u00ED\u010Dn\u011B spr\u00E1vou. Dva probl\u00E9mov\u00ED n\u00E1jemn\u00EDci za rok.","ref.c1s":"Kompletn\u00ED audit, v\u00FDm\u011Bna n\u00E1jemn\u00EDka, renovace prezentace, optimalizace ceny.","ref.c1r":"V\u00FDnos +31 %, 0 hodin spr\u00E1vy, 98 % obsazenost za 18 m\u011Bs\u00EDc\u016F.",
"ref.c2t":"3 byty, Praha 5 \u2014 Sm\u00EDchov","ref.c2p":"Majitelka ze zahrani\u010D\u00ED nem\u011Bla p\u0159ehled. Neefektivn\u00ED komunikace, opo\u017Ed\u011Bn\u00E9 platby.","ref.c2s":"Centralizovan\u00E1 spr\u00E1va, automatizovan\u00E9 platby, m\u011Bs\u00ED\u010Dn\u00ED reporting.","ref.c2r":"V\u0161echny platby v\u010Das, \u00FAspora 200 h/rok, vzd\u00E1len\u00FD p\u0159\u00EDstup ke v\u0161em dat\u016Fm.",
"ref.c3t":"Investi\u010Dn\u00ED byt, Praha 7 \u2014 Hole\u0161ovice","ref.c3p":"Expat investor z Kanady. Jazykov\u00E1 bari\u00E9ra, neznalost \u010Desk\u00E9ho pr\u00E1va.","ref.c3s":"Bilingv\u00E1ln\u00ED spr\u00E1va (EN/CZ), kompletn\u00ED pr\u00E1vn\u00ED a da\u0148ov\u00E9 zastoupen\u00ED.","ref.c3r":"Pln\u011B hands-off investice. Investor \u0159\u00EDd\u00ED v\u0161e z Toronta.",
"about.heroTitle":"Kanadsk\u00E1 preciznost,","about.heroAccent":"pra\u017Esk\u00E1 du\u0161e",
"about.heroSub":"NestLine zalo\u017Eil \u010Desk\u00FD expat, kter\u00FD \u017Eil 20 let v Kanad\u011B. P\u0159ivezla jsem zp\u00E1tky to nejlep\u0161\u00ED \u2014 syst\u00E9my, standardy a respekt k va\u0161emu \u010Dasu.",
"about.story":"Na\u0161e mise: Nab\u00EDdnout majitel\u016Fm i n\u00E1jemn\u00EDk\u016Fm kvalitu, profesionalitu a klid, jak\u00FD je b\u011B\u017En\u00FD na nejvysp\u011Blej\u0161\u00EDch realitn\u00EDch trz\u00EDch.",
"about.v1t":"Transparentnost a d\u016Fv\u011Bra","about.v1d":"Komunikujeme jasn\u011B, f\u00E9rov\u011B a bez zbyte\u010Dn\u00FDch komplikac\u00ED.",
"about.v2t":"Osobn\u00ED p\u0159\u00EDstup","about.v2d":"Ka\u017Edou nemovitost vn\u00EDm\u00E1me jako jedine\u010Dnou a p\u00E9\u010Di p\u0159izp\u016Fsobujeme pot\u0159eb\u00E1m majitele.",
"about.v3t":"Pr\u00E9miov\u00E1 kvalita","about.v3d":"Specializujeme se na n\u00E1ro\u010Dn\u00E9 klienty a luxusn\u00ED nemovitosti. Preciznost je pro n\u00E1s samoz\u0159ejmost\u00ED.",
"about.photoAlt":"Kate\u0159ina \u2014 zakladatelka NestLine",
"cont.heroTitle":"Poj\u010Fme se bavit","cont.heroAccent":"o va\u0161em byt\u011B",
"cont.heroSub":"30 minut, kter\u00E9 v\u00E1m mohou u\u0161et\u0159it stovky hodin. Zdarma, bez z\u00E1vazk\u016F.",
"cont.speed":"Odpov\u00EDd\u00E1me do 2 hodin",
"cont.name":"Jm\u00E9no","cont.email":"E-mail","cont.phone":"Telefon","cont.type":"Typ nemovitosti","cont.message":"Zpr\u00E1va","cont.submit":"Odeslat",
"cont.opt1":"Byt","cont.opt2":"Bytov\u00FD d\u016Fm","cont.opt3":"Nemovitost v zahrani\u010D\u00ED","cont.opt4":"V\u00EDce nemovitost\u00ED",
"cont.or":"nebo","cont.calendly":"Zarezervovat p\u0159\u00EDmo v kalend\u00E1\u0159i",
"ft.tagline":"Spr\u00E1va nemovitost\u00ED nov\u00E9 generace.","ft.col1":"Navigace","ft.col2":"Kontakt",
"ft.privacy":"Ochrana soukrom\u00ED","ft.terms":"Obchodn\u00ED podm\u00EDnky","ft.rights":"All Rights Reserved."
},
en: {
"nav.services":"Services","nav.references":"Case Studies","nav.about":"About","nav.contact":"Contact","nav.cta":"Book a Call","nav.langLabel":"CZ",
"hero.headline":"Earn from your Prague property,",
"hero.accent":"without ever picking up the phone.",
"hero.sub":"Hand us the keys. Get your time, peace of mind, and guaranteed returns \u2014 zero hassle, zero compromises.",
"hero.cta":"Learn More","hero.cta2":"How It Works",
"hero.stat1":"98%","hero.stat1l":"Occupancy","hero.stat2":"2h","hero.stat2l":"Response Time","hero.stat3":"\u20AC0","hero.stat3l":"Hidden Fees",
"val.badge":"WHY NESTLINE","val.title":"Three pillars of your peace of mind",
"val.p1t":"Guaranteed Security","val.p1d":"Insurance, tenant vetting, and legal protection in one package. Your property is protected 24/7.",
"val.p2t":"Zero Effort","val.p2d":"From finding tenants to midnight emergencies \u2014 we handle everything. You don\u2019t lift a finger.",
"val.p3t":"Maximum Returns","val.p3d":"We optimize pricing and minimize vacancy. On average 23% higher returns than self-management.",
"proc.badge":"HOW IT WORKS","proc.title":"From signing to serenity in 72 hours",
"proc.s1t":"Free Consultation","proc.s1d":"We assess your property, propose a strategy, and set expectations.",
"proc.s2t":"Onboarding & Audit","proc.s2d":"47-point property audit, professional photos, legal preparation.",
"proc.s3t":"Active Management","proc.s3d":"We find tenants, handle operations. You receive monthly reports.",
"proc.s4t":"You Live","proc.s4d":"Travel, work, rest. Your property earns on autopilot.",
"test.badge":"RESULTS","test.title":"What our clients say",
"cta.title":"Ready to stop being a manager and start being an investor?",
"cta.sub":"Book a 30-minute strategy call. Free, no obligations.",
"cta.btn":"Book a Call","cta.note":"We respond within 2 hours.",
"svc.heroTitle":"The NestLine 360\u00B0","svc.heroAccent":"Guardian System",
"svc.heroSub":"You\u2019re not hiring a manager. You\u2019re buying a system that protects your asset, maximizes returns, and gives you back your time.",
"svc.auditBadge":"47-POINT AUDIT","svc.auditTitle":"Every detail under control",
"svc.auditSub":"Before we take over management, we run a complete audit of your property. 47 checkpoints.",
"svc.cat1":"Technical","svc.cat1n":"12","svc.cat1i":"Electrical Systems|Plumbing|Heating|Windows & Insulation",
"svc.cat2":"Legal","svc.cat2n":"10","svc.cat2i":"Lease Agreement|Insurance|GDPR Compliance|Tax Optimization",
"svc.cat3":"Presentation","svc.cat3n":"8","svc.cat3i":"Professional Photography|Virtual Tour|Listing Optimization|Pricing Analysis",
"svc.cat4":"Operations","svc.cat4n":"9","svc.cat4i":"Key Management|Emergency Plan|Vendor Network|Communication System",
"svc.cat5":"Finance","svc.cat5n":"8","svc.cat5i":"Revenue Projection|Cash-flow Plan|Monthly Reporting|Tax Documentation",
"svc.pointsLabel":"points","svc.totalLabel":"total checkpoints",
"svc.outBadge":"OUTCOMES, NOT FEATURES",
"svc.o1p":"Phase 1: Tenant Acquisition","svc.o1t":"Property occupied by a quality tenant within 14 days","svc.o1d":"Credit checks, references from previous landlords, personal interview. No problem tenants.",
"svc.o2p":"Phase 2: Active Management","svc.o2t":"Zero contact with tenants on your end","svc.o2d":"24/7 emergency line, repair coordination, regular inspections. We handle everything.",
"svc.o3p":"Phase 3: Legal & Tax Shield","svc.o3t":"100% legal compliance without your involvement","svc.o3d":"Tax filings, legislative changes, dispute resolution. Your legal shield.",
"ref.heroTitle":"Real results,","ref.heroAccent":"real clients","ref.heroSub":"Real numbers, real people, real outcomes.",
"ref.probLabel":"PROBLEM","ref.solLabel":"SOLUTION","ref.resLabel":"RESULT",
"ref.c1t":"2+kk Flat, Prague 2 \u2014 Vinohrady","ref.c1p":"Owner spent 15+ hours/month managing. Two problem tenants in one year.","ref.c1s":"Complete audit, tenant replacement, presentation renovation, price optimization.","ref.c1r":"Returns +31%, 0 hours managing, 98% occupancy over 18 months.",
"ref.c2t":"3 Units, Prague 5 \u2014 Sm\u00EDchov","ref.c2p":"Owner abroad with no oversight. Inefficient communication, late payments.","ref.c2s":"Centralized management, automated payments, monthly dashboard reporting.","ref.c2r":"All payments on time, 200h/year saved, remote access to all data.",
"ref.c3t":"Investment Flat, Prague 7 \u2014 Hole\u0161ovice","ref.c3p":"Canadian expat investor. Language barrier, unfamiliarity with Czech law.","ref.c3s":"Bilingual management (EN/CZ), complete legal and tax representation.","ref.c3r":"Fully hands-off investment. Investor manages everything from Toronto.",
"about.heroTitle":"Canadian precision,","about.heroAccent":"Prague soul",
"about.heroSub":"NestLine was founded by a Czech expat who lived 20 years in Canada. I brought back the best \u2014 systems, standards, and respect for your time.",
"about.story":"Our mission: To offer property owners and tenants the quality, professionalism and peace of mind common in the most developed real estate markets.",
"about.v1t":"Transparency & Trust","about.v1d":"We communicate clearly, fairly and without unnecessary complications.",
"about.v2t":"Personal Approach","about.v2d":"We treat each property as unique and tailor our care to the needs of both owners and tenants.",
"about.v3t":"Premium Quality","about.v3d":"We specialize in discerning clients and luxury properties. Precision and professionalism are our standard.",
"about.photoAlt":"Katerina \u2014 NestLine Founder",
"cont.heroTitle":"Let\u2019s talk","cont.heroAccent":"about your property",
"cont.heroSub":"30 minutes that could save you hundreds of hours. Free, no strings attached.",
"cont.speed":"We respond within 2 hours",
"cont.name":"Name","cont.email":"Email","cont.phone":"Phone","cont.type":"Property Type","cont.message":"Message","cont.submit":"Submit",
"cont.opt1":"Apartment","cont.opt2":"Apartment Building","cont.opt3":"International Property","cont.opt4":"Multiple Properties",
"cont.or":"or","cont.calendly":"Book directly in calendar",
"ft.tagline":"Next-generation property management.","ft.col1":"Navigation","ft.col2":"Contact",
"ft.privacy":"Privacy Policy","ft.terms":"Terms of Service","ft.rights":"All Rights Reserved."
}
};

var currentLang = localStorage.getItem("nestline-lang") || "cs";
function T(key) { return dict[currentLang] && dict[currentLang][key] || key; }
function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(function(el) { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el) { el.placeholder = T(el.dataset.i18nPlaceholder); });
  document.documentElement.lang = currentLang === "cs" ? "cs" : "en";
  var btn = document.getElementById("lang-toggle-label");
  if (btn) btn.textContent = currentLang === "cs" ? "EN" : "CZ";
  var flag = document.getElementById("lang-flag");
  if (flag) flag.innerHTML = currentLang === "cs" ? canadaFlag : czFlag;
}
function toggleLang() {
  currentLang = currentLang === "cs" ? "en" : "cs";
  localStorage.setItem("nestline-lang", currentLang);
  applyLang();
}

function injectHeader() {
  var h = document.getElementById("site-header"); if (!h) return;
  h.innerHTML = '<div style="max-width:1140px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:72px"><a href="index.html"><img src="'+LOGO+'" alt="NestLine" style="height:30px;width:auto"></a><nav class="desktop-nav" style="display:flex;align-items:center;gap:36px"><a href="sluzby.html" class="nav-link" data-i18n="nav.services"></a><a href="reference.html" class="nav-link" data-i18n="nav.references"></a><a href="o-nas.html" class="nav-link" data-i18n="nav.about"></a><a href="kontakt.html" class="nav-link" data-i18n="nav.contact"></a></nav><div style="display:flex;align-items:center;gap:16px"><button onclick="toggleLang()" style="display:flex;align-items:center;gap:6px;background:var(--g100);border:none;padding:7px 14px;border-radius:100px;cursor:pointer;font-size:13px;font-weight:500;font-family:inherit;color:var(--navy)"><span id="lang-toggle-label">EN</span><span id="lang-flag">'+canadaFlag+'</span></button><a href="kontakt.html" class="btn-gold desktop-nav" data-i18n="nav.cta" style="padding:10px 24px;font-size:14px"></a><button class="mobile-menu-btn" onclick="document.getElementById(\'mobile-menu\').classList.toggle(\'open\')" style="display:none;background:none;border:none;cursor:pointer;color:var(--navy)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button></div></div><div id="mobile-menu" class="mobile-dropdown"><a href="sluzby.html" data-i18n="nav.services"></a><a href="reference.html" data-i18n="nav.references"></a><a href="o-nas.html" data-i18n="nav.about"></a><a href="kontakt.html" data-i18n="nav.contact"></a><a href="kontakt.html" class="btn-gold" data-i18n="nav.cta" style="display:block;text-align:center;margin-top:16px"></a></div>';
}

function injectFooter() {
  var f = document.getElementById("site-footer"); if (!f) return;
  f.innerHTML = '<div style="max-width:1140px;margin:0 auto"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:48px;margin-bottom:64px"><div><img src="'+LOGO+'" alt="NestLine" style="height:28px;width:auto;filter:brightness(0) invert(1);margin-bottom:16px"><p style="font-size:14px;line-height:1.7;max-width:280px" data-i18n="ft.tagline"></p></div><div><h4 style="color:#fff;font-size:13px;font-weight:600;letter-spacing:.1em;margin-bottom:20px" data-i18n="ft.col1"></h4><a href="sluzby.html" class="footer-link" data-i18n="nav.services"></a><a href="reference.html" class="footer-link" data-i18n="nav.references"></a><a href="o-nas.html" class="footer-link" data-i18n="nav.about"></a><a href="kontakt.html" class="footer-link" data-i18n="nav.contact"></a></div><div><h4 style="color:#fff;font-size:13px;font-weight:600;letter-spacing:.1em;margin-bottom:20px" data-i18n="ft.col2"></h4><p style="font-size:14px;margin-bottom:12px">info@nestline.cz</p><p style="font-size:14px;margin-bottom:12px">+420 723 000 601</p><p style="font-size:14px">Korunn\u00ED 2569/108, Vinohrady<br>110 00 Praha 10</p></div></div><div style="border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;font-size:13px"><span>\u00A9 2026 NestLine Property Management. <span data-i18n="ft.rights"></span></span><div style="display:flex;gap:24px"><span style="cursor:pointer" data-i18n="ft.privacy"></span><span style="cursor:pointer" data-i18n="ft.terms"></span></div></div></div>';
}

function injectCTA() {
  var c = document.getElementById("cta-section"); if (!c) return;
  c.innerHTML = '<div class="fade-in" style="max-width:1140px;margin:0 auto;padding:100px 24px;text-align:center"><h2 style="font-size:clamp(26px,4vw,40px);font-weight:800;color:#fff;letter-spacing:-.02em;max-width:640px;margin:0 auto 16px" data-i18n="cta.title"></h2><p style="font-size:16px;color:rgba(255,255,255,.6);margin-bottom:36px" data-i18n="cta.sub"></p><a href="kontakt.html" class="btn-gold" style="font-size:16px;padding:16px 40px" data-i18n="cta.btn"></a><p style="font-size:13px;color:rgba(255,255,255,.4);margin-top:16px" data-i18n="cta.note"></p></div>';
}

function initScrollAnimations() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach(function(el) { obs.observe(el); });
}

function initStickyHeader() {
  var header = document.getElementById("site-header");
  window.addEventListener("scroll", function() { header.classList.toggle("scrolled", window.scrollY > 40); });
}

document.addEventListener("DOMContentLoaded", function() {
  injectHeader(); injectFooter(); injectCTA(); applyLang(); initScrollAnimations(); initStickyHeader();
});
