var rones = new Array(),
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

function createTileOne(iCounter) {
	
	var curTile =  new rone("rone" + iCounter),
		iRandomImage = getRandomImageForTile();
		
	tileAllocation[iRandomImage] = tileAllocation[iRandomImage] + 1;
	curTile.setContentImage("images/one/" +  (iRandomImage + 1) + ".jpg");
	return curTile;
}

function initStateOne() {

	/* Reset the tile allocation count array.  This
		is used to ensure each image is only 
		allocated twice.
	*/
	tileAllocation = new Array(0,0,0,0,0,0,0,0,0,0);
	
	while(rones.length > 0) {
		rones.pop();
	}
	
	$('#reactantone').empty();
	
}

function initTilesOne() {

	var iCounter = 0, 
		curTile = null;

	initStateOne();
	
	// Randomly create 5 rones and render to reactantone part of the board
	for(iCounter = 0; iCounter < 5; iCounter++) {
		
		curTile = createTileOne(iCounter);
		$('#reactantone').append(curTile.getHTML());
		rones.push(curTile);
	}
}