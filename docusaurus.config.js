const path = require('path');
const fs = require('fs');

const AT_NOTATION_KEYS = {
	short: 'Short',
	type: 'Type',
	descr: 'Descr',
	changelog: 'Changelog',
	signature: 'Signature',
	params: 'Params',
	returns: 'Returns',
	values: 'Values'
};

const COMPONENTS_PATH = '@site/src/components';

let components = { Disqus: "Disqus" };
let metaDescription = '';

const wrapDataWithComponent = (data, componentName) => {
	return componentName ? `\n<${componentName}>\n${data}\n\n</${componentName}>\n\n` : data;
}

const onAtNotationMatch = (data, { key }) => {
	const componentName = AT_NOTATION_KEYS[key];
	if (componentName) {
		components[componentName] = componentName;
	}

	switch(key) {
		case 'default':
			return `<strong>Default value: </strong> ${data}`;
		case 'example':
			return `**Example**\n~~~js\n${data.replace(/^(?:\n*)([^]+?)(?:\n*)$/g, '$1')}\n~~~`;
		case 'metadescr':
			metaDescription = data.replace(/^(?:\n*)(.+)(?:\n|.)*/, '$1');
			return '';
		// TODO: remove later
		case 'relatedsample':
			return data;
		default:
			return componentName
				? wrapDataWithComponent(data, componentName)
				: data;
	}
};

const onAtNotationFunctionMatch = (data, { key, fullMatch, dir }) => {
	if (data.indexOf('.md') !== -1 || data.indexOf('.mdx') !== -1 || data.indexOf('.') === -1) {
		const result = readFile(dir, data);
		return result ? /@short: (.*)/g.exec(result)[1] : fullMatch;
	}
	return fullMatch;
}

const onBraceNotationMatch = (data, { key, fullMatch }) => {
	switch(key) {
		case 'note':
			return `:::note\n${data}\n:::`;
		case 'pronote':
			return `:::tip Pro version only\n${data}\n:::`;
		case 'editor':
			return data;
		default:
			return fullMatch;
	}
};

const readFile = (workingDir, filePath) => {
	workingDir = workingDir.replace(/\\/g, '/');
	filePath = filePath.replace(/\\/g, '/');
	let finalPath = workingDir + '/' + filePath;

	if (finalPath.indexOf('.') === -1) {
		finalPath += !fs.existsSync(finalPath + '.md') ? '.mdx' : '.md';
	}

	if (!fs.existsSync(finalPath)) {
		const clippedFilePath = filePath.split('/');
		clippedFilePath.shift();
		if (!clippedFilePath.length) {
			return false;
		}
		return readFile(workingDir, clippedFilePath.join('/'));
	}

	return fs.readFileSync(path.normalize(finalPath), 'utf8');
};

const onEmptyLinkMatch = (data, { key, fullMatch, dir }) => {
	const filePath = fullMatch.substring(fullMatch.indexOf('(') + 1, fullMatch.length - 1);
	if (filePath.indexOf('.md') !== -1 || filePath.indexOf('.mdx') !== -1 || filePath.indexOf('.') === -1) {
		const data = readFile(dir, filePath);
		return data ? `[${/.*sidebar_label: (.+)/g.exec(data)[1]}]${fullMatch.match(/\(\D+\)/g)[0]}` : fullMatch;
	}
	return fullMatch;
};

