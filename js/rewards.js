
(function(document, window){

	window.CWEB = window.CWEB || {};

	CWEB.Cards = {

		cardData: function(){
			console.log("Test Data");
			this.rewardsCards = [
									{"cardName":"CVS", "category": "Pharmacy", "cardNumber":"5544312456", "timesUsed": 1},
									{"cardName":"ACE Hardware", "category": "Hardware", "cardNumber":"19142673902", "timesUsed": 3},
									{"cardName":"Home Depot", "category": "Hardware", "cardNumber":"159357456", "timesUsed": 6},
									{"cardName":"Dick's Sporting Goods", "category": "Sporting Goods", "cardNumber":"654357951", "timesUsed":7},
									{"cardName":"Lowe's", "category": "Hardware", "cardNumber":"159357456", "timesUsed": 10},
									{"cardName":"JC Penny's", "category": "Department Store", "cardNumber":"159357456", "timesUsed": 4},
									{"cardName":"Kohl's", "category": "Department Store", "cardNumber":"159357456", "timesUsed": 16},
									{"cardName":"Academy Sports", "category": "Sporting Goods", "cardNumber":"654357951", "timesUsed":9},
									{"cardName":"Sports Authority", "category": "Sporting Goods", "cardNumber":"654357951", "timesUsed":16},
									{"cardName":"Walgreens", "category": "Pharmacy", "cardNumber":"75335912", "timesUsed": 15},
									{"cardName":"REI", "category": "Sporting Goods", "cardNumber":"654357951", "timesUsed":5},
									{"cardName":"Gary Gribble's Running Sports", "category": "Sporting Goods", "cardNumber":"654357951", "timesUsed":1}

								]
		},

		displayCards: function(){
			console.log("Test Display");
			var listOfCards = this.rewardsCards;
			var card = [];
			for (i=0; i<listOfCards.length; i++){
				card[i] = document.createElement("li");
				card[i].className = "rewardsCard";
				card[i].id = i;
				card[i].innerHTML = listOfCards[i].cardName;
				document.getElementById('rewardsList').appendChild(card[i]);				

			}
			document.querySelector('.listMenu').addEventListener('click', function(event) {
				var x = event.target.id;
				console.log(x);
				var y = +x;
				console.log(y);
				CWEB.Cards.barcodeDisplay(y);
			})

		},

		alphaSort: function() {
			console.log("Test Alpha");
			sortCards = this.rewardsCards;
			//console.log(sortCards);
			sortCards.sort(function(a,b){
		       var nameA=a.cardName.toLowerCase();
		       var nameB=b.cardName.toLowerCase();
		    if (nameA < nameB) {
		       return -1;
		    } else  if (nameA>nameB) {
		             return 1;
		          } else {
		                  return 0;
		                 }
		     });
		},

		frequencySort: function() {
			console.log("Test Frequency");
			sortCards = this.rewardsCards;
			//console.log(sortCards);
			sortCards.sort(function(a,b){
				var usageA = a.timesUsed;
				var usageB = b.timesUsed;
				return usageB - usageA;
			});
		},

		categoryAppend: function(){
			var listOfCards = this.rewardsCards;
			var x = [];
			var listItem = [];
			for (i=0; i<listOfCards.length; i++) {
				x[i] = listOfCards[i].category;				
			}
			for (i=0; i<x.length; i++) {
				for (j=1; j<x.length-1; j++){
					if (x[i]==x[j]) {
						//console.log(x[i]);
						//console.log(x[j]);
						x.splice(j,1);
						//console.log(x);
					}
				}
			}

			x.sort();

			for (i=0; i<x.length; i++) {
				listItem[i] = document.createElement("option");
				listItem[i].innerHTML = x[i];
				document.getElementById('sortMenu').appendChild(listItem[i]);
			}

		},

		sortFilter: function() {
			var chooseOption = document.getElementById("sortMenu");
			//console.log(chooseOption);
			var selectedOption = chooseOption.options[chooseOption.selectedIndex];
			console.log(selectedOption.text);
			if (selectedOption.text == "Alphabetically") {
				//console.log(selectedOption.text == "Alphabetically");
				CWEB.Cards.removeList();
				CWEB.Cards.cardData();
				CWEB.Cards.alphaSort();
				CWEB.Cards.displayCards();
			}  else if (selectedOption.text == "Frequency") {
				CWEB.Cards.removeList();
				CWEB.Cards.cardData();
				CWEB.Cards.frequencySort();
				CWEB.Cards.displayCards();
			} else {
				CWEB.Cards.removeList();
				CWEB.Cards.cardData();
				CWEB.Cards.alphaSort();
				CWEB.Cards.categoryList(selectedOption.text);
			}
		},

		removeList: function() {
			var list = document.getElementById('rewardsList');
			var i=0;
			var itemCount = 0;
			while (list.getElementsByTagName('li') [i++]) {
				itemCount++;
			}
			console.log(itemCount);
			for (i=0; i<itemCount; i++){
				console.log(list.childNodes[0]);
				list.removeChild(list.childNodes[0]);
			}
			try {
				list.removeChild(list.childNodes[0]);
			}
			catch(err){
				return;
			}
			
		},

		categoryList: function(categoryKey) {
			console.log("Test Category");
			console.log(categoryKey);
			var listOfCards = this.rewardsCards;
			var key = categoryKey;
			var card = [];
			var j = 0;
			for (i=0; i<listOfCards.length; i++){
				if (listOfCards[i].category == key) {
					card[i] = document.createElement("li");
					card[i].className = "rewardsCard";
					card[i].id = i;
					//card[i].innerHTML = '<a href="#">' + listOfCards[i].cardName + '</a>';
					card[i].innerHTML = listOfCards[i].cardName;
					//console.log(j);
					//console.log(card[j]);
					document.getElementById('rewardsList').appendChild(card[i]);
					//j++;
				}
			}
			//var x = [];
			//var x = document.querySelectorAll('.rewardsCard');
			//console.log(x);
			//console.log(x[this.index]);
			//var y = x;
			//console.log(j);
			//document.querySelector('.listMenu').addEventListener("click",function(){CWEB.Cards.barcodeDisplay(listOfCards[1].cardNumber)});

			/*document.querySelector('.listMenu').addEventListener('click', function(event) {
				var x = event.target.id;
				console.log(x);
				var y = +x;
				console.log(y);
				CWEB.Cards.barcodeDisplay(y);
			})*/


		},

		cardModalDisplay: function() {
			
			console.log('cardModalDisplay');

		},

		barcodeDisplay: function(number) {
			console.log('barcodeDisplay');
			var index = number;
			var listOfCards = this.rewardsCards;
			var cardNum = listOfCards[index].cardNumber;
			var barcode = document.getElementById('barcode');
			var rewardsList = document.getElementById('rewardsList');
			rewardsList.style.display = 'none';
			barcode.style.display = 'block';
			//barcode.style.position = 'absolute';
			//barcode.style.top = '300px';
			barcode.style.marginTop = "100px";
			barcode.style.marginBottom = "10px";
			barcode.style.width = '100%';
			//barcode.style.height = '200px';
			barcode.style.fontFamily = 'Code39AzaleaFont';
			barcode.style.fontSize = '72px';
			barcode.style.textAlign ='center';
			barcode.innerHTML = cardNum;
			var companyName = document.getElementById('companyName');
			companyName.innerHTML = listOfCards[index].cardName;
			var number = document.getElementById('number');
			number.innerHTML = cardNum;
		}


	}

	CWEB.Cards.cardData();
	//CWEB.Cards.alphaSort();
	CWEB.Cards.frequencySort();
	CWEB.Cards.categoryAppend();	
	CWEB.Cards.displayCards();

	document.getElementById("sortMenu").addEventListener("change",CWEB.Cards.sortFilter);


})(document, window);



