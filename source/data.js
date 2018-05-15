'use strict';

const terminalImage = require('terminal-image');
const path = require('path');

module.exports = [
	{
		label: 'Website',
		url: 'https://mrm8488.github.io/'
    },
    {
        label: "Search Engine from scrach",
        url: "https://mrm8488.github.io/#portfolioModal3"
    },
    {
        label: "Artist's Social Network",
        url: "https://mrm8488.github.io/#portfolioModal1"
    },
    {
        label: "Microservice for getting a GIF based on HTTP errors",
        url: "https://github.com/mrm8488/errorGiphy-service/blob/master/README.md"
    },
	{
		label: 'Twitter',
		url: 'https://twitter.com/mrm8488'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/mrm8488'
	},
	{
		label: 'Dev.to posts',
		url: 'https://dev.to/mrm8488'
	},
	{
		label: 'Contact Me! / Ask Me Anything!',
		url: 'https://mrm8488.github.io/#contact'
    },
    {
        label: 'See some of my pets!',
        url: 'https://photos.app.goo.gl/0rsP4sMCoIuf5SOz1'
    },
	{
		label: 'Unicorns!',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
			console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
		}
	},
	{
		label: 'Quit',
		action() {
			process.exit(0);
		}
	}
];
