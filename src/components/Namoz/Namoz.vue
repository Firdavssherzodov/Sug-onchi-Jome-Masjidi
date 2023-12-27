<template>
  <Header></Header>
  <NamozTime></NamozTime>
  <div class="faq_block md:px-[50px] px-5 lg:pt-10 pt-5" id="faq">
    <p class="text-white font-serif text-center py-0">Namoz o'qishni o'rganamiz</p>
    <div class="card py-14 md:px-10">
      <!--  -->

      <TabView>
        <TabPanel header="Erkaklar uchun namoz">
            <Accordion :activeIndex="0">
        <AccordionTab header="Header I">
          <p class="m-0 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab header="Header II">
          <p class="m-0 py-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab header="Header III">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIII">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIIII">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIIII">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        
      </Accordion>
        </TabPanel>
        <!-- Ayollar uchun namoz -->
        <TabPanel header="Ayollar uchun namoz">
            <Accordion :activeIndex="0">
        <AccordionTab header="Header I 2">
          <p class="m-0 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab header="Header II 2">
          <p class="m-0 py-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab header="Header III 2">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIII 2">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIIII 2">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
        <AccordionTab header="Header IIIII 2">
          <p class="m-0 py-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
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
  padding: 20px 15px;
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
