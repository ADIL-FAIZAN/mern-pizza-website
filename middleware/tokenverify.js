const extractUserIdMiddleware = (req, res, next) => {
    const token = response.data
    
    if (token) {
      try {
        const decoded = jwt.verify(token, YOUR_JWT_SECRET);
        req.userId = decoded.userId;
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    } else {
      return res.status(401).json({ message: 'Token not provided' });
    }
  };
  