try {
  console.log("Hello i am try");
  let error = new Error("Yon can enter invalid email address");
  throw error;
  //if the error is occurred then it goes to the catch block
  //if the error is not occurred then it does no goes to the catch block
  console.log("This is not executed");
} catch (error) {
  console.log("Error Encountered");
}
