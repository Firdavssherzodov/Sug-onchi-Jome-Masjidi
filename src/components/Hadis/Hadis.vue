<template>
  <Header></Header>
  <section
    class="diva md:px-[50px] px-5 lg:pt-10 pt-5 md:w-[100%] w-[100%] border-3"
    id="faq"
  >
    <p
      class="text-color1 font-serif text-center lg:pt-28 pt-7 md:text-xl text-lg"
    >
    Ҳадислар
    </p>
    <div class="card py-8 pb-14 md:px-10">
      <!--  -->
      <TabView>
        <TabPanel header="Ҳадислар1">
          <Accordion>
            <AccordionTab header=" ">
              <p class="m-0 py-3"></p>
            </AccordionTab>
          </Accordion>
        </TabPanel>
        <!-- Ayollar uchun namoz -->
        <TabPanel header="Ҳадислар2">
          <Accordion>
            <AccordionTab header="ХУФТОН НAМОЗИ">
              <p class="m-0 py-3"></p>
            </AccordionTab>
          </Accordion>
        </TabPanel>
      </TabView>
      <!--  -->
    </div>
  </section>
  <footer12></footer12>
</template>

<script setup>
import Header from "../Header/Header.vue";
import footer12 from "../Footer/Footer.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
</script>

<style lang="scss" scoped>
.diva {
  background-image: url(https://nasafziyo.uz/templates/themeone/images/logo-fon2.png);
} 
:deep .p-accordion {
  background-color: #126159;
  border-radius: 12px;
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
  background-color: #059c94;

  color: white;
  border-radius: 12px;
}

:deep .p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: #059c94;

  color: white;
  border-radius: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
}
:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  color: #059c94;
  background: transparent;
  padding: 20px 12px;
}
:deep .p-tabview .p-tabview-nav .p-tabview-ink-bar {
  z-index: 1;
  display: block;
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #059c94;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
:deep .p-tabview .p-tabview-nav {
  background: transparent;
  padding: 0 10px;
  justify-content: center;
}

</style>

