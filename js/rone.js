function rone(id) {
	
	this.id                     = id;
	this.contentImage           = null;
	this.string 				= "reactantone";


	this.setContentImage = function(sContentImage) {
		this.contentImage = sContentImage;
	};

	this.getHTML = function() {
		return '<div class="padded"><div id="' + this.id + '" class="single one reactantone"' + ' onclick="select(this, this.id, \'' + this.string + '\')">' + '<img src="' + this.contentImage + '" height="130" width="130"/>'  + '</div> </div>';
	};
	
	this.getContent = function() {
		return '<img src="' + this.contentImage + '"/>';
	};

	this.getContentImage = function() {
		return this.contentImage;
	};
}