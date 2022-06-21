class alienMissle
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.radius=25;
		this.spriteWidth = 416;
		this.spriteHeight = 531;
		this.motion = Math.random();
		this.subMotion = Math.random();
		this.increaseX = Math.random()*2 + 1;
		this.increaseY = Math.random()*2 + 1;
		this.angle = Math.random()*10;
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.x,this.y+40,this.radius,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();*/

		c.drawImage(missle,this.x-this.radius,this.y+this.radius-5,this.radius*2,this.radius*2);
		c.save();
		c.translate(this.x,this.y);
		c.rotate(91.1);
		c.drawImage(missleThruster,0-this.radius,0-this.radius,this.radius*2,this.radius*2);
		c.restore();
	}

	update()
	{
		this.draw();
		
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

class alienShip
{
	constructor(spawnPosition,basePosition,angle,baseAngle)
	{
		this.spawnPosition=spawnPosition;
		this.basePosition=basePosition;
		this.angle=Math.atan2((this.basePosition.y-20)-this.spawnPosition.y,(this.basePosition.x-20)-this.spawnPosition.x);
		this.baseAngle=baseAngle;
		this.spriteWidth = 573;
		this.spriteHeight = 815;
		this.frame = 0;
		this.frameA = 0;
		this.reduceX = 5;
		this.reduceY = 5;
		this.alienState = "flying";
		this.adjustX = 55;
		this.adjustY = 70;
		this.healthBarColor = "green";
		this.healthBarWidth = 100;
		this.distructable = false;
		this.timing = 0;
		this.baseTiming = parseInt(Math.random()+0.5 * 50);
		this.radiiX=2;
		this.radiiY=2;
		//this.baseTiming = 50;
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.spawnPosition.x,this.spawnPosition.y,70,Math.PI*2,false);
		c.fillStyle = "white";
		c.fill();
		c.closePath();*/
		/*c.fillRect(this.spawnPosition.x-53,this.spawnPosition.y-90,53,13);
		c.fillStyle = "white";
		c.fill();*/
		if(this.distructable)
		{
			c.beginPath();
			c.fillStyle = "white";
			c.fillRect(this.spawnPosition.x-53,this.spawnPosition.y-98,106,21);
			c.fill();
			c.fillStyle = this.healthBarColor;
			c.fillRect(this.spawnPosition.x-50,this.spawnPosition.y-95,this.healthBarWidth,15);
			c.fill();
			c.closePath();
		}

		if(this.alienState=="flying")
		{
			switch(this.frame)
			{
				case 0:
				{
					c.drawImage(ship0,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 1:
				{
					c.drawImage(ship1,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 2:
				{
					c.drawImage(ship2,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 3:
				{
					c.drawImage(ship3,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 4:
				{
					c.drawImage(ship4,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 5:
				{
					c.drawImage(ship5,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 6:
				{
					c.drawImage(ship6,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 7:
				{
					c.drawImage(ship7,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 8:
				{
					c.drawImage(ship8,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				default:
				{
					c.drawImage(ship0,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;
			}
		}
		
		if(this.alienState=="firing")
		{
			switch(this.frameA)
			{
				case 0:
				{
					c.drawImage(ship00,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 1:
				{
					c.drawImage(ship01,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 2:
				{
					c.drawImage(ship02,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 3:
				{
					c.drawImage(ship03,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 4:
				{
					c.drawImage(ship04,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 5:
				{
					c.drawImage(ship05,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 6:
				{
					c.drawImage(ship06,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 7:
				{
					c.drawImage(ship07,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 8:
				{
					c.drawImage(ship08,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 9:
				{
					c.drawImage(ship09,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 10:
				{
					c.drawImage(ship10,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 11:
				{
					c.drawImage(ship11,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 12:
				{
					c.drawImage(ship12,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 13:
				{
					c.drawImage(ship13,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 14:
				{
					c.drawImage(ship14,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 15:
				{
					c.drawImage(ship15,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 16:
				{
					c.drawImage(ship16,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				case 17:
				{
					c.drawImage(ship17,this.spawnPosition.x-this.adjustX,this.spawnPosition.y-this.adjustY,this.spriteWidth/this.reduceX,this.spriteHeight/this.reduceY);
				}
				break;

				default:
				{
					console.log("default");
					this.frameA=0;
					this.timing=0;
					this.alienState="flying";
				}
				break;
			}
		}

	}

	update()
	{
		this.draw();
		if(this.spawnPosition.y-30<=this.basePosition.y)
		{
			this.spawnPosition.x += (Math.cos(this.baseAngle))*3;
			this.spawnPosition.y += (Math.sin(this.baseAngle))*3;
		}
		else
		{
			this.spawnPosition.x += Math.cos(this.angle)*this.radiiX;
			this.spawnPosition.y += Math.sin(this.angle)*this.radiiY;
			this.distructable = true;
			if(this.radiiX<5 && this.radiiY<5 && this.timing==this.baseTiming)
			{
				this.radiiX+=0.02;
				this.radiiY+=0.02;
			}
		}
		this.angle+=0.05;
		if(gameFrame%5==0)
		{
			this.frame++;
			if(this.frame>8)
			{
				this.frame=0;
			}
			
			if(this.distructable)
			{
				this.timing++;
			}
			if(this.timing==this.baseTiming)
			{
				this.alienState = "firing";
			}
			if(this.alienState=="firing")
			{
				if(gameFrame%5==0)
				{
					this.frameA++;
					if(this.frameA>17)
					{
						this.frameA=0;
						this.timing=0;
						this.alienState="flying";
					}
				}
				if(this.healthBarWidth>1 && gameFrame%45==0)
				{
					alienMissleArray.push(new alienMissle(this.spawnPosition.x,this.spawnPosition.y));
				}
			}
		}

		if(this.healthBarWidth>70 && this.healthBarWidth<=100)
		{
			this.healthBarColor = "green";
		}
		else if(this.healthBarWidth>50 && this.healthBarWidth<=70)
		{
			this.healthBarColor = "yellow";
		}
		else if(this.healthBarWidth>30 && this.healthBarWidth<=50)
		{
			this.healthBarColor = "orange";
		}
		else
		{
			this.healthBarColor = "red";
		}
	}
}