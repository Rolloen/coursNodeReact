const auth = require('../lib/auth');

const verify = (req, res, next) => {
    if (req.path === '/login') return next();

    const authHeader = req.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.sendStatus(400);
    }

    const token = authHeader.replace('Bearer', '');
    auth.verifyToken(token)
        .then(decodedToken => {
            req.user = decodedToken;
            next();
        }).catch(err => {
            return res.status(401).send({
                error: 'JWT Token invalid'
            });
        });
        
};

module.exports = {
    verify
}