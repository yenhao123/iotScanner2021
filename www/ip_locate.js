window.onload = function(){
	var ip = document.getElementById('ip').innerHTML;
	ip = ip.split('.');

  var dict1 = {
    '資訊處' : [0 , 1 , 2 , 3 , 4 , 5 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 ,18 , 19 , 20 , 23 , 25 , 26 , 28 , 29 , 30 , 32 , 33 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 129 , 130 , 131 , 132 , 133 , 134 , 135 ,136 , 137 , 138 , 139 , 140 , 141 , 142 , 143 , 144 , 145 , 146 ,147 , 148 , 149 , 150 , 151 , 152 , 153 , 154 , 155 , 156 , 157 , 158 , 159 , 160 , 161 , 168 , 211 , 212 , 213 , 214 , 215 , 216 , 217 , 218 , 219 , 220 , 221 , 222 , 223 , 224 , 225 , 231 , 232 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 240 , 241 , 242 , 243 , 245 , 246 , 247 , 248 , 249 , 250 , 251 , 252 , 253 , 254 , 255],
    '甄委會' : [6 , 7 , 8 , 27],
    '圖書館' : [21 , 22 , 24],
    '秘書室' : [31 , 37],
    '校長室' : [31],
    '人事室' : [31],
    '會計室' : [31],
    '刷卡機' : [31 , 33 , 35],
    '總務處' : [32 , 33 , 35 , 37],
    '教務處' : [33 , 40 , 51],
    '學務處' : [33],
    '研發處' : [33],
    '致遠樓' : [34],
    
    '學生事務處' : [35],
    '深耕辦公室' : [35],
    '副校長室' : [35],
    '大禮堂' : [36],
    '環安中心' : [38],
    '學生事務處' : [38],
    '活動中心' : [39],
    '清江中心' : [40],
    '通識中心' : [40],
    '職涯中心' : [40],
    '歷史系' : [41],
    '外文系' : [42],
    '中文系' : [43],
    '哲學系' : [44 , 45],
    '語言所	' : [46],
    '語言中心' : [47],
    '台文所' : [48],
    '語言中心' : [49 , 50],
    '數學系' : [61 , 62],
    '地環系' : [63 , 64 , 65 , 66 , 67 , 68 , 69 , 70],
    '物理系' : [71 , 72 , 73 , 74 , 75 , 76],
    '化生系' : [77 , 78 , 79 , 80 , 81 , 82]
    };
      var dict2 = {
    '生科系' : [83 , 84 , 85 , 86 , 87 , 88],
    '通訊系' : [89 , 90 , 91 , 92],
    '電機系' : [91 , 92],
    '會資系' : [93 , 94],
    '化工系' : [95],
    '機械系' : [96 , 121 , 122 , 123 , 124 , 125],
    '資工系' : [97 , 101 , 102 , 103 , 104 , 105 , 230],
    '光機電所' : [98 , 99 , 100],
    '電機系' : [106 , 107 , 108 , 109 , 110 , 111 , 112],
    '通訊系' : [113 , 114 , 115 , 116 , 117 , 118 , 119 , 120],
    '化工系' : [126 , 127 , 128],
    '經濟系' : [162 , 163 , 164],
    '財金系' : [165 , 166 , 167],
    '企管系' : [169 , 170 , 171 , 172],
    '資管系' : [173 , 174 , 175],
    '管理學院' : [176 , 177 , 178 , 179 , 180],
    '社福系' : [181 , 182 , 183 , 184],
    '心理系' : [185],
    '環境保護及工業安全衛生中心' : [186 , 187],
    '大運會' : [188 , 189],
    '勞工系' : [190],
    '社會科學院' : [191 , 192],
    '法律系' : [193],
    '財法系' : [194 , 195 , 196],
    '政治系' : [197],
    '戰國所' : [198 , 199 , 200],
    '傳播系' : [201],
    '成教系' : [202 , 208],
    '教育系' : [203 , 207],
    '犯防系' : [204 , 209 , 210],
    '師培中心' : [205],
    '教育學院' : [206],
    '體育中心' : [226 , 227 , 228 ,229],
    '運休所' : [226],
    '育成中心' : [244],
    };
  // locataion

  var location = 'Unknown';
  flag = 0;
  for(i = 0 ; i < 2 ; i++){
    
    if(i == 0) dict = dict1;
    if(i == 1) dict = dict2;
    for(var site in dict){

      for(k = 0 ; k < dict[site].length ; k++){
        if(ip[2] == dict[site][k]){
          location = site;
          flag = 1;
          break;
        }
      }
      if(flag == 1) break;
    }
    if(flag == 1) break;
  }	
  document.getElementById("location")	.innerHTML = location;
}
