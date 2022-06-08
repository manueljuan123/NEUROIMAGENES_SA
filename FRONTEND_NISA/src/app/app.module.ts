/* MÓDULOS */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* COMPONENTES */
/* Componente principal */
import { AppComponent } from './app.component';

/* Componentes globales*/
import { FooterComponent } from './components/global-components/footer/footer.component';
import { NavbarComponent } from './components/global-components/navbar/navbar.component';

/* Componentes del container HOME */
import { HeaderComponent } from './components/home-components/header/header.component';
import { CardsComponent } from './components/home-components/cards/cards.component';
import { ArticlesComponent } from './components/home-components/articles/articles.component';
import { CardServiceComponent } from './components/home-components/card-service/card-service.component';
import { MiniAboutUsComponent } from './components/home-components/mini-about-us/mini-about-us.component';

/* CONTENEDORES */
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { ResumenServiciosContainerComponent } from './containers/servicios-container/resumen-servicios-container/resumen-servicios-container.component';
import { ConsultasResumenContainerComponent } from './containers/servicios-container/consultas-container/consultas-resumen-container/consultas-resumen-container.component';
import { ExamenesResumenContainerComponent } from './containers/servicios-container/examenes-container/examenes-resumen-container/examenes-resumen-container.component';
import { FisiatriaContainerComponent } from './containers/servicios-container/fisiatria-container/fisiatria-container.component';
import { NeuropsicologiaResumenContainerComponent } from './containers/servicios-container/neuropsicologia-container/neuropsicologia-resumen-container/neuropsicologia-resumen-container.component';
import { PolisomnografiaContainerComponent } from './containers/servicios-container/polisomnografia-container/polisomnografia-container.component';
import { ElectroencefalogramaContainerComponent } from './containers/servicios-container/electroencefalograma-container/electroencefalograma-container.component';
import { VideotelemetriaContainerComponent } from './containers/servicios-container/videotelemetria-container/videotelemetria-container.component';
import { QuienesSomosContainerComponent } from './containers/nosotros-container/quienes-somos-container/quienes-somos-container.component';
import { MisionVisionContainerComponent } from './containers/nosotros-container/mision-vision-container/mision-vision-container.component';
import { InstalacionesContainerComponent } from './containers/nosotros-container/instalaciones-container/instalaciones-container.component';
import { PpssResumenContainerComponent } from './containers/nosotros-container/ppss-container/ppss-resumen-container/ppss-resumen-container.component';
import { EquipoHumanoContainerComponent } from './containers/nosotros-container/equipo-humano-container/equipo-humano-container.component';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { NeurologiaContainerComponent } from './containers/servicios-container/consultas-container/neurologia-container/neurologia-container.component';
import { NeurocirugiaContainerComponent } from './containers/servicios-container/consultas-container/neurocirugia-container/neurocirugia-container.component';
import { NeuropediatriaContainerComponent } from './containers/servicios-container/consultas-container/neuropediatria-container/neuropediatria-container.component';
import { ElectromiografiaNeuroconduccionContainerComponent } from './containers/servicios-container/examenes-container/electromiografia-neuroconduccion-container/electromiografia-neuroconduccion-container.component';
import { PotencialesEvocadosContainerComponent } from './containers/servicios-container/examenes-container/potenciales-evocados-container/potenciales-evocados-container.component';
import { PruebaAdministracionNeuropsicologicaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-administracion-neuropsicologica-container/prueba-administracion-neuropsicologica-container.component';
import { TestLambertContainerComponent } from './containers/servicios-container/examenes-container/test-lambert-container/test-lambert-container.component';
import { PruebaCognitivaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-cognitiva-container/prueba-cognitiva-container.component';
import { PruebaInteligenciaContainerComponent } from './containers/servicios-container/neuropsicologia-container/prueba-inteligencia-container/prueba-inteligencia-container.component';
import { NosotrosResumenContainerComponent } from './containers/nosotros-container/nosotros-resumen-container/nosotros-resumen-container.component';
import { InformesResumenContainerComponent } from './containers/nosotros-container/informes-container/2021/informes-resumen-container/informes-resumen-container.component';
import { EstadosContainerComponent } from './containers/nosotros-container/informes-container/2021/estados-container/estados-container.component';
import { InformeGestionContainerComponent } from './containers/nosotros-container/informes-container/2021/informe-gestion-container/informe-gestion-container.component';
import { RevelacionesNeuroimagenesContainerComponent } from './containers/nosotros-container/informes-container/2021/revelaciones-neuroimagenes-container/revelaciones-neuroimagenes-container.component';
import { DictamenRevisorFiscalContainerComponent } from './containers/nosotros-container/informes-container/2021/dictamen-revisor-fiscal-container/dictamen-revisor-fiscal-container.component';
import { PqrsContainerComponent } from './containers/servicios-container/pqrs-container/pqrs-container.component';



/* DEMÁS COMPONENTES */
import { ResumenServiciosComponent } from './components/servicios-components/servicios-resumen/servicios-resumen.component';
import { ConsultasResumenComponent } from './components/servicios-components/consultas/consultas-resumen/consultas-resumen.component';
import { ExamenesResumenComponent } from './components/servicios-components/examenes/examenes-resumen/examenes-resumen.component';
import { FisiatriaComponent } from './components/servicios-components/consultas/fisiatria/fisiatria.component';
import { NeuropsicologiaResumenComponent } from './components/servicios-components/examenes/neuropsicologia/neuropsicologia-resumen/neuropsicologia-resumen.component';
import { PolisomnografiaComponent } from './components/servicios-components/examenes/polisomnografia/polisomnografia.component';
import { ElectroencefalogramaComponent } from './components/servicios-components/examenes/electroencefalograma/electroencefalograma.component';
import { VideotelemetriaComponent } from './components/servicios-components/examenes/videotelemetria/videotelemetria.component';
import { QuienesSomosComponent } from './components/nosotros-components/quienes-somos/quienes-somos.component';
import { MisionVisionComponent } from './components/nosotros-components/mision-vision/mision-vision.component';
import { InstalacionesComponent } from './components/nosotros-components/instalaciones/instalaciones.component';
import { EquipoHumanoComponent } from './components/nosotros-components/equipo-humano/equipo-humano.component';
import { PpssResumenComponent } from './components/nosotros-components/ppss/ppss-resumen/ppss-resumen.component';
import { EstadosComponent } from './components/nosotros-components/informes/2021/estados/estados.component';
import { ContactenosComponent } from './components/contact-components/contactenos/contactenos.component';
import { GalleryComponent } from './components/gallery-components/gallery/gallery.component';
import { NeurologiaComponent } from './components/servicios-components/consultas/neurologia/neurologia.component';
import { NeurocirugiaComponent } from './components/servicios-components/consultas/neurocirugia/neurocirugia.component';
import { NeuropediatriaComponent } from './components/servicios-components/consultas/neuropediatria/neuropediatria.component';
import { ElectromiografiaNeuroconduccionComponent } from './components/servicios-components/examenes/electromiografia-neuroconduccion/electromiografia-neuroconduccion.component';
import { PotencialesEvocadosComponent } from './components/servicios-components/examenes/potenciales-evocados/potenciales-evocados.component';
import { TestLambertComponent } from './components/servicios-components/examenes/test-lambert/test-lambert.component';
import { PruebaAdministracionNeuropsicologicaComponent } from './components/servicios-components/examenes/neuropsicologia/prueba-administracion-neuropsicologica/prueba-administracion-neuropsicologica.component';
import { PruebaCognitivaComponent } from  './components/servicios-components/examenes/neuropsicologia/prueba-cognitiva/prueba-cognitiva.component';
import { PruebaInteligenciaComponent } from './components/servicios-components/examenes/neuropsicologia/prueba-inteligencia/prueba-inteligencia.component';
import { NosotrosResumenComponent } from './components/nosotros-components/nosotros-resumen/nosotros-resumen.component';
import { InformesResumenComponent } from './components/nosotros-components/informes/2021/informes-resumen/informes-resumen.component';
import { InformeGestionComponent } from './components/nosotros-components/informes/2021/informe-gestion/informe-gestion.component';
import { DictamenRevisorFiscalComponent } from './components/nosotros-components/informes/2021/dictamen-revisor-fiscal/dictamen-revisor-fiscal.component';
import { RevelacionesNeuroimagenesComponent } from './components/nosotros-components/informes/2021/revelaciones-neuroimagenes/revelaciones-neuroimagenes.component';
import { PqrsComponent } from './components/servicios-components/pqrs/pqrs.component';
import { EncuestaSatisfaccionComponent } from './components/servicios-components/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { EncuestaSatisfaccionContainerComponent } from './containers/servicios-container/encuesta-satisfaccion-container/encuesta-satisfaccion-container.component';
import { Covid19Component } from './components/nosotros-components/ppss/covid19/covid19.component';
import { PpssCovid19ContainerComponent } from './containers/nosotros-container/ppss-container/ppss-covid19-container/ppss-covid19-container.component';
import { PlaneacionCovid19Component } from './components/nosotros-components/ppss/planeacion-covid19/planeacion-covid19.component';
import { PpssPlaneacionCovid19ContainerComponent } from './containers/nosotros-container/ppss-container/ppss-planeacion-covid19-container/ppss-planeacion-covid19-container.component';
import { PpssDerechosDeberesContainerComponent } from './containers/nosotros-container/ppss-container/ppss-derechos-deberes-container/ppss-derechos-deberes-container.component';
import { DerechosDeberesComponent } from './components/nosotros-components/ppss/derechos-deberes/derechos-deberes.component';
import { ViolenciaIntrafamiliarComponent } from './components/nosotros-components/ppss/violencia-intrafamiliar/violencia-intrafamiliar.component';
import { PpssViolenciaIntrafamiliarContainerComponent } from './containers/nosotros-container/ppss-container/ppss-violencia-intrafamiliar-container/ppss-violencia-intrafamiliar-container.component';
import { PpssPlanDeAccionContainerComponent } from './containers/nosotros-container/ppss-container/ppss-plan-de-accion-container/ppss-plan-de-accion-container.component';
import { PlanDeAccionComponent } from './components/nosotros-components/ppss/plan-de-accion/plan-de-accion.component';
import { SinContenidoComponent } from './components/settings/sin-contenido/sin-contenido.component';
import { SinContenidoContainerComponent } from './containers/settings-container/sin-contenido-container/sin-contenido-container.component';
import { ProtocolosAtencionDiferencialComponent } from './components/nosotros-components/ppss/protocolos-atencion-diferencial/protocolos-atencion-diferencial.component';
import { PpssProtocolosAtencionDiferencialComponent } from './containers/nosotros-container/ppss-container/ppss-protocolos-atencion-diferencial/ppss-protocolos-atencion-diferencial.component';
import { DictamenRevisorFiscalVeinteComponent } from './components/nosotros-components/informes/2020/dictamen-revisor-fiscal-veinte/dictamen-revisor-fiscal-veinte.component';
import { EstadosVeinteComponent } from './components/nosotros-components/informes/2020/estados-veinte/estados-veinte.component';
import { InformeGestionVeinteComponent } from './components/nosotros-components/informes/2020/informe-gestion-veinte/informe-gestion-veinte.component';
import { RevelacionesNeuroimagenesVeinteComponent } from './components/nosotros-components/informes/2020/revelaciones-neuroimagenes-veinte/revelaciones-neuroimagenes-veinte.component';
import { InformesResumenVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/informes-resumen-veinte-container/informes-resumen-veinte-container.component';
import { InformesResumenVeinteComponent } from './components/nosotros-components/informes/2020/informes-resumen-veinte/informes-resumen-veinte.component';
import { EstadosVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/estados-veinte-container/estados-veinte-container.component';
import { InformesGestionVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/informes-gestion-veinte-container/informes-gestion-veinte-container.component';
import { DictamenRevisorFiscalVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/dictamen-revisor-fiscal-veinte-container/dictamen-revisor-fiscal-veinte-container.component';
import { RevelacionesNeuroimagenesVeinteContainerComponent } from './containers/nosotros-container/informes-container/2020/revelaciones-neuroimagenes-veinte-container/revelaciones-neuroimagenes-veinte-container.component';
import { RevelacionesNeuroimagenesDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/revelaciones-neuroimagenes-diecinueve-container/revelaciones-neuroimagenes-diecinueve-container.component';
import { DictamenRevisorFiscalDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/dictamen-revisor-fiscal-diecinueve-container/dictamen-revisor-fiscal-diecinueve-container.component';
import { EstadosFinancierosDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/estados-financieros-diecinueve-container/estados-financieros-diecinueve-container.component';
import { InformesResumenDiecinueveContainerComponent } from './containers/nosotros-container/informes-container/2019/informes-resumen-diecinueve-container/informes-resumen-diecinueve-container.component';
import { EstadosFinancierosDiecinueveComponent } from './components/nosotros-components/informes/2019/estados-financieros-diecinueve/estados-financieros-diecinueve.component';
import { DictamenRevisorFiscalDiecinueveComponent } from './components/nosotros-components/informes/2019/dictamen-revisor-fiscal-diecinueve/dictamen-revisor-fiscal-diecinueve.component';
import { RevelacionesNeuroimagenesDiecinueveComponent } from './components/nosotros-components/informes/2019/revelaciones-neuroimagenes-diecinueve/revelaciones-neuroimagenes-diecinueve.component';
import { InformesResumenDiecinueveComponent } from './components/nosotros-components/informes/2019/informes-resumen-diecinueve/informes-resumen-diecinueve.component';
import { DictamenRevisorFiscalDieciochoComponent } from './components/nosotros-components/informes/2018/dictamen-revisor-fiscal-dieciocho/dictamen-revisor-fiscal-dieciocho.component';
import { EstadosFinancierosDieciochoComponent } from './components/nosotros-components/informes/2018/estados-financieros-dieciocho/estados-financieros-dieciocho.component';
import { InformesResumenDieciochoComponent } from './components/nosotros-components/informes/2018/informes-resumen-dieciocho/informes-resumen-dieciocho.component';
import { RevelacionesNeuroimagenesDieciochoComponent } from './components/nosotros-components/informes/2018/revelaciones-neuroimagenes-dieciocho/revelaciones-neuroimagenes-dieciocho.component';
import { InformesGestionDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/informes-gestion-dieciocho-container/informes-gestion-dieciocho-container.component';
import { InformeGestionDieciochoComponent } from './components/nosotros-components/informes/2018/informe-gestion-dieciocho/informe-gestion-dieciocho.component';
import { DictamenRevisorFiscalDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/dictamen-revisor-fiscal-dieciocho-container/dictamen-revisor-fiscal-dieciocho-container.component';
import { EstadosDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/estados-dieciocho-container/estados-dieciocho-container.component';
import { InformesResumenDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/informes-resumen-dieciocho-container/informes-resumen-dieciocho-container.component';
import { RevelacionesNeuroimagenesDieciochoContainerComponent } from './containers/nosotros-container/informes-container/2018/revelaciones-neuroimagenes-dieciocho-container/revelaciones-neuroimagenes-dieciocho-container.component';
import { DictamenRevisorFiscalDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/dictamen-revisor-fiscal-diecisiete-container/dictamen-revisor-fiscal-diecisiete-container.component';
import { EstadosDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/estados-diecisiete-container/estados-diecisiete-container.component';
import { InformeGestionDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/informe-gestion-diecisiete-container/informe-gestion-diecisiete-container.component';
import { InformesResumenDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/informes-resumen-diecisiete-container/informes-resumen-diecisiete-container.component';
import { RevelacionesNeuroimagenesDiecisieteContainerComponent } from './containers/nosotros-container/informes-container/2017/revelaciones-neuroimagenes-diecisiete-container/revelaciones-neuroimagenes-diecisiete-container.component';
import { InformesResumenDiecisieteComponent } from './components/nosotros-components/informes/2017/informes-resumen-diecisiete/informes-resumen-diecisiete.component';
import { RevelacionesNeuroimagenesDiecisieteComponent } from './components/nosotros-components/informes/2017/revelaciones-neuroimagenes-diecisiete/revelaciones-neuroimagenes-diecisiete.component';
import { InformeGestionDiecisieteComponent } from './components/nosotros-components/informes/2017/informe-gestion-diecisiete/informe-gestion-diecisiete.component';
import { EstadosDiecisieteComponent } from './components/nosotros-components/informes/2017/estados-diecisiete/estados-diecisiete.component';
import { DictamenRevisorFiscalDiecisieteComponent } from './components/nosotros-components/informes/2017/dictamen-revisor-fiscal-diecisiete/dictamen-revisor-fiscal-diecisiete.component';
import { DictamenRevisorFiscalDieciseisComponent } from './components/nosotros-components/informes/2016/dictamen-revisor-fiscal-dieciseis/dictamen-revisor-fiscal-dieciseis.component';
import { EstadosDieciseisComponent } from './components/nosotros-components/informes/2016/estados-dieciseis/estados-dieciseis.component';
import { InformesResumenDieciseisComponent } from './components/nosotros-components/informes/2016/informes-resumen-dieciseis/informes-resumen-dieciseis.component';
import { DictamenRevisorFiscalDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/dictamen-revisor-fiscal-dieciseis-container/dictamen-revisor-fiscal-dieciseis-container.component';
import { EstadosDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/estados-dieciseis-container/estados-dieciseis-container.component';
import { InformesResumenDieciseisContainerComponent } from './containers/nosotros-container/informes-container/2016/informes-resumen-dieciseis-container/informes-resumen-dieciseis-container.component';
import { InformesResumenQuinceContainerComponent } from './containers/nosotros-container/informes-container/2015/informes-resumen-quince-container/informes-resumen-quince-container.component';
import { EstadosQuinceContainerComponent } from './containers/nosotros-container/informes-container/2015/estados-quince-container/estados-quince-container.component';
import { EstadosQuinceComponent } from './components/nosotros-components/informes/2015/estados-quince/estados-quince.component';
import { InformesResumenQuinceComponent } from './components/nosotros-components/informes/2015/informes-resumen-quince/informes-resumen-quince.component';

@NgModule({
  declarations: [
    /* Componente principal */
        AppComponent,
    
    /* Container HOME (Página principal) */
        HomeContainerComponent,
    /* Componentes del container HOME */
        HeaderComponent,
        CardsComponent,
        ArticlesComponent,
        CardServiceComponent,
        MiniAboutUsComponent,
    
    /* Componentes globales */
        NavbarComponent,
        FooterComponent,


    /*Componentes y containers de los servicios */
        ResumenServiciosComponent,
        ResumenServiciosContainerComponent,
        ConsultasResumenComponent,
        ConsultasResumenContainerComponent,
        ExamenesResumenComponent,
        ExamenesResumenContainerComponent,
        FisiatriaContainerComponent,
        FisiatriaComponent,
        NeuropsicologiaResumenComponent,
        NeuropsicologiaResumenContainerComponent,
        PolisomnografiaComponent,
        PolisomnografiaContainerComponent,
        ElectroencefalogramaComponent,
        ElectroencefalogramaContainerComponent,
        VideotelemetriaComponent,
        VideotelemetriaContainerComponent,
        NeurologiaComponent,
        NeurologiaContainerComponent,
        NeurocirugiaComponent,
        NeurocirugiaContainerComponent,
        NeuropediatriaComponent,
        NeuropediatriaContainerComponent,
        ElectromiografiaNeuroconduccionComponent,
        ElectromiografiaNeuroconduccionContainerComponent,
        PotencialesEvocadosComponent,
        PotencialesEvocadosContainerComponent,
        TestLambertComponent,
        TestLambertContainerComponent,
        PruebaAdministracionNeuropsicologicaComponent,
        PruebaAdministracionNeuropsicologicaContainerComponent,
        PruebaCognitivaContainerComponent,
        PruebaCognitivaComponent,
        PruebaInteligenciaComponent,
        PruebaInteligenciaContainerComponent,


    /* Container y componente de Contactenos CONTACTO (Página donde el usuario se puede contactar más fácilmente con nosotros) */
        ContactenosComponent,
        ContactContainerComponent,

    /* Componente y Container de galería donde se almacenarán las fotos */
        GalleryComponent,
        GalleryContainerComponent,
    
     
    /* Componentes y containers de NOSOTROS*/
        QuienesSomosComponent,
        QuienesSomosContainerComponent,
        MisionVisionComponent,
        MisionVisionContainerComponent,
        InstalacionesComponent,
        InstalacionesContainerComponent,
        EquipoHumanoComponent,
        EquipoHumanoContainerComponent,
        PpssResumenComponent,
        PpssResumenContainerComponent,
        EstadosComponent,
        EstadosContainerComponent,
        NosotrosResumenComponent,
        NosotrosResumenContainerComponent,
        InformesResumenComponent,
        InformesResumenContainerComponent,
        InformeGestionComponent,
        InformeGestionContainerComponent,
        DictamenRevisorFiscalComponent,
        DictamenRevisorFiscalContainerComponent,
        RevelacionesNeuroimagenesComponent,
        RevelacionesNeuroimagenesContainerComponent,
        PqrsComponent,
        EncuestaSatisfaccionComponent,
        PqrsContainerComponent,
        EncuestaSatisfaccionContainerComponent,
        Covid19Component,
        PpssCovid19ContainerComponent,
        PlaneacionCovid19Component,
        PpssPlaneacionCovid19ContainerComponent,
        PpssDerechosDeberesContainerComponent,
        DerechosDeberesComponent,
        ViolenciaIntrafamiliarComponent,
        PpssViolenciaIntrafamiliarContainerComponent,
        PpssPlanDeAccionContainerComponent,
        PlanDeAccionComponent,
        SinContenidoComponent,
        SinContenidoContainerComponent,
        ProtocolosAtencionDiferencialComponent,
        PpssProtocolosAtencionDiferencialComponent,
        DictamenRevisorFiscalVeinteComponent,
        EstadosVeinteComponent,
        InformeGestionVeinteComponent,
        RevelacionesNeuroimagenesVeinteComponent,
        InformesResumenVeinteContainerComponent,
        InformesResumenVeinteComponent,
        EstadosVeinteContainerComponent,
        InformesGestionVeinteContainerComponent,
        DictamenRevisorFiscalVeinteContainerComponent,
        RevelacionesNeuroimagenesVeinteContainerComponent,
        RevelacionesNeuroimagenesDiecinueveContainerComponent,
        DictamenRevisorFiscalDiecinueveContainerComponent,
        EstadosFinancierosDiecinueveContainerComponent,
        InformesResumenDiecinueveContainerComponent,
        EstadosFinancierosDiecinueveComponent,
        DictamenRevisorFiscalDiecinueveComponent,
        RevelacionesNeuroimagenesDiecinueveComponent,
        InformesResumenDiecinueveComponent,
        DictamenRevisorFiscalDieciochoComponent,
        EstadosFinancierosDieciochoComponent,
        InformesResumenDieciochoComponent,
        RevelacionesNeuroimagenesDieciochoComponent,
        InformesGestionDieciochoContainerComponent,
        InformeGestionDieciochoComponent,
        DictamenRevisorFiscalDieciochoContainerComponent,
        EstadosDieciochoContainerComponent,
        InformesResumenDieciochoContainerComponent,
        RevelacionesNeuroimagenesDieciochoContainerComponent,
        DictamenRevisorFiscalDiecisieteContainerComponent,
        EstadosDiecisieteContainerComponent,
        InformeGestionDiecisieteContainerComponent,
        InformesResumenDiecisieteContainerComponent,
        RevelacionesNeuroimagenesDiecisieteContainerComponent,
        InformesResumenDiecisieteComponent,
        RevelacionesNeuroimagenesDiecisieteComponent,
        InformeGestionDiecisieteComponent,
        EstadosDiecisieteComponent,
        DictamenRevisorFiscalDiecisieteComponent,
        DictamenRevisorFiscalDieciseisComponent,
        EstadosDieciseisComponent,
        InformesResumenDieciseisComponent,
        DictamenRevisorFiscalDieciseisContainerComponent,
        EstadosDieciseisContainerComponent,
        InformesResumenDieciseisContainerComponent,
        InformesResumenQuinceContainerComponent,
        EstadosQuinceContainerComponent,
        EstadosQuinceComponent,
        InformesResumenQuinceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
