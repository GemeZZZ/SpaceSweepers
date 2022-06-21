class slowly_disappearing_txt
{
	constructor(text,x,y,size,color,font_type,disappearingRate)
	{
		this.text=text;
		this.x=x;
		this.y=y;
		this.size=size;
		this.color=color;
		this.font_type=font_type;
		this.alpha = 1;
		this.disappearingRate=disappearingRate;
	}

	draw()
	{
		c.save();
		c.beginPath();
		c.globalAlpha = this.alpha;
		c.fillStyle = this.color;
		c.font = this.size+"px "+this.font_type;
		c.fillText(this.text,this.x-this.size*2+50,this.y);
		c.closePath();
		c.restore();
	}

	update()
	{
		this.draw();
		this.alpha-=this.disappearingRate;
	}
}