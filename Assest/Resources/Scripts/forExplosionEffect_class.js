class explosionEffect
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.radius=70;
		this.frame = 0;
		this.frameX = 0;
		this.frameY = 0;
		this.spriteWidth = 595.3;
		this.spriteHeight = 512;
	}

	draw()
	{
		c.drawImage(explosion,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.radius,this.y-this.radius,this.spriteWidth/1.5,this.spriteHeight/1.5);
	}

	update()
	{
		this.draw();
		if(gameFrame%5==0)
		{
			this.frame++;
			if(this.frame>8)
			{
				this.frame=0;
			}

			if(this.frame==2 || this.frame==5 || this.frame==8)
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
			else if(this.frame<8)
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