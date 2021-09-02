const validateName = (input) => {
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(input)) {
    console.log(" -> Invalid input (only letters and spaces allowed)");
  }
  return regex.test(input);
};

const validateFolder = (input) => {
  const regex = /^[a-zA-Z/]+$/;
  if (!regex.test(input)) {
    console.log(' -> Invalid input (only letters and " / " allowed)');
  }
  return regex.test(input);
};

module.exports = {
  validateName,
  validateFolder,
};
