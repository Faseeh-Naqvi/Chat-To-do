import jwt from "jsonwebtoken";
//function that creates a token from the data
export const createToken = (id, email, expiresIn) => {
    const payload = {
        id, email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map