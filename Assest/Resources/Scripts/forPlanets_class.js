class bgPlanets
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.radius = Math.random()*380 + 200;
		this.speed=Math.random()*0.5 + 0.5;
		this.baseY=this.y;
		this.planet = Math.floor(Math.random()*10);
		this.angle=0;
		this.p=Math.random();
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();*/
		c.save();
		c.translate(this.x,this.y);
		c.rotate(this.angle);
		switch(this.planet)
		{
			case 0:
			{
				c.drawImage(planet1,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 1:
			{
				c.drawImage(planet2,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 2:
			{
				c.drawImage(planet3,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 3:
			{
				c.drawImage(planet4,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 4:
			{
				c.drawImage(planet5,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 5:
			{
				c.drawImage(planet6,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 6:
			{
				c.drawImage(planet7,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 7:
			{
				c.drawImage(planet8,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 8:
			{
				c.drawImage(planet9,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			case 9:
			{
				c.drawImage(planet10,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;

			default:
			{
				c.drawImage(planet5,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
			}
			break;
		}
		//c.drawImage(planets,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
		c.restore();
	}

	update()
	{
		this.draw();
		this.y+=this.speed;
		if(this.y>=canvas.height+this.radius+100)
		{
			this.radius = Math.random()*380 + 200;
			this.x=Math.random()*canvas.width;
			this.y=this.baseY;
			this.planet = Math.floor(Math.random()*12);
		}
		if(this.p>=0.5)
		{
			this.angle+=0.001;
		}
		else
		{
			this.angle-=0.001;
		}
	}
}