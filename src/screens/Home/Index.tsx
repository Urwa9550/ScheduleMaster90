import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { renderStatusBar } from "../../utils/UIUtils";
import { teacherData } from "../../utils/Constants";
import { selectSchedule, selectTeacherSchedule } from '../../store/scheduleSlice';
import { useSelector } from "react-redux";

// ----Student Dashboard----
const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const scheduleList = useSelector(selectSchedule)
  const teacherList = useSelector(selectTeacherSchedule)
  // console.log("----teacherList 1001a-----", JSON.stringify(teacherList))

  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const renderItem = ({ item }) => {

    const teacherSchedules = item?.schedule?.filter(schedule => schedule.day.toLowerCase() === selectedDay.toLowerCase());

    return (
      <View style={styles.teacherItem}>
        <Text style={styles.teacherName}>{item.name}</Text>
        {teacherSchedules.map(schedule => {
          const sessionTime = `${schedule?.time?.start?.value} ${schedule?.time?.start?.meridian} - ${schedule?.time?.end?.value} ${schedule?.time?.end?.meridian}`;
          return <Text style={styles.scheduleTime} key={schedule.id}>{sessionTime}</Text>;
        })}
      </View>
    );
  };


  const filteredTeachers = teacherList.filter(teacher => {
    if (teacher?.available) {
      const teacherSchedule = teacherList[0]?.schedule?.find(item => item.day === selectedDay);
      return teacherSchedule;
    }
    return false;
  });


  const scheduleContent = () => {
    return (
      <View style={styles.containerSc}>
        <View style={styles.daySelectorSc}>
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
            <TouchableOpacity
              key={day}
              onPress={() => setSelectedDay(day)}
              style={[styles.dayButtonSc, selectedDay === day && styles.selectedDayButtonSc]}
            >
              <Text style={[styles.dayButtonTextSc, selectedDay === day && styles.selectedDayButtonTextSc]}>
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredTeachers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.scheduleContainerSc}
        />
      </View>
    );
  };


  const renderContent = () => {

    return (
      <View style={styles.containerView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>hi, Jim diaz</Text>
            <Text style={styles.description}>
              Check Schedule here
            </Text>
          </View>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Profile", { screen: "Profile" })}
            style={styles.user_icon_container}
          >
            <Image
              source={require("../../../assets/Image.png")}
              style={styles.user_icon}
            />
          </TouchableOpacity>
        </View>
        {scheduleContent()}
      </View>

    )
  }

  return (
    <View style={{ flex: 1 }}>
      {renderStatusBar()}
      {renderContent()}

    </View>
  );
};

export default Home;
