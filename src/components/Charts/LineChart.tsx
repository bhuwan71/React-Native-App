/* eslint-disable prettier/prettier */
import React = require('react');
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
export const LineChartComponent = () => {
    const lineData = [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }];
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ backgroundColor: '#1A3461' }}>
            <LineChart
                initialSpacing={0}
                data={lineData}
                spacing={30}
                hideDataPoints
                thickness={2}
                hideRules
                hideYAxisText
                yAxisColor="#0BA5A4"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#0BA5A4"
            />
        </View>
    );
};
