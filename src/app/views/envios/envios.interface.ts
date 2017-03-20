export interface Customer {

	descripcion: string;
	descripcion_carga: string;
	tipo_unidad: string;
	tipo_envio: string;
	fecha_recepcion:string;
	fecha_entrega:string;
	comentario:string;
	active:string;
	favorito:string;



	rutas: Rutas[];
	detalle: Detalle[];
}

export interface Rutas {

	ciudad_origen:string;
	ciudad_destino:string;
	direccion_origen:string;
	direccion_destino:string;
	coordenadas_origen:string;
	coordenadas_destino:string;
	maniobra:string;
	observacion:string;	
descripcion: string;
	unidades: string;
	peso: string;
	largo: string;
	ancho: string;
	alto: string;
	comentario: string;

}


export interface Detalle {

	descripcion: string;
	unidades: string;
	peso: string;
	largo: string;
	ancho: string;
	alto: string;
	comentario: string;
	

}