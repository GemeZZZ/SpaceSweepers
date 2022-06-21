class sparkelEffect
{
	constructor(x,y,radius)
	{
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.spriteWidth = 64;
		this.spriteHeight = 64;
		this.frame = 0;
		this.frameX = 0;
		this.frameY = 0;
		this.p = Math.random();
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "white";
		c.fill();
		c.closePath();*/

		c.save();
		c.translate(this.x,this.y);
		if(this.p>=0.5)
		{
			c.rotate(angle);
		}
		else
		{
			c.rotate(reverseAngle);	
		}
		c.drawImage(effect,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,
			0-this.radius,0-this.radius,this.radius*2,this.radius*2);
		c.restore();
	}

	update()
	{
		this.draw();
		if(this.radius<200)
		{
			this.radius+=5;
		}

		if(gameFrame%10==0)
		{
			this.frame++;
			if(this.frame>9)
			{
				this.frame=0;
			}

			if(this.frame==2 || this.frame==5 || this.frame==9)
			{
				this.frameX=0;
			}
			else
			{
				this.frameX++;
			}

			if(this.frame<2)
			{
				this.frameY=0;
			}
			else if(this.frame<5)
			{
				this.frameY=1;
			}
			else if(this.frame<9)
			{
				this.frameY=2;
			}
			else
			{
				this.frameY=0;
			}
		}
	}
}