const onAfterDataTransformation = (data) => {
	const allAvailableComponents = Object.values(components);
	let transformedData = data;

	if (allAvailableComponents.length !== 0) {
		const imports = `import { ${allAvailableComponents.join(', ')} } from '${COMPONENTS_PATH}';\n\n`;
		const isTitles = /---((?:\r?\n|\r)|.)+?---/.test(transformedData);
		transformedData = isTitles
			? (transformedData.replace(/^(---((?:\s*\n)|.)+?---)/, `$1\n\n${imports}`) + "\n\n<Disqus />")
			: imports + transformedData;
	}

	if (metaDescription) {
		transformedData = transformedData.replace(/^(---\s*\n)((?:\n|.)+?)(---\s*?\n*)/,  (fullMatch, groupA, groupB, groupC) => {
			const isDocusaurusDescriptionExist = /^description: *.*\n/m.test(fullMatch);
			if (!isDocusaurusDescriptionExist) {
				return `${groupA}description: ${metaDescription}\n${groupB}${groupC}`;
			}
			return fullMatch;
		});
	}

	components = { Disqus: "Disqus" };
	metaDescription = '';

	return transformedData;
};
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	noIndex: false,
	title: 'DHTMLX Event Calendar Docs',
	tagline: 'DHTMLX Event Calendar Docs',
	url: 'https://docs.dhtmlx.com',
	baseUrl: '/eventcalendar/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	onBrokenAnchors: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'DHTMLX', // Usually your GitHub org/user name.
	projectName: 'docs-calendar', // Usually your repo name.
	trailingSlash: true,
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/DHTMLX/docs-calendar/edit/master/',
					routeBasePath: '/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				sitemap: {
					changefreq: 'daily',
					priority: 0.5,
					// trailingSlash: true
				},
			}),
		],
  	],
	plugins: [
		'docusaurus-plugin-sass',
		[
			path.resolve(__dirname, './plugins/dhx-md-data-transformer-plugin'),
			{
				onBraceNotationMatch,
				onAtNotationMatch,
				onAtNotationFunctionMatch,
				onEmptyLinkMatch,
				onAfterDataTransformation
			}
		],
		[
			require.resolve('docusaurus-gtm-plugin'),
			{
				id: 'GTM-5M5RCSJ'
			}
		]
	],
	themes: [ 
		[ // Local search parameters
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				indexDocs: true,
				indexPages: true,
				hashed: true,
				highlightSearchTermsOnTargetPage: true,
				removeDefaultStemmer: true,
				removeDefaultStopWordFilter: true,
				explicitSearchResultPath: true
			}
		]
	],

  	themeConfig:
    /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		navbar: {
			title: 'JavaScript Event Calendar Documentation',
			logo: {
				alt: 'DHTMLX JavaScript Event Calendar Logo',
				src: 'img/logo.svg',
				href: 'https://docs.dhtmlx.com/'
			},
			items: [
				{
					"label": "Examples",
					"href": "https://snippet.dhtmlx.com/qw45r367?tag=event_calendar",
					"position": "right"
				},
				{
					"label": "Forum",
					"href": "https://forum.dhtmlx.com/c/event-calendar/",
					"position": "right"
				},
				{
					"label": "Support",
					"href": "https://dhtmlx.com/docs/technical-support.shtml",
					"position": "right"
				},
				{
					"label": "Download",
					"href": "https://dhtmlx.com/docs/products/dhtmlxEventCalendar/download.shtml",
					"position": "right"
				}
			]
		},
    	footer: {
			"style": "dark",
			"links": [
				{
					"title": "Development center",
					"items": [
						{
							"label": "Download Event Calendar",
							"href": "https://dhtmlx.com/docs/products/dhtmlxEventCalendar/download.shtml",
							"position": "right"
						},
						{
							"label": "Examples",
							"href": "https://snippet.dhtmlx.com/qw45r367?tag=event_calendar",
							"position": "right"
						},
						{
							"label": "Blog",
							"href": "https://dhtmlx.com/blog/"
						},
						{
							"label": "Forum",
							"href": "https://forum.dhtmlx.com/c/event-calendar/",
							"position": "right"
						}
					]
				},
				{
					"title": "Community",
					"items": [
						{
							"label": "GitHub",
							"href": "https://github.com/DHTMLX"
						},
						{
							"label": "Youtube",
							"href": "https://www.youtube.com/user/dhtmlx"
						},
						{
							"label": "Facebook",
							"href": "https://www.facebook.com/dhtmlx"
						},
						{
							"label": "Twitter",
							"href": "https://twitter.com/dhtmlx"
						},
						{
							"label": "Linkedin",
							"href": "https://www.linkedin.com/groups/3345009/"
						}
					]
				},
				{
					"title": "Company",
					"items": [
						{
							"label": "About us",
							"href": "https://dhtmlx.com/docs/company.shtml"
						},
						{
							"label": "Contact us",
							"href": "https://dhtmlx.com/docs/contact.shtml"
						},
						{
							"label": "Licensing",
							"href": "https://dhtmlx.com/docs/products/dhtmlxEventCalendar/#licensing"
						}
					]
				}
			]
		},
    	prism: {
			//theme: lightCodeTheme,
			//darkTheme: darkCodeTheme,
		}
    })
};

module.exports = config;
