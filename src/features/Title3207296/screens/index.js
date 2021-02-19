import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_985_40}>
        <View style={styles.View_985_41}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d6c/1b8c/7c0d0923c30221004551c7f2925eea7d"
            }}
            style={styles.ImageBackground_985_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8a/ddd4/868b220afd92a32dff37bb94cd3ddfc8"
            }}
            style={styles.ImageBackground_985_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d14/9782/b376b688daea15000d8540d3edecc189"
            }}
            style={styles.ImageBackground_985_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6720/1e4f/330d50bf9925d25982ccdb5497529fb0"
            }}
            style={styles.ImageBackground_985_51}
          />
        </View>
        <View style={styles.View_985_52}>
          <Text style={styles.Text_985_52}>Pegasus</Text>
        </View>
        <View style={styles.View_985_53}>
          <Text style={styles.Text_985_53}>Design System</Text>
        </View>
      </View>
      <View style={styles.View_985_54}>
        <Text style={styles.Text_985_54}>pegasusdesignsystem.com</Text>
      </View>
      <View style={styles.View_985_55} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_985_40: {
    width: 1019,
    minWidth: 1019,
    height: 278.0845031738281,
    minHeight: 278.0845031738281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168,
    top: 110
  },
  View_985_41: {
    width: 376.2830505371094,
    minWidth: 376.2830505371094,
    height: 254.7246551513672,
    minHeight: 254.7246551513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_985_42: {
    width: 230.22637939453125,
    minWidth: 230.22637939453125,
    height: 199.1865234375,
    minHeight: 199.1865234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146.056640625,
    top: 0
  },
  ImageBackground_985_49: {
    width: 230.23193359375,
    minWidth: 230.23193359375,
    height: 230.23193359375,
    minHeight: 230.23193359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24.49261474609375
  },
  ImageBackground_985_50: {
    width: 156.75367736816406,
    minWidth: 156.75367736816406,
    height: 156.75367736816406,
    minHeight: 156.75367736816406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93.072509765625,
    top: 44.08685302734375
  },
  ImageBackground_985_51: {
    width: 102.86959075927734,
    minWidth: 102.86959075927734,
    height: 102.86959075927734,
    minHeight: 102.86959075927734,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.0869140625,
    top: 137.1593017578125
  },
  View_985_52: {
    width: 539.7818603515625,
    minWidth: 539.7818603515625,
    minHeight: 141.3912353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479.2181396484375,
    top: 19.1051025390625
  },
  Text_985_52: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 102.36695861816406,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -2.4951398372650146,
    textTransform: "none"
  },
  View_985_53: {
    width: 539.7818603515625,
    minWidth: 539.7818603515625,
    minHeight: 141.3912353515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 479.2181396484375,
    top: 136.6932373046875
  },
  Text_985_53: {
    color: "rgba(217, 219, 233, 1)",
    fontSize: 54.990440368652344,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8317131400108337,
    textTransform: "none"
  },
  View_985_54: {
    width: 1240,
    top: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1459
  },
  Text_985_54: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 64,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_985_55: {
    width: 4,
    minWidth: 4,
    height: 500,
    minHeight: 500,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1375,
    top: 0,
    backgroundColor: "rgba(42, 0, 162, 1)"
  },
  View_2: { height: 500 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
