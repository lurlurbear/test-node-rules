var u1={
	att1: 0,
	att2: 0,
	att3: 0,
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var RuleEngine = require('node-rules');
 
//define the rules 
var rules = [
{
    "condition": function(R) {
        R.when(this && (this.att1 >=50 && this.att2>=10));
    },
    "consequence": function(R) {
		console.log ("trigger rule1");
		this.att1 -=50;
		this.att2 -=10;
        this.att3  +=1;
        R.stop();
    }
},
{
    "condition": function(R) {
        R.when(this && (this.att1 >=20 && this.att2>=40));
    },
    "consequence": function(R) {
		console.log ("trigger rule2");
		this.att1 -=20;
		this.att2 -=40;
        this.att3  +=1;
        R.stop();
    }
},


];

var R = new RuleEngine(rules);

printUser = function(user){
	console.log("------------");
	console.log("user(",user.att1, user.att2, user.att3, ")");
	console.log("------------");
}

rl.on('line', (answer) => {
	changes = answer.split(" ");
	u1.att1 += parseInt(changes[0]);
	u1.att2 += parseInt(changes[1]);
	R.execute(u1,function(result){ u1 = result ; printUser(result);});
	rl.prompt();

});