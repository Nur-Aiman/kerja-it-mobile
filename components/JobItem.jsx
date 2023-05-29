import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function JobItem({ job }) {
  const navigation = useNavigation()

  const date = new Date(job.post_date)
  const isNew = date.getFullYear() === 2023

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('JobCard', { job })}
    >
      <View style={styles.jobHeader}>
        <Text style={styles.title}>{job.job}</Text>
        {isNew && <Text style={styles.newLabel}>New</Text>}
      </View>
      <Text style={styles.company}>{job.company}</Text>

      <View style={styles.jobDetails}>
        <Text style={styles.date}>
          🗓 Posted on {new Date(job.post_date).toLocaleDateString()}
        </Text>
        <Text style={styles.location}>📍 {job.district}</Text>
        <Text style={styles.workType}>💼{job.work_type}</Text>
      </View>
      <View style={styles.stackContainer}>
        {job.stacks.map((stack, index) => (
          <Text key={index} style={styles.stack}>
            {stack}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  newLabel: {
    backgroundColor: '#BBF7D0',
    color: '#2D3748',
    fontSize: 14,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  company: {
    fontSize: 16,
    marginBottom: 8,
  },
  jobDetails: {
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  workType: {
    fontSize: 16,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  stackContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  stack: {
    backgroundColor: '#edf2f7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
})

export default JobItem
