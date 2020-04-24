var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name: "Three Tent Under Stars",
        image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius odio vel purus maximus, vitae pretium lectus porttitor. Ut in bibendum arcu. Nullam non justo tortor. Nam cursus leo nec neque rutrum tempus. Donec convallis nibh tellus, vehicula ullamcorper ipsum finibus sed. Nulla purus elit, sagittis non commodo ut, egestas quis sapien. Nam ultrices justo vel nibh aliquam laoreet. Donec id tortor diam. In consectetur et purus porta hendrerit. Suspendisse eget lorem elit. Integer viverra, urna ac interdum ultricies, nisi eros lobortis turpis, sit amet imperdiet purus nisi ac libero."
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Quisque varius sem leo, sed auctor sem congue vel. Phasellus consectetur turpis et nibh rutrum ultricies. Fusce at neque odio. Nunc tempor vel elit ac eleifend. Donec id metus condimentum, pretium ex nec, mattis massa. Ut vitae nisi eleifend, tempus elit nec, ultrices ex. Nam rhoncus felis a efficitur ultricies. Nulla facilisi. Mauris enim libero, cursus eu dictum sit amet, tincidunt non ex. Fusce a neque efficitur, sagittis ipsum vitae, ultricies tortor. Morbi non turpis nec magna maximus rutrum a non est."
    },
    {
        name: "Hill Bay",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "n nec libero fringilla, porta neque eget, sagittis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget massa ac lacus scelerisque interdum. Suspendisse finibus porta bibendum. Nulla sagittis viverra sapien a mattis. Donec vitae mollis tellus. Pellentesque facilisis nunc ipsum, vitae laoreet felis mollis fringilla."
    },
    {
        name: "Hamok Creek",
        image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Pellentesque eu ipsum vel est ornare pharetra eget sit amet est. Donec tempus sollicitudin varius. Curabitur eros lectus, rhoncus vitae pretium eu, tincidunt eu ante. Nam et felis sit amet ex finibus porttitor. Nulla tempor massa in sapien convallis, ac suscipit quam ullamcorper. Fusce mi odio, volutpat id auctor eleifend, congue in diam. "
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log("removed Campgrounds!");
        }
        //adding a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //Adding few comments
                        Comment.create({
                            text: "This place is great, but I wish there was Internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }


                        })
                    }
                })
            });

        




    });




};

module.exports = seedDB;
