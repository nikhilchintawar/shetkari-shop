const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }

    const user = new User(req.body);
    await user.save((error, user) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          error: "Sign Up error.Please try again.",
        });
      }
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        postalAddress: user.postalAddress,
        role: user.role,
        id: user._id,
      });
    });
  } catch (error) {
    console.log("signup", error.message);
    res
      .status(500)
      .json({ error: "There is an error with server. Please try again." });
  }
};

const signin = async (req, res) => {
  try {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }

    await User.findOne({ email }, (error, user) => {
      if (error || !user) {
        return res.status(400).json({
          error: "Invalid email address.Please enter valid email address.",
        });
      } else if (!user.authenticate(password)) {
        console.log(user.authenticate(password));
        return res.status(401).json({
          error: "Invalid password.Please enter valid password.",
        });
      } else {
        //created token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, { expire: new Date() + 300 });
        //send response to frontend
        const {
          _id,
          firstName,
          lastName,
          email,
          role,
          mobileNumber,
          postalAddress,
        } = user;
        return res.json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            mobileNumber,
            postalAddress,
          },
        });
      }
    });
  } catch (error) {
    console.log("signin", error.message);
    res.status(500).json({
      error: "There is an error with server. Please try again.",
    });
  }
};

const signOut = (_, res) => {
  try {
    res.clearCookie("token");
    res.json({
      message: "signed out successfully.",
    });
  } catch (error) {
    console.log("signout", error.message);
    res.status(500).json({
      error: "There is an error with server. Please try again.",
    });
  }
};

//protected route
const isSignedIn = expressjwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ["sha1", "RS256", "HS256"],
});

//custom middleware
const isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  // console.log(req.profile._id);
  // console.log(req.auth._id);
  // console.log(checker)
  if (!checker) {
    return res.status(403).json({
      error: "Access denied.",
    });
  }
  next();

  //   //   get token from header
  //   const token = req.header("x-auth-token");
  //   console.log("token");
  //   // check if no token is present
  //   if (!token)
  //     return res.status(401).json({ error: "Access denied. Please sign in." });

  //   // verify token
  //   try {
  //     const decoded = jwt.verify(token, process.env.SECRET);
  //     req.user = decoded.user;
  //     next();
  //   } catch (error) {
  //     res.status(401).json({ error: "Invalid token" });
  //   }
};

const isFarmer = (req, res, next) => {
  //   console.log(req.profile)
  if (req.profile.role === 0) {
    res.status(403).json({
      error: "only admin access.",
    });
  }
  next();
};

module.exports = {
  signup,
  signin,
  signOut,
  isSignedIn,
  isAuthenticated,
  isFarmer,
};
