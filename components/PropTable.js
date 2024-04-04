import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {DataTable} from "react-native-paper";

const TableComponent = ({ data, selectedCharacter }) => {
  const screenWidth = Dimensions.get('window').width;

  if (!data || data.length === 0) {
    return <Text>Aucune donnée à afficher</Text>;
  }

  // Récupérer les clés des objets pour créer les en-têtes
  const headers = Object.keys(data[0]);

  return (
    <View style={{width: screenWidth - 20, marginTop: 10}}>
      <DataTable>
        <DataTable.Header>
          {headers.map(header => (
            <DataTable.Title key={header} style={styles.head}>{header}</DataTable.Title>
          ))}
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index}>
            {headers.map(header => (
              <DataTable.Cell key={header} style={[ item[header] === selectedCharacter[header] ? [styles.green, styles.cell] : [styles.red, styles.cell]]}>
                {item[header]}
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = {
  cell: {
    justifyContent: 'center',
  },
  head: {
    backgroundColor: '#f1f8ff',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: '#f35757',
  },
  green: {
    backgroundColor: '#a2ef5b',
  }
};

export default TableComponent;