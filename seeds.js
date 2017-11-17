var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Forest number one",
        image: "https://farm1.staticflickr.com/7/8270887_61bff37485.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula consectetur lectus, vestibulum ultrices turpis venenatis sit amet. Nullam eget augue eleifend leo scelerisque rutrum ut vitae dolor. Nulla rhoncus, nisl sed pharetra rhoncus, augue odio scelerisque erat, vitae ultricies lectus tellus ac eros. Aliquam erat volutpat. Donec sem leo, lobortis eget nunc sit amet, vestibulum vehicula ante. Sed vitae tellus non lectus vestibulum malesuada. Donec finibus gravida vulputate."
    },
     {
        name: "Forest number two",
        image: "https://farm7.staticflickr.com/6223/6342367988_09512bcaaa.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula consectetur lectus, vestibulum ultrices turpis venenatis sit amet. Nullam eget augue eleifend leo scelerisque rutrum ut vitae dolor. Nulla rhoncus, nisl sed pharetra rhoncus, augue odio scelerisque erat, vitae ultricies lectus tellus ac eros. Aliquam erat volutpat. Donec sem leo, lobortis eget nunc sit amet, vestibulum vehicula ante. Sed vitae tellus non lectus vestibulum malesuada. Donec finibus gravida vulputate."
    },
     {
        name: "Forest number three",
        image: "https://farm6.staticflickr.com/5519/10327378784_4f32cb3443.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula consectetur lectus, vestibulum ultrices turpis venenatis sit amet. Nullam eget augue eleifend leo scelerisque rutrum ut vitae dolor. Nulla rhoncus, nisl sed pharetra rhoncus, augue odio scelerisque erat, vitae ultricies lectus tellus ac eros. Aliquam erat volutpat. Donec sem leo, lobortis eget nunc sit amet, vestibulum vehicula ante. Sed vitae tellus non lectus vestibulum malesuada. Donec finibus gravida vulputate."
    }
];
// Remove all campgrounds:
function seedDB(){
    Campground.remove({}, function(err){
            if(err){
                console.log(err);
            }
        console.log("removed campground!");
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!");
                    // Add a few comments
                    Comment.create(
                        {
                            text: "Greate place!", 
                            author: "Lisa"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Comment added!");
                            }
                        }
                    );
                }
            });
        });
    });
    
}

module.exports = seedDB;


