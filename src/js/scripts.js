// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {

  // Prompt to collect the first name of the user.
  const firstNamePrompt = "What is your first name? ";
  // Prompt to collect the last name of the user.
  const lastNamePrompt = "What is your last name? ";

  // Collect the first name of the user.
  let firstName = String(await input(firstNamePrompt));
  // Collect the last name of the user.
  let lastName = String(await input(lastNamePrompt));

  // Construct the user's full name by concaternating the first and last names of the user.
  let fullname = firstName + " " + lastName;

  // Replace any lowercase "o" characters in fullname to be "a" characters.
  let oReplacedFullname = fullname.replace(/o/g, "a");

  // Output the "o" to "a" replaced fullname to the console application.
  output("The full name after replacing lowercase 'o' to 'a',");
  output(oReplacedFullname);

  // Prompt to collect a number larger than 10.
  const numberLargerThan10Prompt = "Enter a number larger than 10: ";
  // Prompt to collect a number smaller than 10.
  const numberSmallerThan10Prompt = "Enter a number smaller than 10: ";


  // Collect a number larger than 10.
  let numberLargerThan10 = Number(await input(numberLargerThan10Prompt));
  // Collect a number smaller than 10.
  let numberSmallerThan10 = Number(await input(numberSmallerThan10Prompt));

  // Compute the remainder of the larger number divided by the smaller number.
  let remainder = numberLargerThan10 % numberSmallerThan10;

  // Output the remainder of the larger number divided by the smaller number.
  output("Remainder of the larger number divided by the smaller number,");
  output(remainder);
}
