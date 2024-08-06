// Different methods to create buffers
const buffer1 = Buffer.alloc(100); // Create a buffer of 100 bytes
const buffer2 = Buffer.from("UCSC"); // Create a buffer from a string
const buffer3 = Buffer.from([1, 2, 3, 4]); // Create a buffer from an array
// const buffer4 = new Buffer("Has an Issue with this");

// Writing data to a buffer
buffer1.write("Happy Learning");

// Reading data from a buffer
const a = buffer1.toString("utf-8");
console.log(a);

// Checking if an object is a buffer
console.log(Buffer.isBuffer(buffer1));
console.log(Buffer.isBuffer(a));

// Getting the length of a buffer
console.log(buffer1.length);

// // Copying a buffer
const bufferSrc = Buffer.from("ABC");
console.log("Source", bufferSrc.toString("utf-8"));
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);
console.log("Dest:", bufferDest.toString("utf-8"));

// // Slicing data
const bufferOld = Buffer.from("Hello world");
const bufferNew = bufferOld.slice(0, 5);
console.log("New: ", bufferNew.toString());

// // Concatenating two buffers
const bufferOne = Buffer.from("Happy Learning");
const bufferTwo = Buffer.from(" With UCSC");
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
