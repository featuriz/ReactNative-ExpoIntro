import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function App() {
  const initialValue = [
    ['7/12/2021', 'SC'],
    ['9/12/2021', 'SL'],
    ['11/12/2021', 'ET'],
    ['13/12/2021', 'MA'],
    ['15/12/2021', 'EL'],
    ['16/12/2021', 'TL'],
    ['17/12/2021', 'SS'],
    ['18/12/2021', 'CA'],
  ]
  const [tHead, setTHead] = useState(['Date', 'Subject']);
  const [subject, setSub] = useState(initialValue);
  const postList = subject.length ? (
    subject.map((s, i) => <Row key={i} data={s} style={styles.tableCont} />)
  ) : (
    <Row key="0" data="-" />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>III C</Text>
      <Text style={styles.subHeading}>Nithesha Suresh</Text>
      <Text style={styles.subxHeading}>St Thomas Higher Sec School, Gudalur</Text>
      <Table style={styles.table}>
        <Row data={tHead} style={styles.tableHead} />
        {postList}
      </Table>
      <Text style={styles.footerAbout}>My First Mobile App by using React native</Text>
      <Text style={styles.footerBy}>-By Sudhakar Krishnan</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(212, 69, 93)',
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50
  },
  heading: {
    backgroundColor: 'rgb(235, 189, 106)',
    fontSize: 32,
    textAlign: 'center',
    padding: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  subHeading: {
    backgroundColor: 'rgb(245, 222, 179)',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },
  subxHeading: {
    backgroundColor: 'rgb(245, 222, 179)',
    fontSize: 11,
    textAlign: 'center',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  table: {
    borderColor: '#000',
    backgroundColor: 'rgb(201, 194, 181)',
    borderRadius: 10,
    marginTop: 5,
  },
  tableHead: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'flex-end',
    marginLeft: 'auto'
  },
  tableCont: {
    padding: 10,
  },
  footerAbout: {
    marginTop: 50,
    textAlign: 'center'
  },
  footerBy: {
    textAlign: 'center'
  }
});
