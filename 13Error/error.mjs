//How to create error
let errorFun = () => {
  let error = new Error("This is my first error");
  throw error;
};
errorFun();
