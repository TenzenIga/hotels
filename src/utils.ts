export function formatToYYYYMMDD(date:Date| number){
    let formatter = new Intl.DateTimeFormat("ru");
    return formatter.format(date).split('.').reverse().join('-');
}

export function compareValues(key:string, order = 'asc') {
    return function innerSort(a:any, b:any) {

      const hotelA =  a[key];
      const hotelB =  b[key];
  
      let comparison = 0;
      if (hotelA > hotelB) {
        comparison = 1;
      } else if (hotelA < hotelB) {
        comparison = -1;
      }
      return (order === 'desc') ? (comparison * -1) : comparison;
    };
  }