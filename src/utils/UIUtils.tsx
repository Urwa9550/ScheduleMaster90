import {StatusBar, Alert, useColorScheme, View, Text, Dimensions, TouchableOpacity, FlatList, Image } from "react-native";


  const renderStatusBar = () => {
    const theme = useColorScheme()
  
    return (
      <StatusBar
        barStyle={theme== 'dark'? "dark-content" :'light-content' }
        // barStyle={'light-content'}
        translucent={true}
      />
    );
  };

  const resFont = (size) =>{
    return size
  }

  export {
    renderStatusBar,
    resFont,
  }