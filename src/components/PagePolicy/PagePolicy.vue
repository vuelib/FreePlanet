<template>
    <q-page class="q-pa-md">
        <div v-if="toolsext.isLang('it')">
            <p class="text-subtitle1">Privacy Policy di {{url}}</p>
            <p class="text-subtitle1">Informativa sul trattamento dei dati personali ai sensi dell’art. 13 del
                Regolamento
                (UE) n. 2016/679</p>

            <p>Ai sensi dell’art. 13 del Regolamento (UE) n. 2016/679, anche denominato General Data Protection
                Regulation
                (di
                seguito il “GDPR“), {{SiteName}} La informa che i Suoi dati personali (di seguito i “Dati“),
                saranno trattati nel rispetto di quanto previsto dal GDPR e di ogni normativa applicabile in riferimento
                al
                trattamento dei dati personali in conformità all’informativa che segue.</p>

            <p><span class="text-subtitle2">1. Titolare del trattamento</span><br/>
                {{ownerDataName}}</p>
            <p><span class="boldhigh">Responsabile trattamento e protezione dati:</span><br/>
                {{managerData}}
            </p>

            <p class="text-subtitle2">2. Categorie di Dati</p>

            <p>I Dati trattati dal Titolare includono: {{includeData}}.</p>

            <p class="text-subtitle2">3. Finalità e base giuridica del trattamento. Legittimo interesse.</p>

            <p>I Dati saranno trattati per l’adempimento di finalità informative, commerciali e amministrative ad
                obblighi
                di
                legge, ai sensi dell’art. 6, comma 1, lettera b) e c) del GDPR, nonché il perseguimento del legittimo
                interesse
                del Titolare, all’art. 6, comma 1, lettera f del GDPR, in riferimento a:
                rispetto di procedure amministrative interne e adempimento di obblighi di legge o regolamenti vigenti in
    {{this.country}};
                l’invio di comunicazioni di natura informativa, commerciale e promozionale.</p>

            <p>In ogni caso, il trattamento dei Suoi Dati effettuato sulla base del proprio legittimo interesse del
                Titolare
                avviene, oltre che nel rispetto di quanto previsto all’art. 6, comma 1, lettera f del GDPR, anche in
                conformità
                a quanto disposto al considerando n. 47 e all’Opinion n. 6/2014 Article 29 Data Protection Working
                Party,
                par.
                III.3.1.</p>

            <p class="text-subtitle2">4. Modalità del trattamento.</p>

            <p>I Suoi Dati sono raccolti e registrati in modo lecito e secondo correttezza per le finalità sopra
                indicate e
                sono trattati anche con l’ausilio di strumenti elettronici e automatizzati, anche mediante l’inserimento
                e
                l’organizzazione in banche dati, in conformità a quanto disposto dal GDPR in materia di misure di
                sicurezza,
                e,
                comunque, in modo tale da garantire la sicurezza e la riservatezza dei Dati stessi.</p>

            <p class="text-subtitle2">5. Destinatari o categorie di destinatari.</p>

            <p>I Dati potranno essere resi accessibili, portati a conoscenza di o comunicati ai seguenti soggetti, i
                quali
                saranno nominati dal Titolare, a seconda dei casi, quali responsabili – la cui lista è disponibile
                presso la
                sede del Titolare – o incaricati:
                dipendenti e/o collaboratori a qualsivoglia titolo del Titolare;
                soggetti pubblici o privati, persone fisiche o giuridiche, di cui il Titolare si avvalga per lo
                svolgimento
                delle attività strumentali al raggiungimento della finalità di cui sopra o a cui il Titolare sia tenuto
                a
                comunicare i Dati in forza di obblighi legali o contrattuali.</p>

            <p>In ogni caso, i Dati non saranno diffusi.</p>

            <p class="text-subtitle2">6. Luogo</p>

            <p>I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti
                coinvolte
                nel
                trattamento siano localizzate. Per ulteriori informazioni, contattare il Titolare agli estremi riportati
                in
                apertura.</p>

            <p class="text-subtitle2">7. Periodo di conservazione.</p>

            <p>I Dati saranno conservati per un periodo di tempo non superiore a 10 (dieci) anni per finalità
                amministrative
                e,
                comunque, per il tempo strettamente necessario al perseguimento dell’interesse legittimo del
                Titolare.</p>

            <p class="text-subtitle2">8. Diritti di accesso, cancellazione, limitazione e portabilità.</p>

            <p>Il Titolare La informa che Le sono riconosciuti i diritti di cui agli artt. da 15 a 20 del GDPR. A titolo
                esemplificativo, inviando specifica richiesta all’indirizzo email {{owneremail}}, Lei potrà:
                ottenere la conferma che sia o meno in corso un trattamento di dati personali che La riguardano;
                qualora un trattamento sia in corso, ottenere l’accesso ai dati e alle informazioni relative al
                trattamento,
                nonché richiedere una copia dei dati stessi;
                ottenere la rettifica dei dati inesatti e l’integrazione dei dati personali incompleti;
                ottenere, qualora sussista una delle condizioni previste dall’art. 17 del GDPR, la cancellazione dei
                Dati
                che La
                riguardano;
                ottenere, nei casi previsti dall’art. 18 del GDPR, la limitazione del trattamento dei Dati che La
                riguardano;
                ricevere i Dati che La riguardano in un formato strutturato, di uso comune e leggibile da dispositivo
                automatico
                e richiedere la loro trasmissione ad un altro titolare, se tecnicamente fattibile.</p>

            <p class="text-subtitle2">9. Diritto di opposizione.</p>

            <p>Ai sensi dell’art. 21 del GDPR, Lei godrà altresì del diritto di opporsi in qualsiasi momento al
                trattamento
                dei
                propri Dati effettuato per il perseguimento del legittimo interesse del Titolare scrivendo all’indirizzo
                email
                {{owneremail}}. In caso di opposizione, i Dati non saranno più oggetto di trattamento, sempre che non
                sussistano motivi legittimi per procedere al trattamento che prevalgono sugli interessi, sui diritti e
                sulle
                libertà degli interessati, oppure per l’accertamento, l’esercizio o la difesa di un diritto in sede
                giudiziaria.</p>

            <p class="text-subtitle2">Responsabile della protezione dei dati</p>
            <p>Il titolare ha provveduto a nominare il responsabile della protezione dei dati che è contattabile alla
                seguente
                casella di posta elettronica {{owneremail}}.</p>

            <p class="text-subtitle2">10. Diritto di proporre reclamo al Garante.</p>

            <p>Il Titolare La informa altresì che potrà proporre reclamo al Garante per la Protezione dei Dati Personali
                nel
                caso in cui ritenga che siano stati violati i diritti di cui è titolare ai sensi del GDPR o di qualsiasi
                altra
                normativa applicabile, secondo le modalità indicate sul sito internet del Garante per la Protezione dei
                Dati
                Personali accessibile all’indirizzo: <a href="http://www.garanteprivacy.it" target="_blank">www.garanteprivacy.it</a>.
            </p>

            <p>Ultimo aggiornamento: {{lastdataupdate}}</p>
        </div>
        <div v-if="toolsext.isLang('es')">
            <p class="text-subtitle1">Política de privacidad de {{url}}</p>
            <p class="text-subtitle1">Información sobre el procesamiento de datos personales de conformidad con el art.
                13 del Reglamento (UE) n. 2016/679</p>

            <p>Según el art. 13 del Reglamento (UE) n. 2016/679, también llamado Reglamento general de protección de
                datos (de seguido del "RGPD"), {{SiteName}} le informa que sus datos personales (en adelante, los
                "Datos"), será tratado de conformidad con las disposiciones del GDPR y cualquier legislación
                aplicable con referencia a procesamiento de datos personales de acuerdo con la siguiente
                información.</p>

            <p><span class="text-subtitle2">1. Controlador de datos</span><br/>
                {{ownerDataName}}</p>
            <p><span class="boldhigh">Gerente de procesamiento y protección de datos:</span><br/>
                {{managerData}}
            </p>


            <p>El administrador de protección de datos puede ser contactado por correo electrónico:
                {{owneremail}} para obtener información sobre el procesamiento de los datos comunicados o recopilados en
                el transcurso de
                navegación en este sitio, de conformidad con la legislación vigente sobre privacidad.</p>

            <p class="text-subtitle2"> 2. Categorías de datos </p>

            <p>Los datos procesados ​​por el propietario incluyen: {{includeData}}. </p>

            <p class="text-subtitle2"> 3. Finalidad y fundamento jurídico del procesamiento. Interés legítimo. </p>

                        <p>Los datos serán procesados ​​para el cumplimiento de fines informativos, comerciales y
            administrativos.
