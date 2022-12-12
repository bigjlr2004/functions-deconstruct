let message = "";
const getPaper = () => {
    message += "1. Get a Piece of Paper.";
    return message;
};

const foldPaper = () => {
    message += "\n2. Fold it in half.";
    return message;
};

const cleanPen = () => {
    message += "\n3. Clean my fountain pen.";
    return message;
};

const fillPen = () => {
    message += "\n5. Fill fountain pen with color I want.";
    return message;
};

const getInk = () => {
    message += "\n4. Get ink for the fountain pen.";
    return message;
};

const writeLetter = () => {
    message += "\n6. Write Letter.";
    return message;
};

const makeEnvelope = () => {
    message += "\n7. Fold letter to make it into an envelope to be addressed.";
    return message;
};

const meltWax = () => {
    message += "\n8. Melt wax colors I want for the seal.";
    return message;
};

const pourWax = () => {
    message += "\n9. Pour wax onto letter.";
    return message;
};

const sealWax = () => {
    message += "\n10. Press seal into wax.";
    return message;
};

const addressEnvelope = () => {
    message += "\n11. Address the envelope.";
    return message;

};

const stampEnvelope = () => {
    message += "\n12. Add stamp to the envelope.";
    return message;
};

const mailLetter = () => {
    message += "\n13. Mail letter.";
    return message;
};

getPaper();
foldPaper();
cleanPen();
getInk();
fillPen();
writeLetter();
makeEnvelope();
meltWax();
pourWax();
sealWax();
addressEnvelope();
stampEnvelope();
mailLetter();
console.log(message);