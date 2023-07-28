{
    teachers: [
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
    ],
  
    students: [
      {
        "id": "b9766037-4625-4d2b-882f-0e76bcee0ec6",
        "name": "teststudent1",
        "email": "teststudent1@email.com",
        "password": "123456",
        "available": true
      },
      {
        "id": "1b9a32a4-1cee-4811-a137-02643723dc0d",
        "name": "teststudent2",
        "email": "teststudent2@email.com",
        "password": "123456",
        "available": false
      }
    ],
  
    classSchedule: [
      {
        "id": "8b2c0754-a1e8-4e36-8fa7-432b69e7eb93",
        "teacherId": "",
        "startDate": "Mon Jul 31 2023 19:22:37 GMT+0400 (Gulf Standard Time)",
        "session": {
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
    ]
  }
  