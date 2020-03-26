var a=10,fn,bar=function(x){
    var b=5;
    fn(x+b);
};

fn=function(y){
var c=5;
    console.log(y+c);
}
bar(10);