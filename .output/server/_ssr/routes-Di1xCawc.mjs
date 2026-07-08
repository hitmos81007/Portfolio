import { a as __toESM } from "../_runtime.mjs";
import { B as performance_default, L as Vector3, z as init_performance } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { a as MeshDistortMaterial, c as Canvas, f as require_jsx_runtime, i as Float, l as useFrame, n as Stars, o as OrbitControls, p as require_react, r as Environment, s as Html, t as Sparkles } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { a as Medal, c as ExternalLink, d as ArrowRight, i as Send, l as Download, n as Star, o as MapPin, r as Sparkles$1, s as Mail, t as Trophy, u as Award } from "../_libs/lucide-react.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Di1xCawc.js
init_performance();
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	["About", "about"],
	["Academics", "academics"],
	["Skills", "skills"],
	["Projects", "projects"],
	["Certificates", "certificates"],
	["Awards", "awards"],
	["Contact", "contact"]
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : "border border-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)] font-display text-sm",
							children: "M"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Mohit S"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 md:flex",
						children: items.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${id}`,
							className: "rounded-full px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-white/5 hover:text-gold",
							children: label
						}) }, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "rounded-full bg-gradient-gold px-4 py-2 text-xs font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.03]",
						children: "Let's talk"
					})
				]
			})
		})
	});
}
function ClientOnly({ children, fallback = null }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function Avatar() {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock, mouse }, delta) => {
		if (!ref.current) return;
		const t = clock.getElapsedTime();
		const s = 1 + Math.sin(t * 1.2) * .02;
		ref.current.scale.setScalar(s);
		ref.current.rotation.y += (mouse.x * .6 - ref.current.rotation.y) * .05;
		ref.current.rotation.x += (-mouse.y * .3 - ref.current.rotation.x) * .05;
		ref.current.rotation.z += delta * .05;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Float, {
		speed: 1.4,
		rotationIntensity: .3,
		floatIntensity: .6,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [.4, 5] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
					color: "#c9a84c",
					emissive: "#8b6f2a",
					emissiveIntensity: .35,
					roughness: .15,
					metalness: .9,
					distort: .35,
					speed: 1.6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				scale: .55,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.4,
					32,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#f0d78c",
					transparent: true,
					opacity: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2.2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.75,
					.004,
					16,
					200
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#c9a84c",
					transparent: true,
					opacity: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 3,
					Math.PI / 4,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.92,
					.003,
					16,
					200
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#f0d78c",
					transparent: true,
					opacity: .45
				})]
			})
		]
	});
}
function FloatingIcons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: new Array(16).fill(0).map((_, i) => ({
		r: 1.8 + i % 3 * .35,
		speed: .2 + i % 5 * .06,
		y: (i - 8) * .22,
		size: .055 + i % 4 * .02,
		phase: i / 16 * Math.PI * 2
	})).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitIcon, { ...it }, i)) });
}
function OrbitIcon({ r, speed, y, size, phase }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (!ref.current) return;
		const t = clock.getElapsedTime() * speed + phase;
		ref.current.position.set(Math.cos(t) * r, y + Math.sin(t * 2) * .2, Math.sin(t) * r);
		ref.current.rotation.x += .01;
		ref.current.rotation.y += .015;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [size, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#f0d78c",
			emissive: "#c9a84c",
			emissiveIntensity: 1.2,
			metalness: .8,
			roughness: .2
		})]
	});
}
function HeroScene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 2],
		camera: {
			position: [
				0,
				0,
				8
			],
			fov: 42
		},
		gl: {
			antialias: true,
			alpha: true
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#0a0908"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					"#0a0908",
					6,
					16
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .3 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					5,
					5,
					5
				],
				intensity: 1.2,
				color: "#f0d78c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					-5,
					-3,
					-3
				],
				intensity: .6,
				color: "#c9a84c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcons, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				count: 220,
				scale: [
					12,
					10,
					6
				],
				size: 2,
				speed: .4,
				color: "#f0d78c",
				opacity: .7
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "night" })
		]
	});
}
function TypeCycle({ words, className }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [phase, setPhase] = (0, import_react.useState)("typing");
	(0, import_react.useEffect)(() => {
		const current = words[i];
		let timer;
		if (phase === "typing") if (text.length < current.length) timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
		else timer = setTimeout(() => setPhase("deleting"), 1500);
		else if (phase === "deleting") if (text.length > 0) timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
		else {
			setI((i + 1) % words.length);
			setPhase("typing");
		}
		return () => clearTimeout(timer);
	}, [
		text,
		phase,
		i,
		words
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] animate-pulse bg-[color:var(--gold)]" })]
	});
}
var student = {
	name: "Mohit S",
	short: "Mohit",
	titles: [
		"Student Developer",
		"AI Engineer",
		"Full Stack Developer",
		"ML Enthusiast",
		"Problem Solver"
	],
	tagline: "Building ideas into reality, one line of code at a time.",
	location: "India",
	email: "mohit@example.com",
	socials: {
		github: "https://github.com/",
		linkedin: "https://linkedin.com/in/",
		twitter: "https://x.com/",
		instagram: "https://instagram.com/"
	}
};
var about = {
	intro: "I'm a student developer obsessed with the intersection of intelligent systems and beautiful interfaces. From training models to shipping polished products — I love turning abstract ideas into things people can feel.",
	cards: [
		{
			title: "Passions",
			body: "AI, generative systems, product design, cinematic web."
		},
		{
			title: "Interests",
			body: "Computer vision, LLMs, edge inference, real-time graphics."
		},
		{
			title: "Strengths",
			body: "Fast learner, product intuition, end-to-end shipping."
		},
		{
			title: "Vision",
			body: "Human-centred AI that augments creativity, not replaces it."
		},
		{
			title: "Career Goals",
			body: "Ship AI products used by millions. Contribute to research."
		},
		{
			title: "Currently",
			body: "Exploring multimodal agents & real-time 3D on the web."
		}
	]
};
var academics = [
	{
		label: "CGPA",
		value: 9.2,
		suffix: "/10"
	},
	{
		label: "Department Rank",
		value: 3,
		prefix: "#"
	},
	{
		label: "Semester GPA (peak)",
		value: 9.6,
		suffix: ""
	},
	{
		label: "Scholarships",
		value: 4,
		suffix: ""
	},
	{
		label: "Dean's List",
		value: 5,
		suffix: "×"
	},
	{
		label: "Attendance",
		value: 96,
		suffix: "%"
	},
	{
		label: "Projects",
		value: 24,
		suffix: "+"
	},
	{
		label: "Honors",
		value: 8,
		suffix: ""
	}
];
var skills = [
	{
		name: "Python",
		group: "Language",
		level: 95
	},
	{
		name: "TypeScript",
		group: "Language",
		level: 92
	},
	{
		name: "Java",
		group: "Language",
		level: 82
	},
	{
		name: "C",
		group: "Language",
		level: 78
	},
	{
		name: "React",
		group: "Web",
		level: 94
	},
	{
		name: "Next.js",
		group: "Web",
		level: 90
	},
	{
		name: "Node.js",
		group: "Web",
		level: 88
	},
	{
		name: "FastAPI",
		group: "Web",
		level: 86
	},
	{
		name: "Supabase",
		group: "Cloud",
		level: 84
	},
	{
		name: "SQL",
		group: "Data",
		level: 88
	},
	{
		name: "Docker",
		group: "Cloud",
		level: 80
	},
	{
		name: "Git",
		group: "Tools",
		level: 92
	},
	{
		name: "TensorFlow",
		group: "AI",
		level: 85
	},
	{
		name: "PyTorch",
		group: "AI",
		level: 88
	},
	{
		name: "OpenCV",
		group: "AI",
		level: 82
	},
	{
		name: "Generative AI",
		group: "AI",
		level: 90
	},
	{
		name: "Computer Vision",
		group: "AI",
		level: 84
	},
	{
		name: "Data Science",
		group: "Data",
		level: 86
	}
];
var projects = [
	{
		title: "Aurora — Multimodal Agent",
		tag: "AI · Full Stack",
		body: "Voice + vision agent that plans tasks across apps using tool-use LLMs.",
		stack: [
			"Next.js",
			"FastAPI",
			"OpenAI",
			"PGVector"
		],
		href: "#",
		github: "#"
	},
	{
		title: "Vision Grader",
		tag: "Computer Vision",
		body: "Real-time OMR + handwriting grader for classrooms with 98% accuracy.",
		stack: [
			"PyTorch",
			"OpenCV",
			"React"
		],
		href: "#",
		github: "#"
	},
	{
		title: "Nimbus DB Studio",
		tag: "Developer Tools",
		body: "Beautiful, keyboard-first Postgres studio with AI query copilot.",
		stack: [
			"TS",
			"Tauri",
			"Supabase"
		],
		href: "#",
		github: "#"
	},
	{
		title: "Cinema-Web Portfolio Kit",
		tag: "Web · 3D",
		body: "Open-source Three.js portfolio starter used by 2k+ students.",
		stack: [
			"R3F",
			"GSAP",
			"Lenis"
		],
		href: "#",
		github: "#"
	},
	{
		title: "EchoNotes",
		tag: "AI · Product",
		body: "Turns lecture recordings into structured notes, mindmaps and quizzes.",
		stack: [
			"Whisper",
			"LLM",
			"Next.js"
		],
		href: "#",
		github: "#"
	},
	{
		title: "GreenGrid",
		tag: "ML · Sustainability",
		body: "Forecasts campus energy use; won National Innovation Hackathon.",
		stack: [
			"Python",
			"XGBoost",
			"FastAPI"
		],
		href: "#",
		github: "#"
	}
];
var certificates = [
	{
		name: "Deep Learning Specialization",
		issuer: "Coursera / DeepLearning.AI",
		year: "2025",
		cat: "AI"
	},
	{
		name: "AWS Cloud Practitioner",
		issuer: "AWS",
		year: "2025",
		cat: "Cloud"
	},
	{
		name: "Google Data Analytics",
		issuer: "Google",
		year: "2024",
		cat: "Data"
	},
	{
		name: "Microsoft Azure AI Fundamentals",
		issuer: "Microsoft",
		year: "2024",
		cat: "AI"
	},
	{
		name: "IBM Full Stack Developer",
		issuer: "IBM",
		year: "2024",
		cat: "Web"
	},
	{
		name: "Oracle Java SE 17",
		issuer: "Oracle",
		year: "2023",
		cat: "Programming"
	},
	{
		name: "Cisco Networking Essentials",
		issuer: "Cisco",
		year: "2023",
		cat: "Cybersecurity"
	},
	{
		name: "NPTEL Machine Learning",
		issuer: "NPTEL",
		year: "2024",
		cat: "AI"
	},
	{
		name: "Hackathon: National Winner",
		issuer: "SIH",
		year: "2025",
		cat: "Hackathons"
	},
	{
		name: "Leadership Excellence",
		issuer: "University",
		year: "2024",
		cat: "Leadership"
	},
	{
		name: "Ethical Hacking Workshop",
		issuer: "TechFest",
		year: "2024",
		cat: "Cybersecurity"
	},
	{
		name: "TensorFlow Developer",
		issuer: "Google",
		year: "2025",
		cat: "AI"
	}
];
var certCategories = [
	"All",
	"AI",
	"Cloud",
	"Web",
	"Data",
	"Programming",
	"Cybersecurity",
	"Hackathons",
	"Leadership"
];
var awards = [
	{
		name: "Smart India Hackathon — Winner",
		place: "Gold",
		year: 2025
	},
	{
		name: "National AI Innovation Award",
		place: "Gold",
		year: 2025
	},
	{
		name: "University Coding Championship",
		place: "Gold",
		year: 2024
	},
	{
		name: "Research Recognition — Best Paper",
		place: "Silver",
		year: 2024
	},
	{
		name: "Leadership Excellence Award",
		place: "Gold",
		year: 2024
	},
	{
		name: "Volunteer of the Year",
		place: "Silver",
		year: 2023
	},
	{
		name: "Academic Excellence Medal",
		place: "Gold",
		year: 2023
	},
	{
		name: "Best Project — Capstone",
		place: "Gold",
		year: 2025
	},
	{
		name: "Hack the Future — Special Mention",
		place: "Special",
		year: 2024
	}
];
var timeline = [
	{
		year: "2020",
		title: "School — Class XII",
		body: "Graduated with distinction, math & CS focus."
	},
	{
		year: "2021",
		title: "Started B.Tech CSE",
		body: "First lines of production code shipped."
	},
	{
		year: "2022",
		title: "First Hackathon Win",
		body: "Built an assistive vision app in 36 hours."
	},
	{
		year: "2023",
		title: "ML Research Assistant",
		body: "Contributed to a peer-reviewed vision paper."
	},
	{
		year: "2024",
		title: "Full Stack Intern",
		body: "Shipped features to 100k+ users at a fast-growing startup."
	},
	{
		year: "2025",
		title: "National Hackathon — Gold",
		body: "Led a 4-person team to first place nationally."
	},
	{
		year: "Next",
		title: "Building the future",
		body: "Founding-engineer roles, applied AI, research collabs."
	}
];
var testimonials = [
	{
		name: "Dr. A. Ramesh",
		role: "Professor, CSE",
		quote: "One of the sharpest students I've mentored. Rare mix of taste, rigour and shipping ability."
	},
	{
		name: "Priya Nair",
		role: "Senior Engineer, Startup",
		quote: "Mohit shipped features senior engineers would be proud of. Effortlessly reliable."
	},
	{
		name: "Rahul Verma",
		role: "Hackathon Judge",
		quote: "The polish on his demo was unreal. Product mind, engineer's hands."
	},
	{
		name: "Sneha Kapoor",
		role: "Peer & Collaborator",
		quote: "He makes hard things look calm. Best teammate I've had in college."
	}
];
var stats = [
	{
		label: "Projects Completed",
		value: 24
	},
	{
		label: "Hackathons",
		value: 12
	},
	{
		label: "Certificates",
		value: 18
	},
	{
		label: "Awards",
		value: 9
	},
	{
		label: "GitHub Contributions",
		value: 1840
	},
	{
		label: "Coding Hours",
		value: 4200
	},
	{
		label: "LeetCode Problems",
		value: 620
	},
	{
		label: "CodeChef Rating",
		value: 1912
	},
	{
		label: "HackerRank ★",
		value: 5
	},
	{
		label: "Open Source PRs",
		value: 46
	},
	{
		label: "Talks Given",
		value: 7
	},
	{
		label: "Visitors",
		value: 12800
	}
];
var gallery = [
	"Hackathon night at 3am — team huddle",
	"Keynote — presenting Aurora at TechFest",
	"Award ceremony — National Hackathon",
	"Workshop I ran on Generative AI",
	"College cultural fest — organizing team",
	"Research lab — vision experiments",
	"Team photo — capstone project",
	"Community meetup talk"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 opacity-90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-aurora" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScene, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_55%,oklch(0.09_0.005_60/0.85),transparent_70%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_92%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .2
						},
						className: "mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-twinkle" }), "Portfolio · 2026"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 40,
							filter: "blur(20px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.2,
							ease: [
								.2,
								.7,
								.2,
								1
							]
						},
						className: "text-gradient-gold text-[clamp(3rem,10vw,8.5rem)] leading-[0.95]",
						children: student.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .6
						},
						className: "mt-6 flex min-h-[2.5rem] items-center justify-center text-lg md:text-2xl text-foreground/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic text-muted-foreground mr-3",
							children: "I am a"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeCycle, {
							words: student.titles,
							className: "text-gold font-medium"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .9
						},
						className: "mt-8 max-w-xl text-sm md:text-base text-muted-foreground",
						children: student.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.1
						},
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#about",
								className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.04]",
								children: ["Explore journey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-foreground transition hover:bg-white/[0.06]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 px-6 py-3 text-sm text-foreground transition hover:bg-white/[0.04]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Contact me"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
					duration: 1
				},
				className: "pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-px bg-gradient-to-b from-[color:var(--gold)] to-transparent" })]
				})
			})
		]
	});
}
function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		ref,
		className: `relative mx-auto w-full max-w-7xl px-6 py-28 md:py-36 ${className}`,
		children: [(eyebrow || title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
			style: { y },
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-100px"
			},
			transition: {
				duration: .8,
				ease: [
					.2,
					.7,
					.2,
					1
				]
			},
			className: "mb-14 max-w-3xl",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/20 bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shadow-gold-glow" }), eyebrow]
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-6xl leading-[1.05] text-gradient-gold",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base md:text-lg text-muted-foreground",
					children: subtitle
				})
			]
		}), children]
	});
}
function CountUp({ to, duration = 1600, decimals = 0, prefix = "", suffix = "" }) {
	const [val, setVal] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance_default.now();
				const from = 0;
				const step = (now) => {
					const p = Math.min(1, (now - start) / duration);
					const eased = 1 - Math.pow(1 - p, 3);
					setVal(from + (to - from) * eased);
					if (p < 1) requestAnimationFrame(step);
				};
				requestAnimationFrame(step);
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString(),
			suffix
		]
	});
}
function Planet({ position, name, level, color, onHover }) {
	const ref = (0, import_react.useRef)(null);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const size = .18 + level / 100 * .35;
	useFrame((_, delta) => {
		if (!ref.current) return;
		ref.current.rotation.y += delta * .4;
		const target = hovered ? 1.4 : 1;
		ref.current.scale.lerp(new Vector3(target, target, target), .1);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref,
			onPointerOver: (e) => {
				e.stopPropagation();
				setHovered(true);
				onHover(name);
				document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				setHovered(false);
				onHover(null);
				document.body.style.cursor = "default";
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				size,
				32,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				emissive: color,
				emissiveIntensity: hovered ? 1.1 : .5,
				metalness: .6,
				roughness: .3
			})]
		}), hovered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
			center: true,
			distanceFactor: 8,
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-medium text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-gold",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 text-muted-foreground",
					children: [level, "%"]
				})]
			})
		})]
	});
}
function Galaxy({ onHover }) {
	const positions = (0, import_react.useMemo)(() => {
		const n = skills.length;
		const pts = [];
		const golden = Math.PI * (3 - Math.sqrt(5));
		const R = 3.4;
		for (let i = 0; i < n; i++) {
			const y = 1 - i / (n - 1) * 2;
			const radius = Math.sqrt(1 - y * y);
			const theta = golden * i;
			pts.push([
				Math.cos(theta) * radius * R,
				y * R,
				Math.sin(theta) * radius * R
			]);
		}
		return pts;
	}, []);
	const group = (0, import_react.useRef)(null);
	useFrame((_, delta) => {
		if (group.current) group.current.rotation.y += delta * .08;
	});
	const palette = [
		"#c9a84c",
		"#f0d78c",
		"#e0b95a",
		"#d4c48a",
		"#b8912f"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		children: [
			skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Planet, {
				position: positions[i],
				name: s.name,
				level: s.level,
				color: palette[i % palette.length],
				onHover
			}, s.name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.5,
				32,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#f0d78c" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					0,
					0
				],
				intensity: 2,
				color: "#f0d78c",
				distance: 12
			})
		]
	});
}
function SkillsGalaxy() {
	const [hovered, setHovered] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[600px] w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			dpr: [1, 2],
			camera: {
				position: [
					0,
					0,
					8
				],
				fov: 55
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
					attach: "background",
					args: ["#0a0908"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .15 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
					radius: 30,
					depth: 40,
					count: 2500,
					factor: 3,
					fade: true,
					speed: .6
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Galaxy, { onHover: setHovered }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
					enableZoom: false,
					enablePan: false,
					autoRotate: true,
					autoRotateSpeed: .4
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground",
			children: hovered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: hovered
			}) : "Drag to explore · hover a planet"
		})]
	});
}
var Github = ({ className = "h-4 w-4" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.7 18.3.5 12 .5z" })
});
var Linkedin = ({ className = "h-4 w-4" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2v4.6z" })
});
var Twitter = ({ className = "h-4 w-4" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
});
var Instagram = ({ className = "h-4 w-4" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	className,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "17.5",
			cy: "6.5",
			r: "1",
			fill: "currentColor"
		})
	]
});
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "Chapter I · About",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The person behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "not-italic text-foreground/80",
			children: "the code."
		})] }),
		subtitle: about.intro,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: about.cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					rotateX: -10
				},
				whileInView: {
					opacity: 1,
					y: 0,
					rotateX: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .7,
					delay: i * .08,
					ease: [
						.2,
						.7,
						.2,
						1
					]
				},
				whileHover: {
					y: -6,
					rotateX: 4,
					rotateY: -4
				},
				style: { transformStyle: "preserve-3d" },
				className: "glass group relative overflow-hidden rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px shimmer-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-[color:var(--ink)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-gradient-gold",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.body
					})
				]
			}, c.title))
		})
	});
}
function Academics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "academics",
		eyebrow: "Chapter II · Academic Excellence",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Numbers that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "quietly compound."
		})] }),
		subtitle: "A record earned across semesters — grades, rank, honors and the daily habit of showing up.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: academics.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: i * .06
				},
				className: "glass-strong group relative overflow-hidden rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--gold)]/10 blur-2xl transition group-hover:bg-[color:var(--gold)]/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl md:text-5xl font-display text-gradient-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							to: a.value,
							decimals: Number.isInteger(a.value) ? 0 : 1,
							prefix: a.prefix || "",
							suffix: a.suffix || ""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: a.label
					})
				]
			}, a.label))
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Chapter III · Skills Galaxy",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["An orbit of tools I ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "actually ship with."
		})] }),
		subtitle: "Each planet is a skill I use in real projects — sized by depth of experience.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong overflow-hidden rounded-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[600px] w-full bg-aurora" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsGalaxy, {})
			})
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Chapter IV · Project Universe",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Things I've ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "built and shipped."
		})] }),
		subtitle: "A selection of projects — real users, real problems, real polish.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .7,
					delay: i % 2 * .1
				},
				whileHover: { y: -8 },
				className: "glass group relative overflow-hidden rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0%),oklch(0.82_0.14_85/0.12),transparent_60%)] opacity-0 transition group-hover:opacity-100" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.24em] text-gold",
							children: p.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: ["0", i + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl text-gradient-gold",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: p.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-[color:var(--gold)]/20 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wider text-foreground/80",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.href,
							className: "inline-flex items-center gap-1.5 text-xs text-gold hover:underline",
							children: ["Live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.github,
							className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold",
							children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3 w-3" })]
						})]
					})
				]
			}, p.title))
		})
	});
}
function Certificates() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const list = cat === "All" ? certificates : certificates.filter((c) => c.cat === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "certificates",
		eyebrow: "Chapter V · Certificates Vault",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A museum of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "verified craft."
		})] }),
		subtitle: "Coursework, hackathons, cloud, AI — filtered by the room you'd like to enter.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap gap-2",
			children: certCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCat(c),
				className: `rounded-full px-4 py-1.5 text-xs transition ${cat === c ? "bg-gradient-gold text-[color:var(--ink)] shadow-gold-glow" : "glass text-muted-foreground hover:text-gold"}`,
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: list.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				layout: true,
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .5,
					delay: i * .04
				},
				whileHover: {
					y: -6,
					rotateY: 3
				},
				style: { transformStyle: "preserve-3d" },
				className: "glass-strong group relative overflow-hidden rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[color:var(--gold)]/[0.06] to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-2xl border border-[color:var(--gold)]/20 opacity-0 transition group-hover:opacity-100" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-5 w-5 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-medium text-foreground leading-snug",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							c.issuer,
							" · ",
							c.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold",
							children: c.cat
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-xs text-muted-foreground hover:text-gold",
							children: "Verify →"
						})]
					})
				]
			}, c.name))
		})]
	});
}
function Awards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "awards",
		eyebrow: "Chapter VI · Recognition Hall",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Trophies, medals, and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "nights that mattered."
		})] }),
		subtitle: "Selected recognitions from hackathons, research, leadership and academics.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: awards.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: i * .05
				},
				className: "glass-strong group relative flex items-start gap-4 overflow-hidden rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-[color:var(--gold)]/30 blur-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-6 w-6" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.24em] text-gold",
							children: a.place
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] text-muted-foreground",
							children: ["· ", a.year]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-lg text-foreground",
						children: a.name
					})]
				})]
			}, a.name))
		})
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "timeline",
		eyebrow: "Chapter VII · Journey",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The path so far — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "and where it's going."
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-16",
				children: timeline.map((t, i) => {
					const left = i % 2 === 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: left ? -40 : 40
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: { duration: .7 },
						className: `relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-16 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-4 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-gold shadow-gold-glow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `glass rounded-2xl p-6 ml-12 md:ml-0 ${left ? "md:mr-8 md:text-right" : "md:ml-8"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.24em] text-gold",
										children: t.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-2xl text-gradient-gold",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: t.body
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
						]
					}, t.year);
				})
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		eyebrow: "Chapter VIII · Words",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["What mentors and peers ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "say."
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
				initial: {
					opacity: 0,
					y: 40,
					rotateY: -5
				},
				whileInView: {
					opacity: 1,
					y: 0,
					rotateY: 0
				},
				viewport: { once: true },
				transition: {
					duration: .7,
					delay: i * .08
				},
				whileHover: {
					rotateY: 3,
					rotateX: -2,
					y: -6
				},
				style: { transformStyle: "preserve-3d" },
				className: "glass-strong rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex text-gold",
						children: [
							0,
							1,
							2,
							3,
							4
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-display text-2xl leading-snug text-foreground/90",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)] font-display",
							children: t.name.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-foreground",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t.role
						})] })]
					})
				]
			}, t.name))
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "stats",
		eyebrow: "Chapter IX · Dashboard",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["By the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "numbers."
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .04
				},
				className: "glass relative overflow-hidden rounded-xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-display text-gradient-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: s.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { width: 0 },
							whileInView: { width: "88%" },
							viewport: { once: true },
							transition: {
								duration: 1.4,
								delay: .2 + i * .03
							},
							className: "h-full bg-gradient-gold"
						})
					})
				]
			}, s.label))
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "gallery",
		eyebrow: "Chapter X · Gallery",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Moments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "from the road."
		})] }),
		subtitle: "Hackathons at 3am, keynotes, workshops, teams — glimpses of the last few years.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3 lg:grid-cols-4",
			children: gallery.map((caption, i) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .7,
						delay: i * .05
					},
					whileHover: { scale: 1.02 },
					className: `glass group relative min-h-[180px] overflow-hidden rounded-2xl p-5 ${[
						"md:col-span-2 md:row-span-2",
						"",
						"md:row-span-2",
						"",
						"",
						"md:col-span-2",
						"",
						""
					][i] || ""}`,
					style: { backgroundImage: `
                  radial-gradient(circle at 30% 30%, oklch(0.82 0.14 85 / 0.18), transparent 60%),
                  linear-gradient(135deg, oklch(0.2 0.01 70), oklch(0.12 0.005 60))
                ` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),oklch(0.9_0.12_88/0.15),transparent_60%)] opacity-0 transition group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] uppercase tracking-[0.24em] text-gold",
							children: ["Moment · 0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-foreground/90",
							children: caption
						})]
					})]
				}, caption);
			})
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Chapter XI · Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic",
			children: "something worth remembering."
		})] }),
		subtitle: "Open to internships, research collabs, hackathon teams and interesting ideas.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				className: "glass-strong space-y-4 rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								className: "mt-2 w-full rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60",
								placeholder: "Ada Lovelace"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								className: "mt-2 w-full rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60",
								placeholder: "you@domain.com"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							className: "mt-2 w-full resize-none rounded-lg border border-[color:var(--gold)]/20 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-[color:var(--gold)]/60",
							placeholder: "Tell me about your project or idea…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-[color:var(--ink)] shadow-gold-glow transition hover:scale-[1.03]",
						children: [sent ? "Sent — I'll reply soon" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.22em] text-gold",
						children: "Direct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${student.email}`,
						className: "mt-2 block font-display text-3xl text-gradient-gold hover:opacity-90",
						children: student.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
							" ",
							student.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: student.socials.github,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }),
								label: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: student.socials.linkedin,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" }),
								label: "LinkedIn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: student.socials.twitter,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4" }),
								label: "Twitter / X"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: student.socials.instagram,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }),
								label: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: `mailto:${student.email}`,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
								label: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLink, {
								href: "#",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }),
								label: "Resume"
							})
						]
					})
				]
			})]
		})
	});
}
function SocialLink({ href, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "group flex items-center gap-3 rounded-xl border border-[color:var(--gold)]/15 bg-white/[0.02] px-4 py-3 text-sm text-foreground transition hover:border-[color:var(--gold)]/50 hover:bg-white/[0.05]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-8 w-8 place-items-center rounded-full bg-white/5 text-gold transition group-hover:bg-gradient-gold group-hover:text-[color:var(--ink)]",
			children: icon
		}), label]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-[color:var(--gold)]/15 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-aurora opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-[color:var(--ink)] font-display text-xl shadow-gold-glow",
					children: "M"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-xl font-display text-2xl md:text-3xl text-gradient-gold",
					children: "\"Building ideas into reality, one line of code at a time.\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						student.name,
						" · Crafted with care"
					]
				})
			]
		})]
	});
}
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function CursorGlow() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let x = -500, y = -500;
		let tx = x, ty = y;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		window.addEventListener("mousemove", onMove);
		let raf = 0;
		const tick = () => {
			x += (tx - x) * .18;
			y += (ty - y) * .18;
			el.style.transform = `translate3d(${x - 140}px, ${y - 140}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[1] h-[280px] w-[280px] rounded-full opacity-40 mix-blend-screen blur-3xl",
		style: {
			background: "radial-gradient(closest-side, oklch(0.82 0.14 85 / 0.28), transparent 70%)",
			transform: "translate3d(-500px,-500px,0)"
		}
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { withCursor: true }) })
	});
}
function Page({ withCursor = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			withCursor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Academics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certificates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Awards, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
