import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Modal, Alert, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../utils/Colors';
import { Picker } from '@react-native-picker/picker';
import { ScheduleItem } from '../../utils/Types'
import { setSchedule, selectSchedule, updateSchedule, deleteSchedule, addSchedule } from '../../store/scheduleSlice';
import { useDispatch, useSelector } from "react-redux";

const initialSchedule: ScheduleItem = {
  id: "",
  teacherId: "",
  startDate: "",
  day: "",
  time: {
    start: {
      value: "",
      meridian: "AM",
    },
    end: {
      value: "",
      meridian: "PM",
    },
  },
};

const Home2: React.FC<{ navigation: any }> = ({ navigation }) => {
  // ----Teacher's Dashboard----

  const dispatch = useDispatch()
  const scheduleList = useSelector(selectSchedule)
  console.log("-----scheduleList from redux 1002-----", scheduleList)



  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([
    {
      id: "8b2c0754-a1e8-4e36-8fa7-432b69e7eb93",
      teacherId: "",
      startDate: "Mon Jul 31 2023 19:22:37 GMT+0400 (Gulf Standard Time)",
      day: "Monday",
      time: {
        start: {
          value: "10:00",
          meridian: "AM",
        },
        end: {
          value: "05:00",
          meridian: "PM",
        },
      },
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState<ScheduleItem>(initialSchedule);


  useEffect(() => {

    setScheduleData(scheduleList);

  }, [scheduleList]);


  const handleAddSchedule = () => {
    setIsEditing(false);
    setCurrentSchedule(initialSchedule);
    setModalVisible(true);
  };

  const handleEditSchedule = (schedule) => {
    setIsEditing(true);
    setCurrentSchedule(schedule);
    setModalVisible(true);
  };

  const handleSaveSchedule = () => {
    console.log("----currentSchedule---", currentSchedule.day)
    if (currentSchedule.day == "") {
      Alert.alert("Select Day", "Kindly select day of the session.")
      return false
    }
    if (isEditing) {
      // Update existing schedule
      dispatch(updateSchedule(currentSchedule));
    } else {
      // Add new schedule
      const newSchedule = { ...currentSchedule, id: Math.random().toString() };
      dispatch(addSchedule(newSchedule));
    }
    setModalVisible(false);
  };

  const handleSaveScheduleOld = () => {
    if (isEditing) {
      // Update existing schedule
      setScheduleData((prevData) =>
        prevData.map((item) => (item.id === currentSchedule.id ? currentSchedule : item))
      );
    } else {
      // Add new schedule
      const newSchedule = { ...currentSchedule, id: Math.random().toString() };
      setScheduleData((prevData) => [...prevData, newSchedule]);
    }

    let dataFormat = {
      id: "1d413197-a48c-4537-9820-00d9b8d70181",
      name: "testteacher1",
      email: "testteacher1@email.com",
      password: "123456",
      schedule: scheduleData,
      available: true,
    }

    dispatch(setSchedule(dataFormat))
    setModalVisible(false);
  };

  // Delete a schedule from list 
  const handleDeleteSchedule = (id) => {
    // setScheduleData((prevData) => prevData.filter((item) => item.id !== id));
    dispatch(deleteSchedule(id));
  };

  // schedule card Item 
  const renderItem = ({ item }) => {
    const sessionTime = `${item.time.start.value} ${item.time.start.meridian} - ${item.time.end.value} ${item.time.end.meridian}`;
    return (
      <View style={styles.schedule_item}>
        <Text style={styles.date}>{item.day}</Text>
        <Text style={styles.time}>{sessionTime}</Text>
        <Button title="Edit" onPress={() => handleEditSchedule(item)} />
        <Button title="Delete" color="red" onPress={() => handleDeleteSchedule(item.id)} />
      </View>
    );
  };


  const renderContent = () => {

    return (
      <>
        <View style={styles.container}>
          <FlatList
            data={scheduleData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.schedule_container}
          />
          {/* <TouchableOpacity style={styles.add_button} onPress={handleAddSchedule}>
            <Text style={styles.add_button_text}>Add Schedule</Text>
          </TouchableOpacity> */}

          <Modal visible={modalVisible} animationType="slide">
            <SafeAreaView style={styles.modal_container}>

              <Picker
                selectedValue={currentSchedule.day}
                onValueChange={(itemValue) => {
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    day: itemValue,
                  }))
                }
                }
                dropdownIconColor={Colors.primaryBlue}
                style={{ borderRadius: 16, borderWidth: 3, borderColor: Colors.lightGray }}
              >
                <Picker.Item label="Monday" value="Monday" color={Colors.black} />
                <Picker.Item label="Tuesday" value="Tuesday" color={Colors.black} />
                <Picker.Item label="Wednesday" value="Wednesday" color={Colors.black} />
                <Picker.Item label="Thursday" value="Thursday" color={Colors.black} />
                <Picker.Item label="Friday" value="Friday" color={Colors.black} />
                <Picker.Item label="Saturday" value="Saturday" color={Colors.black} />
                <Picker.Item label="Sunday" value="Sunday" color={Colors.black} />
              </Picker>

              <View style={{ height: 20 }} />

              <TextInput
                style={styles.input}
                placeholder="Start Time"
                value={currentSchedule.time.start.value}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    time: { ...prevSchedule.time, start: { ...prevSchedule.time.start, value } },
                  }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="meridian (Start)"
                value={currentSchedule.time.start.meridian}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    time: { ...prevSchedule.time, start: { ...prevSchedule.time.start, meridian: value } },
                  }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="End Time"
                value={currentSchedule?.time?.end?.value}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    time: { ...prevSchedule.time, end: { ...prevSchedule.time.end, value } },
                  }))
                }
              />

              <TextInput
                style={styles.input}
                placeholder="meridian (End)"
                value={currentSchedule?.time?.end?.meridian}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    time: { ...prevSchedule.time, end: { ...prevSchedule.time.end, meridian: value } },
                  }))
                }
              />

              <Button title="Save" onPress={handleSaveSchedule} />
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
            </SafeAreaView>
          </Modal>
        </View>
      </>
    )
  }

  const renderHeader = () => {
    return (
      <View style={styles.container_view}>
        <View style={styles.container_view_2}>
          <View>
            <Text style={styles.heading}>Hi, Professor Alan Turing</Text>
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
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.main_container}>
      {renderHeader()}
      {renderContent()}
      {<TouchableOpacity style={styles.add_button} onPress={handleAddSchedule}>
        <Text style={styles.add_button_text}>Add Schedule</Text>
      </TouchableOpacity>}
    </SafeAreaView>
  );
};


export default Home2;