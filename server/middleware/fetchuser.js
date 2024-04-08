
import  jwt  from "jsonwebtoken";
const JWT_SECRET="Ri5h7an&$"
 
const fetchuser = (req, res, next) => {
 
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: "Please authenticate using correct token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
  
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using correct token" })
  }
 
}

export default fetchuser;