 //define the rules 
const rules = [
 
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

exports.rules = rules;
