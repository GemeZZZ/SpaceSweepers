//GLOBAL DATA.....................................................................
let isSaved = false;
let _GAME_DATA=[];
let _GAME_PLAYER_DATA={
	_PLAYER_NAME:"unknown",
	_PLAYER_BEST_SCORE:undefined,
	_GOLD_COIN_HAVE:undefined,
	_SILVER_COIN_HAVE:undefined,
	_BRONZE_COIN_HAVE:undefined,
	_POWERUPS_UPGRADE:[{_NAME:"SHEILD",
	_TYPE:[{
		_NAME:"NORMAL",
		_DURATION:20
	},{
		_NAME:"LOW",
		_DURATION:18
	},{
		_NAME:"MEDIUM",
		_DURATION:15,
	},{
		_NAME:"HIGH",
		_DURATION:12
	}],
	},{

	_NAME:"POWER",
	_DURATION:20,
	_POWER:10

	},{

	_NAME:"EXTRA_POINTS",
	_DURATION:18,
	_EXTRA_POINTS:30

	}],
	_SHIP_COLLECTION : ["default"],
	_CURRENT_SHIP : "default"
};
function _SAVE_DATA(name)
{
	var _LOCAL_STORAGE = JSON.parse(localStorage.getItem("_SPACE_SWEEPERS_LOCAL_DATA"));
	//_LOCAL_STORAGE = [];
	if(_LOCAL_STORAGE)
	{
		//console.log(_LOCAL_STORAGE);
		let INDEX;
		let IS_EXIST=false;
		_LOCAL_STORAGE.forEach((member,index)=>{
			if(member._PLAYER_NAME == name)
			{
				INDEX = index;
				IS_EXIST = true;
			}
		});
		//console.log(IS_EXIST);
		//console.log(INDEX);
		if(IS_EXIST==true)
		{
			_GAME_PLAYER_DATA._PLAYER_BEST_SCORE = (_LOCAL_STORAGE[INDEX]._PLAYER_BEST_SCORE<gameScore)?(gameScore):(_LOCAL_STORAGE[INDEX]._PLAYER_BEST_SCORE);
			_GAME_PLAYER_DATA._GOLD_COIN_HAVE = _LOCAL_STORAGE[INDEX]._GOLD_COIN_HAVE+goldCoinCollected+100;
			_GAME_PLAYER_DATA._SILVER_COIN_HAVE = _LOCAL_STORAGE[INDEX]._SILVER_COIN_HAVE+silverCoinCollected+100;
			_GAME_PLAYER_DATA._BRONZE_COIN_HAVE = _LOCAL_STORAGE[INDEX]._BRONZE_COIN_HAVE+bronzeCoinCollected+100;
			_GAME_PLAYER_DATA._PLAYER_NAME = _LOCAL_STORAGE[INDEX]._PLAYER_NAME;
			_GAME_PLAYER_DATA._SHIP_SKIN = _LOCAL_STORAGE[INDEX]._SHIP_SKIN;
			_GAME_PLAYER_DATA._POWERUPS_UPGRADE = _LOCAL_STORAGE[INDEX]._POWERUPS_UPGRADE;
			_GAME_PLAYER_DATA._SHIP_COLLECTION = _LOCAL_STORAGE[INDEX]._SHIP_COLLECTION;
			_GAME_PLAYER_DATA._CURRENT_SHIP = _LOCAL_STORAGE[INDEX]._CURRENT_SHIP;

			_LOCAL_STORAGE.splice(INDEX,1);

			_LOCAL_STORAGE.push(_GAME_PLAYER_DATA);

			_LOCAL_STORAGE=localStorage.setItem("_SPACE_SWEEPERS_LOCAL_DATA",JSON.stringify(_LOCAL_STORAGE));
			alert("Your data has been modified successfully!");
			isSaved = true;
		}
		else
		{
			_GAME_PLAYER_DATA._PLAYER_NAME = name;
			_GAME_PLAYER_DATA._GOLD_COIN_HAVE = goldCoinCollected;
			_GAME_PLAYER_DATA._SILVER_COIN_HAVE = silverCoinCollected;
			_GAME_PLAYER_DATA._BRONZE_COIN_HAVE = bronzeCoinCollected;
			_GAME_PLAYER_DATA._PLAYER_BEST_SCORE = gameScore;
			_LOCAL_STORAGE.push(_GAME_PLAYER_DATA);
			_LOCAL_STORAGE=localStorage.setItem("_SPACE_SWEEPERS_LOCAL_DATA",JSON.stringify(_LOCAL_STORAGE));
			alert("Your data has been stored successfully!");
			isSaved = true;
		}
	}
	else
	{
		_GAME_PLAYER_DATA._PLAYER_NAME = name;
		_GAME_PLAYER_DATA._GOLD_COIN_HAVE = goldCoinCollected;
		_GAME_PLAYER_DATA._SILVER_COIN_HAVE = silverCoinCollected;
		_GAME_PLAYER_DATA._BRONZE_COIN_HAVE = bronzeCoinCollected;
		_GAME_PLAYER_DATA._PLAYER_BEST_SCORE = gameScore;
		_GAME_DATA.push(_GAME_PLAYER_DATA);
		_LOCAL_STORAGE=localStorage.setItem("_SPACE_SWEEPERS_LOCAL_DATA",JSON.stringify(_GAME_DATA));
		alert("Your data has been stored successfully!");
		isSaved = true;
	}
}