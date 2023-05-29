import {
  Text,
  View,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

function JobCard({ route }) {
  const { job } = route.params

  const handleApplyNow = () => {
    Linking.openURL(job.link)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.jobInfo}>
        <View style={styles.stackContainer}>
          {job.stacks.map((stack, index) => (
            <Text key={index} style={styles.stack}>
              {stack}
            </Text>
          ))}
        </View>
        <Text style={styles.jobTitle}>{job.job}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <View style={styles.jobDetails}>
          <Text>🗓 Posted on {job.post_date}</Text>
          <Text>📍 {job.district}</Text>
          <Text>💼 {job.work_type}</Text>
          <Text>🕒 Unspecified</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleApplyNow}
          >
            <Text style={styles.buttonText}>Apply Now 🚀</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeader}>✍️ Job Description</Text>
        <View style={styles.descriptionList}>
          {job.details.job_description.map((desc, index) => (
            <Text key={index} style={styles.listItem}>
              {desc}
            </Text>
          ))}
        </View>
        <Text style={styles.sectionHeader}>Qualifications</Text>
        <View style={styles.descriptionList}>
          {job.details.qualification.map((qual, index) => (
            <Text key={index} style={styles.listItem}>
              {qual}
            </Text>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleApplyNow}
          >
            <Text style={styles.buttonText}>Apply Now 🚀</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#EDF2F7',
  },
  jobInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  stackContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  stack: {
    backgroundColor: '#EDF2F7',
    borderRadius: 5,
    padding: 4,
    marginBottom: 2,
    marginRight: 2,
  },
  jobTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  company: {
    fontSize: 20,
    marginBottom: 8,
  },
  jobDetails: {
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: '#3182CE',
    borderRadius: 5,
    marginBottom: 16,
    paddingTop: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',

    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionList: {
    marginBottom: 16,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 4,
  },
})

export default JobCard
