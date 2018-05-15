'use strict';

const {h, Component, Text, Bold} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const items = require("./data");

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text bold green>I’m a Software Engineer!</Text>
            <br/>
            <Text>Senior <Text bold cyan>Back-End developer</Text> (Mostly w/ <Text bold cyan>Node.js</Text>, MongoDB and Redis. Junior <Text bold cyan>Data Scientist</Text>. <Text bold cyan >Scrum Master and Product Owner</Text> by Scrum Alliance</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
