var viewer = OpenSeadragon({
    id: 'openseadragon1',
    prefixUrl: "/prismTil/images/",
    showNavigator:  true,
     tileSources:   {
        Image: {
            xmlns:    "http://schemas.microsoft.com/deepzoom/2008",
            Url:      "https://openseadragon.github.io/example-images/highsmith/highsmith_files/",
            Format:   "jpg", 
            Overlap:  "2", 
            TileSize: "256",
            ServerFormat: 'Default',
            Size: {
                Height: "9221",
                Width:  "7026"
            }
        }
    }
});

//const annotations = new OpenSeadragon.Annotations({ viewer });
viewer.initializeAnnotations();