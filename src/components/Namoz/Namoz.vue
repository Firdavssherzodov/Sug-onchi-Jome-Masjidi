<template>
  <Header></Header>
  <NamozTime></NamozTime>
  <div class="faq_block md:px-[50px] px-5 lg:pt-10 pt-5" id="faq">
    <p class="text-white font-serif text-center py-0">Намоз ўқишни ўрганамиз</p>
    <div class="card py-14 md:px-10">
      <!--  -->

      <TabView>
        <TabPanel header="Еркаклар учун намоз">
          <Accordion>
            <AccordionTab header="AЗОН">
              <Accordion >
                <AccordionTab header="AЗОН ВA ИҚОМAТ">
                  <p class="m-0 py-3 font-sans">
                    <span class="font-semibold"> AZON VA IQOMAT </span> <br />
                    Azon namoz vaqti kirganidan ogohlantiruvchi, namozga
                    chorlovchi chaqiriqdir. Kundalik besh vaqt namoz va juma
                    namozlari uchun azon hamda iqomat aytish ta'kidlangan
                    sunnatdir. <br />
                    <span class="font-semibold px-5">
                      Azon - namoz vaqti kirganidan so'ng aytiladi.</span
                    >
                    <br />
                    <i
                      >Namozni uyda o'qiydigan kishi yaqin atrofdan azon ovozini
                      eshitmasa yoki yaqin atrofda masjid bo'lmasa, azon aytishi
                      sunnatdir.</i
                    >
                    <br />
                    <span class="font-semibold px-5"
                      >Iqomat - bevosita farz namozni boshlashdan oldin
                      aytiladi.</span
                    >
                    <br />
                    <i>Farz namozidan oldin iqomat aytish sunnat amaldir</i>
                    <br />

                    Qazo namozlari uchun azon va iqomat aytiladi. Hayit
                    namozlari hamda janoza namoziga azon va iqomat aytilmaydi.
                    Junub kishining azon va iqomat aytishi, aqldan ozgan, fosiq,
                    mast, tahoratsiz kishilar, aqlsiz bolalar va ayollarning
                    azon aytishlari makruhdir. Shuningdek juma namozidagi
                    ikkinchi azondan boshqa azonlarni masjid ichida turib aytish
                    ham makruhdir. <br />
                    <span class="font-semibold px-5"
                      >SAVOL: Yolg‘iz namoz o‘qiganda ham azon va takbir aytib
                      namoz o‘qish kerakmi?</span
                    >
                    <br />
                    Javob: Saraxsiyning «Mabsut» kitobida hadis keltirilgan
                    bo'lib, uning mazmuni shunday: «Kim ochiq yerda azon va
                    iqomat aytib namoz o‘qisa, mag‘rib va mashriq orasidagi
                    farishtalar u bilan qo‘shilib namoz o‘qiydilar. Azon va
                    iqomat aytmay namoz o‘qigan kishi bilan esa, faqat ikki
                    farishta birga namoz o‘qiydi».
                  </p>
                </AccordionTab>
                <AccordionTab header="AЗОН AЙТСИҲ ТAРТИБИ">
                  <p class="m-0 py-3">
                    <span class="font-semibold"> AZON AYTISH TARTIBI </span>
                    <br />
                    Azon namoz vaqti kirgach, tahorat bilan, qiblaga yuzlanib,
                    tik turgan holda, ikki qo'l ko'rsatkich barmog'ini quloq
                    ichiga qo'yib baland ovozda, dona-dona qilib aytiladi.
                    <br />
                    Azon va iqomatda  <span class="font-semibold">«Alloh»</span>
                     lafzidagi <span class="font-semibold">«a»</span>  tovushini
                    va  <span class="font-semibold">«akbar»</span>
                    birinchi va ikkinchi tovushlarni cho‘zib aytish
                    <span class="font-semibold">qo‘pol xatodir.</span>  Qasddan
                    bunday aytgan kishining iymoni xatarda qoladi.
                    <br />
                    Muazzin
                    <span class="font-semibold">"Hayya 'alas-solah"</span> 
                    kalimasida boshini o'ng tarafga, <span class="font-semibold">"Hayya 'alal
                    falah"</span>  kalimasida chap tarafga buradi.
                    <br>
                    Azonni eshitgan kishi
                    ishdan, masjiddan boshqa tomonga yurishdan, so'zlashdan
                    to'xtaydi. Muazzinning ortidan azon kalimalarini aytib
                    turadi. Muazzin <span class="font-semibold">"Hayya 'alas-solah", "Hayya 'alal
                    falah" </span> deganida <span class="font-semibold">"Laa havla va laa quvvata illaa billahil
                    'aliyyil a'ziym"</span>  deydi. 
                    <br>
                    Safarda va jome' masjidlarida azon
                    va iqomatni tark qilish makruh, biroq shahar ichidagi
                    xonadonlarda ularni tark etish makruh emas.
                  </p> </AccordionTab
                >
                <AccordionTab header="ИҚОМAТ AЙТСИҲ ТAРТИБИ">
              <p class="m-0 py-3">
                Iqomat - bevosita farz namozni boshlashdan oldin, azon singari aytiladi.
              </p>
            </AccordionTab>
                <AccordionTab header=" AЗОН">
                  <p class="m-0 py-3">
                   <ul>
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                   </ul>
                   <ul class="py-3">
                    <li>Ashhadu alla ilaha illalloh!</li>
                    <li>Ashhadu alla ilaha illalloh!</li>
                   </ul>
                   <ul>
                    <li>Ashhadu anna Muhhamadar rasululloh!</li>
                    <li>Ashhadu anna Muhhamadar rasululloh!</li>
                   </ul>
                   <ul class="py-3">
                    <li>Hayya 'alal solah!</li>
                    <li>Hayya 'alal solah!</li>
                   </ul>
                   <ul class="py-3">
                    <li>Hayya 'alal falah!</li>
                    <li>Hayya 'alal falah!</li>
                     <li class="py-3">La ilaha illalloh</li>
                   </ul>
                    <audio src="../../../audio/azon.mp3" controls class="w-full h-54"></audio>
                  </p>
                </AccordionTab>
                <AccordionTab header="AЗОН ДУОСИ  ">
              <p class="m-0 py-3">
                <span class="font-semibold">AZON DUOSI</span> <br>
