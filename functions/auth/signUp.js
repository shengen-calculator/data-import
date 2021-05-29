const admin = require('firebase-admin');
const Admins = require('../admins');


const signUp = async (user) => {
    try {
        if (user.email && Admins.includes(user.email)) {
            // Set custom user claims on this newly created user.
            await admin.auth().setCustomUserClaims(user.uid, {role: 1});

            // Update real-time database to notify client to force refresh.
            const metadataRef = admin.database().ref("metadata/" + user.uid);
            // Set the refresh time to the current UTC timestamp.
            // This will be captured on the client to force a token refresh.
            return metadataRef.set({refreshTime: new Date().getTime()});

        } else {
            await admin.auth().deleteUser(user.uid);

            // Update real-time database to notify client to force refresh.
            const metadataRef = admin.database().ref("metadata/" + user.uid);
            // Set the refresh time to the current UTC timestamp.
            // This will be captured on the client to force a token refresh.
            return metadataRef.set({refreshTime: new Date().getTime()});
        }
    } catch (err) {
        if (err) {
            console.log(err.message);
        }
        return {error: err.message};
    }
};
module.exports = signUp;