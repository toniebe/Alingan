import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import HTML from 'react-native-render-html';
import convertNumber from '../../assets/helper/convertNumber';
import formatDate from '../../assets/helper/formatDate';
import Button from '../../assets/components/Button';
import {CNeutral} from '../../assets/styles/colors';
import {scale} from '../../assets/helper/scaling';
import RNHTMLtoPDF,{RNPrint} from 'react-native-html-to-pdf';

export default function StructScreen({navigation, route}) {
  const {data, nominal, moneyChanges} = route.params;
  const {item, totalPrice, totalProduct} = data.data;
  const {width} = useWindowDimensions();

  useEffect(() => {
    console.log({data: data});
  }, []);

  const dynamicHTML = `<body style="color:'black';">
    <div class="container" style="background-color:white;padding:20px 16px; border: 1px solid grey; width:328px;height: 494px; display: flex; align-items: center;flex-direction: column;">
        <div id="Container-SubjectStruk" style="width: 100%; text-align: center; display: flex; flex-direction: column; margin-bottom: 10px;">
            <span id="SubjectStruk1" style="font-weight: bold; font-size: 18px; line-height: 27px;text-align: center; ">Es Teh Nusantara</span>
            <span id="SubjectStruk2" style="font-weight: 400px; font-size: 12px; line-height: 18px; text-align: center;">Sukajadi, Bandung</span>
        </div>
        <hr style="border: 1px dashed #000000; width: 100%;">
        <div id="InfoStruk" style=" width: 100%; margin: 10px 0px;">
            <Table>
                <tr>
                    <td style="width: 54px; height: 18px;"><span style="font-size:12px; line-height:18px">Tanggal</span></td>
                    <td>:</td>
                    <td><span id="DateStruk" style="font-size:12px; line-height:18px">${formatDate(
                      {
                        date_input: data.date,
                        type: 'short',
                        sparator: ' ',
                        withYear: true,
                      },
                    )}</span></td>
                </tr>
                <tr>
                    <td style="width: 54px; height: 18px;"><span style="font-size:12px; line-height:18px">Jam</span></td>
                    <td>:</td>
                    <td><span id="TimeStruk" style="font-size:12px; line-height:18px">19:38:18</span></td>
                </tr>
                <tr>
                    <td style="width: 54px; height: 18px;"><span style="font-size:12px; line-height:18px">Kasir</span></td>
                    <td>:</td>
                    <td><span id="CreatedBy" style="font-size:12px; line-height:18px">Eva Celia</span></td>
                </tr>
            </Table>
        </div>
        <hr style="border: 1px dashed #000000; width: 100%;">
        <div style="margin:10px 0px; width: 100%;">
            
            ${item.map(
              (item, index) =>
                `<div style=" display: flex;flex-direction: row;justify-content: space-between;">
                    <div style="margin-left: 40px;"><span id="SUmProduct" style="font-size:12px; line-height:18px"></span>${
                      item.quantity + ' ' + item.unit + ' '
                    }<span id="ProductName" style="font-size:12px; line-height:18px">${
                  item.productName
                }</span></div>
                    <span id="PriceProduct" style="font-size:12px; line-height:18px">${convertNumber(
                      item.quantity * item.price,
                    )}</span>
                </div>`,
            )}
        </div>
        <hr style="border: 1px dashed #000000; width: 100%;">
        <div style="margin:10px 0px; width: 100%;">
            <div style=" display: flex;flex-direction: row;justify-content: space-between;">
                <span style="font-size:12px; line-height:18px">${`Subtotal ${totalProduct} product`}</span>
                <span id="SubTotal" style="font-size:12px; line-height:18px">${convertNumber(
                  totalPrice,
                )}</span>
            </div>
            <div style=" display: flex;flex-direction: row;justify-content: space-between;">
                <span style="font-size:12px; line-height:18px">Total Harga</span>
                <span  id="TotalHarga" style="font-size:12px; line-height:18px">${convertNumber(
                  totalPrice,
                )}</span>
            </div>
        </div>
        <hr style="border: 1px dashed #000000; width: 100%;">
        <div style=" margin:10px 0px; width: 100%;">
            <div  style=" display: flex;flex-direction: row;justify-content: space-between;">
                <span style="font-size:12px; line-height:18px">Total Bayar</span>
                <span id="TotalBayar" style="font-size:12px; line-height:18px">${convertNumber(
                  nominal,
                )}</span>
            </div>
            <div  style=" display: flex;flex-direction: row;justify-content: space-between;">
                <span style="font-size:12px; line-height:18px">Kembalian</span>
                <span id="TotalKembalian" style="font-size:12px; line-height:18px">${moneyChanges.replace(
                  'Rp',
                  '',
                )}</span>
            </div>
        </div>
        <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
            <span style="margin: 10px 0px; font-weight:400;font-size: 10px; line-height: 15px; text-align: center; ">Terima Kasih</span>
            <span style="font-weight: 600; font-size: 8px; line-height: 12px; text-align: center;">Powered by</span>
            <span style="font-weight: 900;font-size: 14px;line-height: 16.94px;text-align: center;">ALINGAN</span>
        </div>
       
    </div>
</body>`;

const printPDF = async () => {
    const htmlString = await dynamicHTML;
    const results = await RNHTMLtoPDF.convert({
      html: htmlString,
      fileName: `struk Alingan ${formatDate({date_input:data.date,type:'short',sparator:'-',time:true,withYear:true,sparatorDateTime:'--'})}`,
      base64: true,
    });
    // await RNPrint.print({filePath: results.filePath});
    if(results){
        console.log(results.filePath);
        navigation.navigate('Transaksi')
    }else{
        console.log('error')
    }
  };

  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <HTML source={{html: dynamicHTML}} contentWidth={width} />
      </View>
      <View style={styles.cardPrint}>
        <View style={styles.buttonContainer}>
          <Button
            category="standard"
            size="long"
            type="secondary"
            title={'Kembali ke Transaksi'}
            onPress={() => navigation.navigate('Transaksi')}
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            category="standard"
            size="long"
            type="primary"
            title={'Cetak Struk'}
            onPress={() => printPDF()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardPrint: {
    position:'absolute',
    bottom:0,
    backgroundColor:CNeutral,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    paddingVertical:scale(10),
    paddingHorizontal:scale(7)
  },
  buttonContainer:{
    width:'50%',
    marginRight:scale(4)
    // backgroundColor:'pink'
  },
  buttonContainer2:{
    width:'50%',
    // backgroundColor:'blue'
  }
});
