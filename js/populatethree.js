var products = new Array(),
	iSelectedTile = null,
	iTileBeingSelected = null,
	tileImages = new Array(1,2,3,4,5,6,7,8,9,10),
	tileAllocation = null

function getRandomImageForTile() {

	var iRandomImage = Math.floor((Math.random() * tileAllocation.length)),
		iMaxImageUse = 1;
	
	while(tileAllocation[iRandomImage] >= iMaxImageUse ) {
			
		iRandomImage = iRandomImage + 1;
			
		if(iRandomImage >= tileAllocation.length) {
				
			iRandomImage = 0;
		}
	}
	
	return iRandomImage;
}

function createTileThree(iCounter) {
	
	var curTile =  new product("product" + iCounter),
		iRandomImage = getRandomImageForTile();
		
	tileAllocation[iRandomImage] = tileAllocation[iRandomImage] + 1;
	curTile.setContentImage("images/three/" +  (iRandomImage + 1) + ".jpg");
	
	return curTile;
}

function initStateThree() {

	/* Reset the tile allocation count array.  This
		is used to ensure each image is only 
		allocated twice.
	*/
	tileAllocation = new Array(0,0,0,0,0,0,0,0,0,0);
	
	while(products.length > 0) {
		products.pop();
	}
	
	$('#productdiv').empty();
	
}

function initTilesThree() {

	var iCounter = 0, 
		curTile = null;

	initStateThree();
	
	// Randomly create 5 products and render to reactantone part of the board
	for(iCounter = 0; iCounter < 5; iCounter++) {
		
		curTile = createTileThree(iCounter);
		
		$('#productdiv').append(curTile.getHTML());
		
		products.push(curTile);
	}
}