obligaciones de ley, de conformidad con el art. 6, párrafo 1, letra b) yc) del GDPR, así
            como la búsqueda de lo legítimo interés
del titular, en el art. 6, párrafo 1, letra f del RGPD, con referencia a:
            cumplimiento de procedimientos administrativos internos y cumplimiento de obligaciones
            legales o regulaciones vigentes en
{{this.country}};
envío de información, comunicaciones comerciales y promocionales. </p>

                        <p>En cualquier caso, el procesamiento de sus datos se basa en su interés legítimo
titular se produce, así como en cumplimiento de lo dispuesto en el art. 6, párrafo 1, letra
            f del
            RGPD, también en conformidad a lo dispuesto en el considerando n. 47 y la opinión n. 6/2014 Artículo 29
            Protección de
            datos de trabajo partido, par. III.3.1. </p>

                        <p class="text-subtitle2"> 4. Métodos de procesamiento. </p>

                        <p>Sus datos se recopilan y registran de manera legal y correcta para los fines anteriores
indicado y También se procesan con la ayuda de herramientas electrónicas y automatizadas,
            también a través de la inserción y la organización en bases de datos, de conformidad con las disposiciones
            del GDPR
            sobre medidas de seguridad y, sin embargo, de tal manera que garantice la seguridad y confidencialidad de
            los
            Datos. </p>

                        <p class="text-subtitle2"> 5. Destinatarios o categorías de destinatarios. </p>

                        <p>Los datos se pueden hacer accesibles, señalar o comunicar a los siguientes sujetos, i
