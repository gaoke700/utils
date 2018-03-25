(function (window){
	var base = window.base = {
		getUrlParams(str){
			let arr,part;
			const params = {};
			let search = (str || location.search || location.hash).substring(1);
			if(search){
				arr = search.split('&');
				// for(let item of arr.values()){	//es6
					// part = item.split('=');
				for(let i=arr.length-1;i>=0;i--){
					part = arr[i].split('=');
					params[part[0]] = part[1];
				}
			}
			return params;
		},
		getArraySum(arr=[0]){
			if(!arr || arr.length <= 0){
				return;
			}
			return arr.reduce((sum,item)=>sum+item);
		},
		getTypeof(obj){
			if(obj == null){		//只有null 和 undefined 成立
				return String( obj )
			}
			//support: safari <= 5.1 (functionish RegExp)
			return typeof obj === 'object' || typeof obj === 'function' ?
			{}.toString.call(obj).split(' ')[1].slice(0,-1).toLowerCase() || 'object' : typeof obj;
		},
		scrollToTop(){
			const c = document.documentElement.scrollTop || document.body.scrollTop;
			if (c > 0) {
    			window.requestAnimationFrame(base.scrollToTop);
    			window.scrollTo(0, c - c / 8);
  			}
		},
		isFunction(obj){			
			//DOM methods and functions like alert returns object on IE8 lower
			return base.type(obj) === 'function' ;
		},
		isArray(obj){
			return  Array.isArray(obj);
		},
		isNumber(obj){
			//原生typeof NaN 为number   
			//计算机能计算的最大值 isFinite(Number.MAX_VALUE)
			return !isNaN(parseFloat(obj)) && isFinite(obj);
		}
	}

})(window)