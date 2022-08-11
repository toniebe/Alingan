const getMonth = mt => {
  switch (mt+1) {
      case 1 :
          return 'Januari';
      case 2 :
          return 'Februari';
      case 3 :
          return 'Maret';
      case 4 :
          return 'April';
      case 5 :
          return 'Mei';
      case 6 :
          return 'Juni';
      case 7 :
          return 'Juli';
      case 8 :
          return 'Agustus';
      case 9 :
          return 'September';
      case 10 :
          return 'Oktober';
      case 11 :
          return 'November';
      case 12 :
          return 'Desember';
  }
}
export default ({date_input, type = 'number', sparator=' ', time = false, withYear = true, sparatorDateTime= ''}) => {
  const dt = new Date(date_input);
  let bulan, time_display;
  
  //Type long || sort || number
  //Time false || hms || hm
  
  !time ? time_display = '' : time == 'hms' ? time_display =  dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds() : time_display =  dt.getHours()+':'+dt.getMinutes();
  
  switch(type) {
      case 'short' :
          bulan = getMonth(dt.getMonth()).substr(0, 3);
          return `${dt.getDate()}${sparator}${bulan}${withYear ? sparator : ''}${withYear ? dt.getFullYear() : ''}${sparatorDateTime}${time_display}`;
      case 'long' :            
          bulan = getMonth(dt.getMonth());
          return `${dt.getDate()}${sparator}${bulan}${withYear ? sparator : ''}${withYear ? dt.getFullYear() : ''}${sparatorDateTime}${time_display}`;
      case 'db' :
          return `${dt.getDate()}-${dt.getMonth()}-${withYear ? dt.getFullYear() : ''}`;
      default : 
          bulan = dt.getMonth()+1;
          return `${dt.getDate()}${sparator}${bulan}${withYear ? sparator : ''}${withYear ? dt.getFullYear() : ''}${sparatorDateTime}${time_display}`;
  }
}

// console.log(formatDate({date_input : "2022-06-07T10:26:07+07:00", time : true, type: 'short', withYear : false}))