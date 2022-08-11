import React, { Component } from 'react';
import {
    View,
    Picker,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { scale } from './scaling';
import { vw } from './viewport';
import Modal from 'react-native-modalbox'


export default class YearMonthPicker extends Component {
    constructor(props) {
        super(props);
        let { startYear, endYear, selectedYear, selectedMonth } = props;
        let years = this.getYears(startYear, endYear);
        let months = this.getMonths();
        selectedYear = selectedYear || years[0];
        selectedMonth = selectedMonth || ((new Date()).getMonth() + 1);
        this.state = {
            years,
            months,
            selectedYear,
            selectedMonth,
        }
    }
    show = async ({startYear, endYear, selectedYear, selectedMonth}) => {
        this.refs.Modal.open()
        let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
        let years = this.getYears(startYear, endYear);
        let months = this.getMonths();
        selectedYear = selectedYear || years[0];
        selectedMonth = selectedMonth || ((new Date()).getMonth() + 1);
        let promise = new Promise((resolve) => {
            this.confirm = (year, month) => {
                resolve({
                    year,
                    month
                });
            }
            this.setState({
                years,
                months,
                startYear: startYear,
                endYear: endYear,
                selectedYear: selectedYear,
                selectedMonth: bulan[selectedMonth-1],
                indexMonth: selectedMonth-1
            })
        })
        return promise;
    }
    dismiss = () => {
        this.refs.Modal.close()
    }
    getYears = (startYear, endYear) => {
        startYear = startYear || (new Date()).getFullYear();
        endYear = endYear || (new Date()).getFullYear();
        let years = []
        for ( let i = endYear; i >= startYear; i--){
            years.push(i)
        }
        return years;
    }
    getMonths = () => {
        let months = []
        let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]

        for (let i = 0; i < 12; i++) {
            months.push(bulan[i]);
        }
        return months;
    }

    renderPickerItems = (data) => {
        let items = data.map((value, index) => {
            return (<Picker.Item key={'r-' + index} label={'' + value} value={value} />)
        })
        return items;
    }
    onCancelPress = () => {
        this.dismiss();
    }
    onConfirmPress = () => {
        const confirm = this.confirm;
        const { selectedYear, selectedMonth, indexMonth } = this.state;
        confirm && confirm(selectedYear, indexMonth+1);
        this.dismiss();
    }

    render() {
        const { years, months, selectedYear, selectedMonth } = this.state;
        return(
            <Modal
            ref={"Modal"}
            style={{
              height:scale(100),
              width:scale(260),
            }}
            position="center"
          >
            <View style={{height:'60%', flexDirection:'row'}}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedYear}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedYear: itemValue })}
                >
                    {this.renderPickerItems(years)}
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedMonth}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedMonth: itemValue, indexMonth: itemIndex })}
                >
                    {this.renderPickerItems(months)}
                </Picker>
            </View>
            <View style={{height:'40%', flexDirection:'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={{ paddingHorizontal:scale(20), justifyContent:'center'}} onPress={this.onCancelPress}>
                    <Text style={styles.toolBarButtonText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:scale(20), justifyContent:'center'}} onPress={this.onConfirmPress}>
                    <Text style={styles.toolBarButtonText}>OK</Text>
                </TouchableOpacity>
            </View>
          </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    toolBar: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        height: scale(40),
        borderBottomWidth: 1,
        borderColor: '#EBECED',
    },
    toolBarButton: {
        justifyContent: 'center',
        paddingHorizontal: scale(20),
    },
    toolBarButtonText: {
        fontSize: 3.5*vw,
        color: '#42c5f4',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
    }
})