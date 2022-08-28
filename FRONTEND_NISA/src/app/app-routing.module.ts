/* MÓDULOS */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* CONTENEDORES */
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { ConsultasResumenContainerComponent } from './containers/servicios-container/consultas-container/consultas-resumen-container/consultas-resumen-container.component';
import { ElectroencefalogramaContainerComponent } from './containers/servicios-container/electroencefalograma-container/electroencefalograma-container.component';
import { ExamenesResumenContainerComponent } from './containers/servicios-container/examenes-container/examenes-resumen-container/examenes-resumen-container.component';
import { FisiatriaContainerComponent } from './containers/servicios-container/fisiatria-container/fisiatria-container.component';
import { NeuropsicologiaResumenContainerComponent } from './containers/servicios-container/neuropsicologia-container/neuropsicologia-resumen-container/neuropsicologia-resumen-container.component';
import { PolisomnografiaContainerComponent } from './containers/servicios-container/polisomnografia-container/polisomnografia-container.component';
import { ResumenServiciosContainerComponent } from './containers/servicios-container/resumen-servicios-container/resumen-servicios-container.component';
import { VideotelemetriaContainerComponent } from './containers/servicios-container/videotelemetria-container/videotelemetria-container.component';
import { QuienesSomosContainerComponent } from './containers/nosotros-container/quienes-somos-container/quienes-somos-container.component'
import { MisionVisionContainerComponent } from './containers/nosotros-container/mision-vision-container/mision-vision-container.component'
import { InstalacionesContainerComponent } from './containers/nosotros-container/instalaciones-container/instalaciones-container.component';
import { EquipoHumanoContainerComponent } from './containers/nosotros-container/equipo-humano-container/equipo-humano-container.component';
import { PpssResumenContainerComponent } from './containers/nosotros-container/ppss-container/ppss-resumen-container/ppss-resumen-container.component';
import { EstadosContainerComponent } from './containers/nosotros-container/informes-container/2021/estados-container/estados-container.component';
import { NeurologiaContainerComponent } from './containers/servicios-container/consultas-container/neurologia-container/neurologia-container.component';
import { NeurocirugiaContainerComponent } from './containers/servicios-container/consultas-container/neurocirugia-container/neurocirugia-container.component';
import { NeuropediatriaContainerComponent } from './containers/servicios-container/consultas-container/neuropediatria-container/neuropediatria-container.component';
import { ElectromiografiaNeuroconduccionContainerComponent } from './containers/servicios-container/examenes-container/electromiografia-neuroconduccion-container/electromiografia-neuroconduccion-container.component';
import { PotencialesEvocadosContainerComponent } from './containers/servicios-container/examenes-container/potenciales-evocados-container/potenciales-evocados-container.component';
import { TestLambertContainerComponent } from './containers/servicios-container/examenes-container/test-lambert-container/test-lambert-container.component';
import { PruebaAdministracionNeuropsicologicaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-administracion-neuropsicologica-container/prueba-administracion-neuropsicologica-container.component';
import { PruebaCognitivaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-cognitiva-container/prueba-cognitiva-container.component';
import { PruebaInteligenciaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-inteligencia-container/prueba-inteligencia-container.component';
import { NosotrosResumenContainerComponent } from './containers/nosotros-container/nosotros-resumen-container/nosotros-resumen-container.component';
import { InformesResumenContainerComponent } from './containers/nosotros-container/informes-container/2021/informes-resumen-container/informes-resumen-container.component';
import { InformeGestionContainerComponent } from './containers/nosotros-container/informes-container/2021/informe-gestion-container/informe-gestion-container.component';
import { DictamenRevisorFiscalContainerComponent } from './containers/nosotros-container/informes-container/2021/dictamen-revisor-fiscal-container/dictamen-revisor-fiscal-container.component';
import { RevelacionesNeuroimagenesContainerComponent } from './containers/nosotros-container/informes-container/2021/revelaciones-neuroimagenes-container/revelaciones-neuroimagenes-container.component';
import { PqrsContainerComponent } from './containers/servicios-container/pqrs-container/pqrs-container.component';
import { EncuestaSatisfaccionContainerComponent } from './containers/servicios-container/encuesta-satisfaccion-container/encuesta-satisfaccion-container.component';
import { PpssCovid19ContainerComponent } from './containers/nosotros-container/ppss-container/ppss-covid19-container/ppss-covid19-container.component';
import { PpssPlaneacionCovid19ContainerComponent } from './containers/nosotros-container/ppss-container/ppss-planeacion-covid19-container/ppss-planeacion-covid19-container.component';
import { PpssDerechosDeberesContainerComponent } from './containers/nosotros-container/ppss-container/ppss-derechos-deberes-container/ppss-derechos-deberes-container.component';
import { PpssViolenciaIntrafamiliarContainerComponent } from './containers/nosotros-container/ppss-container/ppss-violencia-intrafamiliar-container/ppss-violencia-intrafamiliar-container.component';
import { PpssPlanDeAccionContainerComponent } from './containers/nosotros-container/ppss-container/ppss-plan-de-accion-container/ppss-plan-de-accion-container.component';
import { PpssProtocolosAtencionDiferencialComponent } from './containers/nosotros-container/ppss-container/ppss-protocolos-atencion-diferencial/ppss-protocolos-atencion-diferencial.component';
import { InformesResumenVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/informes-resumen-veinte-container/informes-resumen-veinte-container.component';
import { EstadosVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/estados-veinte-container/estados-veinte-container.component';
import { InformesGestionVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/informes-gestion-veinte-container/informes-gestion-veinte-container.component';
import { DictamenRevisorFiscalVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/dictamen-revisor-fiscal-veinte-container/dictamen-revisor-fiscal-veinte-container.component';
import { RevelacionesNeuroimagenesVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/revelaciones-neuroimagenes-veinte-container/revelaciones-neuroimagenes-veinte-container.component';
import { EstadosFinancierosDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/estados-financieros-diecinueve-container/estados-financieros-diecinueve-container.component';
import { DictamenRevisorFiscalDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/dictamen-revisor-fiscal-diecinueve-container/dictamen-revisor-fiscal-diecinueve-container.component';
import { RevelacionesNeuroimagenesDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/revelaciones-neuroimagenes-diecinueve-container/revelaciones-neuroimagenes-diecinueve-container.component';
import { InformesResumenDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/informes-resumen-diecinueve-container/informes-resumen-diecinueve-container.component';
import { InformesResumenDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/informes-resumen-dieciocho-container/informes-resumen-dieciocho-container.component';
import { EstadosDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/estados-dieciocho-container/estados-dieciocho-container.component';
import { DictamenRevisorFiscalDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/dictamen-revisor-fiscal-dieciocho-container/dictamen-revisor-fiscal-dieciocho-container.component';
import { RevelacionesNeuroimagenesDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/revelaciones-neuroimagenes-dieciocho-container/revelaciones-neuroimagenes-dieciocho-container.component';
import { InformesGestionDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/informes-gestion-dieciocho-container/informes-gestion-dieciocho-container.component';
import { EstadosDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/estados-diecisiete-container/estados-diecisiete-container.component';
import { InformesResumenDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/informes-resumen-diecisiete-container/informes-resumen-diecisiete-container.component';
import { DictamenRevisorFiscalDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/dictamen-revisor-fiscal-diecisiete-container/dictamen-revisor-fiscal-diecisiete-container.component';
import { InformeGestionDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/informe-gestion-diecisiete-container/informe-gestion-diecisiete-container.component';
import { RevelacionesNeuroimagenesDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/revelaciones-neuroimagenes-diecisiete-container/revelaciones-neuroimagenes-diecisiete-container.component';
import { InformesResumenDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/informes-resumen-dieciseis-container/informes-resumen-dieciseis-container.component';
import { EstadosDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/estados-dieciseis-container/estados-dieciseis-container.component';
import { DictamenRevisorFiscalDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/dictamen-revisor-fiscal-dieciseis-container/dictamen-revisor-fiscal-dieciseis-container.component';
import { EstadosQuinceContainerComponent } from './containers/nosotros-container/informes-container/2015/estados-quince-container/estados-quince-container.component';
import { InformesResumenQuinceContainerComponent } from './containers/nosotros-container/informes-container/2015/informes-resumen-quince-container/informes-resumen-quince-container.component';
import { TratamientoDatosContainerComponent } from './containers/nosotros-container/tratamiento-datos-container/tratamiento-datos-container.component';

const routes: Routes = [
  /* RUTAS PRINCIPALES */
      { path: '', redirectTo:'/inicio', pathMatch:"full"},
      { path: '', component: HomeContainerComponent},
      { path: 'inicio', component: HomeContainerComponent },
      { path: 'contactenos', component: ContactContainerComponent },
      { path: 'galeria', component: GalleryContainerComponent },

  /*SERVICIOS*/
      /* RUTAS DE SERVICIOS CON RESÚMENES */
  { path: 'servicios-resumen', component: ResumenServiciosContainerComponent },
      
      /* RESUMEN DE CONSULTAS*/
      { path: 'consultas-resumen', component: ConsultasResumenContainerComponent },
        /* CONSULTAS */
          { path: 'neurologia', component: NeurologiaContainerComponent},
          { path: 'neurocirugia', component: NeurocirugiaContainerComponent},
          { path: 'neuropediatria', component: NeuropediatriaContainerComponent },

        /* RESUMEN NEUROPSICOLOGÍA */
          { path: 'neuropsicologia-resumen', component: NeuropsicologiaResumenContainerComponent },
            /* PRUEBAS DE NEUROPSICOLOGÍA*/
            { path: 'prueba-administracion-neuropsicologica', component: PruebaAdministracionNeuropsicologicaContainerComponent},
            { path: 'prueba-cognitiva', component: PruebaCognitivaContainerComponent},
            { path: 'prueba-inteligencia', component: PruebaInteligenciaContainerComponent },   
            
      /* RESUMEN DE EXAMENES */
      { path: 'examenes-resumen', component: ExamenesResumenContainerComponent },
        /* EXÁMENES */
          { path: 'polisomnografia', component: PolisomnografiaContainerComponent },
          { path: 'electroencefalograma', component: ElectroencefalogramaContainerComponent },
          { path: 'videotelemetria', component: VideotelemetriaContainerComponent },
          { path: 'examen-electromiografia-neuroconduccion', component: ElectromiografiaNeuroconduccionContainerComponent},  
          { path: 'examen-potenciales-evocados', component: PotencialesEvocadosContainerComponent},
          { path: 'examen-test-lambert', component: TestLambertContainerComponent},
      

      /*RUTAS DE SERVICIOS ÚNICAS */
      { path: 'fisiatria', component: FisiatriaContainerComponent },
      { path: 'pqrs', component: PqrsContainerComponent },
      { path: 'encuesta-satisfaccion', component: EncuestaSatisfaccionContainerComponent },

      /* RESUMEN DE NOSOTROS */
      { path: 'nosotros-resumen', component: NosotrosResumenContainerComponent},
        /*RUTAS SOBRE NOSOTROS */
        { path: 'quienes-somos', component: QuienesSomosContainerComponent },
        { path: 'mision-vision', component: MisionVisionContainerComponent },
        { path: 'instalaciones', component: InstalacionesContainerComponent },
        { path: 'equipo-humano', component: EquipoHumanoContainerComponent },

      /* PPSS */
      { path: 'ppss', component: PpssResumenContainerComponent },
        /* RUTAS SOBRE PPSS */
        {path : 'ppss-covid19', component: PpssCovid19ContainerComponent},
        {path : 'ppss-planeacion-covid19', component: PpssPlaneacionCovid19ContainerComponent},
        {path : 'ppss-protocolos-atencion-diferencial', component: PpssProtocolosAtencionDiferencialComponent},
        {path : 'ppss-derechos-deberes', component: PpssDerechosDeberesContainerComponent},
        {path : 'ppss-violencia-intrafamiliar', component: PpssViolenciaIntrafamiliarContainerComponent},
        {path : 'ppss-plan-de-accion', component: PpssPlanDeAccionContainerComponent},

        /* INFORMES */
        /*RESUMEN DE INFORMES */
        { path: 'informes-resumen', component: InformesResumenContainerComponent},
          /* INFORMES 2021 */
          { path: 'estados-financieros', component: EstadosContainerComponent},
          { path: 'informes-gestion', component: InformeGestionContainerComponent },
          { path: 'dictamen-revisor-fiscal', component: DictamenRevisorFiscalContainerComponent},
          { path: 'revelaciones-neuroimagenes', component: RevelacionesNeuroimagenesContainerComponent},
          
          /* INFORMES 2020 */
          { path: 'informes-resumen-2020', component: InformesResumenVeinteContainerComponent},
          { path: 'estados-financieros-2020', component: EstadosVeinteContainerComponent },
          { path: 'informes-gestion-2020', component: InformesGestionVeinteContainerComponent },
          { path: 'dictamen-revisor-fiscal-2020', component: DictamenRevisorFiscalVeinteContainerComponent},
          { path: 'revelaciones-neuroimagenes-2020', component: RevelacionesNeuroimagenesVeinteContainerComponent},

          /* INFORMES 2019 */
          { path: 'informes-resumen-2019', component: InformesResumenDiecinueveContainerComponent},
          { path: 'estados-financieros-2019', component: EstadosFinancierosDiecinueveContainerComponent },
          { path: 'dictamen-revisor-fiscal-2019', component: DictamenRevisorFiscalDiecinueveContainerComponent},
          { path: 'revelaciones-neuroimagenes-2019', component: RevelacionesNeuroimagenesDiecinueveContainerComponent},


          /* INFORMES 2018 */
          { path: 'informes-resumen-2018', component: InformesResumenDieciochoContainerComponent},
          { path: 'estados-financieros-2018', component: EstadosDieciochoContainerComponent },
          { path: 'dictamen-revisor-fiscal-2018', component: DictamenRevisorFiscalDieciochoContainerComponent},
          { path: 'informes-gestion-2018', component: InformesGestionDieciochoContainerComponent },
          { path: 'revelaciones-neuroimagenes-2018', component: RevelacionesNeuroimagenesDieciochoContainerComponent},

          /* INFORMES 2017 */
          { path: 'informes-resumen-2017', component: InformesResumenDiecisieteContainerComponent},
          { path: 'estados-financieros-2017', component: EstadosDiecisieteContainerComponent },
          { path: 'dictamen-revisor-fiscal-2017', component: DictamenRevisorFiscalDiecisieteContainerComponent},
          { path: 'informes-gestion-2017', component: InformeGestionDiecisieteContainerComponent },
          { path: 'revelaciones-neuroimagenes-2017', component: RevelacionesNeuroimagenesDiecisieteContainerComponent},

          /* INFORMES 2016 */
          { path: 'informes-resumen-2016', component: InformesResumenDieciseisContainerComponent},
          { path: 'estados-financieros-2016', component: EstadosDieciseisContainerComponent },
          { path: 'dictamen-revisor-fiscal-2016', component: DictamenRevisorFiscalDieciseisContainerComponent},

          /* INFORMES 2015 */
          { path: 'informes-resumen-2015', component: InformesResumenQuinceContainerComponent},
          { path: 'estados-financieros-2015', component: EstadosQuinceContainerComponent },
      
      /* TRATAMIENTO DE DATOS */
      { path:"tratamiento-datos", component: TratamientoDatosContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }