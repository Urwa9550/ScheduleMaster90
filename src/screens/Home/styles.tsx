import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../utils/Colors';

export const styles = StyleSheet.create({
  profile: {
    width: "100%",
    height: 101,
    backgroundColor: Colors.white,
    borderColor: Colors.inputBorder,
    borderWidth: 0.3,
    borderRadius: 16,
    justifyContent: "center",
    marginBottom: 16,
  },
  container: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
  },
  flatlistParent: {
    paddingBottom: 130
  },
  containerView: {
    flex: 1,
    // paddingHorizontal: 26,
    paddingTop: 30,
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: 20,
    color: Colors.lightBlack,
    textAlign: "left",
    opacity: 1,
  },
  description: {
    color: Colors.lightBlack,
    textAlign: "left",
    fontSize: 12,

  },
  user_icon_container: {
    height: 40,
    width: 40,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  user_icon: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  listDescription: {
    color: Colors.lightBlack,
    fontSize: 11,
    width: "85%",
    opacity: 0.7,
  },
  listImage: {
    width: "20%",
    height: 76,
    borderRadius: 16,
    marginHorizontal: 10,
  },
  listinerheading: {
    color: Colors.lightBlack,
    fontSize: 13,
    width: "85%",
    fontWeight: '800',
  },
  containerWeek: {
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  //   contentContainerWeek: {
  //     paddingHorizontal: (windowWidth - itemWidth) / 2,
  //   },
  weekdayContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.gray

  },
  selectedWeekdayContainer: {
    backgroundColor: Colors.primaryBlue,
  },
  weekdayText: {
    fontSize: 12,
    padding: 2,
    fontWeight: 'bold',
    color: '#000', // Default color for weekdays
  },
  selectedWeekdayText: {
    color: '#FFF', // Color for selected weekday
  },

  //   Schedule
  containerSc: {
    // flex: 0.3,
    backgroundColor: '#f0f0f0',
  },
  daySelectorSc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  dayButtonSc: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#007BFF',
  },
  selectedDayButtonSc: {
    backgroundColor: '#0056b3',
  },
  dayButtonTextSc: {
    color: '#fff',
    fontSize: 16,
  },
  selectedDayButtonTextSc: {
    fontWeight: 'bold',
  },
  scheduleContainerSc: {
    padding: 16,
  },
  teacherItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  scheduleTime: {
    fontSize: 16,
    color: '#3a3a3a',
  },
});


