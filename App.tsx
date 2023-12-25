/* eslint-disable prettier/prettier */
import React = require('react');
import { View, Text ,StyleSheet } from 'react-native';
import { LineChartComponent } from './src/components/Charts/LineChart';

export type Props = {
    name: string;
    baseEnthusiasmLevel?: number;
};

const App: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text>
                <LineChartComponent/>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
});

export default App;
