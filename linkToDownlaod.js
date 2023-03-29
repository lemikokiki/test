const button=document.querySelector(".download")
var userAgent1 = navigator.userAgent;
console.log(userAgent1);

const userAgent = navigator.userAgent;
const regex = /(iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|Windows NT)/;
const match = userAgent.match(regex);
const deviceName = match ? match[0] : "Unknown";

if(deviceName !== null){
    if(deviceName === 'iPhone'){
        console.log('iphone');
        button.href= 'https://itunes.apple.com/kh/app/bidc-mobile-banking-cambodia/id1056453667';
    }else if(deviceName === 'Android'){
        console.log('Android');
        button.href= 'https://play.google.com/store/apps/details?id=com.campopay.bidc&amp;hl=en'; 
    }else {
        console.log('other');
        button.href='https://www.bidc.com.kh/';
    }
}