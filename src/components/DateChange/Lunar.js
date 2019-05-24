/**用法
 * Lunar.toSolar(2016, 6, 3); 农历转化公历
 * Lunar.toLunar(2016, 7, 6); 公历转化农历
 */

/*
	原文地址：http://www.miaoqiyuan.cn/p/lunar
	源代码：http://www.miaoqiyuan.cn/products/lunar/lunar.js
	压缩版：http://www.miaoqiyuan.cn/products/lunar/lunar.min.js
*/
var Lunar = {
    Date:function(type){//'yyyy-mm-dd'
        let date = new  Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        if(!type){/*默认情况返回格式*/
            return year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
        }
        /*填充格式*/
        month = month.toString().padStart(2,'0');
        day = day.toString().padStart(2,'0');
        /*判断type*/
        let temp = type.split('').reverse().join('');
        for(let i=0;i<4;i++){
            let yeardata = year.toString().split('').reverse()[i]
            temp = temp.replace(/y/,yeardata);
        }
        temp = temp.split('').reverse().join('');//反向年替换完成，剩下的月份和日可直接正则替换
        if(temp.split("m").length!=3){//处理mmm或者m的情况
            temp = temp.replace(/m{1,}/,date.getMonth()+1)
        }else{
            temp = temp.replace(/m{1,}/,month)
        }
        if(temp.split("d").length!=3){//处理DDD或者D的情况
            temp = temp.replace(/d{1,}/,date.getDate())
        }else{
            temp = temp.replace(/d{1,}/,day)
        }
        return temp
    }
};

export  default Lunar