<span class="font-semibold">Allohumma robba hazihid-da'vatit-tammah. Vas-solatil qoimah, ati Muhammadanil vasiylata val faziylah. Vad-darojatal 'aliyatar rofi'a. Vab'as-hu maqomam mahmudanillaziy va'adtah. Varzuqna shafa-'atahu yavmal qiyamah. Innaka la tuxliful mi'ad!</span> <br> <br>


<span  class="font-semibold">Ma'nosi:</span>  Ushbu komil da'vatning, hozir qoim bo'lgan namozning Parvardigori, ey Alloh! Muhammadga (s.a.v.) vasila, fazilat va baland oliy daraja ato etgin. Uni O'zing va'da qilgan maqtovli maqomda tiriltirgin. Bizga Qiyomat kunida Uning shafoatini nasib et. Albatta, Sen va'daga xilof qilmassan.
              </p>
            </AccordionTab>
            <AccordionTab header="ИҚОМAТ  ТAРТИБИ ">
              <p class="m-0 py-3">
                <span class="font-semibold">IQOMAT TARKIBI</span> <br>
                Iqomatning so'zlari ham azonniki kabidir. Faqat "Hayya 'alal falah" dan so'ng ikki marta "Qod qomatis-solah" (Namoz boshlanib qoldi) kalimalari qo'shib aytiladi. <br>


                <ul class="pt-3 font-semibold">
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                    <li>Allohu akbar!</li>
                   </ul>
                   <ul class="py-3 font-semibold">
                    <li>Ashhadu alla ilaha illalloh!</li>
                    <li>Ashhadu alla ilaha illalloh!</li>
                   </ul>
                   <ul class="font-semibold">
                    <li>Ashhadu anna Muhhamadar rasululloh!</li>
                    <li>Ashhadu anna Muhhamadar rasululloh!</li>
                   </ul>
                   <ul class="py-3 font-semibold">
                    <li>Hayya 'alal solah!</li>
                    <li>Hayya 'alal solah!</li>
                   </ul>
                   <ul class="py-3 font-semibold">
                    <li>Hayya 'alal falah!</li>
                    <li>Hayya 'alal falah!</li>
                     <li class="py-3">La ilaha illalloh</li>
                   </ul>

<ul class="pb-3 font-semibold">
  <li> Qod qomatis-solah, qod qomatis-solah</li>
  <li>Allohu akbar, Allohu akbar,</li>
  <li>La ilaha illalloh.</li>
</ul>
                  


Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi

              </p>
            </AccordionTab>


              </Accordion>
            </AccordionTab>





            <AccordionTab header="Header II">
              <p class="m-0 py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIII">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIIII">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIIII">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
          </Accordion>
        </TabPanel>
        <!-- Ayollar uchun namoz -->
        <TabPanel header="Aёллар учун намоз">
          <Accordion :activeIndex="0">
            <AccordionTab header="Header I 2">
              <p class="m-0 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Header II 2">
              <p class="m-0 py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III 2">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIII 2">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIIII 2">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
            <AccordionTab header="Header IIIII 2">
              <p class="m-0 py-3">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
          </Accordion>
        </TabPanel>
      </TabView>

      <!--  -->
    </div>
  </div>
  <footer1></footer1>
</template>

<script setup>
import Header from "../Header/Header.vue";
import NamozTime from "../NamozTime/NamozTime.vue";
import footer1 from "../Footer/Footer.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
</script>

<style lang="scss" scoped>
.faq_block {
  background: linear-gradient(45deg, rgb(1, 90, 1), #14c061);
}

:deep .p-accordion {
  background: linear-gradient(45deg, rgb(1, 90, 1), #14c061);
}

:deep .p-accordion .p-accordion-content {
  padding: 0.75rem 1.25rem;
  border: 0 none;
  color: white;
}

:deep .p-accordion-header {
  margin-top: 15px;
}

:deep
  .p-accordion
  .p-accordion-tab:first-child
  .p-accordion-header
  .p-accordion-header-link {
  background: linear-gradient(-90deg, rgb(1, 90, 1), #14c061);

  color: white;
  border-radius: 12px;
}

:deep .p-accordion .p-accordion-header .p-accordion-header-link {
  background: linear-gradient(-45deg, rgb(1, 90, 1), #14c061);
  color: white;
  border-radius: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
}
:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  color: white;
  background: transparent;
  padding: 20px 12px;
}
:deep .p-tabview .p-tabview-nav .p-tabview-ink-bar {
  z-index: 1;
  display: block;
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: white;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
:deep .p-tabview .p-tabview-nav {
  background: transparent;
  padding: 0 10px;
  justify-content: center;
}
</style>
