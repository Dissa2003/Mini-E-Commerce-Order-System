const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      password, 
      phoneNumber, 
      streetAddress, 
      city, 
      state, 
      country, 
      postalCode 
    } = req.body;
    
    if (!fullName || !email || !password || !phoneNumber || !streetAddress || !city || !state || !country || !postalCode) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ 
      fullName, 
      email, 
      password: hashedPassword, 
      phoneNumber,
      shippingAddress: {
        streetAddress,
        city,
        state,
        country,
        postalCode
      }
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
}; 