que
serán designados por el controlador de datos, según sea el caso, como controladores de
            datos, cuya lista está disponible
en el
sede del propietario - o personas a cargo:
empleados y / o colaboradores en cualquier capacidad del controlador de datos;
sujetos públicos o privados, personas físicas o jurídicas, para las cuales el controlador de datos hace uso de progreso de actividades instrumentales para el logro de los propósitos antes mencionados o para las cuales se requiere el controlador de datos para comunicar los datos en virtud de obligaciones legales o contractuales. </p>

                        <p>En cualquier caso, los datos no serán revelados. </p>

                        <p class="text-subtitle2"> 6. Localización </p>

                        <p>Los datos se procesan en las oficinas operativas del controlador de datos y en cualquier otro lugar donde las partes involucrado en
Los tratamientos son localizados. Para obtener más información, póngase en contacto con el propietario en los detalles anteriores. en apertura. </p>

                        <p class="text-subtitle2"> 7. Período de retención. </p>

                        <p>Los Datos se conservarán por un período de tiempo que no exceda los 10 (diez) años para fines
            administrativo y, sin embargo, por el tiempo estrictamente necesario para perseguir el interés legítimo del Propietario. </p>

                        <p class="text-subtitle2"> 8. Derechos de acceso, cancelación, limitación y portabilidad. </p>

                        <p>El propietario le informa que tiene derecho a los derechos establecidos en los artículos del
            15 al 20 del GDPR. En nombre de
Por ejemplo, al enviar una solicitud específica a la dirección de correo electrónico
            {{owneremail}}, puede:
            obtener confirmación de que sus datos personales se están procesando o no;
            Si un tratamiento está en curso, obtenga acceso a los datos e información relacionados con
            tratamiento así como solicitar una copia de los datos;
            obtener la corrección de datos inexactos y la integración de datos personales incompletos;
            obtener, si alguna de las condiciones establecidas por el art. 17 del RGPD, la cancelación
            de datos que te concierne;
obtener, en los casos previstos por el art. 18 del RGPD, la limitación del procesamiento de
            los Datos que te concierne;
recibir los datos que le conciernen en un formato estructurado, comúnmente utilizado y
            legible por dispositivo automático
y solicite su transmisión a otro propietario, si es técnicamente posible. </p>

            <p class="text-subtitle2"> 9. Oposición a la derecha. </p>

                        <p>Según el art. 21 del RGPD, también disfrutará del derecho de objetar en cualquier momento
            procesamiento de datos propios llevado a cabo para la búsqueda del interés legítimo del propietario
            escribiendo a la dirección
            correo electrónico {{owneremail}}. En caso de oposición, los datos ya no se procesarán, a menos que se
            Hay razones legítimas para proceder con el procesamiento que prevalecen sobre los intereses, derechos y
            sobre las libertades de las partes interesadas, o para la determinación, el ejercicio o la defensa de un
            derecho en
            sede judicial. </p>

                        <p class="text-subtitle2"> Oficial de protección de datos </p>
                        <p>El propietario ha designado al responsable de protección de datos con el que puede contactar
            siguiente dirección de correo electrónico {{owneremail}}. </p>

                        <p class="text-subtitle2"> 10. Derecho a presentar una queja ante el Garante. </p>

                        <p>El controlador de datos también le informa que puede presentar una queja ante el garante para
            la protección de datos personales en caso de que crea que los derechos que posee bajo el GDPR o de han sido
            violados cualquier otra legislación aplicable, de la manera indicada en el sitio web del Garante para
            Protección de datos personales accesibles en la dirección: <a
                    href="https://www.garante.es/politica-de-privacidad/" target="_blank">https://www.garante.es/politica-de-privacidad/</a>.
                        </p>

                        <p>Última actualización: {{lastdataupdate}} </p>
        </div>


        <Footer></Footer>
    </q-page>

</template>
<script lang="ts" src="./PagePolicy.ts">
</script>
<style lang="scss" scoped>
    @import './PagePolicy.scss';
</style>
