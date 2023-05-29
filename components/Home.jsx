import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native'
import JobItem from './JobItem' // import the new JobItem component
import { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import JobCard from './JobCard'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

function App() {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchJobsData()
  }, [])

  const onRefresh = async () => {
    setRefreshing(true)
    console.log(await fetchJobsData())
    console.log('start refresh')
    setTimeout(() => {
      setRefreshing(false)
      console.log('end refresh')
    }, 2000)
  }

  const fetchJobsData = async () => {
    const res = await fetch('https://sec-jobs-rest.onrender.com/api/jobs')
    const data = await res.json()
    setData(data)
    return data
  }

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'black',
          height: 70,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          Kerja IT
        </Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data.map((job, index) => (
          <JobItem job={job} key={index} /> // pass the job object as a prop to the JobItem component
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
