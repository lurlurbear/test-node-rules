
var RuleEngine = require('node-rules');
var {rules} = require ('./rules');
var R = new RuleEngine(rules);

var u1={
	att1: 0,
	att2: 0,
	att3: 0,
	print:function() { console.log("user(",this.att1, this.att2, this.att3, ")"); }
};


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.prompt();
rl.on('line', (answer) => {
	changes = answer.split(" ");
	u1.att1 += parseInt(changes[0]);
	u1.att2 += parseInt(changes[1]);
	R.execute(u1,function(result){ u1 = result ; u1.print();});
	rl.prompt();
});