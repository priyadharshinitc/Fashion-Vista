require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cors = require("cors")

// path is a module from express
const path = require("path")

// const port = 5000
const port = process.env.PORT || 5000;
const app = express()

app.use(express.json())

// Allow requests from your frontend and admin
const corsOptions = {
    origin: ["https://fashion-vista-admin.onrender.com", "https://fashion-vista-frontend.onrender.com"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }

app.use(cors(corsOptions))

// Database Connection with MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running")
})

// Image Storage Engine
// const storage = multer.diskStorage({
//     destination: "./upload/images",
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// Creating upload endpoint for images
// app.use("/images", express.static("upload/images"))
// app.post("/upload", upload.single("product"), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//         // image_url: `https://fashion-vista-i2q8.onrender.com/images/${req.file.filename}`
//     })
// })

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Multer Storage Configuration with Cloudinary
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "product-images",
      format: async (req, file) => "png",
      public_id: (req, file) => file.originalname.split(".")[0],
    },
  });
  
  const upload = multer({ storage });
  
  // Upload Image to Cloudinary
  app.post("/upload", upload.single("product"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: 0, message: "No file uploaded" });
    }
    res.json({
      success: 1,
      image_url: req.file.path, // Cloudinary URL
    });
  });

// Schema for Creating Products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})

// Creating API for adding a Product
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({})
    let id

    if(products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1
    } else {
        id = 1
    }

    const product = new Product({
        // id: req.body.id,
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    })
    console.log(product)
    await product.save()
    console.log("Saved")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating API for removing a Product
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id})
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
    let products = await Product.find({})
    console.log("All Products Fetched")
    // res.send(products)
    res.status(200).json(products)
})

// Creating Schema for User model
const Users = mongoose.model("Users", {
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Object,
        default: {}
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Creating Endpoint for registering the user
app.post("/signup", async (req, res) => {
    let check = await Users.findOne({email: req.body.email})
    if(check) {
        return res.status(400).json({
            success: false,
            error: "Existing user found with same email address"
        })
    }

    let cart = {}
    for (let index = 0; index < 300; index++) {
        cart[index] = 0        
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    })
    console.log("Cart Data before saving:", user.cartData)

    await user.save()

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, "secret_ecom")
    res.json({success: true, token})
})

// Creating End Point for User Login
app.post("/login", async (req, res) => {
    let user = await Users.findOne({email: req.body.email})
    if(user) {
        const passCompare = (req.body.password === user.password)
        if(passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, "secret_ecom")
            res.json({success: true, token})
        } else {
            res.json({success: false, error: "Wrong Password"})
        }
    } else {
        res.json({success: false, error: "Wrong Email Address"})
    }
})

// Creating End Point for New Collection Data
app.get("/newcollections", async (req, res) => {
    let products = await Product.find({})
    let newcollection = products.slice(1).slice(-8)
    console.log("New Collection Fetched")
    res.send(newcollection)
})

// Creating End Point for Popular in Women Section
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({category: "women"})
    let popular_in_women = products.slice(0, 4)
    console.log("Products for Popular in Women fetched")
    res.send(popular_in_women)
})

// Creating Middleware to fetch User
const fetchUser = async (req, res, next) => {
    const token = req.header("auth-token")
    if(!token) {
        res.status(401).send({error: "Please authenticate using Valid token"})
    } else {
        try {
            const data = jwt.verify(token, "secret_ecom")
            console.log("Decoded Token Data:", data); // Debugging log
            req.user = data.user
            next()
        } catch (error) {
            res.status(401).send({error: "Please Authenticate using a Valid token"})
        }
    }
}

// Creating End Point for adding products in Cart Data
app.post("/addtocart", fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId)
    let userData = await Users.findOne({_id: req.user.id})
    userData.cartData[req.body.itemId] += 1
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
    // res.send("Added")
    res.json({success: true, message: "Added"})
})

// Creating End Point to remove product from Cart Data
app.post("/removefromcart", fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId)
    let userData = await Users.findOne({_id: req.user.id})
    if(userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData})
    res.json({success: true, message: "Removed"})
    }
})

// Creating End Point to get Cart Data
app.post("/getcart", fetchUser, async (req, res) => {
    console.log("Get Cart")
    let userData = await Users.findOne({_id: req.user.id})
    // console.log(userData)
    res.json(userData.cartData)
})

app.listen(port, (error) => {
    if(!error) {
        console.log("Server running on Port: ", port)
    } else {
        console.log("Error: ", error)
    }
})