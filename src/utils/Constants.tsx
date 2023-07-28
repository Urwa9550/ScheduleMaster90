
const validations = {
    
    EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    // Password@
    REG_PATTERN_PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^\w\s]).{7,}$/,
  
    DIGITS: /^[-+]?\d+$/,
  
    NUMBERS: /^[0-9]*$/,
  };

  const teacherData = [
    {
      "id": "1d413197-a48c-4537-9820-00d9b8d70181",
      "name": "testteacher1",
      "email": "testteacher1@email.com",
      "password": "123456",
      "schedule": [
        {
          "day": "Monday",
          "time": {
            "start": {
              "value": "10:00",
              "meridian": "AM"
            },
            "end": {
              "value": "05:00",
              "meridian": "PM"
            }
          }
        }
      ],
      "available": true
    },
    {
      "id": "bbf9641d-1ff3-4803-bb77-591f3c9f8a76",
      "name": "testteacher2",
      "email": "testteacher2@email.com",
      "password": "123456",
      "schedule": [
        {
          "day": "Wednesday",
          "time": {
            "start": {
              "value": "10:00",
              "meridian": "AM"
            },
            "end": {
              "value": "05:00",
              "meridian": "PM"
            }
          }
        }
      ],
      "available": false
    }
  ];

  

  export {
    validations,
    teacherData,
  }