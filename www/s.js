
//element
function c(e) { return document.createElement(e || 'div')}
function cn(e) { return document.createElementNS(n,e)}
function ce(o) {
	var e = c(o.e)
	if(o.a) { ao(e, o.a) }
	if(o.id) { a(e, 'id', o.id) }
	if(o.so) { a(e, 'style', so(e, o.so)) }
	if(o.s) { ss(e, o.s) }
	if(o.t) { t(e, o.t) }
	if(o.ih) { ih(e, o.ih) }
	if(o.oh) { oh(e, o.oh) }
	if(o.c && o.c.length) { for(ch of o.c) { add(e,ce(ch)) } }
	return e
}
function p(e) { return e.parentNode }
function pr(e) { return p(e).remove() }
function sb(e) { return p(e).children }
function sbr(e) { var pe = p(e); ih(pe, ''); add(pe, e) }

//append
function add(p,c) { p.append(c)}
function adds(p,c) { p.prepend(c)}

//select
function e(id) { return document.getElementById(id) }
function q(qq) { return document.querySelector(qq) }
function qa(qq) { return document.querySelectorAll(qq) }
function qe(el, qq) { return el.querySelector(qq) }
function qea(el, qq) { return el.querySelectorAll(qq) }

//attributes
function a(e, an, av) { e.setAttribute(an, av) }
function ga(e, an) { return e.getAttribute(an) }
function ao(e, ao) {
	for(at in ao) {
		e.setAttribute(at, ao[at].replace(/_/g, '-'))
	}
}
function ra(e, an) { e.removeAttribute(an) }

function ih(e, html) { e.innerHTML = html }
function oh(e, html) { e.outerHTML = html }
function t(e, text) { e.innerText = text }

//style
function s(e, sk, sv) { e.style[sk] = sv }
function ss(e, ss) { e.style = ss }
function so(sob) {
	var st = ''
	for(s in sob) { st += s + ':' + sob[s] + '; ' }
	return st.replace(/_/g, '-')
}
function se(sob) {
	const se = document.createElement('style')
	for(ss of sob) {
		var stl = ss.f + ' { '
		for(stl in ss.s) { stl += so(stl) }
		stl += '}'
		se.append(stl)
	}
	return se
}

//local storage
function ds(key,val) { return window.localStorage.setItem(key, val)}
function dg(key) { return window.localStorage.getItem(key)}
function dr(key) { return window.localStorage.removeItem(key)}
function dso(key, value) {localStorage.setItem(key, JSON.stringify(value))}
function dg(key) { return localStorage.getItem(key)}
function dgo(key) {return JSON.parse(localStorage.getItem(key))}

//classes
function ca(e, c) { e.classList.add(c)}
function cr(e, c) { e.classList.remove(c)}
function ct(e, c) { e.classList.toggle(c)}
function ctt(e, c) { e.classList.toggle(c, true)}
function ctf(e, c) { e.classList.toggle(c, false)}
function cc(e, cl) {return e.classList.contains(cl)}

//events
function ael(n, f) { addEventListener(n, f)}

//other
function sfa(a,k) { var ss = ''; for(i of a) { console.log(i); if(k) {ss+= i[k]} else { ss+= i }} return ss}


function notify(m, style = 'z-index: 100; padding: 22px; background-color: #ddd; color: #222;') {
	const n = c('div')
	ss(n, style)
	ca(n, 'c')
	ca(n, 'f')
	t(n, m)

	const x = c('div')
	t(x, 'ok')
	a(x, 'onclick', 'p(this).remove()')
	ca(x, 'action')
	ca(x, 'bottom')
	add(n,x)

	add(q('body'), n)
}



function slider(s) {
	const sld = ce({e: 'div', a: {class: 'slider'}})

	for(slide of s.slides) {
		add(sld, ce({e: 'div', a: {class: 'slide'}, ih: ce(slide)} ))
	}

	add(e(s.element), sld)
}


	function objectify(el) {
		var o = {}
		o.e = el.nodeName

		if(el.attributes.length) {
			o.a = {}
			for(attr of el.attributes) {
				o.a[attr.name] = attr.value
			}
		}

		if(el.children.length) {
			o.c = []
			for(ch of el.children) {
				o.c.push(objectify(ch))
			}
	        var child = e.lastElementChild;

		}

		return o
	}


	function post(url, data) {
	  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
	}

	function loadJson(path) {
		fetch(path)
		.then(response => response.json())
		.then(json => {
			files = json
		})
	}

function loadCsv(path) {
	var lines = []
	var keys = []
	var entries = []

		fetch(path)
		.then(response => response.text())
		.then(text => {
			lines = text.split(/\n/)
			keys = lines[0].split(',')

			for(line of lines) {
				let values = line.split(',')
				let entry = {}
				for(key in keys) {
					entry[keys[key]] = values[key]
				}
				entries.push(entry)
			}
		})

		return entries
	}
