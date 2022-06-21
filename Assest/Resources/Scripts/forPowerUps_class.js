function drawPowerBar(max)
{
	
	c.drawImage(meter_blue,canvas.width-380,canvas.height-170,75,75);
	
	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(canvas.width-300,canvas.height-150,206,36);
	if(max>160)
	{
		c.fillStyle = "green";
	}
	else if(max>110)
	{
		c.fillStyle = "yellow";
	}
	else if(max>50)
	{
		c.fillStyle = "orange";
	}
	else
	{
		c.fillStyle = "red";
	}
	c.fillRect(canvas.width-297,canvas.height-147,max,30);
	c.closePath();

	c.drawImage(power_icon,canvas.width-365,canvas.height-150,45,45);
	c.beginPath();
	c.fillStyle = "lightblue";
	c.font = "30px sectar";
	c.fillText("EXTRA POWER",canvas.width-300,canvas.height-80);
	c.closePath();
}
function drawSheildBar(max)
{
	c.drawImage(meter_purple,canvas.width-380,canvas.height-170,75,75);

	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(canvas.width-300,canvas.height-150,206,36);
	if(max>160)
	{
		c.fillStyle = "green";
	}
	else if(max>110)
	{
		c.fillStyle = "yellow";
	}
	else if(max>50)
	{
		c.fillStyle = "orange";
	}
	else
	{
		c.fillStyle = "red";
	}
	c.fillRect(canvas.width-297,canvas.height-147,max,30);
	c.closePath();

	c.drawImage(sheild_icon,canvas.width-365,canvas.height-150,45,45);
	c.beginPath();
	c.fillStyle = "blueviolet";
	c.font = "30px sectar";
	c.fillText("SPACE SHEILD",canvas.width-300,canvas.height-80);
	c.closePath();
}
function drawXPBar(max)
{
	c.drawImage(meter_pink,canvas.width-380,canvas.height-170,75,75);
	
	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(canvas.width-300,canvas.height-150,206,36);
	if(max>160)
	{
		c.fillStyle = "green";
	}
	else if(max>110)
	{
		c.fillStyle = "yellow";
	}
	else if(max>50)
	{
		c.fillStyle = "orange";
	}
	else
	{
		c.fillStyle = "red";
	}
	c.fillRect(canvas.width-297,canvas.height-147,max,30);
	c.closePath();	

	c.drawImage(extra_point_icon,canvas.width-365,canvas.height-150,45,45);
	c.beginPath();
	c.fillStyle = "pink";
	c.font = "30px sectar";
	c.fillText("EXTRA POINTS",canvas.width-300,canvas.height-70);
	c.closePath();
}
let powerUpsItems = ["sheild","power","extraPoits"];
class powerUps
{
	constructor(x,y,radius)
	{
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.speed = Math.random()*5 + 2;
		this.type = powerUpsItems[Math.floor(Math.random()*powerUpsItems.length)];
		//this.type="sheild";
		this.frameX = 0;
		this.p = Math.random();
	}

