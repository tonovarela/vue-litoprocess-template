import { defineStore } from 'pinia'
import axios from "axios";


export const useClientesStore = defineStore('clientes', {
        state: () => ({
            clientes:[],
            cargando:false
        }),
    actions:{
            async cargarClientes(){
                this.cargando=true;
                this.clientes=[];
               await new Promise((resolve)=>setTimeout(()=>resolve(true),2000));
               const {data}= await axios.get("http://192.168.2.222/solicitudes/api/solicitud?cancelados=true");
                this.clientes=data.solicitudes;
                this.cargando=false;
            }

    }

    });

