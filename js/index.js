window.onload=function(){
	var text="浙江理工大学";
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	text=text.split("");
	var font=14;//设置文字的大小
	var arr=[];//初始化显示的文字的y值
	for(var i=0,rowLen=canvas.width/font;i<rowLen;i++){
		arr[i]=1;
	}
	function draw(){
		ctx.fillStyle="#333333";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="#00FF00";
		for(var i=0;i<arr.length;i++){
			var txt=text[Math.floor(Math.random()*text.length)];
			ctx.fillText(txt,font*i,arr[i]*font);
			ctx.fill();
			arr[i]=arr[i]+1;
			if(arr[i]>canvas.height || Math.random()>0.9){
				arr[i]=0;
			}
		}
   		
   	}
	//draw();
   	setInterval(draw,50);		
}
