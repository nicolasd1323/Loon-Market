import db from "../db/connection.js";
import Vendor from "../models/vendor.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "carrianne",
    email: "chamer79@gmail.com",
    password_digest: await bcrypt.hash("C0mp0$t", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "nicholas",
    email: "nicolasd1323@gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R2", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "james",
    email: "jwbenet@gmail.com",
    password_digest: await bcrypt.hash("!turkey", 11),
  });
  await user3.save();

  // vendors data that we want inserted into database
  const vendors = [
    {
      name: "Farggi Ice Cream Parlor",
      imgURL:
        "https://images.unsplash.com/photo-1591261730587-6901c2b24b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "Figgos’s Ice Cream Parlor brings you a wide spectrum of flavors for all ages. From the classic Banana Split Sunday to wacky and wild Elvis' Hey Mama' Shake - peanut butter, brownie bits, and candied cayenne bacon.  We source our dairy from Moe’s Moo Milk Dairy Farm. As well as sourcing a plethora of our seasonal infregdients from local farms.",
      hours:
        "Mon - Wed 11 pm - 8 pm  |  Thurs-Sat 11 am - 11 pm  | Sun: 12 pm - 6 pm",
    },
    {
      name: "Tasos",
      imgURL:
        "https://images.unsplash.com/photo-1599173687303-7e1eb50f1e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      description:
        "Our ancient Greek cuisine is characterized by its frugality and was founded on the 'Mediterranean Triad': wheat, olive oil, and wine, with meat being rarely eaten and fish being more common. Come try us!!",
      hours:
        "Mon - Wed 11 pm - 8 pm  |  Thurs-Sat 11 am - 11 pm  |  Sun: 12 pm - 6 pm",
    },
    {
      name: "Toro Loco",
      imgURL:
        "https://images.unsplash.com/photo-1560717844-57e41a5e4758?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "We offer a wide variety of tapas and entrees with a special Sunday bruch featuring unlimited house Bloody Mary's. One recent addition to the menu has been quite popular -- zarajos-- fried lamb intestines wrapped around a stick. We welcome new Lune Cove resident and Chef Manuel Garcia Lorena, from one of Barcelona's most acclaimed restaurant's: Plaza Catalunya. Let him plan the next meal for you and your group!",
      hours:
        "Mon - Wed  11 am - 9 pm  |  Thurs - Sat  11 am - 12 am  |  Sun 12 pm - 5 pm",
    },
    {
      name: "Veggie House",
      imgURL:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2dpZSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      description:
        "Our Vegetarian cuisine is based on food that meets vegetarian standards. We include dairy products but not eggs, and ovo vegetarianism encompasses eggs but not dairy products. Come try us!!",
      hours:
        "Mon - Wed  11 am - 9 pm  |  Thurs - Sat  11 am - 12 am  |  Sun 12 pm - 5 pm",
    },
    {
      name: "Balzac's Coffee",
      imgURL:
        "https://images.unsplash.com/photo-1549996647-190b679b33d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description:
        "From the sunny slopes of the Colombian Andes to cafes throughtout North America and Europe, Balzac's quality espresso beans will stimulate your mind and body.",
      hours:
        "Mon - Wed  11 am - 9 pm  |  Thurs - Sat  11 am - 12 am  |  Sun 12 pm - 5 pm",
    },
    {
      name: "Tapped Out Brewery",
      imgURL:
        "https://images.unsplash.com/photo-1524587253133-266042ff67d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
      description:
        "Welcome, fellow Loons!  Our mission, at Tapped Out, is to make high quality locally brewed craft beer that makes a positive impact on our customers and our community. Our warm inviting tasting room is open daily. Stop by and have a pint. Cheers! ",
      hours:
        "Mon - Wed  11 am - 9 pm  |  Thurs - Sat  11 am - 12 am  |  Sun 12 pm - 6 pm",
    }
  ];

  // insert vendors into database
  await Vendor.insertMany(vendors);
  console.log("Created users & vendors!");

  // close database connection. done.
  db.close();
};

insertData();
