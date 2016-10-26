export const getPPD = () => {

            do{
                var darts = parseInt(window.prompt("¿Cuantos dardos usaste? 1 ,2 o 3?", "3"), 10);
            }while(isNaN(darts) || darts > 3 || darts < 1);

            $('.dardoscol').each( function(){
                var tiradas = $(this).find('.tirada').length;
                if( $(this).hasClass(j) ) {
                    tiradas = ( tiradas - 1 ) * 3 + parseInt( dardos );
                    $(this).append('<div>PPD: ' + parseFloat( juego / tiradas).toFixed(2) + '</div>');
                } else {
                    tiradas = tiradas * 3;
                    var total_usuario = 0;
                    $(this).find('.tirada').each( function(){
                        total_usuario = total_usuario + parseInt( $(this).text() );
                    });
                    $(this).append('<div>PPD: ' + parseFloat( total_usuario / tiradas).toFixed(2) + '</div>');
                }
            });
        }
export const getDiferencia = ( score, opponent_score ) => {
	if ( score < opponent_score ) 
		return '<div class="green">Dif: +' + parseInt(opponent_score - score) + '</div>';
  
  	if (score > opponent_score ) 
      	return '<div class="red">Dif: - ' + parseInt(score - opponent_score) + '</div>';
 
    return '';
}
export const getCheckout = (score) => {
    switch (score ) {
         case 170:
          return 'T20 T20 BULL';
          break;
         case 169:
          return '';break;
         case 168:
          return '';break;
         case 167:
          return 'T20 T19 BULL';
          break;
         case 166:
          return '';break;
         case 165:
          return '';break;
         case 164:
          return 'T20 T18 BULL';
          break;
         case 163:
          return '';break;
         case 162:
          return '';break;
         case 161:
          return 'T20 T17 BULL';
          break;
         case 160:
          return 'T20 T20 D20';
          break;
         case 159:
          return '';break;
         case 158:
          return 'T20 T20 D19';
          break;
         case 157:
          return 'T20 T19 D20';
          break;
         case 156:
          return 'T20 T20 D18';
          break;
         case 155:
          return 'T20 T19 D19';
          break;
         case 154:
          return 'T20 T18 D20';
          break;
         case 153:
          return 'T20 T19 D18';
          break;
         case 152:
          return 'T20 T20 D16<br />T16 T18 BULL';
          break;
         case 151:
          return 'T20 T17 D20<br />T19 T20 D18';
          break;
         case 150:
          return 'T20 T18 D18<br />BULL BULL BULL';
          break;
         case 149:
          return 'T20 T19 D16<br />T17 T20 D19';
          break;
         case 148:
          return 'T20 T20 D14<br />T20 T16 D20';
          break;
         case 147:
          return 'T20 T17 D18<br />T19 T18 D18';
          break;
         case 146:
          return 'T20 T18 D16<br />T19 T19 D16';
          break;
         case 145:
          return 'T20 T15 D20<br />T19 T16 D20';
          break;
         case 144:
          return 'T20 T20 D12<br />T18 T18 D18';
          break;
         case 143:
          return 'T20 T17 D16<br />T19 T18 D16';
          break;
         case 142:
          return 'T20 T14 D20<br />T18 T16 D20';
          break;
         case 141:
          return 'T20 T15 D18<br />T19 T16 D18';
          break;
         case 140:
          return 'T20 T20 D10<br />T18 T18 D16';
          break;
         case 139:
          return 'T20 T13 D20<br />T19 BULL D16<br />T17 T16 D20';
          break;
         case 138:
          return 'T20 T14 D18<br />T18 T16 D18';
          break;
         case 137:
          return 'T20 T15 D16<br />T19 T16 D16';
          break;
         case 136:
          return 'T20 T20 D8<br />T18 BULL D16';
          break;
         case 135:
          return 'T20 T13 D8<br />BULL T15 D20<br />25 T20 BULL';
          break;
         case 134:
          return 'T20 T14 D16<br />T18 T16 D16';
          break;
         case 133:
          return 'T20 T19 D8<br />T17 BULL D16';
          break;
         case 132:
          return 'T20 T16 D12<br />T17 T15 D18';
          break;
         case 131:
          return 'T20 T13 D16<br />BULL T15 D18';
          break;
         case 130:
          return 'T20 T18 D8<br />20 T20 BULL';
          break;
         case 129:
          return 'T19 T16 D12<br />T19 T12 D18<br />19 T20 BULL';
          break;
         case 128:
          return 'T20 T20 D4<br />T20 18 BULL<br />T18 T18 D10';
          break;
         case 127:
          return 'T20 T17 D8<br />T20 T14 D16';
          break;
         case 126:
          return 'T19 19 BULL<br />T20 16 BULL<br />T18 T12 D18';
          break;
         case 125:
          return 'T20 T19 D4<br />25 BULL BULL<br />25 T20 D20<br />T20 T11 D16';
          break;
         case 124:
          return 'T20 T16 D8<br />20 T18 BULL';
          break;
         case 123:
          return 'T20 T13 D12<br />19 T18 BULL';
          break;
         case 122:
          return 'T18 18 BULL<br />T20 12 BULL';
          break;
         case 121:
          return '25 T20 D18<br />T19 T16 D8';
          break;
         case 120:
          return 'T20 20 D20<br />T19 13 BULL<br />T17 19 BULL';
          break;
         case 119:
          return '19 T20 D20<br />T19 12 BULL';
          break;
         case 118:
          return 'T20 T19 D20<br />T18 T16 D8';
          break;
         case 117:
          return 'T20 18 D20<br />T17 16 BULL';
          break;
         case 116:
          return 'T20 16 D20<br />T16 18 BULL';
          break;
         case 115:
          return '19 T20 D18<br />T19 18 D20';
          break;
         case 114:
          return 'T20 14 D20<br />T18 20 D20';
          break;
         case 113:
          return 'T20 13 D20<br />20 T19 D18<br />T19 16 D20<br />19 T18 D20<br />T17 12 BULL<br />17 T20 D18';
          break;
         case 112:
          return 'T18 18 D20<br />T12 T20 D8<br />12 T20 D20';
          break;
         case 111:
          return 'T20 19 D16<br />20 T17 D20<br />T19 14 BULL<br />17 T18 D20';
          break;
         case 110:
          return 'T20 BULL<br />20 T18 D18<br />BULL 20 D20<br />25 T15 D20<br />15 T15 BULL';
          break;
         case 109:
          return 'T20 17 D16<br />20 T19 D16<br />T19 12 D20<br />19 T18 D18';
          break;
         case 108:
          return 'T19 19 D16<br />18 T18 D18<br />T20 8 D20<br />20 T16 D20';
          break;
         case 107:
          return 'T19 BULL<br />19 T16 D20<br />T17 16 D20<br />17 T18 D18';
          break;
         case 106:
          return 'T20 10 D18<br />20 T18 D16<br />T18 12 D20<br />T16 18 D20<br />16 T18 D18';
          break;
         case 105:
          return 'T20 13 D16<br />20 T15 D20<br />T19 8 D20<br />19 T18 D16';
          break;
         case 104:
          return 'T18 BULL<br />18 T18 D16<br />T16 16 D20';
          break;
         case 103:
          return 'T19 10 D16<br />19 T16 D18<br />T17 12 D20<br />17 T18 D16';
          break;
         case 102:
          return 'T20 10 D16<br />20 BULL D16<br />T18 16 D16<br />18 T16 D18';
          break;
         case 101:
          return 'T17 BULL<br />17 T16 D18<br />T13 12 BULL<br />13 T16 D20';
          break;
         case 100:
          return 'T20 D20<br />T16 12 D20<br />16 T16 D18<br />BULL BULL';
          break;
         case 99:
          return 'T19 10 D16<br />19 T16 D16<br />T20 7 D16<br />T17 8 D20<br />17 BULL D16';
          break;
         case 98:
          return 'T20 D19<br />20 T18 D12<br />T16 BULL<br />16 T16 D17';
          break;
         case 97:
          return 'T19 D20<br />19 T18 D12<br />T17 10 D18<br />17 T16 D16';
          break;
         case 96:
          return 'T20 D18<br />20 T20 D8<br />T16 16 D16<br />T18 10 D16';
          break;
         case 95:
          return 'T19 D19<br />19 T20 D8<br />T15 BULL<br />15 T16 D16';
          break;
         case 94:
          return 'T18 D20<br />T16 6 D20';
          break;
         case 93:
          return 'T19 D18<br />25 18 BULL';
          break;
         case 92:
          return 'T20 D16<br />T16 11 D16';
          break;
         case 91:
          return 'T17 D20<br />17 BULL D12';
          break;
         case 90:
          return 'T18 D18<br />BULL D20';
          break;
         case 89:
          return 'T19 D16<br />T13 BULL';
          break;
         case 88:
          return 'T16 D20<br />T20 D14';
          break;
         case 87:
          return 'T17 D18<br />T15 10 D16';
          break;
         case 86:
          return 'T18 D16<br />BULL T18<br />25 11 BULL';
          break;
         case 85:
          return 'T15 D20<br />T19 D14';
          break;
         case 84:
          return 'T16 D18<br />16 T16 D10';
          break;
         case 83:
          return 'T17 D16<br />T11 BULL';
          break;
         case 82:
          return 'T14 D20<br />BULL D16<br />25 17 D20';
          break;
         case 81:
          return 'T15 D18<br />T19 D12';
          break;
         case 80:
          return 'T16 D16<br />T20 D10';
          break;
         case 79:
          return 'T13 D20<br />T19 D11';
          break;
         case 78:
          return 'T18 D12<br />T14 D18';
          break;
         case 77:
          return 'T15 D16<br />T19 D10';
          break;
         case 76:
          return 'T20 D8<br />T16 D14';
          break;
         case 75:
          return 'T13 D18<br />25 BULL';
          break;
         case 74:
          return 'T14 D16<br />T18 D10';
          break;
         case 73:
          return 'T19 D8<br />T11 D20';
          break;
         case 72:
          return 'T12 D18<br />T16 D12';
          break;
         case 71:
          return 'T13 D16<br />25 6 D20<br />25 10 D18';
          break;
         case 70:
          return 'T18 D8<br />20 BULL';
          break;
         case 69:
          return '19 BULL<br />T11 D18<br />11 18 D20';
          break;
         case 68:
          return 'T20 D4<br />T16 D10';
          break;
         case 67:
          return 'T17 D8<br />17 BULL';
          break;
         case 66:
          return 'T10 D18<br />T16 D9';
          break;
         case 65:
          return '25 D20<br />T19 D4<br />T15 D10';
          break;
         case 64:
          return 'T16 D8<br />16 16 D16<br />16 8 D20<br />14 BULL';
          break;
         case 63:
          return 'T13 D12<br />13 BULL';
          break;
         case 62:
          return 'T10 D16<br />10 20 D16<br />12 BULL';
          break;
         case 61:
          return '25 D18<br />11 BULL<br />T11 D14';
          break;
         case 60:
          return '20 D20<br />10 BULL';
          break;
         case 59:
          return '19 D20<br />25 D17';
          break;
         case 58:
          return '18 D20<br />8 BULL';
          break;
         case 57:
          return '17 D20<br />25 D16';
          break;
         case 56:
          return '16 D20<br />20 D18';
          break;
         case 55:
          return '15 D20<br />19 D18';
          break;
         case 54:
          return '14 D20<br />18 D18';
          break;
         case 53:
          return '13 D20<br />17 D18';
          break;
         case 52:
          return '12 D20<br />20 D16';
          break;
         case 51:
          return '11 D20<br />19 D16';
          break;
         case 50:
          return '10 D20<br />18 D16<br />10 D20<br />BULL';
          break;
         case 49:
          return '17 D16<br />9 D20';
          break;
         case 48:
          return '8 D20<br />16 D16';
          break;
         case 47:
          return '15 D16<br />11 D18<br />7 D20';
          break;
         case 46:
          return '6 D20<br />10 D18<br />case 45:';
          break;
          return '5 D20<br />13 D16<br />9 D18';
          break;
         case 44:
          return '4 D20<br />12 D16';
          break;
         case 43:
          return '11 D16<br />3 D20<br />19 D12';
          break;
         case 42:
          return '10 D16<br />6 D18';
          break;
         case 41:
          return '9 D16<br />1 D20';
          break;
         case 40:
          return 'D20';
          break;
         case 39:
          return '7 D16';
          break;
         case 38:
          return 'D19';
          break;
         case 35:
          return '3 D16<br /> 19 D8';
          break;
         case 34:
          return 'D17';
          break;
         case 33:
          return '17 D8';
          break;
         case 32:
          return 'D16';
          break;
         case 31:
          return '15 D8';
          break;
         case 30:
          return 'D15';
          break;
         case 29:
          return '13 D8';
          break;
         case 28:
          return 'D14';
          break;
         case 27:
          return '3 D12';
          break;
         case 26:
          return 'D13';
          break;
         default:
          return '';
          break;
    }
}