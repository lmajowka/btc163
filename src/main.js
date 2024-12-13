import CoinKey from 'coinkey';

let key = BigInt(1)
const mask = '403x3x4xcxfx6x9xfx3xaxcx5x0x4xbxbx7x2x6x8x7x8xax4x0x8x3x3x3x7x3x';
const countX = mask.split('x').length - 1;


function generatePublic(privateKey) {
    let _key = new CoinKey(Buffer.from(privateKey, 'hex'));
    _key.compressed = true;
    return _key.publicAddress;
}

for (let i=0; i<100; i){
    key++
    let pkey = key.toString(16).padStart(countX, '0');
    let result = ''
    let keyIndex = 0

    for(let char of mask){
        if (char == 'x'){            
            result += pkey[keyIndex++]
        } else {
            result += char  
        }
    }

    
    if ('1Hoyt6UBzwL5vvUSTLMQC2mwvvE5PpeSC' == generatePublic(result)){
        console.log('ACHEI!!!!!', result)
    }
}