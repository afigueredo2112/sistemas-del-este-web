export const demoEstablishment = {
  id: 'chacra-demo',
  organization: 'Cliente Demo',
  name: 'Chacra Demo',
  status: 'warning',
  lastCommunication: 'hace 18 s',
  gateway: { id:'gw-01', name:'Gateway principal', status:'online', connection:'Wi-Fi', signal:82, lastCommunication:'hace 18 s' },
  sectors: [
    { id:'s1', name:'Sector 1', irrigation:'active', metrics:[{label:'Humedad',value:'41',unit:'%'},{label:'Caudal',value:'18',unit:'L/min'}]},
    { id:'s2', name:'Sector 2', irrigation:'stopped', metrics:[{label:'Humedad',value:'37',unit:'%'}]},
    { id:'s3', name:'Sector 3', irrigation:'stopped', metrics:[] }
  ],
  devices: [
    { id:'valve-01', name:'Válvula 01', sector:'Sector 1', status:'online', battery:91, signal:78, lastCommunication:'hace 24 s', capabilities:[{type:'valve',actions:['open','close'],state:'open'},{type:'battery',value:91},{type:'signal_quality',value:78}] },
    { id:'valve-02', name:'Válvula 02', sector:'Sector 2', status:'online', battery:84, signal:72, lastCommunication:'hace 31 s', capabilities:[{type:'valve',actions:['open','close'],state:'closed'},{type:'battery',value:84},{type:'signal_quality',value:72}] },
    { id:'soil-01', name:'Humedad de suelo', sector:'Sector 1', status:'online', battery:76, signal:66, lastCommunication:'hace 42 s', capabilities:[{type:'soil_moisture',variables:[{key:'soil_moisture',label:'Humedad',value:41,unit:'%'}]},{type:'battery',value:76},{type:'signal_quality',value:66}] },
    { id:'flow-01', name:'Sensor de caudal', sector:'Sector 1', status:'online', battery:null, signal:80, lastCommunication:'hace 20 s', capabilities:[{type:'flow',variables:[{key:'flow',label:'Caudal',value:18,unit:'L/min'}]},{type:'signal_quality',value:80}] },
    { id:'aux-01', name:'Nodo auxiliar', sector:'Sector 3', status:'offline', battery:28, signal:0, lastCommunication:'hace 2 h', capabilities:[{type:'telemetry'},{type:'battery',value:28},{type:'signal_quality',value:0}] }
  ],
  alerts: [
    { id:'a1', severity:'warning', title:'Nodo auxiliar sin comunicación', detail:'Sector 3 · última comunicación hace 2 h' }
  ]
};