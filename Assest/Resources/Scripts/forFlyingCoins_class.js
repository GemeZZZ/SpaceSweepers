class flyingCoins
{
	constructor(x,y)	
	{
		this.x=x;
		this.y=y;
		this.radius=50;
		this.speed = Math.random()*3 + 2;
		this.spriteWidth = 276;
		this.spriteHeight = 254;
		this.frame=0;
		this.frameX=0;
		this.frameY=0;
		this.coin = Math.random();
		this.coinType = Math.random();
		this.coinName;
		this.motion = Math.random();
		this.subMotion = Math.random();
		this.increaseX = Math.random()*1.5 + 0.5;
		this.increaseY = Math.random()*1.5 + 0.5;
		this.adjustX=80;
		this.adjustY=80;
		this.angle = Math.random()*10;
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "green";
		c.fill();
		c.closePath();*/

		if(this.coin<=0.33)
		{
			this.coinName = "GOLD";
			if(this.coinType<=0.5)
			{
				c.drawImage(goldCoin_upDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);
			}
			else
			{
				c.drawImage(goldCoin_noUpDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);		
			}
		}
		else if(this.coin>0.33 && this.coin<=0.66)
		{
			this.coinName = "SILVER";
			if(this.coinType<=0.5)
			{
				c.drawImage(silverCoin_upDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);
			}
			else
			{
				c.drawImage(silverCoin_noUpDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);		
			}
		}	
		else
		{
			this.coinName = "BRONZE";
			if(this.coinType<=0.5)
			{
				c.drawImage(bronzeCoin_upDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);
			}
			else
			{
				c.drawImage(bronzeCoin_noUpDown,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-this.adjustX,this.y-this.adjustY,this.spriteWidth/1.5,this.spriteHeight/1.5);		
			}
		}
	}

	update()
	{
		this.draw();
		if(gameFrame%5==0)
		{
			this.frame++;
			if(this.frame>14)
			{
				this.frame=0;
			}

			if(this.frame==2 || this.frame==5 || this.frame==8 || this.frame==11 || this.frame==14)
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
			else if(this.frame<11)
			{
				this.frameY=3;
			}
			else if(this.frame<14)
			{
				this.frameY=4;
			}
			else
			{
				this.frameY=0;
			}
		}

		if(this.motion>0 && this.motion<=0.3)
		{
			if(this.subMotion>=0.5)	
			{
				this.y+=this.increaseY;
			}
			else
			{
				this.y+=4.2;
			}
			this.increaseY+=0.03;
		}
		else if(this.motion>0.3 && this.motion<=0.7)
		{
			if(this.subMotion<=0.25)
			{
				this.x+=Math.cos(this.angle)*this.increaseX;
				this.y+=Math.sin(this.angle)*2;
				this.angle+=0.05;
				this.y+=this.increaseY/2;
				this.increaseX+=0.03;
				this.increaseY+=0.03;
			}
			else if(this.subMotion>0.25 && this.subMotion<=0.50)
			{
				this.x+=Math.cos(this.angle)*2;
				this.y+=Math.sin(this.angle)*this.increaseY;
				this.angle+=0.05;
				this.y+=this.increaseX/2;
				this.increaseX+=0.03;
				this.increaseY+=0.03;	
			}
			else if(this.subMotion>0.5 && this.subMotion<=0.75)
			{
				this.x+=Math.cos(this.angle)*this.increaseX;
				this.y+=Math.sin(this.angle)*this.increaseY;
				this.angle+=0.05;
				this.y+=this.increaseY/2;
				this.increaseX+=0.03;
				this.increaseY+=0.03;		
			}
			else
			{
				this.x+=Math.cos(this.angle)*2;
				this.y+=Math.sin(this.angle)*2;
				this.angle+=0.05;
				this.y+=1.2;
			}
		}
		else
		{
			if(this.subMotion>=0.5)
			{
				this.x+=Math.cos(this.angle)*this.increaseX;
				this.y+=this.increaseY;
				this.angle+=0.05;
				this.increaseX+=0.03;
				this.increaseY+=0.03;
			}
			else
			{
				this.x+=Math.cos(this.angle)*3;
				this.y+=2.2;
				this.angle+=0.05;
			}
		}
	}
}