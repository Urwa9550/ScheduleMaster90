import { String } from "./String";
import { validations } from "./Constants";


const validateLogin = (email, password) => {
  const errorMessage = {};

  if (!email) {
    errorMessage.email = String.EMAIL_REQUIRED;
  } else if (!validations.EMAIL_REGEX.test(email)) {
    errorMessage.email = String.EMAIL_VALIDATION_MESSAGE;
  }

  if (!password) {
    errorMessage.password = String.PASSWORD_ERROR;
  } else if (password.length < 8) {
    errorMessage.password = String.PASSWORD_LENGTH_ERROR;
  }

  return errorMessage;
};

//generate teacherSchList from scheduleList in redux
const generateTeacherSchList = (scheduleList) => {
  const teacherSchList = [];
  scheduleList.forEach((schedule) => {
    const teacherIndex = teacherSchList.findIndex((teacher) => teacher.id === "1d413197-a48c-4537-9820-00d9b8d70181");
    if (teacherIndex !== -1) {
      teacherSchList[teacherIndex].schedule = [...teacherSchList[teacherIndex].schedule, schedule];
    } else {
      teacherSchList.push({
        id: "1d413197-a48c-4537-9820-00d9b8d70181",
        name: "testteacher1",
        email: "testteacher1@email.com",
        password: "123456",
        schedule: [schedule],
        available: true,
      });
    }
  });
  return teacherSchList;
};

export {
  validateLogin,
  generateTeacherSchList,
}