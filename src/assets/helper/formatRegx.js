const formatRegex = (value, type) => {
  switch (type) {
    case 'numberOnly' : return value.replace(/\D/g,"");
    case 'numberDot' : return value.replace(/[^\d\.]/g, '');
    case 'stringOnly' : return value.replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '');
    default : return value;
  }
}