function AGGViewModel() {
    // Data
    var self = this;
    self.gifs = [];

    // Behaviors
    self.goToGallery = function() {
        location.hash = 'gallery';
    };
    self.goToGif = function(gifId) {
        location.hash = 'gallery/' + gifId;
    };
    self.promptForUpload = function() {
        location.hash = 'upload';
    };

    // Client-side routes
    Sammy(function() {
        this.get('#gallery', function() {
            self.gifs = [{"ID":22,"UserFilename":"anarchy.jpg","SystemFilename":"~/files/anarchy.jpg","ThumbnailFilename":"~/files/anarchy.jpg","Title":"q","Description":"q","Created":"\/Date(1409024805343)\/","Modified":"\/Date(1409024805343)\/"},{"ID":23,"UserFilename":"anarchy.jpg","SystemFilename":"~/files/anarchy.jpg","ThumbnailFilename":"~/files/anarchy.jpg","Title":"q","Description":"q","Created":"\/Date(1409024850927)\/","Modified":"\/Date(1409024850927)\/"}];
        });
        this.get('#upload', function() {
        });
        this.get('#gallery/:gifId', function() {
            this.params.gifId
        });
        this.get('', function() {
            this.app.runRoute('get', '#gallery');
        });
    }).run();


    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        url: '/AnimatedGifs/FileHandler',
 //       loadImageFileTypes: /^image\/(gif)$/, // Allowed file types
 //       acceptFileTypes: /(\.|\/)(gif)$/i
    });
 
}

ko.applyBindings(new AGGViewModel());
