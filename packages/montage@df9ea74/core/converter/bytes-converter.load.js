montageDefine("df9ea74","core/converter/bytes-converter",{dependencies:["../core","./converter","./number-converter"],factory:function(e,t){e("../core").Montage;var n=e("./converter").Converter,i=e("./number-converter")._numericValueToString;e("./number-converter")._stringToNumericValue;var s=e("./number-converter").NUMERIC_SCALES_BINARY_,o=e("./converter").isDef,a=["P","T","G","M","K","","m","u","n"],r=function(e,t,n){var r="";return(!o(n)||n)&&(r="B"),i(e,s,t,r,a)},l=function(e,t){return r(e,t,!1)};t.BytesConverter=n.specialize({decimals:{value:2},convert:{value:function(e){return l(e,this.decimals)}},revert:{value:function(e){return e}}})}});