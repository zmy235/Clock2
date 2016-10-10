window.onload=draw;
	function draw() {
		var canvas=document.getElementById('canvas');
		var context=canvas.getContext('2d');
		context.save(); //±£´æ
		context.translate(200,200);
		var deg=2*Math.PI/12;		
		//±íÅÌ	
		context.save();		
		context.beginPath();		
		for(var i=0;i<13;i++){
			var x=Math.sin(i*deg);
			var y=-Math.cos(i*deg);
			context.lineTo(x*150,y*150);							
		}
		var c=context.createRadialGradient(0,0,0,0,0,130);
		c.addColorStop(0,"#22f");
		c.addColorStop(1,"#0ef")
		context.fillStyle=c;
		context.fill();
		context.closePath();	
		context.restore();		
		//Êý×Ö
		context.save();
		context.beginPath();
		for(var i=1;i<13;i++){
			var x1=Math.sin(i*deg);
			var y1=-Math.cos(i*deg);
			context.fillStyle="#fff";
			context.font="bold 20px Calibri";
			context.textAlign='center';
			context.textBaseline='middle';
			context.fillText(i,x1*120,y1*120);						
		}
		context.closePath();	
		context.restore();	
		//´ó¿Ì¶È
		context.save();
		context.beginPath();		
		for(var i=0;i<12;i++){
			var x2=Math.sin(i*deg);
			var y2=-Math.cos(i*deg);
			context.moveTo(x2*148,y2*148);
			context.lineTo(x2*135,y2*135);							
		}		
		context.strokeStyle='#fff';
		context.lineWidth=4;
		context.stroke();
		context.closePath();	
		context.restore();
		//Ð¡¿Ì¶È
		context.save();
		var deg1=2*Math.PI/60;
		context.beginPath();		
		for(var i=0;i<60;i++){
			var x2=Math.sin(i*deg1);
			var y2=-Math.cos(i*deg1);
			context.moveTo(x2*146,y2*146);
			context.lineTo(x2*140,y2*140);							
		}		
		context.strokeStyle='#fff';
		context.lineWidth=2;
		context.stroke();
		context.closePath();	
		context.restore();	
		//ÎÄ×Ö
		context.save();
		context.strokeStyle="#fff";
		context.font=' 34px sans-serif';
		context.textAlign='center';
		context.textBaseline='middle';
		context.strokeText('canvas',0,65);	
		context.restore();	
		//new Date
		var time=new Date();
		var h=(time.getHours()%12)*2*Math.PI/12;
		var m=time.getMinutes()*2*Math.PI/60;
		var s=time.getSeconds()*2*Math.PI/60;
		
		

		//Ê±Õë
		context.save();
		context.rotate( h + m/12 + s/720) ;
		context.beginPath();
		context.moveTo(0,6);
		context.lineTo(0,-85);
		//context.arc(200,200,80,hz,hz,false);
		context.strokeStyle="#fff";
		context.lineWidth=6;
		context.stroke();
		context.closePath();
		context.restore();
		//·ÖÕë
		context.save();
		context.rotate( m+s/60 ) ;
		context.beginPath();
		context.moveTo(0,8);
		context.lineTo(0,-105);
		//context.arc(200,200,100,mz,mz,true);
		context.strokeStyle="#fff";
		context.lineWidth=4;
		context.stroke();
		context.closePath();
		context.restore();
		//ÃëÕë
		context.save();
		context.rotate( s ) ;
		context.beginPath();
		context.moveTo(0,10);
		context.lineTo(0,-120);
		//context.arc(200,200,120,sz,sz,true);
		context.strokeStyle="#fff";
		context.lineWidth=2;
		context.stroke();
		context.closePath();	
		context.restore();
		context.restore();//Õ»³ö
		setTimeout(draw, 1000);//¼ÆÊ±Æ÷
	
	}