	draw()
	{
		/*c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();*/
		if(this.type=="sheild")
		{
			if(this.p<=0.25)
			{
				switch(this.frameX)
				{
					case 0:
					{
						c.drawImage(sheild_normal_1,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 1:
					{
						c.drawImage(sheild_normal_2,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 2:
					{
						c.drawImage(sheild_normal_3,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 3:
					{
						c.drawImage(sheild_normal_4,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 4:
					{
						c.drawImage(sheild_normal_5,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 5:
					{
						c.drawImage(sheild_normal_6,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;
				}
			}
			else if(this.p>0.25 && this.p<=0.50)
			{
				switch(this.frameX)
				{
					case 0:
					{
						c.drawImage(sheild_low_1,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 1:
					{
						c.drawImage(sheild_low_2,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 2:
					{
						c.drawImage(sheild_low_3,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 3:
					{
						c.drawImage(sheild_low_4,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 4:
					{
						c.drawImage(sheild_low_5,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 5:
					{
						c.drawImage(sheild_low_6,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;
				}
			}
			else if(this.p>0.50 && this.p<=0.75)
			{
				switch(this.frameX)
				{
					case 0:
					{
						c.drawImage(sheild_medium_1,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 1:
					{
						c.drawImage(sheild_medium_2,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 2:
					{
						c.drawImage(sheild_medium_3,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 3:
					{
						c.drawImage(sheild_medium_4,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 4:
					{
						c.drawImage(sheild_medium_5,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 5:
					{
						c.drawImage(sheild_medium_6,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;
				}
			}
			else
			{
				switch(this.frameX)
				{
					case 0:
					{
						c.drawImage(sheild_high_1,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 1:
					{
						c.drawImage(sheild_high_2,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 2:
					{
						c.drawImage(sheild_high_3,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 3:
					{
						c.drawImage(sheild_high_4,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 4:
					{
						c.drawImage(sheild_high_5,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;

					case 5:
					{
						c.drawImage(sheild_high_6,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
					}
					break;
				}	
			}
		}
		else if(this.type=="power")
		{
			c.drawImage(power_icon,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);
		}
		else
		{
			c.drawImage(extra_point_icon,this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2);	
		}
	}

	update()
	{
		this.draw();
		this.y+=this.speed;

		if(this.type=="sheild")
		{
			if(gameFrame%5==0)
			{
				this.frameX++;
				if(this.frameX>5)
				{
					this.frameX=0;
				}
			}
		}
	}
}

class powerUpEffect
{
	constructor(x,y,radius,p,type)
	{
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.p=p;
		this.type=type;
		this.adjust=100;
		this.healthBarWidth=200;
		this.baseRadius = this.radius;
	}

	showPower()
	{
		c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.strokeStyle="red";
		c.stroke();
		c.closePath();
		c.beginPath();
		c.arc(this.x,this.y,this.radius+20,Math.PI*2,false);
		c.strokeStyle="yellow";
		c.stroke();
		c.closePath();
		c.beginPath();
		c.arc(this.x,this.y,this.radius+40,Math.PI*2,false);
		c.strokeStyle="orange";
		c.stroke();
		c.closePath();
		c.beginPath();
		c.arc(this.x,this.y,this.radius+60,Math.PI*2,false);
		c.strokeStyle="purple";
		c.stroke();
		c.closePath();
		drawPowerBar(this.healthBarWidth);
	}

	drawShield()
	{
		if(this.p<=0.25)
		{
			c.drawImage(sheild_bg_1,this.x-this.adjust,this.y-this.adjust,this.radius,this.radius);
		}
		else if(this.p>0.25 && this.p<=0.50)
		{
			c.drawImage(sheild_bg_2,this.x-this.adjust,this.y-this.adjust,this.radius,this.radius);
		}
		else if(this.p>0.50 && this.p<=0.75)
		{
			c.drawImage(sheild_bg_3,this.x-this.adjust,this.y-this.adjust,this.radius,this.radius);
		}
		else
		{
			c.drawImage(sheild_bg_4,this.x-this.adjust,this.y-this.adjust,this.radius,this.radius);
		}
		drawSheildBar(this.healthBarWidth);
	}

	update()
	{
		if(this.type=="sheild")
		{
			this.drawShield();
			this.x=gamePlayer.x;
			this.y=gamePlayer.y;
			if(this.p<=0.25)
			{
				if(gameFrame%50==0)
				{
					this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[0]._TYPE[0]._DURATION;
				}
			}
			else if(this.p>0.25 && this.p<=0.50)
			{
				if(gameFrame%100==0)
				{
					this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[0]._TYPE[1]._DURATION;
				}
			}
			else if(this.p>0.50 && this.p<=0.75)
			{
				if(gameFrame%200==0)
				{
					this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[0]._TYPE[2]._DURATION;
				}
			}
			else
			{
				if(gameFrame%700==0)
				{
					this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[0]._TYPE[3]._DURATION;
				}
			}
		}
		else if(this.type=="power")
		{	
			this.showPower();
			this.radius+=5;
			if(this.radius>=canvas.width/4)
			{
				this.radius=this.baseRadius;
			}
			this.x=gamePlayer.x;
			this.y=gamePlayer.y;
			if(gameFrame%100==0)
			{
				this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[1]._DURATION;
			}
		}
		else
		{
			drawXPBar(this.healthBarWidth);
			if(gameFrame%100==0)
			{
				this.healthBarWidth-=_GAME_PLAYER_DATA._POWERUPS_UPGRADE[2]._DURATION;
			}
		}
	}
}